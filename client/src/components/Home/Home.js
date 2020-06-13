import React from 'react';
import '../../assets/styles/App.css';
import { Button } from '@material-ui/core';
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

function Home() {
    return (
     <div>
         <AppBar position="static">
             <Toolbar>
                 <IconButton edge="start" color="inherit" aria-label="menu">
                     {/*<MenuIcon />*/}
                 </IconButton>
                 <Typography variant="h6" >
                     News
                 </Typography>
                 <Button color="inherit">Login</Button>
             </Toolbar>
         </AppBar>
     </div>
    );
}

export default Home;
