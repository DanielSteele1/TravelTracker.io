import React, { useEffect, useRef } from 'react';
import './App.css';
import Mapbox from './map';
import GlobalStyles from '@mui/material/GlobalStyles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import PersonIcon from '@mui/icons-material/Person';
import CloseIcon from '@mui/icons-material/Close';
import PasswordIcon from '@mui/icons-material/Password';
import MailIcon from '@mui/icons-material/Mail';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            light: ' rgb(255, 90, 90);',
            main: ' rgb(255, 90, 90);',
            dark: ' rgb(255, 90, 90);',
            contrastText: ' rgb(255, 90, 90);',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});


function LoginOrSignup() {
    useEffect(() => {

        function showPortal() {
            const accountsPortal = document.getElementsByClassName("accountsPortal");

            for (let i = 0; i < accountsPortal.length; i++) {

                if (accountsPortal[i].classList.contains("hidden")) {
                    accountsPortal[i].classList.remove("hidden");  //show
                }
            };

        }
        function hidePortal() {
            const accountsPortal = document.getElementsByClassName("accountsPortal");

            for (let i = 0; i < accountsPortal.length; i++) {

                if (!accountsPortal[i].classList.contains("hidden")) {
                    accountsPortal[i].classList.add("hidden");   //hide
                }
            }
        }

        document.getElementById("showPortal").addEventListener("click", showPortal);
        document.getElementById("accounts-Exit").addEventListener("click", hidePortal);

        return () => {
            document.getElementById("showPortal").removeEventListener("click", hidePortal);
            document.getElementById("accounts-Exit").removeEventListener("click", showPortal);
        }

    }, []);

    return (
        <div className="accountsPortal">
            <div className="Portal">
                <div className="nav-container">
                    <div id="accounts-Exit"> <CloseIcon></CloseIcon> </div>
                </div>
                <div className="accounts-title">
                    <h2>
                        Login
                    </h2>
                    <p1 className="Portal-description">Log into your account </p1>
                </div>
                <div className="input-group">
                    <PersonIcon fontSize='large' className="input-icon" />
                    <TextField sx={{

                        '& .MuiInputBase-root':
                            { color: '#ff5a5a' },

                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'grey', // Default
                            },
                            '&:hover fieldset': {
                                borderColor: '#ff5a5a', // on hover
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#ff5a5a', // focused
                            },
                        },

                    }}
                        className="accountsLogin" placeholder='Username' />
                </div>
                <div className="input-group">
                    <PasswordIcon fontSize='large' className="input-icon" />
                    <TextField sx={{

                        '& .MuiInputBase-root':
                            { color: '#ff5a5a' },

                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'grey', // Default
                            },
                            '&:hover fieldset': {
                                borderColor: '#ff5a5a', // on hover
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#ff5a5a', // focused
                            },
                        },
                    }}
                        className="accountsLogin" placeholder='Password' />
                </div>

                <div className="accounts-title">
                    <h2>
                        Create a free Account
                    </h2>
                    <p1 className="Portal-description">
                        To use this app fully,
                        we encourage you to create a free account,
                        so you can enjoy all features on offer.</p1>
                </div>
                <div className="input-group">
                    <MailIcon fontSize='large' className="input-icon"> </MailIcon>
                    <TextField sx={{
                        '& .MuiInputBase-root':
                            { color: '#ff5a5a' },

                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'grey', // Default
                            },
                            '&:hover fieldset': {
                                borderColor: '#ff5a5a', // on hover
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#ff5a5a', // focused
                            },
                        },

                    }}
                        className="accountsSignup" placeholder='Email' />
                </div>
                <div className="input-group">
                    <PasswordIcon fontSize='large' className="input-icon"> </PasswordIcon>
                    <TextField sx={{
                        '& .MuiInputBase-root':
                            { color: '#ff5a5a' },


                        '& .MuiInputBase-root':
                            { color: '#ff5a5a' },

                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'grey', // Default
                            },
                            '&:hover fieldset': {
                                borderColor: '#ff5a5a', // on hover
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#ff5a5a', // focused
                            },
                        },

                    }}
                        className="accountsSignup" placeholder='Password' />
                </div>


                <div className="PortalButtons">
                    <Button className="accountsButton"> Log In </Button>
                    <Button className="accountsButton"> Sign Up </Button>
                </div>
            </div>
        </div>
    );
}
export default LoginOrSignup;