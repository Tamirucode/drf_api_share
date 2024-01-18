import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import ToDoListCreateForm from "./pages/todolists/ToDoListCreateForm";
import ToDoListPage from "./pages/todolists/ToDoListPage";
import ToDoItemPriorityPage from "./pages/todoitempriorities/ToDoItemPriorityPage.js";
import ToDoItemCreateForm from "./pages/todoitems/ToDoItemCreateForm";
import ToDoItemPrioritySelectForm from "./pages/todoitempriorities/ToDoItemPrioritySelectForm";
import ToDoItemPage from "./pages/todoitems/ToDoItemPage.js";
import ToDoListsPage from "./pages/todolists/ToDoListsPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import ToDoListEditForm from "./pages/todolists/ToDoListEditForm";
import ToDoItemEditForm from "./pages/todoitems/ToDoItemEditForm";
import ToDoItemPriorityEditSelectForm from "./pages/todoitempriorities/ToDoItemPriorityEditSelectForm";
import ProfilePage from "./pages/profiles/ProfilePage";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import NotFound from "./components/NotFound";
function App() {
const currentUser = useCurrentUser();
const profile_id = currentUser?.profile_id || "";
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
        
       
      <Route exact path="/" render={() =>(<ToDoListsPage 
      message="No results found. Adjust the search keyword todolist."
                filter={`owner__profile=${profile_id}&ordering=-created_at&`}/>)}/>
         
          
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/todoitempriorities/" render={() => <ToDoItemPrioritySelectForm />} />
          <Route exact path="/todoitempriorities/:id" render={() => <ToDoItemPriorityPage />} />
          <Route exact path="/todolists/" render={() => <ToDoListCreateForm />} />
          <Route exact path="/todolists/:id" render={() => <ToDoListPage />} />
          <Route exact path="/todoitems/" render={() => <ToDoItemCreateForm />} />
          <Route exact path="/todoitems/:id" render={() => <ToDoItemPage />} />
          <Route exact path="/todolists/:id/edit" render={() => <ToDoListEditForm />} />
          <Route exact path="/todoitems/:id/edit" render={() => <ToDoItemEditForm />} />
          <Route exact path="/todoitempriorities/:id/edit" render={() => <ToDoItemPriorityEditSelectForm />} />
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
          <Route exact path="/profiles/:id/edit/username" render={() => <UsernameForm />}/>
          <Route exact path="/profiles/:id/edit/password" render={() => <UserPasswordForm />}/>
          <Route exact path="/profiles/:id/edit" render={() => <ProfileEditForm />}/>
          <Route render={() => <NotFound />} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;