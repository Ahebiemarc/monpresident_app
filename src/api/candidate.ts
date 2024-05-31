import axios from "axios";
import { API_URL } from "./constant";





export const getListCandidate = async (token: string) => {
    try {

        const response = await axios.get(`${API_URL}/candidates`, {
            headers: {
                 Authorization: `Bearer ${token}`,
                // Ajoutez tout autre en-tête requis, comme les jetons d'authentification
        }
        });

        return response.data;
    } catch (error: any) {
        throw error.response ? error.response.data : new Error('Network Error');
    }
};


export const getListCandidateChain = async (token: string) => {
    try {

        const response = await axios.get(`${API_URL}/candidates/chain`, {
            headers: {
                 Authorization: `Bearer ${token}`,
                // Ajoutez tout autre en-tête requis, comme les jetons d'authentification
        }
        });

        return response.data;
    } catch (error: any) {
        throw error.response ? error.response.data : new Error('Network Error');
    }
};


export const getCandidate = async (token: string, id:string) => {
    try {

        const response = await axios.get(`${API_URL}/candidate/${id}`, {
            headers: {
                 Authorization: `Bearer ${token}`,
                // Ajoutez tout autre en-tête requis, comme les jetons d'authentification
        }
        });

        return response.data;
    } catch (error: any) {
        throw error.response ? error.response.data : new Error('Network Error');
    }
};