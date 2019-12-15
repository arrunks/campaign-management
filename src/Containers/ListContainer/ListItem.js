import React from 'react';
import {Row,Col, Modal, Button} from 'react-bootstrap';


function formateDate(date){
  var currentVal = new Date(date);
  return currentVal.toDateString();
};

function getDateDifference(date){
  const date1 = new Date(date);
  const date2 = new Date();
  const diffTime = date2 - date1;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

  if (date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear()){
    return 0;
  }

  return diffDays;
};

function checkCampaignStage(type,date){
  const difference = getDateDifference(date);
  
  if (type==='past' && difference > 0 ){
    return true;
  }else if (type === 'live' && difference === 0 ){
      return true;
  }else if (type==='upcoming' && difference < 0){
    return true;
  }else {
    return false;
  }
}

function formatDateDifference(date){
  const difference = getDateDifference(date);
  if (difference < 0) {
    return `${Math.abs(difference)} days ahead`;
  }else if (difference > 0){
    return `${difference} days ago`;
  }else {
    return `Live`;
  }
}


function ListItem({date,name,image_url,updateDate,index,type}) {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);

const handleShow = () => setShow(true);

  const onDateChange = function(e){
    updateDate(index,e.target.value);
  }
  return (
    <React.Fragment>
      {
        checkCampaignStage(type,date) &&     <tr>
        <td><p className="mb-0">{formateDate(date)}</p><p className="small">{formatDateDifference(date)}</p></td>
        <td>
          <div className="d-flex">
            <img alt="logo" src={image_url}/><p className="small ml-2">{name}</p>
          </div>
        </td>
        <td>
          <div className="d-flex">
            <div className="icon-container">
              <img alt="view pricing" src="https://res.cloudinary.com/dgrovf3st/image/upload/v1576408722/bluestacks/Price_jvpokg.png" className="img-thumbnail"/>
            </div>
            <p className="small pt-1 ml-2 cursor-pointer" onClick={handleShow}>View Pricing</p>
            <Modal show={show} onHide={handleClose} centered>
              <Modal.Body>
                <Row>
                    <Col>
                        <div className="d-flex">
                          <img alt="logo" src={image_url}/><h3 className=" ml-2">{name}</h3>
                        </div>
                    </Col>
                </Row>
                <Row>
                  <Col>
                    <h3 className="mt-3 mb-3">Pricing</h3>
                  </Col>
                </Row>
                <Row>
                  <Col><p className="font-weight-lighter">1 Week - 1 Month</p></Col>
                  <Col><span>$ 100.00</span></Col>
                </Row>
                <Row>
                  <Col><p className="font-weight-lighter">6 Months</p></Col>
                  <Col><span>$ 500.00</span></Col>
                </Row>
                <Row>
                  <Col><p className="font-weight-lighter">1 Year</p></Col>
                  <Col><span>$ 900.00</span></Col>
                </Row>
              </Modal.Body>
              <Row className="mb-3">
                <Col className="text-center">
                <Button variant="outline-dark" onClick={handleClose}>
                  Close
                </Button>
                </Col>
              </Row>
            </Modal>
        </div>
        </td>
        <td>
        <Row>
          <Col>
            <div className="d-flex">
              <div className="icon-container">
                <img alt="view pricing" src="https://res.cloudinary.com/dgrovf3st/image/upload/v1576408713/bluestacks/file_ohvy8i.png" className="img-thumbnail"/>
              </div>
              <p className="small pt-1 ml-2">CSV</p>
            </div>
          </Col>
          <Col>
            <div className="d-flex">
              <div className="icon-container">
                <img alt="view pricing" src="https://res.cloudinary.com/dgrovf3st/image/upload/v1576408685/bluestacks/statistics-report_ngzyw7.png" className="img-thumbnail"/>
              </div>
              <p className="small pt-1 ml-2">Report</p>
            </div>
          </Col>
          <Col>
            <div className="d-flex">
              <div className="icon-container">
                <img alt="view pricing" src="https://res.cloudinary.com/dgrovf3st/image/upload/v1576408675/bluestacks/calendar_yxdzap.png" className="img-thumbnail"/>
              </div>
             <p className="small pt-1 ml-2 relative"><input id={`datepicker-${index}`} className="input-date" type="date" onChange={onDateChange}/><label htmlFor={`datepicker-${index}`}>Schedule again</label></p>
             </div>
          </Col>
        </Row>
        </td>
      </tr>
      }
    
    </React.Fragment>
  );
}

export default ListItem;