import React from 'react'
import AwesomeAlert from 'react-native-awesome-alerts';
export default ModalInfo = (props) => {
    return(
        <AwesomeAlert
          show={props.alert}
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
    )
}