import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import People from "./components/People/People";
import Planets from "./components/Planets/Planets";
import "./App.css";

function App() {
  const [films, setFilms] = useState([]);
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getStarWarsFilms = () => {
      fetch(`https://swapi.dev/api/films/`)
        .then((res) => res.json())
        .then((data) => {
          setFilms(data.results);
        });
    };
    const getStarWarsPeople = () => {
      fetch(`https://swapi.dev/api/people/`)
        .then((res) => res.json())
        .then((data) => {
          setPeople(data.results);
        });
    };
    const getStarWarsPlanets = () => {
      fetch(`https://swapi.dev/api/planets/`)
        .then((res) => res.json())
        .then((data) => {
          setPlanets(data.results);
        });
    };
    getStarWarsFilms();
    getStarWarsPeople();
    getStarWarsPlanets();
    setLoading(false);
    // async function fetchPeople() {
    //   let res = await fetch(`https://swapi.dev/api/people/1/`);
    //   let data = res.json();
    //   console.log("people", data);

    //   setPeople(data);
    // }

    // async function fetchPlanets() {
    //   let res = await fetch(`https://swapi.dev/api/planets/1/`);
    //   let data = res.json();
    //   console.log("planets", data);

    //   setPlanets(data);
    // }

    //   fetchPeople();
    //   fetchPlanets();
  }, []);
  // console.log("people:", people);
  // console.log("planets:", planets);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home data={films} />
            </Route>
            <Route exact path="/people">
              <People data={people} key={people.name} />
            </Route>
            <Route exact path="/planets">
              <Planets data={planets} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
