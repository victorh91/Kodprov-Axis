import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

export default function devices() {
  //displays the device info for the right site

  const [ready, setReady] = useState(false);
  const [devices, setDevices] = useState();

  useEffect(() => {
    getDevices();
  }, []);

  async function getDevices() {
    //fetch the devices and return the right ones as an array as a hook
    let devices = "http://localhost:3000/devices";
    const res = await fetch(devices);
    const posts = await res.json();
    let array = [];
    posts.map((device) => {
      if (location.pathname === "/" + device.place) {
        array.push(device);
      }
    });
    setDevices(array);
    setReady(true);
  }

  return (
    ready && (
      <Container fluid>
        <Row>
          {devices.map((device, index) => (
            <Card style={{ width: "22rem" }} key={device.id}>
              <Card.Img variant="top" src={device.img} />

              <Card.Body>
                <Card.Title>{device.title}</Card.Title>
                <Card.Text>{device.description}</Card.Text>
                <Card.Text>
                  <b>Model: </b> {device.model}
                </Card.Text>
                <Card.Text>
                  <b>Version: </b>
                  {device.version}
                </Card.Text>
                <Card.Text>
                  <b>Enabled: </b>
                  {device.enabled ? "enabled" : "not enabled"}
                </Card.Text>
                <Card.Text>
                  <b>Connected: </b>
                  {device.connected ? "connected" : "not connected"}
                </Card.Text>
                <Card.Text>
                  <b>Timezone: </b>
                  {device.timezone}
                </Card.Text>

                <Card.Text>
                  <b>Storages: </b>
                  {device.storages.map((storage) =>
                    storage.id ? (
                      <p key={storage.id}>
                        {storage.id}
                        <br></br>
                        <b>State: </b>
                        {storage.state}
                      </p>
                    ) : null
                  )}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    )
  );
}
