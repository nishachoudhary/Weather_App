import AsyncStorage from '@react-native-async-storage/async-storage';


const storeData = async (key, value) => {
    try {
        const filteredData = filterData(value);
        const serializedValue = JSON.stringify(filteredData)
        await AsyncStorage.setItem(key, serializedValue)
        return serializedValue != null ? JSON.parse(serializedValue) : null;
    }
    catch (err) {
        console.log("error--AsyncStoreError", err)
    }
};

const getStoredData = async (key) => {
    try {

        const data = await AsyncStorage.getItem(key);
        data === undefined
            ? console.log("No Data in Cache")
            : console.log("Retrieved from Cache");
        return data != null ? JSON.parse(data) : null;
    } catch (error) {
        console.log("error--AsyncGetError", err)
    }
}


const filterData = (rawData) => {
    const modifiedData = {
        cityName: rawData.city.name,
        country: rawData.city.country,
        coord: {
            lat: rawData.city.coord.lat,
            lon: rawData.city.coord.lon
        },
        weatherList: rawData.list.slice(0, 8),
        weeklyList: rawData.list.filter((item, index) => index % 8 === 0)

    };

    return modifiedData;
}

export default {
    storeData,
    getStoredData
}