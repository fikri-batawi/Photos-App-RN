// Import react native
import React, {useState} from 'react'
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'
// Import function
import * as utils from '../utils'
// Import alert
import ModalInfo from '../atoms/ModalInfo'
import ModalLoading from '../atoms/ModalLoading'
export default ImagesSquereHome = (props) => {
    const [successAlert, setSuccessAlert] = useState(false)
    const [loadingAlert, setLoadingAlert] = useState(false)

    return (
        <View style={styles.content_squere}>
            <Image
                style={styles.image_content}
                source={{ uri: props.url }} />
            <TouchableOpacity 
                onPress={async () => {
                    setLoadingAlert(true)
                    let alert = await utils.checkPermission(props.download)
                    setSuccessAlert(alert)
                    setLoadingAlert(!alert)
                }}
                style={styles.button_content}>
                <Image source={require('../../assets/icons/download.png')}/>
            </TouchableOpacity>
            {/* Loading alert */}
            <ModalInfo 
                alert={successAlert} 
                hide={()=>{
                    setSuccessAlert(false)
                }}
                image= {require('../../assets/icons/success.png')}
                title="Downloaded Succeed!"
                sub_title="image that has been downloaded on your mobile, thank you for your attention."
                />
            <ModalLoading
                alert={loadingAlert} />
        </View>
    )
}

const styles = StyleSheet.create({
    content_squere:{
        height:150,
        position: 'relative',
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 10,
    },
    image_content: {
        width: '100%',
        height: '100%',
    },
    button_content: {
        position: 'absolute',
        zIndex: 1,
        backgroundColor: 'rgba(255,255,255,.3)',
        top: 0,
        right: 0,
        borderBottomLeftRadius: 20,
        padding: 11,
    },
})