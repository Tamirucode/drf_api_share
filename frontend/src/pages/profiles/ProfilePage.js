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
import ToDoItemPriority from "../todoitempriorities/ToDoItemPriority";
import { fetchMoreData } from "../../utils/utils";
import NoResults from "../../assets/no-results.png";
import { ProfileEditDropdown } from "../../components/MoreDropdown";

function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [profileTodolists, setProfileTodolists] = useState({ results: [] });
  const [profileTodoitems, setProfileTodoitems] = useState({ results: [] });
  const [profileTodoitemPriorities, setProfileTodoitemPriorities] = useState({ results: [] });
  const [profileData, setProfileData] = useState({
    // we will use the pageProfile later!
    pageProfile: { results: [] },
    
  });
  const currentUser = useCurrentUser();
  const { id } = useParams();

  
  const { pageProfile } = profileData;

  const [profile] = pageProfile.results;
  const is_owner = currentUser?.username === profile?.owner;
  const [todoitem, setSelectedToDoItem] = useState('');
  const [todoitems, setSelectedToDoItems] = useState('');
  const [todoitempriority, setToDoItemPriority] = useState({ results: [] });
 

 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: pageProfile }, { data: profileTodolists }, { data: profileTodoitems },{ data: profileTodoitemPriorities }] =
          await Promise.all([
            axiosReq.get(`/profiles/${id}/`),
            axiosReq.get(`/todolists/?owner__profile=${id}`),
            axiosReq.get(`/todoitems/?owner__profile=${id}`),
            axiosReq.get(`/todoitempriorities/?owner__profile=${id}`),
          ]);
        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: { results: [pageProfile] },
        }));
        setProfileTodolists(profileTodolists);
        setProfileTodoitems(profileTodoitems);
        setProfileTodoitemPriorities(profileTodoitemPriorities);
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

 

  return (
    <ul>
      
      {hasLoaded ? (
      <>
      
      {mainProfile}

      {profileTodolists.results.map((todolist) =>
        <div key={todolist.id} >
        <h5><ToDoList  {...todolist} setTodolists={setProfileTodolists} /></h5>
            
      
          {profileTodoitems.results.map((todoitem)=>(

            
            <div key={todoitem.id} className="list-group-item d-flex justify-content-between align-items-center"> 
            <ToDoItem  {...todoitem} setTodoitems={setProfileTodoitems} />  
            
          
            
          
            </div>
      
          ))}
        
        
        </div>
       
       )}
       {profileTodoitemPriorities.results.map((todoitempriority)=>(
                <li key={todoitempriority.id} className="list-group-item d-flex justify-content-between align-items-center"> 
                <ToDoItemPriority  {...todoitempriority} setTodoitemPriorities={setProfileTodoitemPriorities} /> 
                </li>
              ))}
          
      </>
          ) : (
            
        <Asset
        src={NoResults}
        message={`No results found, ${profile?.owner} hasn't todolist created yet.`}
      />

          )}
    </ul>
  );
}

export default ProfilePage;