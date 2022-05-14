import React from "react"
import { connect } from "react-redux"
import { View, Text, SafeAreaView, Dimensions, TouchableOpacity, Alert } from "react-native"

const Dev = ({markCodeScanned, resetState, unlockAll, navigation, qrCodes}) => {
  const width = Dimensions.get("window").width

  const onRead = event => {
    console.log("read data: ", event.data)
    handleCodeScanned(event.data)
  }

  const handleCodeScanned = (scannedCode) => {
    const scannedCodeIdx = qrCodes.findIndex(c => c.id === scannedCode)
    if (scannedCodeIdx === -1) {
      Alert.alert("Hej!", "Nepoznati kod skeniran!")
      return;
    }

    const codeData = qrCodes[scannedCodeIdx]
    const isPrevCodeScanned = qrCodes[scannedCodeIdx - 1].scanned

    if (true) {
      markCodeScanned({threadId: codeData.threadId, groupId: codeData.groupId, codeId: scannedCode})
      navigation.navigate("Chat", {title: "pero", id: codeData.threadId})
    } else {
      Alert.alert("Hej!", "Skeniran kod van poredka!")
    }
  }

  return (
    <SafeAreaView style={{ flex: 1}}>

      <TouchableOpacity onPress={() => {resetState()}} style={{padding: 10}}>
        <Text style={{color: "white"}}>Reset state</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {unlockAll()}} style={{padding: 10}}>
        <Text style={{color: "white"}}>Unlock all</Text>
      </TouchableOpacity>

      {qrCodes.map((code, idx) => {
        if (idx > 0) {
          return (
            <TouchableOpacity onPress={() => {handleCodeScanned(code.id)}} style={{padding: 10}} key={code.id}>
              <Text style={{color: "white"}}>Scan {idx}. code</Text>
            </TouchableOpacity>
          )
        }
      })}

      <Text style={{textAlign: "center", color: "white", padding: 20}}>Version: 1.5 (16)</Text>

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
    unlockAll: () => dispatch({type: "UNLOCK_ALL"}),
    markCodeScanned: ({threadId, groupId, codeId}) => dispatch({type: "MARK_CODE_SCANNED", threadId, groupId, codeId})
  })
)(Dev)
