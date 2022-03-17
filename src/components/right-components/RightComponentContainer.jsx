import React from "react";
import { Col } from "reactstrap";

function RightComponent (props) {
    return (
        <Col xs="12" md="5" 
            className="right-container d-flex justify-content-center align-items-center">
            <div className="right-container-inner-container">
                <div className="right-container-content-heading">
                    Dummy Heading
                </div>
                <div className="right-container-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua
                </div>
            </div>
        </Col>
    )
}

export default React.memo(RightComponent)