import * as React from 'react';
import Button from '@mui/material/Button';
import { textAlign } from '@mui/system';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Row,Col } from 'react-bootstrap';

 
class App extends React.Component {
   render() {
      return (
         <div>    
           <h1
           style={{
              display: "flex",
              justifyContent: "center",
              alignItems:"center"
           }}
           >Student Portal</h1>
            <Form>
               <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                  <Row>
                     <Col sm="4"/>
                     <Col sm="4">
                        <Form.Control plaintext defaultValue="Search" style={{border:'1px solid black'}} />
                     </Col>
                     <Col sm="4">
                     <Button variant="primary" type="submit">
Search               </Button>
                     </Col>
                  </Row>
               </Form.Group>
             
               
               
            </Form>
            
         </div>

          
      );
   }
}

export default App;

