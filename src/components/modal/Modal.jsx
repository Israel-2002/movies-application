import React from "react";
import ReactDOM from "react-dom";

const Backdrop = ({hidePlayer}) => {
  return <div className="backdrop" onClick={hidePlayer}></div>;
};

export const ModalOverlay = ({ children }) => {
  return <div>{children}</div>;
};

const Modal = ({ children, hidePlayer }) => {
  const portal = document.getElementById("portal");

  return (
    <>
      {ReactDOM.createPortal(<Backdrop hidePlayer={hidePlayer} />, portal)}
      {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portal)}
    </>
  );
};

export default Modal;
