import React from "react";
import styles from "../../styles/ToDoItemPriority.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";

const ToDoItemPriority = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    todoitem,
    priority,
    created_at,
    
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/todoitempriorities/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/todoitempriorities/${id}/`);
      history.goBack();
      
    } catch (err) {
      //console.log(err);
    }
  };

  return (

    <Card className={styles.ToDoList}>
    
<Media className="align-items-center justify-content-between">
          
          <h5>{todoitem} {priority}</h5> 
        <div className="d-flex align-items-center">
         
          {is_owner && (
              <MoreDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
            
        </div> 

      

      </Media>
    </Card>
  );
};

export default ToDoItemPriority;