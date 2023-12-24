import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Asset from "../../components/Asset";

import styles from "../../styles/ProfilePage.module.css";
import appStyles from "../../App.module.css";


import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

import { Image } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import ToDoList from "../todolists/ToDoList";
import ToDoItem from "../todoitems/ToDoItem";
import { fetchMoreData } from "../../utils/utils";
import NoResults from "../../assets/no-results.png";
import { ProfileEditDropdown } from "../../components/MoreDropdown";

function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [profileTodolists, setProfileTodolists] = useState({ results: [] });
  const [profileTodoitems, setProfileTodoitems] = useState({ results: [] });
  const [profileData, setProfileData] = useState({
    // we will use the pageProfile later!
    pageProfile: { results: [] },
    
  });
  const currentUser = useCurrentUser();
  const { id } = useParams();

  
  const { pageProfile } = profileData;

  const [profile] = pageProfile.results;
  const is_owner = currentUser?.username === profile?.owner;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: pageProfile }, { data: profileTodolists }, { data: profileTodoitems }] =
          await Promise.all([
            axiosReq.get(`/profiles/${id}/`),
            axiosReq.get(`/todolists/?owner__profile=${id}`),
            axiosReq.get(`/todoitems/?owner__profile=${id}`),
          ]);
        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: { results: [pageProfile] },
        }));
        setProfileTodolists(profileTodolists);
        setProfileTodoitems(profileTodoitems);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id, setProfileData]);

  const mainProfile = (
    <>
      {profile?.is_owner && <ProfileEditDropdown id={profile?.id} />}
      <Row noGutters className="px-3 text-center">
        <Col lg={3} className="text-lg-left">
          <Image
            className={styles.ProfileImage}
            roundedCircle
            src={profile?.image}
          />
        </Col>
        <Col lg={6}>
          <h3 className="m-2">{profile?.owner}</h3>
          <Row className="justify-content-center no-gutters">
            <Col xs={3} className="my-2">
              <div>{profile?.todolists_count}</div>
              <div>ToDoLists</div>
            </Col>
            <Col xs={3} className="my-2">
              <div>{profile?.todoitems_count}</div>
              <div>ToDoItems</div>
            </Col>
            
          </Row>
        </Col>
        
      </Row>
    </>
  );

  const mainProfileTodolists = (
    <>
      <hr />
      <p className="text-center">{profile?.owner}'s posts</p>
      <hr />
      {profileTodolists.results.length ? (
        <InfiniteScroll
          children={profileTodolists.results.map((todolist) => (
            <ToDoList key={todolist.id} {...todolist} setTodolists={setProfileTodolists} />
          ))}
          dataLength={profileTodolists.results.length}
          loader={<Asset spinner />}
          hasMore={!!profileTodolists.next}
          next={() => fetchMoreData(profileTodolists, setProfileTodolists)}
        />
      ) : (
        <Asset
          src={NoResults}
          message={`No results found, ${profile?.owner} hasn't todolist created yet.`}
        />
      )}
    </>
  );
  const mainProfileTodoitems = (
    <>
      <hr />
      <p className="text-center">{profile?.owner}'s Todoitems</p>
      <hr />
      {profileTodoitems.results.length ? (
        <InfiniteScroll
          children={profileTodoitems.results.map((todoitem) => (
            <ToDoItem key={todoitem.id} {...todoitem} setTodoitems={setProfileTodoitems} />
          ))}
          dataLength={profileTodoitems.results.length}
          loader={<Asset spinner />}
          hasMore={!!profileTodoitems.next}
          next={() => fetchMoreData(profileTodoitems, setProfileTodoitems)}
        />
      ) : (
        <Asset
          src={NoResults}
          message={`No results found, ${profile?.owner} hasn't todoitem created yet.`}
        />
      )}
    </>
  );

  return (
    <Row>
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        
        <Container className={appStyles.Content}>
          {hasLoaded ? (
            <>
              {mainProfile}
              {mainProfileTodolists}
              
              {mainProfileTodoitems}
              
            </>
          ) : (
            <Asset spinner />
          )}
        </Container>
      </Col>
      
    </Row>
  );
}

export default ProfilePage;