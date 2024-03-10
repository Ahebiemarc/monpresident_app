import React, { useRef } from "react";
import { Animated, FlatList, Image, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MatchPercent from "../../components/MatchPercent";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../constants/Constants";
import { President_DATA } from "../../constants/data/data";
import { IPresident } from "../../interfaces/interfaces";
import { Colors } from "../../constants/colors/Colors";
import { truncateString } from "../../utils/functionString";
import FeatherIcon from 'react-native-vector-icons/Feather';
import LinearGradient from "react-native-linear-gradient";
import BackdropImage from "../../components/BackDropImage";
import { RootStackScreenProps } from "../../types/navigation/types";


const SPACING = 10;
export const ITEM_SIZE = Platform.OS === 'ios' ? SCREEN_WIDTH * 0.72 : SCREEN_WIDTH * 0.74
const EMPTY_ITEM_SIZE = (SCREEN_WIDTH - ITEM_SIZE) / 2;
export const BACKDROP_HEIGHT = SCREEN_HEIGHT * 0.65;

const CANDIDATES = [{id: 'left-spacer'}, ...President_DATA, {id: 'right-spacer'}];






const Home = ({navigation}: RootStackScreenProps<'Tab'>) => {


    const scrollX:Animated.Value = useRef(new Animated.Value(0)).current



    const renderItem = ({ item, index} : {item : any, index: number}) =>{

        if (!item.firstname) {
            return <View style={{ width: EMPTY_ITEM_SIZE,}} />;
          }

        const inputRange = [
            (index - 2) * ITEM_SIZE,
            (index - 1) * ITEM_SIZE,

            index * ITEM_SIZE,
        ];

        const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [0, -50, 0],
            extrapolate: 'clamp',
        })

        const bio = truncateString(item.brefSpeechAndBio, 50);

        return(
            <Animated.View 
            style={{
                width : ITEM_SIZE,
                transform: [{translateY}]
                }}>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => {
                        console.log(item);
                        
                        navigation.navigate('PresidentInfo', {item})
                    }}
                >
                    <View style={styles.slideContainer}>
                        <Image source={item.image} style={styles.posterImage} />
                        <Text style={styles.posterName}>{`${item.firstname} ${item.lastname}`} </Text>
                        <Text style={styles.posterStatus}>{item.politicalStatus}</Text>
                        <Text style={styles.posterBio}>{bio}</Text>
                        <FeatherIcon name="arrow-right" size={20} color={Colors.black}
                            style={{left: 100}}
                        />
                    </View>
                    <View style={styles.matchContainer} >
                        <MatchPercent percent={item.matchPercent} />
                    </View>
                </TouchableOpacity>
                
            </Animated.View>
        )
    
    };

    return (
        <View style={styles.container} >
            <StatusBar barStyle={'default'}/>
            <BackdropImage candidate={President_DATA} scrollX={scrollX} />
            <Animated.FlatList 
            showsHorizontalScrollIndicator={false}
                data={CANDIDATES}
                keyExtractor={(item) => item.id + 'president'}
                horizontal
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false }
                )}
                bounces={false}
                decelerationRate={Platform.OS === 'ios'? 0 : 0.98}
                renderToHardwareTextureAndroid
                scrollEventThrottle={16}
                snapToInterval={ITEM_SIZE}
                snapToAlignment='start'
                contentContainerStyle={styles.contentContainer}
                renderItem={renderItem}

            />
            <View 
            style={styles.bgView}
            />
            
        </View>
    );
}

// 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
    },
    contentContainer: {
        alignItems: 'center'
    },
    slideContainer: {
        marginHorizontal: SPACING,
        padding: SPACING * 2,
        alignItems: 'center',
        backgroundColor: Colors.white,
        borderRadius: 34,
    },
    posterImage: {
        width: '100%',
        height: ITEM_SIZE * 1.2,
        resizeMode: 'cover',
        borderRadius: 24,
        margin: 0,
        marginBottom: 10,
      },
      posterName :{
        fontFamily: 'Poppins-Bold',
        fontSize: 20,
        color: Colors.black,
      },
      posterStatus: {
        fontFamily: 'Poppins-Regular',
        fontSize: 18,
        color: Colors.blackLight,
        alignItems: 'center'
      },
      posterBio:{
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        color: Colors.black,
      },
      matchContainer: {
        justifyContent: 'center',
        marginLeft: 30,
        marginTop: -5
      },
      bgView:{
        position: 'absolute',
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        transform: [{translateY: SCREEN_HEIGHT}],
        borderRadius: 32,
  
      }
      

});

export default Home;