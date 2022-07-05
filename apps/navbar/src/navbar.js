import React, { useState, useEffect } from 'react';
import { BrowserRouter, Navigate, Route, NavLink, Routes, Link } from 'react-router-dom';
import axios from 'axios';

const api = 'http://localhost:9001';

const ExternalLink = ({ props }) => (
  <Link to={{ pathaname: props.external }} target="_blank">
    {props.link}
  </Link>
);

const NavBar = () => {
  const [links, setLinks] = useState([]);

  useEffect(async () => {
    async function getRoutes() {
      const res = await axios.get(`${api}/portals`);

      setLinks(res.data);
      console.log(res.data);
    }

    getRoutes();
  }, []);

  return (
    <nav>
      <ul>
        {links.map((p, i) => (
          <li key={i}>
            {p.external ? (
              <a href={p.external} target="_blank">
                {p.link}
              </a>
            ) : (
              <NavLink to={p.route}>{p.link}</NavLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default function Root(props) {
  return (
    <BrowserRouter basename="/">
      <NavBar></NavBar>
      <Routes>
        <Route exact path="/"></Route>
      </Routes>
    </BrowserRouter>
  );
}
