import React, { useState } from "react";
import { Box, AppBar, Toolbar, Button, Typography,Tabs,Tab } from "@mui/material";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'

const Header = () => {
    const isLogin = useSelector(state => state.isLogin)
    const [value,setValue] = useState();
    
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h4">BLOGZ</Typography>
           {isLogin && (
              <Box display={'flex'} marginleft="auto" marginRight={'auto'}>
              <Tabs textColor="inherit" value={value} onChange={(e,val)=> setValue(val)}>

                <Tab  sx={{ margin: 1, color: "white" }} label= "Blogs" LinkComponent={Link} to ="/blog" />
                <Tab  sx={{ margin: 1, color: "white" }} label= "My Blogs" LinkComponent={Link} to ="/my-blog" />

              </Tabs>
          </Box>
           )}
          <Box display={"flex"} marginLeft="auto">
            {!isLogin && (
              <>
              <Button
              sx={{ margin: 1, color: "white" }}
              LinkComponent={Link}
              to="/login"
            >
              Login
            </Button>
            <Button
              sx={{ margin: 1, color: "white" }}
              LinkComponent={Link}
              to="/register"
            >
              Register
            </Button>
              </>
            )}
            {isLogin && (
              <Button sx={{ margin: 1, color: "white" }}>Log Out</Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
