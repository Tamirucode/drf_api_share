import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import btnStyles from "../../styles/Button.module.css";
import { useHistory, useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import ListGroup from "react-bootstrap/ListGroup"; 

function ToDoListEditForm() {
  const [errors, setErrors] = useState({});
  const [todolistData, setToDoListData] = useState({
    title: "",
    
  });
  const { title } = todolistData;
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/todolists/${id}/`);
        const { owner, title} = data;

        owner ? setToDoListData({title}): history.push("/");
      } catch (err) {
        //console.log(err);
      }
    };

    handleMount();
  }, [history, id]);

  const handleChange = (event) => {
    setToDoListData({
      ...todolistData,
      [event.target.name]: event.target.value,
    });
  };

 
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    
   try {
      await axiosReq.put(`/todolists/${id}/`, formData);
      history.push(`/todolists/${id}`);
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

export default ToDoListEditForm;