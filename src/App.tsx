import React from "react";
import "./App.css";
import mountain from "./images/mountain.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>Samson Cournane </p>
            <p>Hello World</p>
            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
            <h1>My name is Samson Cournane</h1>

            <Container>
                <Row>
                    <Col>
                        First <div id="redRectangle"></div>
                    </Col>
                    <Col>
                        Second <div id="redRectangle"></div>
                    </Col>
                </Row>
            </Container>
            <p>Things I enjoy doing</p>
            <ul style={{ width: "7%", margin: "auto" }}>
                <li>Hiking</li>
                <li>Tennis</li>
                <li>Reading</li>
            </ul>
            <img
                src={mountain}
                alt="Picture of Mountain with Clouds"
                width={400}
                height={500}
            />
        </div>
    );
}

export default App;
