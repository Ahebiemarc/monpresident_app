import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";


const About = () => {
    return (
        <View style={styles.container} >
            <StatusBar barStyle={'default'}/>

            <Text>About</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    },

});

export default About;