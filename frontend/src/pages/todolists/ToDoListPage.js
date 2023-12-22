import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import appStyles from "../../App.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import ToDoList from "./ToDoList";

function ToDoListPage() {
  const { id } = useParams();
  const [todolist, setToDoList] = useState({ results: [] });
  const [todolists, setToDoLists] = useState({ results: [] });
  
  const [todoitems, setToDoItems] = useState({ results: [] });
  
  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: todolist }, {data:todoitems}] = await Promise.all([
          axiosReq.get(`/todolists/${id}`),
          axiosReq.get(`/todoitems/${id}`),
        ]);
        setToDoList({ results: [todolist] });
        setToDoItems({ results: [todoitems] });
        setToDoLists({ results: [todolist] });
      } catch (err) {
        //console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
      {todolists.results.length > 0 && <h3>All My todolists!</h3> }
       {todolists.results.map((todolist) => (
                  <ToDoList key={todolist.id} {...todolist}  />
                ))}
        {todolists.results.length === 0 && <h4>You have no todolists!</h4> }
      
      
        <Container className={appStyles.Title}>
         
        </Container>
      </Col>
      
    </Row>
  );
}

export default ToDoListPage;