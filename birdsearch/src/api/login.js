import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;
const login = async (username, password) => {
    const data = {
        username: username,
        password: password
    };

    try {
        const response = await axios.post(`${apiUrl}/login`, data);
        return response.data;
    } catch (error) {
        console.error('Error during API Call', error);
        return { error: error.message };
    }
};

const register=async (username, password,realname) => {
    const data = {
        username: username,
        password: password,
        realname:realname,
    };
    try {
        const response = await axios.post(`${apiUrl}/register`, data);
        return response.data;
    } catch (error) {
        console.error('Error during API Call', error);
        return { error: error.message };
    }
};

const  confirm=async (uid) => {
    const data = {
        uid:uid
    };
    try {
        const response = await axios.post(`${apiUrl}/getconfirm`, data);
        return response.data;
    } catch (error) {
        console.error('Error during API Call', error);
        return { error: error.message };
    }
};
const api = {
    login,
    register,
    confirm
};

export default api;