import React from "react"
import { connect } from "react-redux"
import { View, Linking, Image, Text, SafeAreaView, TouchableOpacity } from "react-native"
import back from "../assets/back.png"

const Info = ({navigation}) => {
  
  return (
    <SafeAreaView style={{flex: 1 , backgroundColor: "#002040"}}>
      <View style={{height: 50, paddingHorizontal: 16, alignItems: "center", flexDirection: "row", justifyContent:"space-between", backgroundColor: "#002040"}}>
        <TouchableOpacity onPress={()=> navigation.goBack()} style={{paddingVertical: 10, paddingRight: 10, flexDirection: "row", alignItems: "center"}}>
          <Image source={back} style={{width: 12, height: 20, marginRight: 20}}/>
        </TouchableOpacity>

      </View>
      <View style={{flex: 1, backgroundColor: "#030E1E", padding: 20}}>
        <View style={{alignItems: "center"}}>
          <Text style={{color: "white", fontSize: 30, padding: 20}}>Impressum:</Text>
          <Text style={{color: "white", fontSize: 20, padding: 10}}>
            Matea Lonač - vizualni dizajn
          </Text>
          <Text style={{color: "white", fontSize: 20, padding: 10}}>
            Lucija Klarić - narativ
          </Text>
          <Text style={{color: "white", fontSize: 20, padding: 10}}>
            Miro Ćosić - programiranje
          </Text>

          <TouchableOpacity onPress={() => Linking.openURL("https://www.facebook.com/SEEN-Svi%C4%91a%C5%A1-mi-se-114750141232316")}>
            <Text style={{color: "white", textDecorationLine: "underline", fontSize: 20, padding: 50}}>Facebook</Text>
          </TouchableOpacity>
        </View>

      </View>
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
)(Info)
