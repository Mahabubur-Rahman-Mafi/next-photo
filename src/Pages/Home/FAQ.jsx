import React from 'react';
import Accordion from "react-bootstrap/Accordion";


const FAQ = () => {
    return (
      <div className='container'>
        <h1 className="text-center mb-4 mt-5 ">FAQ</h1>
        <Accordion className="w-75 mx-auto mb-4">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="text-center">
              How Can I use your photo?
            </Accordion.Header>
            <Accordion.Body>
              Just email us or order your pages and we will send you the image
              licence. Then you can use our photo in your any commercial uses or
              any purpose. You will don't get any copy right issue.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Which format we will get?</Accordion.Header>
            <Accordion.Body>
              You will get jgp, png , pdf or any kind of format do you want.
              Just let us know. We will send you that format.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              How we will contact you to cover our event?
            </Accordion.Header>
            <Accordion.Body>
              In contact section you will get our contact details You can call
              us sunday to Friday at 10.00 to 19.00 during this time. OtherWise
              you can mail you we will contact you as soon as possible.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Do you make Videography?</Accordion.Header>
            <Accordion.Body>
              No. We just capture image to catch your memory. We don't did any video or any kind of that.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    );
};

export default FAQ;