import React from 'react';
import {Row, Col, Tabs,Tab} from 'react-bootstrap';
import ListContainer from '../Containers/ListContainer/Index';

function ManageCampaign() {
  return (
    <React.Fragment>
      <Row className="mt-5">
        <Col><h2>Manage Campaigns</h2></Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <Tabs defaultActiveKey="upcoming" id="uncontrolled-tab-example">
            <Tab eventKey="upcoming" title="Upcoming Campaigns">
              <ListContainer type="upcoming"/>
            </Tab>
            <Tab eventKey="live" title="Live Campaigns">
              <ListContainer type="live"/>
            </Tab>
            <Tab eventKey="past" title="Past Campaigns" >
              <ListContainer type="past"/>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </React.Fragment>
  )
};

export default ManageCampaign;