import React, {  useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import { ListGroup } from "react-bootstrap";
import btnStyles from "../../styles/Button.module.css";
import { useHistory, useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

function ToDoItemEditForm() {
  const [errors, setErrors] = useState({});
  const [todoitemData, setToDoItemData] = useState({
    todolist: "",
    title: "",
    description: "",
    due_date: "",
    completed: "",
  
  });
  
  const { todolist, title, description, due_date,  completed } = todoitemData;
  const [todoListItems, setTodoListItems] = useState([]);
  const history = useHistory();
  const { id } = useParams();
  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/todoitems/${id}/`);
        const {  is_owner, todolist, title, description, due_date,  completed } = data;
        is_owner ? setToDoItemData({todolist, title, description, due_date,  completed }) : history.push("/");
        
      } catch (err) {
       // console.log(err);
      }
    };

    handleMount();
  }, [history, id]);

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
  
  const handleChange = (event) => {
    setToDoItemData({
      ...todoitemData,
      [event.target.name]: event.target.value,
    });
  };

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("todolist", todolist);
    formData.append("title", title);
    formData.append("description",  description);
    formData.append("due_date", due_date);
   
    formData.append("completed", completed);

    try {
        await axiosReq.put(`/todoitems/${id}/`, formData);
         history.push(`/todoitems/${id}`);
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
         name ='todolist' 
         value={todolist}
         onChange={handleChange}
        >
          <option value=''>Select a TodoList</option>
          {todoListItems?.map((item) => (
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
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        save
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col md={{ span: 5, offset: 4 }}>
          <ListGroup className="mb-3">
          {textFields}
          </ListGroup>
        </Col>
      </Row>
    </Form>
  );
}

export default ToDoItemEditForm;