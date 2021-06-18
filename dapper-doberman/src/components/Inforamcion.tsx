import React from "react";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

export default function Informacion() {
  return (
<React.Fragment>
  <div style={{textAlign: 'center',}} >
  <h1>Para mas informacion manda WhatsApp al</h1> 
  <br />
  <WhatsAppIcon style={{color: 'black', fontSize: '3em'}} />
  <h1 style={{color: 'red',}} >  +17372243665</h1>
  </div>
</React.Fragment>
  );
}