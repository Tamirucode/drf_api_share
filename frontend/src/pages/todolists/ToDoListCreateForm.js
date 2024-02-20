import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import ListGroup from "react-bootstrap/ListGroup"; 
import btnStyles from "../../styles/Button.module.css";
import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
// Importing toastify module
import { ToastContainer,toast } from "react-toastify";
 // Import toastify css file
import "react-toastify/dist/ReactToastify.css";

function ToDoListCreateForm() {
  const [errors, setErrors] = useState({});
  const [todolistData, setToDoListData] = useState({
    title: "",
    
  });
  const { title } = todolistData;
  const history = useHistory();
  const handleChange = (event) => {
    setToDoListData({
      ...todolistData,
      [event.target.name]: event.target.value,
    });
  };

  const notify = () => toast.success('Successfully add todolist!', {
    theme: "colored",
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    
    });
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    

    try {
      const { data } = await axiosReq.post("/todolists/", formData);
      history.push(`/todolists/${data.id}`);
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
        <Form.Label>Title</Form.Label>
        <Form.Control
         
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

export default ToDoListCreateForm;