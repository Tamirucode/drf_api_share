import React from "react";
import styles from "../../styles/ToDoList.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";
import ToDoItemPage from "../../pages/todoitems/ToDoItemPage";
import ToDoListCreateForm from "../../pages/todolists/ToDoListCeateForm";
import btnStyles from "../../styles/Button.module.css";
import Button from "react-bootstrap/Button";
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

    <Card className={styles.ToDoList}>
    
<Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            <span className={styles.Owner}>{owner}</span>
          </Link>
         <ul>
          <li>
            <diV onClick={()=>{<ToDoItemPage />}}>
          <h5>{title}</h5> 
        <div className="d-flex align-items-center">
          <span>{created_at}</span>
          {is_owner && (
              <MoreDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete=() => {
                  window.alert(
                    `Press Sure Wan't Delete ${title} `
                  )
                  
                }}
              />
            )}
           
        </div>
        </diV> 
        </li>
        </ul>
        
    <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => {<ToDoListCreateForm />}}
      >
        Add a new Todolist
      </Button>
      </Media>
    </Card>
  );
};

export default ToDoList;