import React, { useEffect } from "react"
import { connect } from "react-redux"
import { View, Text, SafeAreaView, Dimensions, TouchableOpacity, Alert } from "react-native"
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import * as SplashScreen from 'expo-splash-screen';
import qs from "query-string"

const Camera = ({markCodeScanned, resetState, navigation, qrCodes}) => {
  const width = Dimensions.get("window").width

  const onRead = event => {
    console.log("read data: ", event.data)
    console.log()
    const result = qs.parse(event.data)
    handleCodeScanned(result["https://seenapp.net/home?code"])
  }

  const handleCodeScanned = (scannedCode) => {
    const scannedCodeIdx = qrCodes.findIndex(c => c.id === scannedCode)
    if (scannedCodeIdx === -1) {
      Alert.alert("Hej!", "Nepoznati kod skeniran!")
      return;
    }

    const codeData = qrCodes[scannedCodeIdx]
    const isPrevCodeScanned = qrCodes[scannedCodeIdx - 1].scanned


    if (isPrevCodeScanned) {
      markCodeScanned({threadId: codeData.threadId, groupId: codeData.groupId, codeId: scannedCode})
      navigation.navigate("Razgovori", {screen: "Chat", params: {id: codeData.threadId}})
    } else {
      Alert.alert("Hej!", "Skeniran kod van poredka!")
    }
  }

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hideAsync()
    }, 1000 )
    
  }, [])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#002040"}}>
        <View style={{height: 50, backgroundColor: "#002040", justifyContent: "center", paddingHorizontal: 16}}>
          <Text style={{fontWeight: "bold", fontSize: 20, color: "#e9e9e9"}}>Skeniraj QR kod</Text>
        </View>
        <QRCodeScanner
          reactivate={true}
          reactivateTimeout={2000}
          onRead={onRead}
          vibrate={true}
          showMarker
          markerStyle={{borderRadius: 40, borderStyle: "dotted", borderColor: "white", borderWidth: 5, width: (width - 40), height: (width - 40)}}
          containerStyle={{justifyContent: "center", height: 200, flex: 1, backgroundColor: "#030E1E"}}
        />
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
