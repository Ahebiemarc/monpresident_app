import { useAppState } from "@react-native-community/hooks";
import { useIsFocused } from "@react-navigation/native";
import React, { FC, useEffect, useRef, useState } from "react";
import { ActivityIndicator, Alert, Pressable, Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import { Camera, PhotoFile, useCameraDevice, useCameraPermission } from "react-native-vision-camera";
import { Colors } from "../constants/colors/Colors";
import { RootStackScreenProps } from "../types/navigation/types";
import { authenticateByFace } from "../api/elector";
import AsyncStorage from "@react-native-async-storage/async-storage";


// Fonction pour convertir PhotoFile en File



const  CameraFace: FC<RootStackScreenProps<'CameraFace'>>= ({navigation}) => {
    const device = useCameraDevice('back');
    const { hasPermission, requestPermission } = useCameraPermission();
    const isFocused = useIsFocused()
    const appState = useAppState()
    const isActive = isFocused && appState === "active"
    const camera = useRef<Camera>(null);
    const [picture, setPicture] = useState<PhotoFile>();
    const [loading, setLoading] = useState<boolean>(false);

  
    
    useEffect(() => {
      if (!hasPermission) {
        //console.log("permission : ", hasPermission);
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
      if (!hasPermission) {
          Alert.alert('Permission Denied', 'Please grant camera permission to continue.');
          return;
      }

      const photo = await camera.current?.takePhoto();

      const token = await AsyncStorage.getItem('token');
      if(!token) return;

      if (photo) {
          try {
              setLoading(true);

              const response = await authenticateByFace(photo as unknown as File, token); // Appel de la fonction Axios pour l'authentification par photo
              Alert.alert('Success', response.message);
              // Naviguer vers l'écran suivant si nécessaire
              setLoading(false);

          } catch (error) {
              Alert.alert('Error', 'Failed to authenticate by face');
              console.log(error);
              
              setLoading(false);

          }
      }
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
      bottom: 50,
      width: 75,
      height: 75,
      backgroundColor: Colors.white,
      borderRadius: 75,
    }
  })

  export default CameraFace;