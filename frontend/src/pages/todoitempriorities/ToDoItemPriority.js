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

   <>
          
          <h5  className="w-full border rounded p-2"> {priority}</h5> 
        <div className="d-flex align-items-center">
         
          {is_owner && (
              <MoreDropdown
              handleEdit={handleEdit}
              handleDelete={ handleDelete
               ( window.alert(
                `<p>Are you sure you want to delete the: <b>{priority}priority</b>
                from the todoitem <i>{todoitem.title}</i></p>?`
                )
                
               )
              }

               
              
            />
            )}
            
        </div> 

      

        </>
  )
}
export default ToDoItemPriority;