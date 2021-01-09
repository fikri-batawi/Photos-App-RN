import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'
import LottieView from 'lottie-react-native';

export default class Lottie extends React.Component {
    render() {
        return (
            <View style={styles.view_modal}>
                <View style={{
                    backgroundColor:'blue',
                    height:100,
                    width:100
                }}>
                    <LottieView
                        source={require('../../assets/lottie/success.json')}
                        colorFilters={[{
                            keypath: "button",
                            color: "#F00000"
                        }, {
                            keypath: "Sending Loader",
                            color: "#F00000"
                        }]}
                        autoPlay
                        loop={false}
                    />
                </View>
                <View style={{
                    backgroundColor:'green'
                }}>
                    <Text style={styles.title_modal}>download</Text>
                    <Text style={styles.sub_title_modal}>proses download berjalan</Text>
                </View> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view_modal: {
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    image_modal: {
        height: 70,
        width: 70,
        marginVertical: 16,
    },
    title_modal: {
        fontSize: 20,
        color: '#373737',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    sub_title_modal: {
        fontSize: 14,
        color: '#373737',
        fontWeight: 'normal',
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 16,
    }
})