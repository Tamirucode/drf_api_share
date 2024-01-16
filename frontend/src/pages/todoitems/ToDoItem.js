import React from "react";
import { Media } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { MoreDropdown } from "../../components/MoreDropdown";
import styles from "../../styles/ToDoItem.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";
import { useHistory } from "react-router-dom";
import ToDoItemPriority from "../todoitempriorities/ToDoItemPriority";
import ToDoItemPriorityPage from "../todoitempriorities/ToDoItemPriorityPage";

const ToDoItem = (props) => {
  
  const {
    profile_id,
    profile_image,
    owner,
    description,
    
    due_date,
    title,
    id,
    
  } = props;
const{priority,handlePriorityChange}=ToDoItemPriority

 
 const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();
  
  const handleEdit = () => {
    history.push(`/todoitems/${id}/edit`);
  };


  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/todoitems/${id}/`);
      history.goBack();
      
    } catch (err) {
      //console.log(err);
    }
  };

 
   

  
  //const ToggleToDoItem = id =>{
   // const ToDoItems= todoitems.map(todoitem => { 
    
      //  if (todoitem.id === id) {
      //    todoitem.completed = !todoitem.completed
      //  }

      //  return todoitem
     // })
    //  setToDoItems(ToDoItems)
  
  
  return (
    <div>
      
      <Media>
        <Link to={`/profiles/${profile_id}`}>
           <Avatar src={profile_image} />
          
           </Link>
        <Media.Body className="align-self-center ml-2">
          
        <Link to={'/todoitempriorities'}>
        <p> {title} Due {due_date} </p>
       <p>{description} </p>  </Link> </Media.Body> 
        {is_owner && (
          <MoreDropdown
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
        )}
        
      </Media>
      
     </div>
  );
};

export default ToDoItem;