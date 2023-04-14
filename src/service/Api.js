import axios from "axios";
// const url = "http://localhost:8000";
const url = "https://whatsapp-backend111.onrender.com";

export const adduser = async (data) => {
    try {
        await axios.post(`${url}/add`, data);
    } catch (error) {
        console.log("error in adduser API", error.message)
    }
}

export const getuser = async () => {
    try {
        let response = await axios.get(`${url}/users`)
        return response.data
    } catch (error) {
        console.log("error in getuser API", error.message)
    }
}

export const setConversation = async (data) => {
    try {
        await axios.post(`${url}/conversation/add`, data)
    } catch (error) {
        console.log("error in setConversation API", error.message)
    }
}
export const getConversation = async (data) => {
    try {
        let response = await axios.post(`${url}/conversation/get`, data)
        return response.data
    } catch (error) {
        console.log("error in getConversation API", error.message)
    }
}
export const newMessage = async (data) => {
    try {
        await axios.post(`${url}/message/add`, data)
    } catch (error) {
        console.log("error in newMessage API", error.message)
    }
}
export const getMessage = async (id) => {
    try {
        let response = await axios.get(`${url}/message/get/${id}`);
        return response.data;
    } catch (error) {
        console.log("error in getMessage API", error.message)
    }
}
export const uploadFile = async (data) => {
    try {
        return await axios.post(`${url}/file/upload`, data)
    } catch (error) {
        console.log("error in uploadFile API", error.message)
    }
}