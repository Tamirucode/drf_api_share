import React from "react";

import styles from "../../styles/ul.module.css";
import { MoreDropdown } from "../../components/MoreDropdown";

import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";
import { useHistory } from "react-router-dom";
import ToDoItemPriority from "../todoitempriorities/ToDoItemPriority"
const ToDoItem = (props) => {
  
  const {
    
    owner,
    description,
    todolist,
    due_date,
    title,
    id,
    
  } = props;

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
      <hr />
      <ul className={styles.ul}>
        
        <li className={styles.ul}>
        <div
                        role="button"
                        onClick={`/todoitems/?todolist=${id}`}
                        to= "/todoitems/:id/edit"  >
        <p>{title} (Due {due_date} )</p>
        <p>{description} </p>
        </div>
          
          
        {is_owner && (
           <MoreDropdown
           handleEdit={handleEdit}
           handleDelete={ handleDelete
            ( window.alert(
               `<p>Are you sure you want to delete the item: <b>{todoitem.title}</b>
               from the list <i>{todolist.title}</i></p>?`
             )
             
            )
           }

            
           
         />
        )}
        </li> 
       {<ToDoItemPriority/>}
      </ul>
      <p>
            <input
                value="Add a new item"
                type="button"
                to="/todoitems/"
                onClick={`/todolist/${id}`}
                />
            
              <input
                value="Add Priority"
                type="button"
                to="/todoitempriorities/"
                onClick={`/todoitem/${id}`}
                />
        </p>
    </div>
  );
};

export default ToDoItem;