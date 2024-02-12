import React from "react";
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import FormControl from 'react-bootstrap/FormControl';
import Modal from 'react-bootstrap/Modal';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ModalHeader from 'react-bootstrap/ModalHeader';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import axios from "axios";

export default function Blog() {
    return(
        <ListGroup>
            <ListGroupItem className="d-flex justify-content-between align-items-center">
                contenido
                <div>
                <FaEdit size={20} style={{cursor: "pointer"}} />
                <FaTrashAlt size={20} style={{cursor: "pointer"}} />
                </div>
            </ListGroupItem>
        </ListGroup>
    )
}


