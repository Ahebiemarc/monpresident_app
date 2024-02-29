import React from "react";
import { StyleSheet, Text, View } from "react-native";


const TabNavigator = () => {
    return (
        <View style={styles.container} >
            <Text>Login</Text>
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

export default TabNavigator;