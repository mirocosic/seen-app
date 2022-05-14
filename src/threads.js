import React, { useEffect } from "react"
import { connect } from "react-redux"
import { Image, View, ScrollView, Text, SafeAreaView, Dimensions, TouchableOpacity, StyleSheet } from "react-native"
import search from "../assets/search.png"
import more from "../assets/more.png"
import * as SplashScreen from 'expo-splash-screen';

const Thread = ({id, title, subtitle, avatarUrl, navigation, threadAvatar}) => {
  const avatar = threadAvatar || {uri: "https://i.pravatar.cc/300"}
  return (
    <TouchableOpacity
      style={styles.threadWrapper}
      onPress={() => navigation.navigate("Chat", {title: title, id: id})}
    >
      <View style={styles.threadDetails}>
        <Image source={avatar} style={styles.threadAvatar}/>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const ThreadsList = ({navigation, count, threads, addNum, unlockAll}) => {

  const width = Dimensions.get("window").width
  const visibleThreads = threads.filter(t => t.visible)

  useEffect(() => {
    //unlockAll()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hideAsync()
    }, 1000 )
    
  }, [])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#002040"}}>
      <View style={{backgroundColor: "#002040", height: 50, paddingHorizontal: 16, justifyContent: "space-between", alignItems: "center", flexDirection: "row"}}>
        <Text style={{color: "#FAFCFF", fontWeight: "bold", fontSize: 20 }}>Seen</Text>
        <View style={{flexDirection: "row"}}>
          <View style={{width: 38, height: 38, borderRadius: 6, backgroundColor: "#173B5F", marginRight: 10, alignItems: "center", justifyContent: "center"}}>
            <Image source={search} style={{width: 20, height: 20}}/>
          </View>
          
          <TouchableOpacity
            onPress={() => navigation.navigate("Info")}
            onLongPress={() => navigation.navigate("Dev")}
            style={{width: 38, height: 38, borderRadius: 6, backgroundColor: "#173B5F", alignItems: "center", justifyContent: "center"}}>
            <Image source={more} style={{width: 4, height: 20}}/>
          </TouchableOpacity>
        </View>
      </View>
      {
        visibleThreads.length > 0
        ? 
          <ScrollView style={{flex: 1, backgroundColor: "#030E1E"}}>
            {visibleThreads.map(t =>(<Thread key={t.id} id={t.id} title={t.title} subtitle={t.subtitle} navigation={navigation} threadAvatar={t.threadAvatar} />))}
          </ScrollView>
        :
          <View style={{flex:1, justifyContent: 'center', alignItems: "center", backgroundColor: "#030E1E"}}>
            <Text style={{color: "white"}}>Prvo skeniraj QR kod...</Text>
          </View>
      }
      

    </SafeAreaView>
  )
}

export default connect(
  state => ({
    count: state.count,
    threads: state.threads,
  }),
  dispatch => ({
    unlockAll: () => dispatch({type: "UNLOCK_ALL"}),
    addNum: number => dispatch({type: "ADD_NUMBER", number})
  })
)(ThreadsList)

const styles = StyleSheet.create({
  threadWrapper: {
    padding: 8
  },
  threadAvatar:{
    width: 50,
    height: 50,
    borderColor: "#D2298D",
    borderWidth: 2,
    borderRadius: 100,
    margin: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FAFCFF",
  },
  subtitle: {
    fontSize: 14,
    color: "#FAFCFF"
  },
  threadDetails: {
    
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    
  }
})