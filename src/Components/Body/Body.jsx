import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import "./Body.css"; // Import the CSS file

const Body = () => {
  return (
    <main className="body-content"> {/* Use a class from the CSS file */}
      <h1>About Us</h1> {/* Add the heading here */}
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
      </Switch>
    </main>
  );
};

export default Body;
