import React from "react"
import { connect } from "react-redux"
import { View, Text, SafeAreaView, Dimensions, TouchableOpacity, Alert } from "react-native"
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

const Camera = ({markCodeScanned, resetState, navigation, qrCodes}) => {
  const width = Dimensions.get("window").width

  const onRead = event => {
    console.log("read data: ", event.data)
  }

  const handleCodeScanned = (scannedCode) => {
    const scannedCodeIdx = qrCodes.findIndex(c => c.id === scannedCode)
    const codeData = qrCodes[scannedCodeIdx]
    const isPrevCodeScanned = qrCodes[scannedCodeIdx - 1].scanned

    console.log(codeData)

    if (isPrevCodeScanned) {
      markCodeScanned({threadId: codeData.threadId, groupId: codeData.groupId, codeId: scannedCode})
      navigation.navigate("Chat", {title: "pero", id: codeData.threadId})
    } else {
      Alert.alert("Hey!", "Code scanned out of order!")
    }
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
        <TouchableOpacity onPress={() => handleCodeScanned("first")}>
          <Text style={{color: "white"}}>SCAN first group</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleCodeScanned("second")}>
          <Text style={{color: "white"}}>SCAN second group</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {resetState()}}>
          <Text style={{color: "white"}}>Reset state</Text>
        </TouchableOpacity>

    </SafeAreaView>
  )
}


export default connect(
  state => ({
    threads: state.threads,
    qrCodes: state.qrCodes
  }),
  dispatch => ({
    resetState: () => dispatch({type: "RESET_STATE"}),
    markCodeScanned: ({threadId, groupId, codeId}) => dispatch({type: "MARK_CODE_SCANNED", threadId, groupId, codeId})
  })
)(Camera)
