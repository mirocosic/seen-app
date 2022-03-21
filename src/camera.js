import React from "react"
import { connect } from "react-redux"
import { View, Text, SafeAreaView, Dimensions, TouchableOpacity } from "react-native"
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

const Camera = ({makeThreadVisible, navigation}) => {
  const width = Dimensions.get("window").width

  return (
    <SafeAreaView style={{ flex: 1}}>
        <QRCodeScanner
          onRead={event => console.log("read data: ", event.data)} 
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
          console.log("pressed!")
          makeThreadVisible("miro")
          navigation.navigate("Chat", {title: "pero", id: 5})

          }}>
          <Text style={{color: "white"}}>SCAN</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}


export default connect(
  state => ({
    threads: state.threads
  }),
  dispatch => ({
    makeThreadVisible: (code) => dispatch({type: "MAKE_THREAD_VISIBLE", code})
  })
)(Camera)
