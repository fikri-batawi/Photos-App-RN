// Import React Native
import React from 'react'
import { View, Image, TouchableOpacity,TextInput,StyleSheet,Keyboard } from 'react-native'

export default HeaderSearch = (props) => {
    return (
        <View style={styles.view_header}>
            <TouchableOpacity 
                style={styles.button_header}
                onPress={props.back}>
                <Image source={require('../../assets/icons/arrow-left.png')}/>
            </TouchableOpacity>
            <TextInput
                placeholderTextColor='#373737'
                style={styles.input_header}
                placeholder="Search"
                onEndEditing={(e)=>props.inputSearch(e.nativeEvent.text)}
                 />
            <TouchableOpacity 
                style={styles.button_header}
                onPress={props.modal}>
                <Image source={require('../../assets/icons/change.png')}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    view_header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 24,
        paddingHorizontal: 10,
        marginBottom:24,
    },
    button_header: {
        flex:1,
        borderRadius: 10,
        justifyContent:'center',
        alignItems:'center'
    },
    text_button_header: {
        color: '#fff',
        textAlign:'center',
    },
    input_header:{
        flex:4,
        color:'#373737',
        borderRadius:20,
        width:'100%',
        paddingVertical:5,
        paddingHorizontal:16,
        marginHorizontal:5,
        borderColor:'#373737',
        borderWidth:1,
    },
})