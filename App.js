import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { localNotification } from './src/services/LocalPushController'
import RemotePushController from './src/services/RemotePushController'

const App = () => {
  const handleButtonPress =()=>{
    console.log('helloworld')
    localNotification();
  }
  return (
    <View style={styles.container}>
      <Text>Press a button  to trigger  the Notification</Text>
      <View style={{marginTop:'5%'}}>
        <Button title='Local Push Notification' onPress={()=>{handleButtonPress()}}/>
      </View>
      <RemotePushController/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})