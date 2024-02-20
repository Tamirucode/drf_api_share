import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import { ListGroup } from "react-bootstrap";
import btnStyles from "../../styles/Button.module.css";
import { useHistory, useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";


function ToDoItemPriorityEditSelectForm() {
  
  const [errors, setErrors] = useState({});
  const [priority, setSelectedPriority] = useState("high");
  const [todoitem, setSelectedToDoItem] = useState('');
  const [todoItems, setToDoItems] = useState([]);
  
  const history = useHistory();
  const { id } = useParams();
  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/todoitempriorities/${id}/`);
        const {  owner,  todoitem, priority} = data;
        owner ? setSelectedToDoItem(todoitem):history.push("/");
        owner ? setSelectedPriority(priority):history.push("/");
       
      } catch (err) {
       // console.log(err);
      }
    };

    handleMount();
  }, [history, id]);

  useEffect(() => {
    const fetchTodoItems = async () => {
      try {
        const { data } = await axiosReq.get(`/todoitems/`);
        console.log(data)
        setToDoItems(data.results);
      } catch (error) {
        //console.error("Error fetching Todoitems:", error);
      }
    };
  
    fetchTodoItems();
  }, [id]);
  const handleChange = (event) => {
    setSelectedToDoItem
      (event.target.value);
  };
  const handlePriorityChange = (event) => {
    setSelectedPriority(event.target.value);
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("priority", priority);
    formData.append("todoitem", todoitem);
    

    try {
      await axiosReq.put(`/todoitempriorities/${id}/`, formData);
       history.push(`/todoitempriorities/${id}`);
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
        <Form.Label>ToDoItem</Form.Label>
        <Form.Control
          as = 'select'
          value={todoitem}
          onChange={handleChange}
        >
        <option value=''>Select a Todoitem</option>
        {todoItems?.map((item) => (
            <option key={item.id} value={item.id}>
              {item.title}
            </option>
          ))}
          </Form.Control>
      </Form.Group>
      {errors?.todoitem?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
    <Form.Group>
        <select value={priority}
            onChange={handlePriorityChange} className ="w-full border rounded p-2">
            <option value='low'>Low Priority</option>
            <option value='medium'>Medium Priority</option>
            <option value='high'>High Priority</option>
        </select>
    </Form.Group>    
    <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}>
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

export default ToDoItemPriorityEditSelectForm;