import React from "react";
import styles from "../../styles/ToDoList.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";


const ToDoList = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    title,
    created_at,
    
  } = props;

  
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/todolists/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/todolists/${id}/`);
      history.goBack();
      
    } catch (err) {
      //console.log(err);
    }
  };

  

  return (
<>
    <Card className={styles.ToDoList}>
    
<Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            <span className={styles.Owner}>{owner}</span>
          </Link>
          
        <Link to='/todoitems'> <h3>{title}</h3></Link>
         
        <div className="d-flex align-items-center">
        <h3> <span>{created_at}</span></h3>
          {is_owner && (
              <MoreDropdown
                handleEdit={handleEdit}
                handleDelete={() => {
                  window.alert("Are you sure you want to delete this todolist?"
                    
                  );
                  handleDelete();
                }}
               
              />
            )}
            
        </div> 
       
      </Media>
     
    </Card>
 
 </>
  );
};

export default ToDoList;