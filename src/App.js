import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import './App.css';

import ManageCampaign from './components/ManageCampaign';

class App extends React.Component {


  render (){
    return (
      <Container>
        <Row>
          <Col>
            <ManageCampaign/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
