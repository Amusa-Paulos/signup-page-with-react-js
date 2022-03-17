import React from 'react'
import { Container, Row } from 'reactstrap'
import LeftComponent from './left-components/LeftComponentContainer'
import RightComponent from './right-components/RightComponentContainer'

function WrapperComponent(props) {
    return (
        <Container fluid className=''>
            <Row className='h-full'>
                <LeftComponent />
                <RightComponent />
            </Row>
        </Container>
    )
}

export default React.memo(WrapperComponent)