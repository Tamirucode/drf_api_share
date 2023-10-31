import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Avatar from "../../components/Avatar";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

const ProfilePage = () => {
  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;
  const profile =  currentUser
  
return (
    <div>
        <Col lg={6}>
          <h3 className="m-2">{profile?.owner} <Avatar src={profile_image} /></h3>
          <Row className="justify-content-center no-gutters">
            <Col xs={3} className="my-2">
              <div>{profile?.todolist_count}</div>
              <div>ToDoList</div>
            </Col>
            <Col xs={3} className="my-2">
              <div>{profile?.todoitem_count}</div>
              <div>ToDoItem</div>
            </Col>
          </Row>
        </Col>
    </div>
  )
}

export default ProfilePage