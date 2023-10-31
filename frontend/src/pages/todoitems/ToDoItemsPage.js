import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ToDoItem from "./ToDoItem";
import Asset from "../../components/Asset";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import appStyles from "../../App.module.css";
import styles from "../../styles/ToDoListsPage.module.css";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import NoResults from "../../assets/no-results.png";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

function ToDoItemsPage({ message, filter = "" }) {
  const [todoitems, setToDoItems] = useState({ results: [] });
  const currentUser = useCurrentUser();
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const [query, setQuery] = useState("");
  useEffect(() => {
    const fetchToDoItems = async () => {
      try {
        const { data } = await axiosReq.get(`/todoitems/?${filter}search=${query}`);
        setToDoItems(data);
        setHasLoaded(true);
      } catch (err) {
        //console.log(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
    fetchToDoItems();
  }, 1000);

  return () => {
    clearTimeout(timer);
  };
  }, [filter,query, pathname, currentUser]);
  
  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
       
        <i className={`fas fa-search ${styles.SearchIcon}`} />
        <Form
          className={styles.SearchBar}
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Control
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Search todoitems"
          />
        </Form>
        {hasLoaded ? (
          
             <>
            {todoitems.results.length ? (
              <InfiniteScroll
                children={todoitems.results.map((todoitem) => (
                  <ToDoItem key={todoitem.id} {...todoitem} setToDoItems={setToDoItems} />
                ))}
                dataLength={todoitems.results.length}
                loader={<Asset spinner />}
                hasMore={!!todoitems.next}
                next={() => fetchMoreData(todoitems, setToDoItems)}
              />
           
            ): (
              <Container className={appStyles.Title}>
                <Asset src={NoResults} message={message} />
              </Container>
            )}

          </>
        ) : (
          <Container className={appStyles.Title}>
            <Asset spinner />
          </Container>
        )}
      </Col>
      
    </Row>
  );
}

export default ToDoItemsPage;