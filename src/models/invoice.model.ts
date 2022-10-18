
export   interface newInvoice { 
    invoiceId?:number,
    streetAddress ?: string ,
    city?:string,
     postcode?:number,
     country?:string,
     clientName?:string,
     clientEmail?:string,
     clientStreetAddress?:string,
     clientcity?:string,
     clientpostcode?:number,
     clientcountry?:string,
     invoiceDate ?:string,
     paymentTerms ?:string,
      itemlist:{
        itemname?:string,
        itemqty?:number,
        itemprice?:number,
       }, 
   // itemlist?:string,
     description?:string,
}

