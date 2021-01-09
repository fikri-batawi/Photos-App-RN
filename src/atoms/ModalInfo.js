import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import AwesomeAlert from 'react-native-awesome-alerts';
import LottieView from 'lottie-react-native';
export default ModalInfo = (props) => {
    return (
        <AwesomeAlert
            show={props.alert}
            useNativeDriver={true}
            showProgress={true}
            customView={
                <View style={styles.view_modal}>
                    {/* <Image
                            style={styles.image_modal}
                            source={props.image} /> */}
                    {/* <LottieView
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
                    <Text style={styles.title_modal}>{props.title}</Text>
                    <Text style={styles.sub_title_modal}>{props.sub_title}</Text> */}
                    <View style={{
                        height: 100,
                        width: 100
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
                    }}>
                        <Text style={styles.title_modal}>{props.title}</Text>
                        <Text style={styles.sub_title_modal}>{props.sub_title}</Text>
                    </View>
                </View>
            }
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={false}
            showConfirmButton={true}
            confirmText="Continue"
            confirmButtonColor="#373737"
            confirmButtonStyle={{
                paddingVertical: 16,
                paddingHorizontal: 64,
                borderRadius: 8,
            }}
            onConfirmPressed={props.hide}
        />
    )
}

const styles = StyleSheet.create({
    view_modal: {
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%'
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