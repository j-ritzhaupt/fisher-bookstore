import React from "react";
import {ListGroup} from "react-bootstrap";

export function AuthorsDisplay(props){
    return(
        <div className="display">
            <h3>Authors</h3>
            <ListGroup variant="flush">
                {props.authors.map(a => ( <ListGroup.Item action variant="light">Author: {a.name}</ListGroup.Item> ))}
            </ListGroup>
        </div>
    );
}