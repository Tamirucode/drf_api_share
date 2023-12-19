import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import appStyles from "../../App.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import ToDoList from "./ToDoList";
import ToDoItem from "../todoitems/ToDoItem";
import ToDoItemCreateForm from "../todoitems/ToDoItemCreateForm";
import ToDoItemEditForm from "../todoitems/ToDoItemEditForm";
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
       {todolists.results.map((todolist) => (
                  <ToDoList key={todolist.id} {...todolist}  />
                ))}
        {todolists.results.length === 0 && <h4>You have no todolists!</h4> }
      
        <ul>
      {todoitems.results.map((todoitem) => (
                  <ToDoItem key={todoitem.id} {...todoitem}  />
                ))}
       {todoitems.results.length === 0 && <h4>You have no todoitem in this list!</h4> }
       
        <li>
        <div
                        role="button"
                        onClick={<ToDoItemEditForm />}
                        to= "/todoitems/:id/edit"  >
        <ToDoItem />
        </div>
        </li>
      </ul>
      <p>
            <input
                value="Add a new item"
                type="button"
                to="/todoitems/"
                onClick={<ToDoItemCreateForm/>}
                />
            <input
                value="Delete this list"
                type="button"
                onClick="" />
        </p>
        <Container className={appStyles.Title}>
         
        </Container>
      </Col>
      
    </Row>
  );
}

export default ToDoListPage;