import React from 'react';
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';   
import './Navbar.css'
import { endianness } from 'os';
import { EndOfLineState } from 'typescript';
import { textAlign } from '@mui/system';
function Navbar() {
    return (
        <>
            <AppBar position="static">
            <Box style={{ backgroundColor: "darkblue" }}>
                <Toolbar variant="dense">
                    <Box mx={2}  className= "cursor" >
                        <Typography variant="h5" color='inherit'>
                            Fonte
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent='inherit'>
                        <Box mx={2} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Home
                            </Typography>
                        </Box>
                        <Box mx={2} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Postagens
                            </Typography>
                        </Box>
                        <Box mx={2} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Temas
                            </Typography>
                        </Box>
                        <Box mx={2} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                CadastrarTema
                            </Typography>
                            
                        </Box>

                        <Link to='/login' className='inherit'>
                            <Box mx={2} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Logout
                                </Typography>
                            </Box>

                          
                        
                        
                        </Link>
                    </Box>
                    
                </Toolbar>
                </Box>
            </AppBar>
        
        </>
    )
}

export default Navbar;