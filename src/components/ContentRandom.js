// Import reat native
import React, { Component } from 'react'
import { View, ScrollView, Image, TouchableOpacity, Text, StyleSheet } from 'react-native'
// import function
import * as utils from '../utils'
// Import atoms
import ImagesEmpty from '../atoms/ImagesEmpty'
import ImagesSquereHome from '../atoms/ImagesSquereHome'
import ImagesPortraitHome from '../atoms/ImagesPortraitHome'
export default class ContentPortrait extends Component {
    state = {
        data: [],
    }
    async componentDidMount() {
        if(!this.props.keyword){
            const data = await utils.getImage()
            const filter = utils.filterRandom(data)
            this.setState({
                data: filter
            })
        }else{
            const dataSearch = await utils.getImageSearch(this.props.keyword)
            const filter     = utils.filterRandom(dataSearch)
            this.setState({
                data: filter
            })
        }
        
    }
    async componentDidUpdate(){
        if(this.props.keyword){
            const dataSearch = await utils.getImageSearch(this.props.keyword)
            const filter     = utils.filterRandom(dataSearch)
            this.setState({
                data: filter
            })
        }
    }
    render() {
        let images = []
        if (this.state.data.length != 0) {
            this.state.data.map((section, index) => {
                images[index] = section.map((image, index) => {
                    if (image.width < image.height) {
                        return  <ImagesPortraitHome 
                                    url={image.urls.small} 
                                    download={image.links.download}
                                    key={index} />
                    } else {
                        return  <ImagesSquereHome 
                                    url={image.urls.small} 
                                    download={image.links.download}
                                    key={index} />
                    }
                })
            })
        }
        return (
            <View style={styles.view_content_list}>
                <ScrollView 
                    showsVerticalScrollIndicator={false}
                    style={styles.scrollview_content_list}>
                    <View style={styles.view_block_content}>
                        <View style={styles.view_left_content}>
                            {images[0]}
                        </View>
                        <View style={styles.view_right_content}>
                            {images[1]}
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    view_content_list: {
        flex: 1,
        position: 'relative',
    },
    view_block_content: {
        flexDirection: 'row',
    },
    view_left_content: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 5,
    },
    view_right_content: {
        flex: 1,
        paddingLeft: 5,
        paddingRight: 10,
    },
})