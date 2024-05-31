import { Platform } from "react-native";

//export const API_URL = " http://127.0.0.1:5000/api/v1";
export const API_URL = Platform.OS === 'android' ? 'http://10.0.2.2:5000/api/v1' : 'http://127.0.0.1:5000/api/v1';

export const IMG_URL = Platform.OS === 'android' ?  "http://10.0.2.2:5000" : "http://localhost:5000";
