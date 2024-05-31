import axios from "axios";
import { API_URL } from "./constant";
import AsyncStorage from '@react-native-async-storage/async-storage';


export const createElector = async (elector: any) => {
    try {
        const response = await axios.post(`${API_URL}/auth/register-ElectorNV`, elector,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        );
        const result = response.data;
        return { message: result.message };
    } catch (error) {
        console.error('Error creating elector:', error);

        if (axios.isAxiosError(error)) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
                console.error('Response headers:', error.response.headers);
                return { message: error.response.data };
            } else if (error.request) {
                // The request was made but no response was received
                console.error('Request data:', error.request);
                return { message: 'No response received from the server' };
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error message:', error.message);
                return { message: error.message };
            }
        } else {
            console.error('Unexpected error:', error);
            return { message: 'An unexpected error occurred' };
        }
    }
};



export const verifyCIN = async (cin: string) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login-by-cin`, { cin });
    const result = response.data;
    console.log(result.elector.authentication.sessionToken);
    
    if (!result.elector.authentication.sessionToken) return
    await AsyncStorage.setItem('token', result.elector.authentication.sessionToken);
    return {message: result.message};
  } catch (error : any) {
    throw error.response ? error.response.data : new Error('Network Error');
  }
};


export const authenticateByFace = async (image: File, token: string) => {
    try {
        const formData = new FormData();
        formData.append('image', image);
        console.log(image);
        
        

        const response = await axios.post(`${API_URL}/auth/login-by-face`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                 Authorization: `Bearer ${token}`,
                // Ajoutez tout autre en-tête requis, comme les jetons d'authentification
            }
        });

        return response.data;
    } catch (error: any) {
        throw error.response ? error.response.data : new Error('Network Error');
    }
};


export const toVote = async (candidateId:number, token: string) => {
    try {
        
        const response = await axios.post(`${API_URL}/auth/vote/${candidateId}`, {}, {
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

export const getProfil = async (token: string) => {
    try {
        
        const response = await axios.get(`${API_URL}/auth/profil`, {
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

