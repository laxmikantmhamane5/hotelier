import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export const Footer = () => {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <div className='text-center p-3' style={{ backgroundColor: 'white' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='http://192.168.1.4:3000 '>
          Hotelier.com
        </a>
      </div>
    </MDBFooter>
  );
};