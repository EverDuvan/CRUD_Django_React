//import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ImputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
//import axios from "axios";

export default function BlogForm() {
    return(
        <Form>
            <ImputGroup className="mb-3">
                <FormControl
                    type="text"
                    placeholder="Type here !"
                />"
                <Button variant="dark" type="submit">
                    POST
                </Button>
            </ImputGroup>"
        </Form>
    )
}