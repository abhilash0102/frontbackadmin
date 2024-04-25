import { Alert, Typography } from '@mui/material';
import React from 'react';
import CheckIcon from '@mui/icons-material/Check';


const Orderthankyou = () => {
  return (
    <div>
          {/* <Alert style={{paddingLeft:"500px"}} icon={<CheckIcon fontSize="inherit" />} severity="success">
      Thankyou for placed order.
    </Alert> */}
    <Typography>Thankyou.</Typography>
      <img
        src="https://kissenglishcenter.com/wp-content/uploads/2022/05/tu%CC%9B%CC%80-vu%CC%9B%CC%A3ng-thu%CC%9Bo%CC%9B%CC%80ng-du%CC%80ng-khi-vie%CC%82%CC%81t-doa%CC%A3n-va%CC%86n-tie%CC%82%CC%81ng-anh-ve%CC%82%CC%80-shopping-1024x1024.jpg"
        alt=""
        style={{ width: '350px', height: '340px',marginRight:"700px",marginTop:"100px" }} // Adjust width and height here
      />
    </div>
  );
};

export default Orderthankyou;