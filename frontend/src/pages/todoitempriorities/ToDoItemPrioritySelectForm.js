import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import { ListGroup } from "react-bootstrap";
import btnStyles from "../../styles/Button.module.css";
import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
// Importing toastify module
import { ToastContainer,toast } from "react-toastify";
 
// Import toastify css file
import "react-toastify/dist/ReactToastify.css";
 
// toast-configuration method,
// it is compulsory method.

function ToDoItemPrioritySelectForm() {
  
  const [errors, setErrors] = useState({});

 
  
  const [priority, setSelectedPriority] = useState("high");
  const [todoitem, setSelectedToDoItem] = useState('');
 
  const history = useHistory();

  const handleChange = (event) => {
    setSelectedToDoItem
      (event.target.value);
  };
  const handlePriorityChange = (event) => {
    setSelectedPriority(event.target.value);
  };
  const notify = () => toast.success('Successfully add todoitemprirority!', {
    theme: "colored",
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    
    });
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("priority", priority);
    formData.append("todoitem", todoitem);
    

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
    <>
    
    <div className="text-center">
    
      <Form.Group>
        <Form.Label>ToDoItem</Form.Label>
        <Form.Control
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
          <select
            value={priority}
            onChange={handlePriorityChange}
            className="w-full border rounded p-2"
          >
            <option value="High">High Priority</option>
            <option value="Medium">Medium Priority</option>
            <option value="Low">Low Priority</option>
          </select>
        
          </Form.Group>
  
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button onClick={notify} className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        create
      </Button>
      <ToastContainer/>
      </div>
    </>
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