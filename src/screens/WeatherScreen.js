import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ActivityIndicator, FlatList, ScrollView, ImageBackground } from 'react-native';


import ApiLayer from '../api/ApiLayer'
import CurrentWeather from '../components/CurrentWeather'
import WeatherComp from '../components/WeatherComp'
import Constants from '../Constants'
import DailyComponent from '../components/DailyComponent'

const dataArray = [
    {
        key: "1",
        subData: "nisha1"
    },
    {
        key: "2",
        subData: "nisha1"
    },
    {
        key: "3",
        subData: "nisha1"
    },
    {
        key: "4",
        subData: "nisha1"
    },
    {
        key: "5",
        subData: "nisha1"
    },
    {
        key: "6",
        subData: "nisha1"
    },
    {
        key: "7",
        subData: "nisha1"
    },
    {
        key: "8",
        subData: "nisha1"
    },


]


function WeatherScreen({ navigation, route }) {
    const [weatherData, setWeatherData] = useState();
    const [isDataLoading, setIsDataLoading] = useState(false);
    const [error, setError] = useState(false)

    const loadData = async () => {
        try {
            setIsDataLoading(true)
            const response = await ApiLayer.getData;
            setWeatherData(response.data)
            setIsDataLoading(false)
            setError(false)
        } catch (err) {
            console.log("error--", err);
            setIsDataLoading(false)
            setError(true)
        }
    }
    useEffect(() => {
        loadData();
    }, []
    );

    if (isDataLoading)
        return <ActivityIndicator size="large" color="pink" />
    if (error) {
        return <Text>Error</Text>
    }

    if (!weatherData) {
        loadData();
        return
    }
    const weeklyWeather = weatherData.weeklyList.map((item, index) => {
        const min = item.main.temp_min.toFixed(0)
        const max = item.main.temp_max.toFixed(0)
        return <View key={index}
            style={{ paddingHorizontal: 10 }}>
            <DailyComponent
                dt_text={item.dt_txt}
                tempMinMax={min
                    + "/" + max} />
        </View>
    }
    );

    return (
        <ImageBackground
            style={{
                width: '100%',
                height: '100%'
            }}
            source={require('../assets/bg.jpg')}>
            <ScrollView>

                <View style={styles.containerStyle}>
                    <View style={styles.weatherStyle}>
                        <View style={{ marginBottom: 10 }}>
                            <CurrentWeather cityName={weatherData.cityName}
                                dt_txt={weatherData.weatherList[0].dt_txt}
                                icon={weatherData.weatherList[0].weather[0].icon}
                                description={weatherData.weatherList[0].weather[0].main}
                                temp={weatherData.weatherList[0].main.temp}
                                tempMinMax={weatherData.weatherList[0].main.temp_min
                                    + "/" + weatherData.weatherList[0].main.temp_max}
                                style={{ marginVertical: 10 }} />
                        </View>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            horizontal
                            data={weatherData.weatherList}
                            keyExtractor={(item) => item.dt.toString()}
                            renderItem={({ item }) =>
                                <WeatherComp
                                    dt_txt={item.dt_txt}
                                    icon={item.weather[0].icon}
                                    temp={item.main.temp}
                                    humidity={item.main.humidity}
                                />
                            }
                        />

                    </View>

                    <View style={styles.weeklyStyle}>
                        {weeklyWeather}
                    </View>
                </View>

            </ScrollView>
        </ImageBackground>
    );

}

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: "column",
        padding: 10
    },
    weatherStyle: {
        borderRadius: 15,
        elevation: 4,
        borderColor: 'black',
        backgroundColor: 'white',
        overflow: 'hidden',
        padding: 10
    },

    weeklyStyle: {
        borderRadius: 15,
        elevation: 4,
        borderColor: 'black',
        backgroundColor: 'white',
        overflow: 'hidden',
        padding: 10,
        marginTop: 10
    }


});

export default WeatherScreen;