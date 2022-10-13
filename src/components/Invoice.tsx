import React, { useState } from "react";
import Sidenavbar from "./Sidenavbar";
import { AiFillPlusCircle ,AiOutlineRight } from "react-icons/ai";
import {Container ,Row } from 'react-bootstrap';
import { newInvoice } from "../models/invoice.model";
import Newinvoice from "./Newinvoice";



const Invoice: React.FC = () => {
   
 
   const [invoice, setInvoice] = useState<string[]>([]); 
   const [invoices, setInvoices] = useState<newInvoice[]>([]);
   
   return (
        <>
          <div className="theme-light">
            <div className="application-wrap">
              <Sidenavbar />
              <div className="invoices_header">
                <div className="header_left">
                  <h3 className="invoices_title">Invoices</h3>
                  <p className="invoices_amount"> There are 4 total Invoices </p>
                </div>
                <div className="header_right">
                  <div className="add">
                    <button className="newInvoiceBtn">
                     
                      <span className="btn-content">
                       
                        <div>
                         
                          <AiFillPlusCircle style={{ fontSize: "32px" }}>
                           
                          </AiFillPlusCircle>
                        </div>
                        <div> New Invoice </div>
                      </span>
                    </button>
                  </div>
                </div>

              </div> 
                <Container> 
                <Row>
               <div className="cards">
                <div className="invoice-card" >
                 <div className="invoice-card-left"> 
                    <div className="invoice_id"><div className="hashtag">#</div> RG0314 </div> 
                    <div className="due-date"> Due 1 Oct 2021 </div> 
                    <div className="customer-name">  John Morrison  </div> 
                   
                    </div>   
                    <div className="invoice-card-right"> 
                    
                    <div className="invoice_price"> £ 14,002.33 </div> 
                     <div className="status"> <span className="paid">  Paid </span>  </div> 
                     <div className="status"> <AiOutlineRight style={{color:"#7c5dfa",fontWeight:"bold"}}> </AiOutlineRight> </div>
                    </div>  
                
                </div>
               </div> 
               <Newinvoice   invoice={invoice}  setInvoice={setInvoice} invoices={invoices} setInvoices={setInvoices}/>
                </Row>
                
                </Container>  
               
                
            </div>
          </div>
        </>
      );
};

export default Invoice;


