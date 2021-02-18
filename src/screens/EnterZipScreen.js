import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Button, Text, ImageBackground } from 'react-native'
import { useDispatch } from 'react-redux'
import * as action from '../store/action/WeatherAction';


function EnterZipScreen({ navigation }) {

    const [zip, setZip] = useState();
    // const dispatch = useDispatch();
    return (<ImageBackground
        source={require('../assets/bg.jpg')}
        style={styles.containerStyle}>
        <View style={styles.inputContainerStyle}>
            <TextInput
                selectionColor={'black'}
                maxLength={6}
                keyboardType='numeric'
                onChangeText={(text) => setZip(text)}
                value={zip}
                style={styles.textInputStyle}
                placeholder='Zip Code'
                placeholderTextColor="white" />
        </View>

        <View style={styles.buttonContainerStyle}>
            <Text
                style={styles.textStyle}
                onPress={() => {
                    navigation.navigate('WeatherScreen', { zipCode: zip })
                }} >Submit</Text>
        </View>


    </ImageBackground>)
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainerStyle: {
        borderColor: '#ff80df',
        borderWidth: 1,
        width: '85%',
        padding: 5,
        marginBottom: 20,
        borderRadius: 15
    },
    buttonContainerStyle: {
        width: '50%',
        height: 35,
        padding: 5,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff80df'
    },
    textInputStyle: {
        color: 'white',
        paddingHorizontal: 10

    },
    textStyle: {
        color: 'white'
    }


});

export default EnterZipScreen;