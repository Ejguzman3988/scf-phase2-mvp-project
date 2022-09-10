import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Form from "./components/Form"
import Header from "./components/Header"
import List from "./components/List"
import { useEffect, useState } from "react"

function App(){
  const [list, setList] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/pokemons")
      .then(r => r.json())
      .then(data => setList(data))
  }, [])

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/resources/new" render={() => <Form setList={setList} /> } />
        <Route exact path="/">
          <div>Home</div>
        </Route>
        <Route 
          exact path="/resources" 
          render={() => <List list={list} />} 
        />
      </Switch>
    </Router>
  );
}

export default App;
