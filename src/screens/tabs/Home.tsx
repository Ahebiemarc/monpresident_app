import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import MatchPercent from "../../components/MatchPercent";
import { SafeAreaView } from "react-native-safe-area-context";


const Home = () => {
    return (
        <SafeAreaView style={styles.container} >
            <StatusBar barStyle={'default'}/>
            <MatchPercent />
        </SafeAreaView>
    );
}

// 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        //backgroundColor: "#F5FCFF",
        //backgroundColor: 'blue'
    },

});

export default Home;