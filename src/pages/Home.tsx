import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import {HeaderBar} from "../components/mantine-topbar/mantine-topbar";

function Home() {
  return (
      <>
          <video id="background-video" autoPlay loop muted>
              <source src="/videoplayback.mp4" type="video/mp4" />
          </video>
          <HeaderBar></HeaderBar>
          <div className="home-main-div">
              <h1 id="homeText">
                  Welcome to my <br/> Website !
              </h1>
              <Button variant="outline-light" className="rounded-pill mt-4">
                  Take a tour
              </Button>
          </div>
    </>
  );
}

export default Home;
