import React from 'react';
import ReactDom from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = props => {
    return <div onClick={props.onClose} className={classes.backdrop}/>
};

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
};

const portalElement = document.getElementById('overlays');

const Modal = props => {
    return <React.Fragment>
        {ReactDom.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
        {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </React.Fragment>
};

export default Modal;