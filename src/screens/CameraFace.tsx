import { useAppState } from "@react-native-community/hooks";
import { useIsFocused } from "@react-navigation/native";
import React, { FC, useEffect, useRef, useState } from "react";
import { ActivityIndicator, Pressable, Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import { Camera, PhotoFile, useCameraDevice, useCameraPermission } from "react-native-vision-camera";
import { Colors } from "../constants/colors/Colors";
import { RootStackScreenProps } from "../types/navigation/types";


const  CameraFace: FC<RootStackScreenProps<'CameraFace'>>= ({navigation}) => {
    const device = useCameraDevice('back');
    const { hasPermission, requestPermission } = useCameraPermission();
    const isFocused = useIsFocused()
    const appState = useAppState()
    const isActive = isFocused && appState === "active"
    const camera = useRef<Camera>(null);
    //const [picture, setPicture] = useState<PhotoFile>();
  
    
    useEffect(() => {
      if (!hasPermission) {
        console.log("permission : ", hasPermission);
        requestPermission();
      }
    }, [hasPermission])

    if (!hasPermission) {
      return <ActivityIndicator />;
    }
    if (!device) {
      console.log("no camera device");
      return <View style={{flex:1, justifyContent:'center', alignItems:'center'}}><Text>no camera device</Text></View>;
    }

    const takePhoto = async () => {
      const photo = await camera.current?.takePhoto();
      //setPicture(photo);
      //navigation.replace('Signup', {photo: picture});
      console.log(photo);
    };
    
    
    
    return (
      <View style={{flex: 1}}>
        <Camera
        ref={camera}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={isActive}
        photo={true}
      />
      <TouchableOpacity 
       style={styles.captureBtn} 
       activeOpacity={0.7} 
       onPress={takePhoto}
       />
      </View>
    )
  }

  const styles = StyleSheet.create({
    captureBtn:{
      position: 'absolute',
      alignSelf: 'center',
      bottom: 150,
      width: 75,
      height: 75,
      backgroundColor: Colors.white,
      borderRadius: 75,
    }
  })

  export default CameraFace;