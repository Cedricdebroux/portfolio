import React from 'react';

import { NavLink } from 'react-router-dom'; 

import { Nav } from 'react-bootstrap'


export default function Works() {
  return (
    <>
    <Nav.Link as={NavLink} to="/works/job1">
      <div className="container projet1">
        <h2 className="title">Projet 1</h2>
      </div>
    </Nav.Link>
    <Nav.Link as={NavLink} to="/works/job2">
      <div className="container projet2">
        <h2 className="title2">Projet 2</h2>
      </div>
    </Nav.Link>
    <Nav.Link as={NavLink} to="/works/job3">
      <div className="container projet3">
          <h2 className="title2">Projet 3</h2>
      </div>
    </Nav.Link>
    <Nav.Link as={NavLink} to="/works/job4">
      <div className="container projet3">
          <h2 className="title2">Projet 4</h2>
      </div>
    </Nav.Link>
    <Nav.Link as={NavLink} to="/works/job5">
      <div className="container projet3">
          <h2 className="title2">Projet 5</h2>
      </div>
    </Nav.Link>
    <Nav.Link as={NavLink} to="/works/job6">
      <div className="container projet3">
          <h2 className="title2">Projet 6</h2>
      </div>
    </Nav.Link>
    </>
  )
}