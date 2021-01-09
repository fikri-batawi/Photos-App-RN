// Import React Native
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
// Import Component
import ContentPortrait from '../components/ContentPortrait'
// Import Navigation
import { useNavigation } from '@react-navigation/native';
// Import function
import * as utils from '../utils'
class Portrait extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: false,
            search: false,
            keyword: '',
        }
    }
    render() {
        // Initial Navigation
        const { navigation } = this.props;
        return (
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
                        inputSearch={utils.setKeyword.bind(this)}
                        modal={utils.showModal.bind(this)}
                        back={utils.headerPhotos.bind(this)} />
                }
                {/* Content */}
                <ContentPortrait 
                    keyword={this.state.keyword} />
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
        );
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
  
    return <Portrait {...props} navigation={navigation} />;
  }