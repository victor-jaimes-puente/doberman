import React from "react";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MessageIcon from '@material-ui/icons/Message';
export default function Informacion() {
  return (
<React.Fragment>
  <div style={{textAlign: 'center',}} >
  <h1>For More Information Text or Whatsapp </h1> 
  <br />
  
  <WhatsAppIcon style={{color: 'black', fontSize: '3em'}} />
  <MessageIcon style={{color: 'black', fontSize: '3em'}} />

  <h1 style={{color: 'red',}} >  +17372243665</h1>
  </div>
</React.Fragment>
  );
}