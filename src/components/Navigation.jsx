import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import mockapi from '../api/mockapi';
import { Context } from '../store';

const fetchSearchPost = async (value) => {
  const response = await mockapi.get(`/posts?title=${value}`);
  if (response.data[0] === undefined) {
    return null;
  }
  return response.data;
};

export default function Navigation() {
  const [inputValue, setInputValue] = React.useState('');
  const [globalPosts, setGlobalPosts] = React.useContext(Context);

  const inputHandler = (evt) => {
    setInputValue(evt.target.value);
  };

  const buttonHandler = async (evt) => {
    evt.preventDefault();
    if (inputValue.trim() !== '') {
      const data = await fetchSearchPost(inputValue.trim());
      setGlobalPosts(data);
      setInputValue('');
    }
  };

  const onSubmit = async (evt) => {
    if ((evt.key = 'Enter')) {
      evt.preventDefault();
      if (inputValue.trim() !== '') {
        const data = await fetchSearchPost(inputValue.trim());
        setGlobalPosts(data);
        setInputValue('');
      }
    }
  };

  const onLinkLoadPosts = () => {
    setGlobalPosts([]);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink
            to="/"
            onClick={onLinkLoadPosts}
            className="nav-link"
            exact
            activeStyle={{
              fontWeight: '500',
              color: '#5e5e5e',
            }}
          >
            Homepage
          </NavLink>
          <NavLink
            to="/about"
            exact
            activeStyle={{
              fontWeight: '500',
              color: '#5e5e5e',
            }}
            className="nav-link"
          >
            Random meme
          </NavLink>
        </Nav>
        <Form inline onSubmit={onSubmit}>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            onChange={inputHandler}
            value={inputValue}
          />
          <Button variant="outline-success" onClick={buttonHandler}>
            Search
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
