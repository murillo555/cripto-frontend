import axios from 'axios';
import { getToken } from './token';

const envUrl = process.env[process.env.NODE_ENV];
//User Auth Data
export function getUserData(token) {
    const url = `${envUrl}/users/auth`

    const params = {
        headers: {
            'Content-Type': 'application/json',
            xtoken: token
        }
    }
    return axios.get(url, params)
        .then(response => {
            return response.data;
        })
        .catch(err => {
            return err;
        })
}

//Get Users List
export async function getUserListApi(page = 1) {
    const url = `${envUrl}/users?page=${page}`
    const token = await getToken();
    const params = {
        headers: {
            'Content-Type': 'application/json',
            xtoken: token
        }
    }
    return axios.get(url, params)
        .then(response => {
            return response.data;
        })
        .catch(err => {
            return err;
        })
}

export async function createUserApi(data) {
    const url = `${envUrl}/users/userbyadminpanel`
    const token = await getToken();
    const params = {
        headers: {
            'Content-Type': 'application/json',
            xtoken: token
        }
    }
    return axios.post(url, data, params)
        .then(response => {
            return response.data;
        })
        .catch(err => {
            return err;
        })
}

export async function updateUserApi(data) {
    const url = `${envUrl}/users/${data._id}`
    const token = await getToken();
    const params = {
        headers: {
            'Content-Type': 'application/json',
            xtoken: token
        }
    }
    delete data._id;
    return axios.put(url, data, params)
        .then(response => {
            return response.data;
        })
        .catch(err => {
            return err;
        })
}

export async function deleteUserApi(id) {
    const url = `${envUrl}/users/${id}`
    const token = await getToken();
    const params = {
        headers: {
            'Content-Type': 'application/json',
            xtoken: token
        }
    }

    return axios.delete(url, params)
        .then(response => {
            return response.data;
        })
        .catch(err => {
            return err;
        })
}