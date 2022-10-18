import * as React from "react";
import Button from "react-bootstrap/Button";
import {  Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { newInvoice } from "../models/invoice.model";
import { AiFillDelete } from "react-icons/ai";
//import  Datepicker from "react-datepicker";
import {useState} from "react"
 
interface Props {
  invoice: any[];
  setInvoice: React.Dispatch<React.SetStateAction<any[]>>;
  invoices: newInvoice[];
  setInvoices: React.Dispatch<React.SetStateAction<newInvoice[]>>;
}

const Newinvoice: React.FC<Props> = ({
  invoice,
  setInvoice,
  invoices,
  setInvoices,
}) => {

const [inputfields , setInputfiled] = useState<any>([{id:"",itemname: "",itemqty: "",itemprice: "",}])


const formInput =(e:any)=>{
  // let object = {id:"",itemname: "",itemqty: "",itemprice: "",} 
  // setInputfiled([...inputfields,object]);
  console.log("input fields");
  setInputfiled([...inputfields , {id:Date.now(),itemname: "",itemqty: "",itemprice: "",}])
} 

const inputChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
): void => {
  const name = e.target.name;
  const value = e.target.value;
  setInvoice({ ...invoice, [name]: value });
}; 
const inputFieldChange = (index:number,inputField:string,e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>)=>{ 
  console.log(inputField,"inputFieldChange")
  console.log("index" , e.target.name ,e.target.value) ;

 
   const inputIndex = inputfields.findIndex((item:any) => item.id === inputField) 
   console.log(inputIndex,"inputIndex");
   console.log(inputField,"inputField");
   console.log(inputIndex.id,"item.id");
   let _inputfields = [...invoice ] as any
    
     _inputfields[inputIndex].itemlist[e.target.name] = 	e.target.value 
   
 
  setInvoice(_inputfields);


}

//console.log(inputfields,"inputfields");

  

  
 
  const formSubmit = (e: React.FormEvent<HTMLFormElement | HTMLInputElement  >) => { 
   // console.log(inputfields , "inputfields");
    console.log(invoice , "invoice SADASDAS"); 
    const new_Invoice: any = invoice;

    const adNewinvoice = { 
      invoiceId:1,
      streetAddress: new_Invoice.streetAddress,
      city: new_Invoice.city,
      postcode: new_Invoice.postcode,
      country: new_Invoice.country,
      clientName: new_Invoice.clientName,
      clientEmail: new_Invoice.clientEmail,
      clientStreetAddress: new_Invoice.clientStreetAddress,
      clientcity: new_Invoice.clientcity,
      clientpostcode: new_Invoice.clientpostcode,
      clientcountry: new_Invoice.clientcountry,
      invoiceDate: new_Invoice.invoiceDate,
      paymentTerms: new_Invoice.paymentTerms,
       itemlist:{
         itemname:new_Invoice.itemname,
         itemqty:new_Invoice.itemqty,
         itemprice:new_Invoice.itemprice,
        }, 
     
      description: new_Invoice.description,
    };

    console.log(new_Invoice.streetAddress, "new_Inovie.streetAddress");

    e.preventDefault();
    setInvoices([...invoices, adNewinvoice]); 
     console.log(invoices,"invoices")
  };
 
  

  return (
    <>
      <div>
        <h4>Bill From </h4>
        <Form className="col-6" onSubmit={(e) => formSubmit(e)}>
          <Row>
            <Form.Group className="mb-3 " controlId="formBasicStreetAddress">
              <Form.Label>Street Address</Form.Label>
              <Form.Control
                type="text"
                name="streetAddress"
                onChange={(e) => inputChange(e)}
                placeholder="Street Address"
              />
            </Form.Group>
          </Row>
          <Row>
            <Col sm={4}>
              <Form.Group className="mb-3" controlId="formBasicCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  //value={}
                  onChange={(e) => inputChange(e)}
                  placeholder="City"
                />
              </Form.Group>
            </Col>
            <Col sm={4}>
              <Form.Group className="mb-3" controlId="formBasicPostCode">
                <Form.Label>Post Code</Form.Label>
                <Form.Control
                  type="number"
                  name="postcode"
                  onChange={(e) => inputChange(e)}
                  placeholder="Post Code"
                />
              </Form.Group>
            </Col>
            <Col sm={4}>
              <Form.Group className="mb-3" controlId="formBasicCountry">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  type="text"
                  name="country"
                  onChange={(e) => inputChange(e)}
                  placeholder="Country"
                />
              </Form.Group>
            </Col>
          </Row>
          <h4>Bill To </h4>
          <Row>
            <Form.Group className="mb-3" controlId="formBasicClientName">
              <Form.Label>Client's Name</Form.Label>
              <Form.Control
                type="text"
                name="clientName"
                onChange={(e) => inputChange(e)}
                placeholder="Client's Name"
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="formBasicClientEmail">
              <Form.Label>Client's Email</Form.Label>
              <Form.Control
                type="email"
                name="clientEmail"
                onChange={(e) => inputChange(e)}
                placeholder="Client's Email"
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group
              className="mb-3"
              controlId="formBasicClientStreetAddress"
            >
              <Form.Label>Street Address</Form.Label>
              <Form.Control
                type="text"
                name="clientStreetAddress"
                onChange={(e) => inputChange(e)}
                placeholder="Street Address"
              />
            </Form.Group>
          </Row>
          <Row>
            <Col sm={4}>
              <Form.Group className="mb-3" controlId="formBasicClientCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  name="clientcity"
                  onChange={(e) => inputChange(e)}
                  placeholder="City"
                />
              </Form.Group>
            </Col>
            <Col sm={4}>
              <Form.Group className="mb-3" controlId="formBasicClientCity">
                <Form.Label>Post Code</Form.Label>
                <Form.Control
                  type="text"
                  name="clientpostcode"
                  onChange={(e) => inputChange(e)}
                  placeholder="Post Code"
                />
              </Form.Group>
            </Col>
            <Col sm={4}>
              <Form.Group className="mb-3" controlId="formBasicClientCity">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  type="text"
                  name="clientcountry"
                  onChange={(e) => inputChange(e)}
                  placeholder="Country"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <Form.Group className="mb-3" controlId="formBasicInvoiceDate">
                <Form.Label>Invoice Date</Form.Label> 
                <Form.Control type="date"  name="invoiceDate" onChange={(e) => inputChange(e)} placeholder="Invoice Date" />
             
              </Form.Group>
            
            </Col>
            <Col sm={6}>
           
              <Form.Group className="mb-3" controlId="formBasicPaymentTerms">
              <Form.Label>Disabled select menu</Form.Label>
              <Form.Select  name="paymentTerms"  onChange={(e) => inputChange(e)}>
              <option value="Net 1 Day">  Net 1 Day</option> 
              <option value="Net 7 Day">  Net 7 Day</option>
              <option value="Net 14 Day"> Net 14 Day</option>
              <option value="Net 21 Day">Net 21 Day</option>
             </Form.Select> 
             </Form.Group> 
            </Col>
          </Row> 
          <Row> 
          <h4> Item List </h4> 
          </Row>
            
            {inputfields.map((inputField:any, key:number , index:number)=> {
        return (<>
        <Row key={index}>
         <p> ID {inputField.id}</p>  
        
         <Col sm={4}>
              <Form.Group className="mb-3" controlId="formBasicCountry">
                <Form.Label>Item Name</Form.Label>
                <Form.Control
                  type="text"
                  name="itemname"
                  value={inputfields.itemname}
                  onChange={(e) => inputFieldChange(index,inputField.id,e)}
                  placeholder="Item Name"
                />
              </Form.Group>
            </Col> 
            <Col sm={3}>
              <Form.Group className="mb-3" controlId="formBasicCountry">
                <Form.Label>Qty.</Form.Label>
                <Form.Control
                  type="number"
                  name="itemqty" 
                  value={inputfields.itemqty}
                  onChange={(e) => inputFieldChange(index,inputField.id ,e)}
                  placeholder="qty"
                />
              </Form.Group>
            </Col> 
            <Col sm={3}>
              <Form.Group className="mb-3" controlId="formBasicCountry">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  name="itemprice"
                  value={inputfields.itemprice}
                  onChange={(e) => inputFieldChange(index,inputField.id,e)}
                  placeholder="Price"
                />
              </Form.Group>
            </Col>
            <Col> 
            <Form.Label>Total</Form.Label>
             <p> 0    <AiFillDelete/></p>
           
            </Col>  
            
            </Row>
        </>)
       
       })}
         
          <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              onChange={(e) => inputChange(e)}
              placeholder="Description"
            />
          </Form.Group> 
          <Button variant="primary" onClick={formInput} type="button">
            Add Item
          </Button>  

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

     


        {invoices.map((data: newInvoice, key: number) => {
          return (
            <>
              <p>
                streetAddress : {data.streetAddress} City : {data.city} Postcode
                : {data.postcode} Country : {data.country}
              </p>
              <p>
                Client's Name : {data.clientName} Client's Email :{" "}
                {data.clientEmail} Street Address : {data.clientStreetAddress}
              </p>
              <p>
                {" "}
                City : {data.clientcity} Post Code : {data.clientpostcode}{" "}
                Country : {data.clientcountry}{" "}
              </p>
              <p>
                {" "}
                Invoice Date : {data.invoiceDate} Payment Terms :{" "}
                {data.paymentTerms}
              </p>
              <p>Description : {data.description} </p>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Newinvoice;
