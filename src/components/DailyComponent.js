import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import imageMapping from '../imageMapping'
import { MaterialIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons';

function DailyComponent({ dt_text, tempMinMax }) {

    const dayName = () => {
        const sub = dt_text.substring(0, 10)
        const mydate = new Date(sub);

        switch (mydate.getUTCDay()) {
            case 0: return 'Sunday'
            case 1: return 'Monday'
            case 2: return 'Tuesday'
            case 3: return 'Wednesday'
            case 4: return 'Thursday'
            case 5: return 'Friday'
            case 6: return 'Saturday'
        }

    }


    return (<View style={styles.containerStyle}>
        <Text style={styles.dayStyle}>{dayName()}</Text>
        <View style={{ flexDirection: 'row', padding: 2, width: '33%', justifyContent: 'center' }}>
            <View style={{ marginHorizontal: 5 }}>
                <MaterialIcons name='wb-sunny' size={18} color='#ffcc00' />
            </View>
            <View style={{ marginHorizontal: 5 }}>
                <Ionicons name='moon-sharp' size={16} color='#ffcc00' />
            </View>

        </View>
        <Text style={styles.descriptionStyle}>{tempMinMax}</Text>


    </View>);

}

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: "row",
        marginTop: 10,
        width: '100%',
        justifyContent: 'space-between',

    },
    descriptionStyle: {
        fontSize: 12,
        color: 'black',
        textAlign: 'right',
        fontWeight: 'bold',
        width: '33%'
    },
    dayStyle: {
        fontSize: 12,
        color: 'black',
        fontWeight: 'bold',
        width: '33%'

    }
});

export default DailyComponent;