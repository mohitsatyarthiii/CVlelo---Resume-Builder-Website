import { createContext, useEffect, useState } from "react";
import axiosInstance from "../utlis/axiosInstance";
import { API_PATHS } from "../utlis/apiPaths";


export const userContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if(user) return;

            const accessToken = localStorage.getItem('token')
            if(!accessToken) {
                setLoading(false)
                return;
            }
            const fetchUser = async () => {
                try {
                    const response = await axiosInstance.get(API_PATHS.AUTH.GET_PROFILE)
                    setUser(response.data)
                } catch (error) {
                    console.error('User not authenticated:', error)
                    clearUser()
                }
                finally {
                    setLoading(false);
                }
            }
            fetchUser();
    }, [])

    const updateUser = (userData) => {
        setUser(userData);
        localStorage.setItem('token', userData.token); // Assuming userData contains the token
        setLoading(false);
    }

    const clearUser = () => {
        setUser(null);
        localStorage.removeItem('token');
    }
    return (
        <userContext.Provider value={{ user, loading, updateUser, clearUser }}>
            {children}
        </userContext.Provider>
    )
}
export default UserProvider;
