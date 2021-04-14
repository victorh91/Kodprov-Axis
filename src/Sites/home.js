import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function home() {
  //displays the homepage for the users
  return (
    <>
      <Container id="homeContainer1" fluid>
        <Row>
          <Col>
            <h2 id="homeTitle">AXIS Camera Management</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5 id="homeText">
              Efficient management tool for your Axis network video products
            </h5>
          </Col>
        </Row>
      </Container>

      <Container id="homeContainer2">
        <Row>
          <Col>
            <h5 className="paragraphHeader">
              Powerful management capabilities
            </h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card.Text>
              AXIS Camera Management is a powerful and efficient installation
              and management tool, specially designed to be used with Axis
              network video products. Using standard network protocols and
              methods, the tool can automatically find and configure devices,
              set IP addresses, show connection status, backup and restore
              camera configuration, manage firmware upgrades and camera
              applications for multiple devices.
            </Card.Text>
          </Col>
        </Row>
      </Container>

      <Container id="homeContainer3">
        <Row>
          <Col>
            <h5 className="paragraphHeader">All sizes of installations</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text">
              Installed onto your Windows PC, AXIS Camera Management can be used
              in all sizes of installations. You can efficiently manage and
              maintain a few to several hundred Axis network video products in
              one site to several thousand in a multi-site installation. Support
              for AXIS Camera Application Platform enables efficient
              distribution of compatible applications as well as license key
              files to several devices in the system.
            </p>
          </Col>
        </Row>
      </Container>
      <Container id="homeContainer4">
        <Row>
          <Col>
            <h5 className="paragraphHeader">Intuitive interface</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text">
              AXIS Camera Management has an intuitive user interface with
              display of device name, address, model, firmware version and
              status. Device management operations are easily accessed from
              menus and direct access icons. Management operations status is
              always accessible. For efficient maintenance and administration,
              user-defined tags can be assigned to the devices in the system.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
