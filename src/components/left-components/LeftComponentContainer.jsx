import React from "react";
import { Col } from "reactstrap";
import SignupFormComponent from "../form-components/SignupFormComponent";

function LeftComponent (props) {
    return (
        <Col xs="12" md="7" className="left-container">
            <div className="offset-2 left-container-inner-container">
                <div className="left-container-title">
                    Let's set up your account
                </div>
                <div className="py-4 no-account">
                    Already have an account? <a href="/">Sign in</a>
                </div>
                <SignupFormComponent />

            </div>
        </Col>
    )
}

export default React.memo(LeftComponent)