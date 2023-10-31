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

    <Card className={styles.ToDoList}>
    
<Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
         
          <h5>{title}</h5> 
        <div className="d-flex align-items-center">
          <span>{created_at}</span>
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

export default ToDoList;