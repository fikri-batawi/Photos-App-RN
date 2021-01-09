// Import React Native
import React, { Component } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
// Import function
import * as utils from '../utils'
// Import atoms
import ImagesPortrait from '../atoms/ImagesPortrait'
import ImagesEmpty from '../atoms/ImagesEmpty'
export default class ContentPortrait extends Component {
    state = {
        data: []
    }
    async componentDidMount() {
        if(!this.props.keyword){
            const data   = await utils.getImage()
            const filter = utils.filterPortrait(data)
            this.setState({
                data : filter
            })  
        }else{
            const dataSearch = await utils.getImageSearch(this.props.keyword)
            const filter     = utils.filterPortrait(dataSearch)
            this.setState({
                data: filter
            })
        }
    }
    async componentDidUpdate() {
        if (this.props.keyword) {
            const dataSearch = await utils.getImageSearch(this.props.keyword)
            const filter     = utils.filterPortrait(dataSearch)
            this.setState({
                data: filter
            })
        }
    }
    render() {
        let images
        if (this.state.data.length) {
            images = this.state.data.map((image, index) => {
                return  <ImagesPortrait 
                            download={image.links.download}
                            url={image.urls.small} 
                            key={index} />
            })
        }
        return (
            <View style={styles.view_content_list}>
                <ScrollView 
                    showsVerticalScrollIndicator={false}
                    style={styles.scrollview_content_list}>
                    {images}
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    view_content_list: {
        flex: 1,
        paddingHorizontal: 24,
        position: 'relative',
    },
})