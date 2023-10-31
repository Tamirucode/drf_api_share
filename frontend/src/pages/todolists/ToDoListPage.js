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
import { useCurrentUser } from "../../contexts/CurrentUserContext";

function ToDoListPage() {
  const { id } = useParams();
  const [todolist, setToDoList] = useState({ results: [] });
  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;
  const [todoitems, setToDoItems] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: todolist }, { data: todoitems }] = await Promise.all([
          axiosReq.get(`/todolists/${id}`),
          axiosReq.get(`/todoitems/?todolist=${id}`),
        ]);
        setToDoList({ results: [todolist] });
        setToDoItems(todoitems);
      } catch (err) {
        //console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        
        <ToDoList {...todolist.results[0]} setToDoLists={setToDoList} todolistPage />
        <Container className={appStyles.Title}>
          {currentUser ? (
            <ToDoItemCreateForm
              profile_id={currentUser.profile_id}
              profile_image={profile_image}
              todolist={id}
              setToDoList={setToDoList}
              setToDoItems={setToDoItems}
            />
          ) : todoitems.results.length ? (
            "ToDoItems"
          ) : null}
          {todoitems.results.length ? (
            todoitems.results.map((todoitem) => (
              <ToDoItem
                key={todoitem.id}
                {...todoitem}
                setToDoList={setToDoList}
                setToDoItems={setToDoItems}
              />
            ))
          ) : currentUser ? (
            <span>No todoitem yet!</span>
          ) : (
            <span> add todoitem...</span>
          )}
        </Container>
      </Col>
      
    </Row>
  );
}

export default ToDoListPage;