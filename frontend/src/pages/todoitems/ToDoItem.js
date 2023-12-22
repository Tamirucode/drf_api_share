import React from "react";

import styles from "../../styles/ul.module.css";
import { MoreDropdown } from "../../components/MoreDropdown";

import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";
import { useHistory } from "react-router-dom";

const ToDoItem = (props) => {
  
  const {
    
    owner,
    description,
    
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
          
          </li> 
        {is_owner && (
          <MoreDropdown
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
        )}
      </ul>
      <p>
            <input
                value="Add a new item"
                type="button"
                to="/todoitems/"
                onClick={`/todolist/${id}`}
                />
            <input
                value="Delete this list"
                type="button"
                onClick={()=> handleDelete={handleDelete}}/>
        </p>
    </div>
  );
};

export default ToDoItem;