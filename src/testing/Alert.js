import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import AwesomeAlert from 'react-native-awesome-alerts';

export default class Alert extends React.Component {

  constructor(props) {
    super(props);
    this.state = { showAlert: false };
  };

  showAlert = () => {
    this.setState({
      showAlert: true
    });
  };

  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };

  render() {
    const {showAlert} = this.state;

    return (
      <View style={styles.container}>

        <Text>I'm AwesomeAlert</Text>
        <TouchableOpacity onPress={() => {
          this.showAlert();
        }}>
          <View style={styles.button}>
            <Text style={styles.text}>Try me!</Text>
          </View>
        </TouchableOpacity>

        <AwesomeAlert
          show={showAlert}
          useNativeDriver={true}
          showProgress={true}
          title="Loading ..."
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          progressColor="#373737"
          progressSize="auto"
          confirmButtonColor="#373737"
          onConfirmPressed={() => {
            this.hideAlert();
          }}
        />
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  button: {
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 5,
    backgroundColor: "#AEDEF4",
  },
  text: {
    color: '#fff',
    fontSize: 15
  }
});