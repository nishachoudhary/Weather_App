import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import imageMapping from '../imageMapping'


function WeatherComp({ dt_txt, icon, temp, humidity }) {
    let dateTime = dt_txt.substring(11, 16)
    return (<View style={styles.containerStyle}>
        <Text style={{ marginVertical: 10, fontSize: 14, color: 'grey' }}>{dateTime}</Text>
        <Image
            style={styles.imageStyle}
            resizeMode='contain'
            source={imageMapping[icon]} />
        <Text style={styles.textTempStyle}>{temp.toFixed(0)}</Text>
        <Text style={styles.descriptionStyle}>{humidity}</Text>
    </View>);

}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        width: '100%',
        marginVertical: 10,
        marginHorizontal: 10
    },
    descriptionStyle: {
        fontSize: 10,
        color: 'grey',
        alignSelf: 'center'

    },
    imageStyle: {
        height: 35,
        width: 35,
    },
    textTempStyle: {
        fontSize: 12,
        color: 'black',
        marginVertical: 10,
        alignSelf: 'center'

    }

});

export default WeatherComp;