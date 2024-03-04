import React from "react";
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../../constants/colors/Colors";


const Profile = () => {
    return (
        <View style={styles.container} >
            {[...Array(3).keys()].map(index => {
                return(
                    <View 
                    key={index}
                    style={[StyleSheet.absoluteFillObject,
                        styles.button
                    ]}
                    />

                    
                )
            })}
            <TouchableOpacity
                //onPress={props.onPress}
                    activeOpacity={0.7} // Opacité lorsqu'il est pressé
                    style={styles.button}
                >

      <Text style={styles.buttonText }>Vote Moi</Text>
    </TouchableOpacity>
            <Text>Profile</Text>
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
    button: {
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 0,
        borderColor: 'none',
        backgroundColor: Colors.colorOnclick,
        paddingHorizontal: 10, 
        paddingVertical: 20,
        marginTop: -10,
        width: 200,
        marginLeft: 50,
      },
      buttonText: {
        textAlign: 'center',
        color: Colors.black,
        fontSize: 16,
        fontFamily: "Poppins-Medium",
        letterSpacing: 2.0,
      },

});

export default Profile;