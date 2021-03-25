/* jshint ignore:start */
import React from "react";
import Robot from "./Robot";
import WarningIcon from "./WarningIcon"
import FileUpload from "./FileUpload";

function Form({history}) {

    const imgStyle = {
        width : '900px',
        height : '900px'
    };

    const imgStyle1 =  {
        width: '900px',
        height: '900px'
    };

    return (
        <div className="container">
            <img className="form-img" style={imgStyle} src="images/form-bg.svg" alt="form-img" />
            <Robot />
            <WarningIcon />
            <FileUpload />
            <img className="form-img1" style={imgStyle1} src="images/form-bg.svg" alt="form-img" />
        </div>
    );
}

export default Form;
/* jshint ignore:end */
