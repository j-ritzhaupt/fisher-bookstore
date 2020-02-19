import React, { Component } from "react";
import "./authors.css";

export default class Author extends Component {
    constructor(props){
        super(props);
        this.state = {
            authors: [
                {
                    id: 1,
                    name: "John Doe"
                },
                {
                    id: 2,
                    name: "Jane Doe"
                },
                {
                    id: 3,
                    name: "Billy"
                }
            ]
        };
    }
}