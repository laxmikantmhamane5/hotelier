import axios from "axios";


export async function fetchRoom(){
    try {
        const response=await axios.get("http://127.0.0.1:4000/room");
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function saveRoom(custData){
    try {
        const response=await axios.post("http://127.0.0.1:4000/room",custData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function deleteRoom(id){
    try {
        const response=await axios.delete(`http://127.0.0.1:4000/room/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function fetchRoomByrno(id){
    try {
        const response=await axios.get(`http://127.0.0.1:4000/room/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function updateRoom(updatedData,id){
    try {
        const response=await axios.put(`http://127.0.0.1:4000/room/${id}`,updatedData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}