import React from "react"
import { View, Text, SafeAreaView, Dimensions, TouchableOpacity } from "react-native"

export default ({navigation}) => {

  const width = Dimensions.get("window").width

  return (
    <SafeAreaView style={{ flex: 1}}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
          <Text style={{color: "white"}}>Thread #1</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
          <Text style={{color: "white"}}>Thread #2</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  )
}