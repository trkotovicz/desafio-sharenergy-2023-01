import axios from "axios";

const api = axios.create({
    baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
    timeout: 10000,
});

// ---------------------------------------------------------------------------
// USER REQUESTS

export const userToken = (token: string) => {
  api.defaults.headers.common.Authorization = token;
}

export const userLogin = async (body: object) => {
  try {
    const { data } = await api.post('/login', body);
    return data;
  } catch (error) {
    return error;
  }
}

export const userRegister = async (body: object) => {
  try {
    const { data } = await api.post('/register', body);
    return data;
  } catch (error) {
    return error;
  }
}

// ---------------------------------------------------------------------------
// CLIENTS REQUESTS

export const clientsList = async () => {
  try {
    const { data } = await api.get('/clients');
    return data;
  } catch (error) {
    return error;
  }
}

export const createNewClient = async (body: object) => {
  try {
    const { data } = await api.post('/clients', body);
    return data;
  } catch (error) {
    return error;
  }
}

export const getClientById = async (id: string) => {
  try {
    const { data } = await api.get(`/clients/${id}`);
    return data;
  } catch (error) {
    return error;
  }
}

export const getClientByName = async (name: string) => {
  try {
    const { data } = await api.get('/clients/search', {
      params: { q: name }
      // params: { query: { q: name } }
    });
    return data;
  } catch (error) {
    return error;
  }
}

export const deleteClient = async (id: string) => {
  try {
    const { data } = await api.delete(`/clients/${id}`);
    return data;
  } catch (error) {
    return error;
  }
}

export const updateClient = async (id: string, body: object) => {
  try {
    const { data } = await api.put(`/clients/${id}`, body);
    return data;
  } catch (error) {
    return error;
  }
}
