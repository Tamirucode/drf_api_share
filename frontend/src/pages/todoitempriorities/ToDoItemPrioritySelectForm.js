import React, { useState, useEffect  } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import ToDoItemPage from "../todoitems/ToDoItem";
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

import { useParams } from "react-router";
// toast-configuration method,
// it is compulsory method.

function ToDoItemPrioritySelectForm() {
  
  const [errors, setErrors] = useState({});
  const [todoitem, setSelectedToDoItem] = useState('');
  const [todoItems, setToDoItems] = useState([]);
  const [priority, setSelectedPriority] = useState('high');
  const history = useHistory();
  const { id } = useParams();
  
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
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    
    formData.append("todoitem", todoitem);
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
    <>
    
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
          <select
            value={priority}
            onChange={handlePriorityChange}
            className="w-full border rounded p-2"
          >
            <option value="high">High Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="low">Low Priority</option>
          </select>
        
          </Form.Group>
         
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button  onClick={notify}  className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
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