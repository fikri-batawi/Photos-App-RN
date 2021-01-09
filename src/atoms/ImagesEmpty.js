// Import react native
import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default ImagesEmpty = (props) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>No Images</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        height:200,
        width:'100%',
        backgroundColor:'#353766',
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:18,
        color:'#fff',
        
    }
})