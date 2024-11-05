import React, { useEffect, useRef } from 'react';
import './App.css';
import Mapbox from './map';
import GlobalStyles from '@mui/material/GlobalStyles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import PersonIcon from '@mui/icons-material/Person';


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
            <div className="Portal-Left">
                <div id="accounts-Exit"> <Button>X</Button></div>
                <div className="Login">
                    <div className="accounts-title">
                        <h2>
                            Login
                        </h2>
                        <TextField className="accountsLogin" placeholder='Username'> </TextField>
                        <TextField className="accountsLogin" placeholder='Password'> </TextField>

                    </div>
                </div>

                <div className="Signup">
                    <div className="accounts-title">
                        <h2>
                            Sign up
                        </h2>
                        <TextField className="accountsSignup" placeholder='Email'>  </TextField>
                        <TextField className="accountsSignup" placeholder='Password'>  </TextField>

                    </div>
                </div>

                <div className="PortalButtons">
                    <Button className="accountsButton"> Log In </Button>
                    <Button className="accountsButton"> Sign Up </Button>
                </div>

            </div>
            <div className="Portal-right">

            </div>

        </div>
    );
}
export default LoginOrSignup;