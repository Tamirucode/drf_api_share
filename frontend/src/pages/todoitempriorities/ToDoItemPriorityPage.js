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

function ToDoItemPriorityPage() {
  const { id } = useParams();
  const [todoitem, setToDoItem] = useState({ results: [] });

  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;
  const [todoitempriorities, setToDoItemPriorities] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: todoitem }, { data: todoitempriorities }] = await Promise.all([
          axiosReq.get(`/todoitems/${id}`),
          axiosReq.get(`/todoitempriorities/?todoitem=${id}`),
        ]);
        setToDoItem({ results: [todoitem] });
        setToDoItemPriorities(todoitempriorities);
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
        {todoitempriorities.results.map((todoitempriority) => (
                  <ToDoItemPriority key={todoitempriority.id} {...todoitempriority}  />
                ))}
        {todoitempriorities.results.length === 0 && <h4 className={info.Heading}> You haven't yet prioritize your todoitem!</h4> }
      
        </Container>
      </Col>
      
    </Row>
  );
}

export default ToDoItemPriorityPage;