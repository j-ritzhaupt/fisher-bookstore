import React, { Component } from "react";
import "./books.css";
import { BookDisplay } from "./BookDisplay";

export default class Books extends Component {
    constructor(props){
        super(props);
        this.state = {
            books: [
                {
                    id: 1,
                    title: "Domain Driven Design",
                    author: "Eric Evans",
                    isbn: "978-0321125217"
                },
                {
                    id: 2,
                    title: "Accelerate",
                    author: "Nicole Forsgren",
                    isbn: "978-1942788331"
                },
                {
                    id: 3,
                    title: "Book",
                    author: "Author",
                    isbn: "389-9193930"
                },
                {
                    id: 4,
                    title: "Book",
                    author: "Author",
                    isbn: "389-9193930"
                },
                {
                    id: 5,
                    title: "Book",
                    author: "Author",
                    isbn: "389-9193930"
                },
                {
                    id: 6,
                    title: "Book",
                    author: "Author",
                    isbn: "389-9193930"
                },
                {
                    id: 7,
                    title: "Book",
                    author: "Author",
                    isbn: "389-9193930"
                },
                {
                    id: 8,
                    title: "Book",
                    author: "Author",
                    isbn: "389-9193930"
                }
            ]
        };
    }

    render() {
        return(
            <div className="Books">
                <div className="lander">
                    <BookDisplay books={this.state.books} />
                </div>
            </div>
        );
    }
}