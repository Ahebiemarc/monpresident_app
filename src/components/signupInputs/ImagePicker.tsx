import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "../../constants/colors/Colors";

const ImagePicer = () =>{

    const Onpress = () => {
        console.log("Onpress")
    }

    return(
        <TouchableOpacity onPress={Onpress}>
            <Image source={{uri}}
                style={[
                    styles.image,
                    aviOnly && {height: 35, width: 35, borderWidth: 0},
                    imgStyle
                ]}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image:{
        borderRadius:75,
        width:50,
        height:50,
        borderWidth:5,
        borderColor:Colors.STROKE_COLOR
    }
});