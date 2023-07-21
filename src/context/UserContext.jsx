import React, {createContext, useContext, useState} from "react";

const users = [
    {
        id: 1,
        email: 'edina.mehmedovic@amplitudo.me',
        password: '12345678',
        name: 'Edina Mehmedovic'
    },
    {
        id: 2,
        email: 'ana.markovic@amplitudo.me',
        password: '87654321',
        name: 'Ana Markovic'
    }
]

const UserContext = createContext();

const UserProvider = ({children}) => {
    const [userData, setUserData] = useState(null);

    const login = (email, password) => {
        console.log(email, password)
        const currentUser = users.find(user => user.email === email);
        let success = false;

        if(currentUser){
            console.log("User found")
            if(currentUser.password === password){
                console.log("Credentials ok")
                setUserData(currentUser)
                success = true;
            }else{
                console.log("credentials false")
                setUserData(null)
            }
        }else{
            console.log("User does not exist")
            setUserData(null)
        }

        return success;
    }

    const logout = () => {
        setUserData(null)
    }

    return <UserContext.Provider value={{
        userData: userData,
        login: (email, password) => login(email, password),
        logout: () => logout()
    }}>
        {children}
    </UserContext.Provider>
}

export const useUserData = () => {
    return useContext(UserContext)
}

export default UserProvider;