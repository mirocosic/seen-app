import React from "react"
import { connect } from "react-redux"
import { Image, View, Text, SafeAreaView, Dimensions, TouchableOpacity, StyleSheet } from "react-native"

const Thread = ({title, subtitle, avatarUrl, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.threadWrapper}
      onPress={() => navigation.navigate("Chat", {title: title})}
    >
      <View style={styles.threadDetails}>
        <Image source={{uri: "https://i.pravatar.cc/300"}} style={styles.threadAvatar}/>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
      
    </TouchableOpacity>
  )
}

const ThreadsList = ({navigation, count, threads, addNum}) => {

  const width = Dimensions.get("window").width

  return (
    <SafeAreaView style={{ flex: 1}}>
      <View>
        {threads.map((t)=>(<Thread key={t.id} title={t.title} subtitle={t.subtitle} navigation={navigation} />))}
      </View>

      <Text style={styles.title}>Count: {count}</Text>
      <TouchableOpacity onPress={() => addNum(2)}>

        <Text style={styles.title}>Add 2</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default connect(
  state => ({
    count: state.count,
    threads: state.threads,
  }),
  dispatch => ({
    addNum: number => dispatch({type: "ADD_NUMBER", number})
  })
)(ThreadsList)

const styles = StyleSheet.create({
  threadWrapper: {
    padding: 10
  },
  threadAvatar:{
    width: 50,
    height: 50,
    borderRadius: 100,
    margin: 10,
  },
  title: {
    fontWeight: "bold",
    color: "white",
  },
  subtitle: {
    color: "lightgray"
  },
  threadDetails: {
    flexDirection: "row",
    alignItems: "center",
  }
})