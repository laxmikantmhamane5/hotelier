import axios from "axios";


export async function fetchCustomer(){
    try {
        const response=await axios.get("http://127.0.0.1:4000/customer");
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function saveCustomer(custData){
    try {
        const response=await axios.post("http://127.0.0.1:4000/customer",custData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function deleteCustomer(id){
    try {
        const response=await axios.delete(`http://127.0.0.1:4000/customer/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function fetchCustomerBycno(id){
    try {
        const response=await axios.get(`http://127.0.0.1:4000/customer/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function updateCustomer(updatedData,id){
    try {
        const response=await axios.put(`http://127.0.0.1:4000/customer/${id}`,updatedData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}