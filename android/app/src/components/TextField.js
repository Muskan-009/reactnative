import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const TextField = () => {
  return (
    <View>
      <TextInput
        placeholder="Enter your name"
        style={{ borderWidth: 1, padding: 10 }}
      />
      <TextInput
        style={{styles.TextInput}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  TextInput :{
  borderColor : "red",
  borderWidth  : 10,
  
  }
})

export default TextField  