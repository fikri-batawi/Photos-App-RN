import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

// Import page
import Home from './containers/Home'
import Portrait from './containers/Portrait'
import Landscape from './containers/Landscape'
import Squere from './containers/Squere'
import Lottie from './testing/Lottie'


const Stack = createStackNavigator()

export default Routes = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator headerMode={false} initialRouteName="home" >
                <Stack.Screen name="home" component={Home}/>
                <Stack.Screen name="squere" component={Squere} />
                <Stack.Screen name="portrait" component={Portrait}/>
                <Stack.Screen name="landscape" component={Landscape} />
                {/* Testing */}
                <Stack.Screen name="lottie" component={Lottie} />
            </Stack.Navigator>     
        </NavigationContainer>
    )
}