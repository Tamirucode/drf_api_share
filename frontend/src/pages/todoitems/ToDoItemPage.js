import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router";
import { Link} from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import ToDoItem from "./ToDoItem";
import ToDoItemPrioritySelectForm from "../todoitempriorities/ToDoItemPrioritySelectForm";
import ToDoItemPriorities from "../todoitempriorities/ToDoItemPriority";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

function ToDoItemPage() {
  const { id } = useParams();
  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;
  const [todoitem, setToDoItem] = useState({ results: [] });
  
  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: todoitem }] = await Promise.all([
          axiosReq.get(`/todoitems/${id}`),
        ]);
        setToDoItem({ results: [todoitem] });
        
        console.log(todoitem);
      } catch (err) {
        //console.log(err);
      }
    };


    handleMount();
  }, [id]);
  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
       
        <ToDoItem {...todoitem.results[0]} setToDoItems={setToDoItem} />
        

      </Col>
      
    </Row>
  );
}

export default ToDoItemPage;