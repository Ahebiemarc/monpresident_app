import React from "react";
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../../constants/colors/Colors";
import Feather from "react-native-vector-icons/Feather"
import { MotiView } from "@motify/components";
import { Easing } from "react-native-reanimated";

const COLOR = '#6E01EF'
const SIZE = 100;

const Profile = () => {
    return (
        <View style={styles.container} >
            <View style={[styles.button, styles.center]} >
                {
                    [...Array(3).keys()].map(index => {
                        return (
                            <MotiView
                            from={{opacity: 0.5, scale: 1}} 
                            animate={{opacity: 0, scale: 2}}
                            transition={{
                                type: 'timing', duration:2000, 
                                easing: Easing.out(Easing.ease),
                                delay: index * 400,
                                repeatReverse: false,
                                loop: true,
                            }}
                            key={index}
                                style={[StyleSheet.absoluteFillObject,
                                    styles.button
                                ]}
                            />
                        )
                    })
                }
                <TouchableOpacity
                    //onPress={props.onPress}
                        activeOpacity={0.7} // Opacité lorsqu'il est pressé
                        style={styles.button}
                    >

                    <Text style={styles.buttonText }>Vote Moi</Text>
                </TouchableOpacity>
            </View>
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
    dot: {
        width: SIZE,
        height: SIZE,
        borderRadius: SIZE,
        backgroundColor: COLOR,
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        borderRadius: SIZE / 4 ,
        borderWidth: 0,
        borderColor: 'none',
        backgroundColor: Colors.colorOnclick,
        paddingHorizontal: 10, 
        paddingVertical: 10,
        //width: SIZE,
      },
      buttonText: {
        textAlign: 'center',
        color: Colors.white,
        fontSize: 16,
        fontFamily: "Poppins-Medium",
        letterSpacing: 2.0,
      },

});

export default Profile;