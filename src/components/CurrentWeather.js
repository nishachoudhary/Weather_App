import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import imageMapping from '../imageMapping'


function CurrentWeather({ cityName, dt_txt, icon, description, temp, tempMinMax }) {

    const tempearature = temp.toFixed(0);
    return (<View style={styles.containerStyle}>


        <Text style={{ color: 'black', fontSize: 18 }}>{cityName}</Text>
        <Text style={{ marginTop: 2, fontSize: 12, color: 'grey' }}>{dt_txt}</Text>


        <View style={styles.iamgeContainer}>
            <View style={{ flexDirection: 'row' }}>
                <Image
                    style={styles.imageStyle}
                    resizeMode='stretch'
                    source={imageMapping[icon]} />

                <Text style={styles.textTempStyle}>{tempearature}</Text>
            </View>
            <View>
                <Text style={styles.descriptionStyle}>{description}</Text>
                <Text style={styles.descriptionStyle}>{tempMinMax}</Text>
            </View>



        </View>



    </View>);

}

const styles = StyleSheet.create({
    containerStyle: {
        width: '100%',

    },
    descriptionStyle: {
        fontSize: 12,
        color: 'grey',
        textAlign: 'right',



    },
    imageStyle: {
        height: 60,
        width: 60
    },
    iamgeContainer: {
        flexDirection: "row",
        marginTop: 14,
        width: '100%',
        justifyContent: 'space-between',
    },
    textTempStyle: {
        fontSize: 40,
        color: 'black',
        marginHorizontal: 10,

    }

});

export default CurrentWeather;