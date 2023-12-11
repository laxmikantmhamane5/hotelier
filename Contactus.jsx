import { Col, Container, Row } from "react-bootstrap";
import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import img1 from './images/laxmikant.jpg'
import img2 from './images/ankit.jpg'
import img3 from './images/prathamesh.jpg'
import { Header } from "./Header";


export function Contactus()
{

    return(
        <Container className="mt-3">
          <Header text='We highly value your feedback. Please click on the link to our exclusive channel so as to share with us any complaints or compliments. The issue will be assigned internally and appropriate feedback given and action taken. Thank you for your time.'></Header>
            <Row>
                <Col lg="4">
                <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={img1} fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Laxmikant Mhamane</MDBCardTitle>
        <MDBCardText>
          Constact number : 9511645477 <br />
          Email id : laxmikant5@gmail.com <br />
          linkedIn Profile : Laxmikant_34
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
                </Col>
                <Col lg="4">
                <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={img2} fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Anikit Kumar</MDBCardTitle>
        <MDBCardText>
          Constact number : 9304577437 <br />
          Email id : anikekumar5@gmail.com <br />
          linkedIn Profile : Aniket_Kumar_34
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
                </Col>
                <Col lg="4">
                <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={img3} fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Prathamesh Lad</MDBCardTitle>
        <MDBCardText>
          Constact number : 8805418525 <br />
          Email id : prathmeshlad5@gmail.com <br />
          linkedIn Profile : Prathmesh_Lad_34
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
                </Col>
            </Row>
        </Container>
    )
}