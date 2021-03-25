/* jshint ignore:start */
import React , {useState} from "react";
import { useHistory } from "react-router-dom";

function Button(props) {
    const [isClicked , setClick] = useState(false);
    const history = useHistory();

    function updateStyle() {
        setClick(true);
    }

    function navigateTo() {
        if(props.name === "HomePage") {
            history.push('/FormPage');
        }
        else if(props.name === "FormPage" && props.boolValue !== true) {
            history.push('/NewPage');
        }
    }

    function setDelay() {
        setTimeout(navigateTo, 400);
    }

    function afterclick() {
        setTimeout(() => setClick(false), 2500);
    }

    function validate() {
        if(props.boolValue) {
            alert("Enter a file!!");
        }
    }
   
    return ( <button
             className={props.class}
             name={props.name}
             onClick={() => { updateStyle(); setDelay(); afterclick(); validate();}}
             style = {{ boxShadow : isClicked ? `inset 5.91px 5.91px 9px rgba(15, 24, 63, 1),
                    inset -5.91px -5.91px 9px rgba(40, 43, 83, 0.9)` : `9.91px 9.91px 15px rgba(15, 24, 63, 1),
                    -9.91px -9.91px 15px rgba(40, 43, 83, 0.9)` }}>{props.title}</button>
    );
}

export default Button;
/* jshint ignore:end */
