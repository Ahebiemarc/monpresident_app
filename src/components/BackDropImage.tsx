import React from "react"
import { Animated, FlatList, View } from "react-native"
import { IPresident } from "../interfaces/interfaces"
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants/Constants"
import { BACKDROP_HEIGHT, ITEM_SIZE } from "../screens/tabs/Home"
import { President_DATA } from "../constants/data/data"
import { Image } from "react-native"
import LinearGradient from "react-native-linear-gradient"


const BackdropImage = ({candidate, scrollX}: {candidate: IPresident[], scrollX: Animated.Value}) : React.JSX.Element => {



    return(
        <Animated.View
        style={{position: 'absolute', width: SCREEN_WIDTH, height: BACKDROP_HEIGHT}}
        >
            <FlatList 
                data={President_DATA}
                keyExtractor={(item) => item.id + '-backdrop'}
                removeClippedSubviews={false}
                contentContainerStyle={{width: SCREEN_WIDTH, height: BACKDROP_HEIGHT}}
                renderItem={({item, index}) =>{

    
                    // Calculer l'offset de la transformation en fonction de l'index
                    const translateX = scrollX.interpolate({
                        inputRange: [(index - 1) * ITEM_SIZE, index * ITEM_SIZE],
                        outputRange: [0, SCREEN_WIDTH],
                        extrapolate: 'clamp',
                    })

                    return(
                        <Animated.View
                            removeClippedSubviews={false}
                            style={{
                                position: 'absolute', 
                                width: translateX, 
                                height: SCREEN_HEIGHT, 
                                overflow: 'hidden',
                            }}
                            >
                            <Image
                                source={item.coveredImage}
                                style={{
                                width:SCREEN_WIDTH,
                                height: BACKDROP_HEIGHT,
                                position: 'absolute'
                                }}
                            />
                        </Animated.View>
                    )
                }}
            />

            <LinearGradient
                colors={['rgba(0, 0, 0, 0)', 'white']}
                style={{
                height: BACKDROP_HEIGHT,
                width: SCREEN_WIDTH,
                position: 'absolute',
                bottom: 0,
            }}
            />

        </Animated.View>
    );
};

export default BackdropImage;

