import React, { useState, useEffect } from "react";
import Avatar from "../../components/Avatar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { ListGroup } from "react-bootstrap";
import btnStyles from "../../styles/Button.module.css";
import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
// Importing toastify module
import { ToastContainer,toast } from "react-toastify";
 
// Import toastify css file
import "react-toastify/dist/ReactToastify.css";
function ToDoItemCreateForm(props) {
  const { profile_image, profile_id , owner} = props;
  const [errors, setErrors] = useState({});
  
  const [todoitemData, setToDoItemData] = useState({
    todolist: "",
    title: "",
    description: "",
    due_date: "",
    completed: "",
  });
  
  const { todolist, title, description, due_date, completed } = todoitemData;
  const [todoListItems, setTodoListItems] = useState([]);
  const history = useHistory();
  const { id } = useParams();
  const handleChange = (event) => {
    setToDoItemData({
      ...todoitemData,
      [event.target.name]: event.target.value,
    });
  };
  
  const currentUser = useCurrentUser();

  const notify = () => toast.success('Successfully add todoitem!', {
    theme: "colored",
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    
    });
  
  useEffect(() => {
    const fetchTodoListItems = async () => {
      try {
        const { data } = await axiosReq.get(`/todolists/`);
        console.log(data)
        setTodoListItems(data.results);
      } catch (error) {
        console.error("Error fetching TodoList items:", error);
      }
    };
  
    fetchTodoListItems();
  }, [id]);

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("todolist", todolist,);
    formData.append("title", title);
    formData.append("description",  description);
    formData.append("due_date", due_date);
    formData.append("completed", completed);

    try {
      const { data } = await axiosReq.post("/todoitems/", formData);
      history.push(`/todoitems/${data.id}`);
      } catch (err) {
      //console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>ToDoList</Form.Label>
        <Form.Control
          as='select'
          name="todolist"
          value={todolist}
          onChange={handleChange}>
          <option value=''>Select a List</option>
          {todoListItems?.filter((item) => item.owner === currentUser?.username)
                         .map((item) => (
                          <option key={item.id} value={item.id}>
                                {item.title}
                          </option>
          ))}
        </Form.Control>
       
      </Form.Group>
      {errors?.todolist?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
    <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
         
          name="description"
          value={description}
          onChange={handleChange}
        />
      </Form.Group>
      
      <Form.Group>
        <Form.Label>Due_Date</Form.Label>
        <Form.Control
          type="datetime-local"
          name="due_date"
          value={due_date}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.due_date?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      
       
      <Form.Group>
        <Form.Label>Completed</Form.Label>
        <Form.Control
          
           type="checkbox"  
           name="completed"
           value={completed}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.completed?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button  onClick={notify} className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit" >
        create
      </Button>
      <ToastContainer/>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} />
            { owner}
          </Link>
        <Col md={{ span: 5, offset: 4 }}>
          <ListGroup className="mb-3">
          {textFields}
          </ListGroup>
        </Col>
      </Row>
    </Form>
  );
}

export default ToDoItemCreateForm;