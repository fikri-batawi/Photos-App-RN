import React, { Component } from 'react';
import { StyleSheet, View} from 'react-native';
// import React Navigation
import { useNavigation } from '@react-navigation/native';
// Import Component
import HeaderSearch from '../components/HeaderSearch'
import ContentPortrait from '../components/ContentPortrait'
import ModalOrientation from '../components/ModalOrientation'

class SearchPortrait extends Component {
    constructor(props){
        super(props)
        this.handler = this.handler.bind(this)
        this.state = {
            modal:false,
        }
    }
    
    handler(){
        this.setState({
            modal:true,
        })
    }
    // _handleChange(){
    //     this.setState({
    //         modal:true
    //     })
    // }
    render() {
        const {navigation} = this.props
        console.log(this.state.modal)
        return ( 
            <View style={styles.view_container}>
                {/* Header */}
                <HeaderSearch action={this.handler} />
                {/* Content */}
                <ContentPortrait />
                {/* Modal */}
                {this.state.modal && <ModalOrientation />}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view_container: {
        backgroundColor: '#292B4D',
        flex: 1,
        flexDirection: 'column',
        position: 'relative',
    },
    view_header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 24,
        paddingHorizontal: 20,
    },
    button_header: {
        flex:1,
        backgroundColor: '#353766',
        borderRadius: 10,
        padding: 10,
    },
    text_button_header: {
        color: '#fff',
        textAlign:'center',
    },
    input_header:{
        flex:3,
        color:'white',
        backgroundColor:'#353766',
        borderRadius:10,
        width:'100%',
        paddingVertical:5,
        paddingHorizontal:10,
        marginHorizontal:10,
    },
})

export default function(props){
    const navigation = useNavigation()

    return <SearchPortrait {...props} navigation={navigation} />
}