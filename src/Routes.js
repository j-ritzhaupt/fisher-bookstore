import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./homes/home";
import Books from "./books/books";
import Authors from "./authors/authors";

export default function Routes () {
    return (
        <Switch>
            <Route path="/" exact component={Home} /> 
            <Route path="/books" exact component={Books} />
            <Route path="/authors" exact component={Authors} />
        </Switch>
    );
}
