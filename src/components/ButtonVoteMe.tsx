import React from "react";
import { MotiView } from "@motify/components";
import { Easing } from "react-native-reanimated";
import { StyleSheet, Text, TouchableOpacity, View, Platform } from "react-native";
import { Colors } from "../constants/colors/Colors";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


const COLOR = '#6E01EF'
const SIZE = 100; 

type ButtonVoteMeProps = {
    onPress: () => void;
}

const ButtonVoteMe =  ({onPress}: ButtonVoteMeProps) : React.JSX.Element => {

    return(
        <TouchableOpacity onPress={onPress} activeOpacity={0.5} style={[styles.button, styles.center, styles.boxWithShadow]} >
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
                <View
                        
                        style={[styles.button,]}
                    >
                    <MaterialCommunityIcons name="hand-front-right" color={Colors.white} size={30} style={styles.buttonIcon} />
                </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
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
        borderRadius: SIZE,
        borderWidth: 0,
        borderColor: 'none',
        backgroundColor: COLOR,
        paddingHorizontal: 10, 
        paddingVertical: 10,
      },
      buttonIcon: {
        textAlign: 'center',
        color: Colors.white,
        fontFamily: "Poppins-Medium",
    },
    boxWithShadow: {
        ...Platform.select({
            ios: {
              shadowColor: 'rgba(0, 0, 0, 1)',
              shadowOpacity: 0.5,
              shadowRadius: 5,
              shadowOffset: {
                height: 5,
                width: 5,
              },
            },
            android: {
              elevation: 5,
            },
          }),
    },
    

});

export default ButtonVoteMe;