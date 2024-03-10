import React, { useState } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import ListOccupationItem from "../../components/bottomsheet/ListOccupationItem";
import { President_DATA } from "../../constants/data/data";
import CustomBottomSheet from "../../components/bottomsheet/CustomBottomSheet";


const Settings = () => {

    //const [data, setData] = useState({})
    return (
        <View style={styles.container} >
            <StatusBar barStyle={'default'}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
       //alignItems: "center",
        backgroundColor: "#F5FCFF",
    },

});

export default Settings;