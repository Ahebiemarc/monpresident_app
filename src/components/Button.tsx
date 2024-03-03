import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "../constants/colors/Colors";
import { IButton } from "../interfaces/interfaces";

const Button = (props: IButton) : React.JSX.Element => {

    return(
        <TouchableOpacity
            onPress={props.onPress}
            activeOpacity={0.7} // Opacité lorsqu'il est pressé
            style={[styles.button, 
            {
              backgroundColor: props.color,
              paddingHorizontal: props.paddingH, 
              paddingVertical: props.paddingV,
              right: props.right,
              left: props.left,
              }]}>

      <Text style={styles.buttonText }>{props.title}</Text>
    </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    button: {
      //paddingHorizontal: 40,
      //paddingVertical: 19,
      borderRadius: 10,
      borderWidth: 0,
      borderColor: 'none',
      bottom:100
    },
    buttonText: {
      color: Colors.black,
      fontSize: 16,
      fontFamily: "Poppins-Medium",
      letterSpacing: 2.0
    },
});

  
export default Button;