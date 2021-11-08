import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Tmaction } from "./State/action/Action";
import { getAllData } from "./State/selector/Selectore";
import { Home } from "./State/home/Home";
import {
  Row,
  Col,
  Button,
  Carousel,
  Container,
  Navbar,
  Nav,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  const selector = useSelector(getAllData);
  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [text, setText] = useState();
  const [text1, setText1] = useState();
  const [text2, setText2] = useState();
  const [img, setImg] = useState();
  useEffect(() => {
    setData(selector);
  }, [selector]);
  const handleEvent = () => {
    dispatch(Tmaction(text, text1, text2, img));
  };
  // console.log("this is from simple Compo ",data)
  return (
    <div>
      <h1>Indian Team</h1>
      <Carousel fade>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="../caro/ground5.jpg"
            alt="First slide"
            height="500px"
          />
          <Carousel.Caption>
            <h3>t20 world cup</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../caro/ground3.jpg"
            alt="Second slide"
            height="500px"
          />

          <Carousel.Caption>
            <h3>cricket t20 world cup 2021 live</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../caro/ground4.jpg"
            alt="Third slide"
            height="500px"
          />

          <Carousel.Caption>
            <h3>cricket t20 world cup 2021</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="https://en.wikipedia.org/wiki/India_national_cricket_team" target="_parent">INDIA</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link
              href="https://www.google.com/search?q=cricket+t20+world+cup+2021+live&rlz=1C1CHBD_enIN969IN969&sxsrf=AOaemvIYyAOMN8o_mT32d5fD6Hvt1O_OqQ%3A1635290331239&ei=24x4Ye_wDZjCz7sPtPamiAI&ved=0ahUKEwivyrCam-nzAhUY4XMBHTS7CSEQ4dUDCA8&uact=5&oq=Cricket+T20&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEMQCMgUIABDEAjIGCAAQFhAeMgYIABAWEB46BwgAEEcQsAM6BAgjECc6BQgAEIAEOgcIIxDqAhAnOg0ILhDHARCjAhDqAhAnOgcILhDqAhAnOggIABCABBCxAzoLCAAQgAQQsQMQgwE6BAgAEEM6BQgAEJECOgUILhCRAjoKCAAQsQMQgwEQQzoICC4QgAQQsQM6CAguELEDEIMBOgoILhCxAxCDARBDOgcIIxCxAhAnOg4IABCABBCxAxCDARCxAzoLCC4QgAQQsQMQgwE6EAgAEIAEELEDEIMBEEYQ_QE6CAguEJECEJMCOg4ILhCABBCxAxCDARCTAjoECAAQA0oECEEYAFCT-zxYx6dAYIyGTGgDcAJ4BIAB3QKIAfwhkgEIMC42LjExLjKYAQCgAQGwAQrIAQjAAQE&sclient=gws-wiz#cobssid=s&sie=lg;/m/01182lm4;5;/m/026y268;mt;fp;1;;"
              target="_parent"
            >
              T20
            </Nav.Link>
            <Nav.Link href="https://www.cricbuzz.com/live-cricket-scores" target="_parent">live match </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Row>
        {data.length > 0 &&
          data.map((item) => {
            /* <h3>{(item.No)}</h3>
              <h3>{item.Playre}</h3>
              <h3>{item.Status}</h3> */

            /* <Image src="../playre/profle.jpg" width="287px"/> */
            return (
              <Col lg={3}>
                <Home
                  up={item.No}
                  ply={item.Playre}
                  stt={item.Status}
                  img={item.imgUrl}
                />
              </Col>
            );
          })}
      </Row>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter Player Rank"
      />
      <input
        type="text"
        onChange={(e) => setText1(e.target.value)}
        placeholder="Enter Player Name"
      />
      <input
        type="text"
        onChange={(e) => setText2(e.target.value)}
        placeholder="Enter Player Status"
      />
      <input
        type="text"
        onChange={(e) => setImg(e.target.value)}
        placeholder="Enter Image Path"
      />
      <br />
      <br />
      <Button variant="warning" onClick={handleEvent}>
        Submit
      </Button>
    </div>
  );
}

export default App;
