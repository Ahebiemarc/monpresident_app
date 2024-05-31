import React from "react"
import {View } from "react-native"
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants/Constants"
import { BACKDROP_HEIGHT, ITEM_SIZE } from "../screens/tabs/Home"
import { Image, ImageProps } from "react-native"
import LinearGradient from "react-native-linear-gradient"

type BackgroundProfileProps = {
    user_profile_cover: string
}

const BackgroundProfile = ({user_profile_cover}:  BackgroundProfileProps) : React.JSX.Element => {



    return(
        <View
        style={{position: 'absolute', width: SCREEN_WIDTH, height: BACKDROP_HEIGHT}}
        >
            <View
                style={{
                    position: 'absolute', 
                    width: SCREEN_WIDTH, 
                    height: SCREEN_HEIGHT, 
                    overflow: 'hidden',
                }}
            >
            <Image
                source={{uri: user_profile_cover}}
                style={{
                width:SCREEN_WIDTH,
                height: BACKDROP_HEIGHT,
                position: 'absolute'
                }}
            />
            </View>

            <LinearGradient
                colors={['rgba(0, 0, 0, 0)', 'white']}
                style={{
                height: BACKDROP_HEIGHT,
                width: SCREEN_WIDTH,
                position: 'absolute',
                bottom: 0,
            }}
            />

        </View>
    );
};

export default BackgroundProfile;

