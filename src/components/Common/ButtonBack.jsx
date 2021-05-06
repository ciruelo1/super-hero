import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const ButtonBack = ({ to }) => (
    <Link className='buttonBack' to={ to }>
        <Button variant='contained' color='primary'>
            { "Volver Atras" }
        </Button>
    </Link>
);

export default ButtonBack;