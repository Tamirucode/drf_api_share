import React, { useState } from "react";
import Avatar from "../../components/Avatar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import styles from "../../styles/ToDoList.module.css";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import { ListGroup } from "react-bootstrap";
import btnStyles from "../../styles/Button.module.css";
import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import { Link } from "react-router-dom";

function ToDoItemPrioritySelectForm(props) {
  const { profile_image, profile_id , owner} = props;
  const [errors, setErrors] = useState({});

  const [todoitempriorityData, setToDoItemPriorityData] = useState({
    todoitem: "",
    priority: "",
    
    
  });
  const { todoitem, priority } = todoitempriorityData;
  const history = useHistory();

  const handleChange = (event) => {
    setToDoItemPriorityData({
      ...todoitempriorityData,
      [event.target.name]: event.target.value,
    });
  };

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("todoitem", todoitem,);
    formData.append("priority", priority);
    

    try {
      const { data } = await axiosReq.post("/todoitempriorities/", formData);
      history.push(`/todoitempriorities/${data.id}`);
      
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
          name="todoitem"
          value={todoitem}
          
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.todoitem?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
    <Form.Group>
        <Form.Label>Priority</Form.Label>
        <Form.Control
          type="priority"
          name="priority"
          value={priority}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.priority?.map((message, idx) => (
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
        create
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

export default ToDoItemPrioritySelectForm;