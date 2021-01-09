import React from 'react'
import { View,Image, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default HeaderPhotos = (props) => {
    return (
        <View style={styles.view_header}>
            <View style={styles.view_text_header}>
                <Text style={styles.text_header}>PHS.</Text>
            </View>
            <View style={styles.view_button_header}>
                <TouchableOpacity 
                    style={styles.button_header}
                    onPress={props.search}>
                    <Image source={require('../../assets/icons/search.png')} />
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button_header} 
                    onPress={props.modal}>
                    <Image source={require('../../assets/icons/change.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    view_header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 24,
        paddingHorizontal: 20,
        marginBottom:24,
    },
    text_header: {
        color: '#373737',
        fontSize: 24,
        fontWeight: 'bold',
    },
    view_button_header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button_header: {
        marginRight: 12,
    },
})