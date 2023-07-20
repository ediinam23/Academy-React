import React from "react";
import {useModal} from "../../context/ModalContext.jsx";

const OutletExample = ({additionalText = ''}) => {
    const {open} = useModal();

    const onClick = () => {
        open("This is an example",
            <div>
                This is content
            </div>
            )
    }
     return <div style={{paddingTop: "100px", paddingLeft: "16px", paddingRight: "16px"}}>
        <h2>Hello, this is example!</h2>
        <div>{additionalText}</div>
        <button onClick={() => onClick()}>
            Open modal
        </button>

    </div>
}

export default OutletExample;
