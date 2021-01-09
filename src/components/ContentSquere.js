// Import React Native
import React, { Component } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
// Import Function 
import * as utils from '../utils'
// Import atoms
import ImagesEmpty from '../atoms/ImagesEmpty'
import ImagesSquere from '../atoms/ImagesSquere'
export default class ContentSquere extends Component {
    state = {
        data : []
    }
    async componentDidMount(){
        if(!this.props.keyword){
            const data      = await utils.getImage()
            const filter    = utils.filterSquere(data)
            this.setState({
                data : filter
            })
        }else{
            const dataSearch = await utils.getImageSearch(this.props.keyword)
            const filter     = utils.filterSquere(dataSearch)
            this.setState({
                data : filter
            }) 
        }
    }
    async componentDidUpdate(){
        if(this.props.keyword){
            const dataSearch = await utils.getImageSearch(this.props.keyword)
            const filter     = utils.filterSquere(dataSearch)
            this.setState({
                data : filter
            }) 
        }
    }
    render() {
        let images = <ImagesEmpty />
        if(this.state.data.length){
            images = this.state.data.map((image,index)=>{
                return <ImagesSquere 
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
    }
})