import React, { useState } from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { SCREEN_WIDTH } from "@gorhom/bottom-sheet";
import { Colors } from "../../constants/colors/Colors";
import ImagePicer from "../../components/signupInputs/ImagePicker";


const Settings = () => {

    //const [data, setData] = useState({})
    return (
        <View style={styles.container} >
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        //backgroundColor: "#F5FCFF",
    },
 
      text: {
        fontSize: 16,
        fontFamily: 'Poppins-Medium',
        letterSpacing: 3,
        color: Colors.white,
        textAlign: 'center',
      },
      contentContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
      }

});

export default Settings;