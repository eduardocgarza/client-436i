import React, { useState } from 'react';
import {  CardBody, Card, Collapse} from 'reactstrap';
import "../MatchItem/MatchItem.css"
// import "../../../assets/logo.png"

export default function MatchItem () {
  const [collapse, setCollapse] = useState(false);
  const [status, setStatus] = useState('Closed');

  const onEntering = () => setStatus('Opening...');

  const onEntered = () => setStatus('Opened');

  const onExiting = () => setStatus('Closing...');

  const onExited = () => setStatus('Closed');

  const toggle = () => setCollapse(!collapse);
  return (
    <div>
    <Card id="toggler" onClick={toggle}>
      <CardBody className="matchName">
          <div className="card mb-3">
             <div className="row no-gutters">
                <div className="col-md-4">
                  <svg className="bd-placeholder-img" width="50%" height="100" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" role="img"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text></svg>
                </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title" text-align="left">Firstname Lastname</h5>
          </div>
        </div>
      </div>
    </div>
      </CardBody>
    </Card>
      <Collapse
        isOpen={collapse}
        onEntering={onEntering}
        onEntered={onEntered}
        onExiting={onExiting}
        onExited={onExited}
      >
        <Card>
            <CardBody className="matchInfo">
              <div>Friends in Common: 100</div>
              <div>Classes:</div>
              <div>Facebook Likes:</div>
            </CardBody>
        </Card>
      </Collapse>
    </div>
  )
}