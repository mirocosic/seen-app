import React from "react"
import { View, Text, SafeAreaView, Dimensions } from "react-native"
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

export default () => {

  const width = Dimensions.get("window").width

  return (
    <SafeAreaView style={{ flex: 1}}>
        <QRCodeScanner
          onRead={() => console.log("read!!")} 
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
    </SafeAreaView>
  )
}