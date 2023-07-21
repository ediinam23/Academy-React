import React, {useState} from 'react';
import Input from "../../components/formFields/input/Input.jsx";
import SubmitButton from "../../components/buttons/submitButton/SubmitButton.jsx";
import {useUserData} from "../../context/UserContext.jsx";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const {login} = useUserData();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({email: "", password: ""});

    const onLogin = () => {
        console.log(formData)
        const success = login(formData?.email, formData?.password)

        if(success){
            navigate("/")
        }
    }

    return <div>
        <h3>Login</h3>
        <div>
            <Input label="Email"
                   placeholder="Insert your email"
                   value={formData?.email}
                   onChange={(value) => setFormData((prevState) => ({
                               ...prevState,
                                   email: value
                           }))}
            />

            <Input label="Password"
                   placeholder="Insert password"
                   value={formData?.password}
                   onChange={(value) => setFormData((prevState) => ({
                       ...prevState,
                       password: value
                   }))}
            />
            <SubmitButton label={"Login"} onClick={() => onLogin()}/>
        </div>
    </div>
}

export default Login;