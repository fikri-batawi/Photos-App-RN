// Import React Native
import React, { Component } from 'react'
import {View,StyleSheet} from 'react-native'
// Import Component
import ContentLandscape from '../components/ContentLandscape'
// Import Navigation
import { useNavigation } from '@react-navigation/native';
// Import Function
import * as utils from '../utils'
class Landscape extends Component{
    constructor(props){
        super(props)
        this.state  = {
            modal:false,
            search:false,
            keyword:''
        }
    }
    render(){
        // Initial Navigation
        const { navigation } = this.props;
        return(
            <View style={styles.view_container}>
                {/* Header */}
                {
                    !this.state.search && 
                    <HeaderPhotos 
                        modal={utils.showModal.bind(this)} 
                        search={utils.search.bind(this)} />
                }
                {
                    this.state.search && 
                    <HeaderSearch 
                        inputSearch = {utils.setKeyword.bind(this)}
                        modal={utils.showModal.bind(this)} 
                        back={utils.headerPhotos.bind(this)} />
                }
                {/* Content */}
                <ContentLandscape 
                    keyword = {this.state.keyword}/>
                {/* Modal */}
                {
                    this.state.modal && 
                    <ModalOrientation 
                        keyword={this.state.keyword}
                        hide={utils.hideModal.bind(this)}
                        home={()=>{
                            this.setState({ modal:false })
                            navigation.navigate('home')
                        }}
                        squere={()=>{
                            this.setState({ modal:false })
                            navigation.navigate('squere')
                        }}
                        portrait={()=>{
                            this.setState({ modal:false })
                            navigation.navigate('portrait')
                        }}
                        landscape={()=>{
                            this.setState({ modal:false })
                            navigation.navigate('landscape')
                        }}
                        /> 
                }
            </View>
        )
    }
}
const styles = StyleSheet.create({
    view_container: {
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'column',
        position: 'relative',
    }
})

export default function(props) {
    const navigation = useNavigation();
  
    return <Landscape {...props} navigation={navigation} />;
  }