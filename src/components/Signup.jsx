import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [inputs, setInputs] = useState({
    oname: "",
    opass: "",
    omail: "",
    onumber: ""
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInputs((prevData) => ({ ...prevData, [name]: value }));
  };

  const addHandler = () => {
    console.log("button clicked");
    axios.post("http://localhost:3006/add", inputs)
      .then((response) => {
        console.log(response.data);
        alert(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ 
      background: 'url("https://c4.wallpaperflare.com/wallpaper/559/564/946/cuisine-food-india-indian-wallpaper-preview.jpg")',
      backgroundSize: 'cover',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <Box
        height={400}
        width={300}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={4}
        p={7}
        bgcolor="white" // Transparent background
        boxShadow={3} // 3D effect
        borderRadius={16} // Rounded corners
      >
        <Typography variant='h4' color="dimgray">
          SIGNUP PAGE
        </Typography>
        <TextField
          label='Enter name'
          variant='outlined'
          name='oname'
          value={inputs.oname}
          onChange={inputHandler}
        />
        <TextField
          label='Enter mobile number'
          variant='outlined'
          name='onumber'
          value={inputs.onumber}
          onChange={inputHandler}
        />
        <TextField
          label='Enter Email'
          variant='outlined'
          name='omail'
          value={inputs.omail}
          onChange={inputHandler}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          
          name='opass'
          value={inputs.opass}
          onChange={inputHandler}
        />
        <Button
          variant='contained'
          color='secondary'
          onClick={addHandler}
          component={Link}
          to={'/Login'}
          style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}
        >
          Submit
        </Button>
      </Box>
    </div>
  );
}

export default Signup;
