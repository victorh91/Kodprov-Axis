import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBarLogout from "./Components/Layout/navbarLogout";
import "./styles.css";
import Devices from "./Sites/devices";
import home from "./Sites/home";
import React, { useState, useEffect } from "react";
import { AppContext } from "./Libs/contextLib";
import Login from "./Components/Auth/login";

export default function App() {
  //the app component who routes users to the right place in the site
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    //authenticate the user based on localstorage and db credentials
    let uri = "http://localhost:3000/users";
    const res = await fetch(uri);
    const posts = await res.json();
    posts.map((name) => {
      if (
        name.username === localStorage.username &&
        name.password === localStorage.password
      ) {
        console.log("inne");
        console.log(places);
        places.push(name.places);
        userHasAuthenticated(true);
      } else {
        console.log("fail");
        places.push(name.places);
      }
      setIsAuthenticating(false);
    });
  }
  return (
    !isAuthenticating && (
      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
        {isAuthenticated ? (
          <BrowserRouter>
            <div className="app">
              <NavBarLogout component={places} />
              <Devices />
              <Switch>
                <Route exact path="/" component={home} />
                {places &&
                  places[0].map((place, index) => (
                    <Route
                      exact
                      path={("/", place)}
                      component={Devices}
                      key={index}
                    />
                  ))}

                <Route path="/login" component={Login} />
              </Switch>
            </div>
          </BrowserRouter>
        ) : (
          <>
            <Login />
          </>
        )}
      </AppContext.Provider>
    )
  );
}
