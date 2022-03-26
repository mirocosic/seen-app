import React from "react"
import { connect } from "react-redux"
import { View, Text, SafeAreaView, Dimensions, TouchableOpacity } from "react-native"
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

const Camera = ({makeThreadVisible, navigation}) => {
  const width = Dimensions.get("window").width

  const onRead = event => {
    console.log("read data: ", event.data)
  }

  return (
    <SafeAreaView style={{ flex: 1}}>
        <QRCodeScanner
          onRead={onRead}
          vibrate={false}
          showMarker
          markerStyle={{borderRadius: 40, borderColor: "white", width: (width - 40), height: (width - 40)}}
          containerStyle={{justifyContent: "center", height: 200}}
          topContent={
            <View style={{padding: 20}}>
              <Text style={{textAlign: "center", fontSize: 20, color: "#e9e9e9"}}>Scan QR Code</Text>
            </View>
          }
        />
        <TouchableOpacity onPress={() => {
          makeThreadVisible({threadId: "first", groupId: 1})
          navigation.navigate("Chat", {title: "pero", id: "first"})
          }}>
          <Text style={{color: "white"}}>SCAN first group</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          makeThreadVisible({threadId: "first", groupId: 2})
          navigation.navigate("Chat", {title: "pero", id: "first"})
          }}>
          <Text style={{color: "white"}}>SCAN second group</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}


export default connect(
  state => ({
    threads: state.threads
  }),
  dispatch => ({
    makeThreadVisible: ({threadId, groupId}) => dispatch({type: "MAKE_THREAD_VISIBLE", threadId, groupId})
  })
)(Camera)
