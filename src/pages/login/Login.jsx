import React, {useState} from 'react';
import Input from "../../components/formFields/input/Input.jsx";
import SubmitButton from "../../components/buttons/submitButton/SubmitButton.jsx";
import {useNavigate} from "react-router-dom";
import {authService} from "../../services/AuthService.js";
import {storageService} from "../../services/StorageService.js";
import {storageKeys} from "../../config/config.js";
import {useUserData} from "../../context/UserContext.jsx";

const Login = () => {
    const navigate = useNavigate();
    const {refreshUserData} = useUserData();
    const [formData, setFormData] = useState({email: "", password: ""});

    const onLogin = () => {
        authService.login(formData?.email, formData?.password)
            .then(async r => {
                storageService.set(storageKeys.USER, r.getToken())
                await refreshUserData();
                setTimeout(() => {
                    navigate('/')
                }, 300)
            })
            .catch(err => {
                console.log(err?.data)
            })
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