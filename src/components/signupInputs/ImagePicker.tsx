import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Colors } from "../../constants/colors/Colors";
import Feather from "react-native-vector-icons/Feather";
import { SCREEN_WIDTH } from "../../constants/Constants";

const profileNone = require('../../../assets/images/profileNone-removebg.png')

type ImagePicerProps = {
    onPress: () => void;
}

const ImagePicer: React.FC<ImagePicerProps> = ({onPress}) =>{

   

    return(
        <View style={{ alignItems: 'center', marginBottom:20}}>
            <TouchableOpacity onPress={onPress} activeOpacity={0.7}>

                <Feather  name="camera" size={30} style={{}} />
           </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        borderRadius:75,
        width:120,
        height:120,
    }
});

export default ImagePicer;