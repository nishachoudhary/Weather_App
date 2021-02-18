import React from 'react';
// Defined 
import client from '../api/Client'
import Constants from '../Constants'

const endPoint = `forecast?zip=122001&appid=b6907d289e10d714a6e88b30761fae22`;
const getData = client.apiClient.get(endPoint);
export default {
    getData,
}