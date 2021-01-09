//Import React
import React from 'react';

//Import Required Components
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    PermissionsAndroid,
    Image,
    Platform,
} from 'react-native';

import RNFetchBlob from 'rn-fetch-blob'

export default Download = () => {
    const checkPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                    title: 'Storage Permission Required',
                    message: 'This app needs access to your storage to download Photos',
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                //Once user grant the permission start downloading
                console.log('Storage Permission Granted.');
                downloadImage();
            } else {
                //If permission denied then show alert 'Storage Permission Not Granted'
                alert('Storage Permission Not Granted');
            }
        } catch (err) {
            //To handle permission related issue
            console.warn(err);
        }
    };

    const downloadImage = () => {
        //Main function to download the image
        let date = new Date(); //To add the time suffix in filename
        //Image URL which we want to download
        let image_URL ='https://unsplash.com/photos/zUs9iW6tO9M/download';
        let url_asli = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/gift.png'
        //Getting the extention of the file
        // let ext = getExtention(image_URL);
        // ext = '.' + ext[0];
        let ext = '.png'
        console.log(ext)
        //Get config and fs from RNFetchBlob
        //config: To pass the downloading related options
        //fs: To get the directory path in which we want our image to download
        const { config, fs } = RNFetchBlob;
        let PictureDir = fs.dirs.PictureDir;
        let options = {
            fileCache: true,
            addAndroidDownloads: {
                //Related to the Android only
                useDownloadManager: true,
                notification: true,
                path:
                    PictureDir +
                    '/image_' + Math.floor(date.getTime() + date.getSeconds() / 2) + ext,
                description: 'Image',
            },
        };
        console.log(options.addAndroidDownloads.path)
        config(options)
            .fetch('GET', image_URL)
            .then(res => {
                //Showing alert after successful downloading
                console.log('res -> ', JSON.stringify(res));
                alert('Image Downloaded Successfully.');
            });
    };

    const getExtention = filename => {
        //To get the file extension
        return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
    };

    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 30, textAlign: 'center' }}>
                    React Native Image Download Example
                </Text>
                <Text
                    style={{
                        fontSize: 25,
                        marginTop: 20,
                        marginBottom: 30,
                        textAlign: 'center',
                    }}>
                    www.aboutreact.com
            </Text>
            </View>
            <Image
                source={{
                    uri:
                        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/gift.png',
                }}
                style={{ width: '100%', height: 100, resizeMode: 'contain', margin: 5 }}
            />
            <TouchableOpacity style={styles.button} onPress={checkPermission}>
                <Text style={styles.text}>Download Image</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    button: {
        width: '80%',
        padding: 10,
        backgroundColor: 'orange',
        margin: 10,
    },
    text: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        padding: 5,
    },
});