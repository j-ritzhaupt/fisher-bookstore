import React, { Component } from "react";
import "./authors.css";
import { AuthorsDisplay } from "./AuthorDisplay";

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

    render() {
        return(
            <div className="Authors">
                <div className="lander">
                    <AuthorsDisplay authors={this.state.authors} />
                </div>
            </div>
        );
    }
}