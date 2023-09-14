import axios from "axios";

export const AUTHAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

export const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});