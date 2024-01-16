import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import info from "../../styles/Info.module.css";
import appStyles from "../../App.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

import { useCurrentUser } from "../../contexts/CurrentUserContext";
import ToDoItemPriority from "./ToDoItemPriority";
import ToDoItemPrioritySelectForm from "./ToDoItemPrioritySelectForm";

function ToDoItemPriorityPage() {
  const { id } = useParams();
  
  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;
  const [todoitempriority, setToDoItemPriority] = useState({ results: [] });
  const [todoitems, setToDoItems] = useState({ results: [] });
  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: todoitempriority},{ data: todoitems}] = await Promise.all([
          axiosReq.get(`/todoitempriorities/${id}`),
          axiosReq.get(`/todoitems/?todoitempriority=${id}`),
          
        ]);
        
        setToDoItemPriority({ results: [todoitempriority]});
        setToDoItems(todoitems);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        
       <Container className={appStyles.Content}>
       <ToDoItemPriority {...todoitempriority.results[0]} setToDoItemPriorities={setToDoItemPriority}  />
        </Container>
      </Col>
      
    </Row>
  );
}

export default ToDoItemPriorityPage;