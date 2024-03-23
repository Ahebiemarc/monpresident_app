import React, { useRef } from "react";
import { StatusBar, Animated, Text, Image, View, StyleSheet, Dimensions, FlatList, NativeSyntheticEvent, NativeScrollEvent, } from 'react-native';
import { Colors } from "../constants/colors/Colors";
import { DATA_ONBOARDING } from "../constants/data/data";
import Indicator from "../components/Indicator";
import Backdrop from "../components/Backdrop";
import Square from "../components/Square";
import Button from "../components/Button";
import { RootStackScreenProps } from "../types/navigation/types";


const { width, height } = Dimensions.get('screen');





const OnboardingScreen = ({navigation}: RootStackScreenProps<'Onboarding'>): React.JSX.Element => {

    const scrollX = useRef<Animated.Value>(new Animated.Value(0)).current;

    const handleScroll = Animated.event<NativeSyntheticEvent<NativeScrollEvent>>(
        [{nativeEvent :{contentOffset: {x: scrollX}}}],
        {useNativeDriver: true},
    );

    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <Backdrop scrollX={scrollX}/>
            <Square scrollX={scrollX}/>
            <Animated.FlatList 
                data={DATA_ONBOARDING}
                horizontal
                scrollEventThrottle={32}
                bounces={false}
                onScroll={handleScroll}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.contentContainer}
                pagingEnabled
                keyExtractor={item => item.key}
                renderItem={({item}) => {
                    return(
                        <View style={styles.slideContainer} >
                            <View style={{flex: 0.7, justifyContent: 'center', padding: 20}}>
                                <Image source={item.image} style={styles.images} />
                            </View>
                            <View style={{flex: 0.2, marginBottom: 20}}>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.description}>{item.description}</Text>
                            </View>
                        </View>
                    )
                }}
            />
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                position: 'relative',
                bottom: 0,
                marginHorizontal: 20,
            }} >
            <Button 
                title="Se connecter" 
                color={Colors.white} 
                paddingH={20}
                paddingV={19}
                left={-20}
                onPress={() => navigation.replace('Tab', {screen: 'Home'})}
                />
                 <Button 
                title="S'inscrire" 
                color={Colors.white} 
                paddingH={20}
                paddingV={19}
                right={-10}
                onPress={() => navigation.navigate('Signup')}
                />
            </View>
            <Indicator scrollX={scrollX} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.white,
      alignItems: 'center',
      justifyContent: 'center',
    },
    images: {
        width: width / 1.8,
        height: width / 1.8,
        resizeMode: 'contain',
    },
    slideContainer: {
        width,
        alignItems: 'center',

    },
    title:{
        fontFamily: 'Poppins-Bold',
        fontSize: 28,
        color: Colors.white,
        marginBottom: 10,
        padding: 10,
        paddingBottom: 0,

    },
    description: {
        fontFamily: 'Poppins-Regular',
        color: Colors.white,
        fontSize: 16,
        paddingHorizontal: 10,
        paddingTop: 0,
    },
    contentContainer: {
        paddingBottom: 100
    }
});

export default OnboardingScreen;