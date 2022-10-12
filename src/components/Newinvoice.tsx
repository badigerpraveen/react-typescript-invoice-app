import * as React from 'react'; 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { newInvoice } from '../models/invoice.model';

interface Props { 
    invoice:string[], 
    setInvoice:React.Dispatch<React.SetStateAction<string[]>>
    invoices:newInvoice[],
    setInvoices:React.Dispatch<React.SetStateAction<newInvoice[]>>
}

const Newinvoice: React.FC<Props> = ({invoice,setInvoice,invoices,setInvoices}) => { 

 const formSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
   e.preventDefault();   
   setInvoices(invoices)
   console.log(invoices ,"invoices") 
 } 
 

  
  const inpuChange =(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    setInvoices((state)=>{
        const name = e.target.name ;
        const value = e.target.value ;
       return{...state , [name]:value}; 
     
    }
  
    )
    
  }

 
  return (<>
  <div>
  <Form className='col-6' onSubmit={(e)=>formSubmit(e)}>
      <Form.Group className="mb-3 " controlId="formBasicStreetAddress" >
        <Form.Label>Street Address</Form.Label>
        <Form.Control type="text" name="streetAddress"   onChange={(e)=>inpuChange(e)}  placeholder="Street Address" />
      </Form.Group> 
      <Form.Group className="mb-3"    controlId="formBasicCity">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" name="city"  onChange={(e)=>inpuChange(e)} placeholder="City" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPostCode">
        <Form.Label>Post Code</Form.Label>
        <Form.Control type="number"    placeholder="Post Code" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCountry">
        <Form.Label>Country</Form.Label>
        <Form.Control type="text" placeholder="Country" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicClientName">
        <Form.Label>Client's Name</Form.Label>
        <Form.Control type="text" placeholder="Enter email" />
      </Form.Group> 
      <Form.Group className="mb-3" controlId="formBasicClientEmail">
        <Form.Label>Client's Email</Form.Label>
        <Form.Control type="email" placeholder="Client's Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicClientStreetAddress">
        <Form.Label>Street Address</Form.Label>
        <Form.Control type="text" placeholder="Street Address" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicClientCity">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="City" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicClientCity">
        <Form.Label>Post Code</Form.Label>
        <Form.Control type="text" placeholder="Post Code" />
      </Form.Group> 
      <Form.Group className="mb-3" controlId="formBasicClientCity">
        <Form.Label>Country</Form.Label>
        <Form.Control type="text" placeholder="Country" />
      </Form.Group> 
      <Form.Group className="mb-3" controlId="formBasicInvoiceDate">
        <Form.Label>Invoice Date</Form.Label>
        <Form.Control type="text" placeholder="Invoice Date" />
      </Form.Group> 
      <Form.Group className="mb-3" controlId="formBasicPaymentTerms">
        <Form.Label>Payment Terms</Form.Label>
        <Form.Control type="text" placeholder="Payment Terms" />
      </Form.Group> 
      <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Description" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>   
      </Form>
  </div>
    
  </>)
};

export default Newinvoice;
