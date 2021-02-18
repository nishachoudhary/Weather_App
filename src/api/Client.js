import React from 'react';
import Cache from '../cache/CacheLayer'
import Constants from '../Constants'
// Libraries
import axios from 'axios'
import { TextPropTypes } from 'react-native';

const apiClient = axios.create({
    baseURL: "https://samples.openweathermap.org/data/2.5/"
});

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
    try {
        const response = await get(url, params, axiosConfig);
        if (response) {
            await Cache.storeData(Constants.DATA, response.data)
            const data = await Cache.getStoredData(Constants.DATA);
            return data ? { ok: true, data } : response;
        }
        const data = await Cache.getStoredData(Constants.DATA);
        return data ? { ok: true, data } : response;
    } catch (error) {
        const data = await Cache.getStoredData(Constants.DATA);
        return data ? { ok: true, cache: true, data } : null;
    }

}


export default {
    apiClient
}