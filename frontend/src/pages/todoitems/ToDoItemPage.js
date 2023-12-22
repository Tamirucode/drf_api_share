import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import ToDoItem from "./ToDoItem";
import info from "../../styles/Info.module.css";

function ToDoItemPage() {
  const { id } = useParams();
  const [todoitem, setToDoItem] = useState({ results: [] });
  const [todoitems, setToDoItems] = useState({ results: [] });
  const [todolist, setToDoList] = useState({ results: [] });
  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: todoitem }, { data: todoitems }] = await Promise.all([
          axiosReq.get(`/todoitems/${id}`),
          axiosReq.get(`/todolist/${id}`),
        ]);
        setToDoItem({ results: [todoitem] });
        setToDoItems({ results: [todoitems] });
        
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

      <h5> {todolist.title}</h5> 
      
      {todoitems.results.map((todoitem) => (
                  <ToDoItem key={todoitem.id} {...todoitem}  />
                ))}
       {todoitems.results.length === 0 && <h4 className={info.Heading}>You have no todoitem in this list!</h4> }
      
      
       
        
        
      </Col>
      
    </Row>
  );
}

export default ToDoItemPage;