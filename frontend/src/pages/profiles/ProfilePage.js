import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Asset from "../../components/Asset";
import styles from "../../styles/ProfilePage.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import { Image } from "react-bootstrap";
import ToDoList from "../todolists/ToDoList";
import ToDoItem from "../todoitems/ToDoItem";
import ToDoItemPriority from "../todoitempriorities/ToDoItemPriority";
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
        //console.log(err);
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

      {profileTodolists.results?.map((todolist) =>
        <div key={todolist.id} >
        <h5><ToDoList  {...todolist} setTodolists={setProfileTodolists} /></h5>
            
      
          {profileTodoitems.results
            .filter((todoitem) => todoitem.todolist === todolist.id)
            .map((todoitem)=>(
              <div key={todoitem.id} className="list-group-item d-flex justify-content-between align-items-center"> 
              <ToDoItem  {...todoitem} setTodoitems={setProfileTodoitems} />  
            
          
            {profileTodoitemPriorities.results
              .filter((todoitempriority) =>  todoitempriority.todoitem === todoitem.id )
              .map((todoitempriority)=>(
                <li key={todoitempriority.id} className="list-group-item d-flex justify-content-between align-items-center"> 
                <ToDoItemPriority  {...todoitempriority} setTodoitemPriorities={setProfileTodoitemPriorities} /> 
                </li>
              ))}
          
            </div>
            ))}
        </div>
       )}
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