import React, { Fragment } from 'react';
import Message from './../Common/Message';
import ButtonBack from './../../components/Common/ButtonBack';

const NotFound = () => (
    <Fragment>
        <Message text="404: URL Not Found" />
        <ButtonBack to="/"/>
    </Fragment>
);

export default NotFound;