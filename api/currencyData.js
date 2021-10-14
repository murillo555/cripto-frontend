import axios from 'axios';
import { getToken } from './token';

const envUrl = process.env[process.env.NODE_ENV];

export async function getAssetsData() {
    const url = `${envUrl}/currency`
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

export async function getCriptos() {
    const url = `${envUrl}/currency/cripto`
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

export async function getInvestments() {
    const url = `${envUrl}/currency/investment`
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

export async function newInvestMent(data) {
    const url = `${envUrl}/currency`
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