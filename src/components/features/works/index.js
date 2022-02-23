import React from 'react';

import { NavLink } from 'react-router-dom'; 

import { Nav } from 'react-bootstrap'


export default function Works() {
  return (
    <>
    <Nav.Link as={NavLink} to="/works/job1">job1</Nav.Link>
    </>
  )
}