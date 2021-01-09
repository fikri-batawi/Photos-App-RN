import React from 'react'
import {View,Text,Image,TouchableOpacity,StyleSheet} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import * as utils from '../utils'
export default ModalOrientation = (props) => {
    const navigation = useNavigation()
    return(
        <TouchableOpacity style={styles.container} onPress={props.hide}>
        <View style={styles.view_modal}>
            <Text style={styles.text_modal} >Orientation</Text>
            <View style={styles.view_button} >
                <TouchableOpacity 
                    style={styles.button_modal}
                    onPress={props.home} >
                    <Image 
                        source={require('../../assets/icons/any.png')}/>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button_modal}
                    onPress={props.squere} >
                    <Image 
                        source={require('../../assets/icons/squere.png')}/>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button_modal}
                    onPress={props.portrait}
                    >
                    <Image 
                        source={require('../../assets/icons/portrait.png')}/>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button_modal}
                    onPress={props.landscape} >
                    <Image 
                        source={require('../../assets/icons/landscape.png')}/>
                </TouchableOpacity>
            </View>
            {/* <TouchableOpacity style={styles.button_apply}>
                <Text style={styles.text_button_apply}>Apply</Text>
            </TouchableOpacity> */}
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        width:'100%',
        height:'100%',
        backgroundColor:'rgba(0,0,0,.5)',
        zIndex:10,
    },  
    view_modal:{
        width: '100%',
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        position: 'absolute',
        bottom: 0,
        padding: 24,
        zIndex:11,
    },
    text_modal:{
        color: '#373737',
        fontSize: 18,
        fontWeight: 'bold',
    },
    view_button:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 28,
    },
    button_modal:{
        borderRadius: 6,
    },
    button_apply:{
        backgroundColor: '#373737',
        borderRadius: 8,
        paddingVertical: 12,
    },
    text_button_apply:{
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
    }
})