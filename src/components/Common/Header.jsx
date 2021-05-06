import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import logo from './../../assets/img/pow.jpg';

const Header = () => (
    <AppBar position='sticky' className='toolbar'>
        <Toolbar>
            <img src={logo} alt='logo' width='32' height='32'/>
            &nbsp; &nbsp;
            <h1>Super Heroes</h1>
        </Toolbar>
    </AppBar>
);

export default Header;
