import React, { useEffect } from "react"
import { connect } from "react-redux"
import { View, Text, SafeAreaView, Dimensions, TouchableOpacity, Alert } from "react-native"
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

const Home = ({markCodeScanned, resetState, navigation, route, qrCodes}) => {
  const width = Dimensions.get("window").width

  const onRead = event => {
    console.log("read data: ", event.data)
    handleCodeScanned(event.data)
  }

  const handleCodeScanned = (scannedCode) => {
    console.log(qrCodes)
    const scannedCodeIdx = qrCodes.findIndex(c => c.id === scannedCode)
    if (scannedCodeIdx === -1) {
      Alert.alert("Hej!", "Nepoznati kod skeniran!")
      return;
    }

    const codeData = qrCodes[scannedCodeIdx]
    const isPrevCodeScanned = qrCodes[scannedCodeIdx - 1].scanned


    if (isPrevCodeScanned) {
      markCodeScanned({threadId: codeData.threadId, groupId: codeData.groupId, codeId: scannedCode})
      navigation.navigate("Chat", {title: "pero", id: codeData.threadId})
    } else {
      Alert.alert("Hej!", "Skeniran kod van poredka!")
    }
  }

  useEffect(() => {
    console.log(route?.params?.code)
    handleCodeScanned(route?.params?.code)
  }, [])

  return (
    <SafeAreaView style={{ flex: 1}}>
      <Text style={{color: "white"}}>
        Home
      </Text>
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
)(Home)
