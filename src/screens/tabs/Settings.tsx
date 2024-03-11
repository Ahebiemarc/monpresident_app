import React, { useState } from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { SCREEN_WIDTH } from "@gorhom/bottom-sheet";
import { Colors } from "../../constants/colors/Colors";


const Settings = () => {

    //const [data, setData] = useState({})
    return (
        <View style={styles.container} >
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        borderRadius: 25,
        backgroundColor: '#6468e7',
        height: 100,
        width: SCREEN_WIDTH ,
        paddingHorizontal:  10,
        marginHorizontal: 10,
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