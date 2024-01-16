import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link, useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import appStyles from "../../App.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import ToDoList from "./ToDoList";
import ToDoItemPage from "../todoitems/ToDoItem";
import ToDoItemCreateForm from "../todoitems/ToDoItemCreateForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";


function ToDoListPage() {
  const { id } = useParams();
  const [todolist, setToDoList] = useState({ results: [] });
  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;
 
  const [todolists, setToDoLists] = useState({ results: [] });
  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: todolist },{ data: todolists }] = await Promise.all([
          axiosReq.get(`/todolists/${id}`),
          axiosReq.get(`/todoitems/?todolist=${id}`),
        ]);
        setToDoList({ results: [todolist] });
        
        setToDoLists(todolists);
      } catch (err) {
        //console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
      <ToDoList key={todolist.id} {...todolist.results[0]} setToDoLists={setToDoList}  />
       
        <Container className={appStyles.Title}>
       
        </Container>
      </Col>
      
    </Row>
  );
}

export default ToDoListPage;