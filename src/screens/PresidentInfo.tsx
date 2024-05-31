import React, { useCallback, useRef, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Alert } from "react-native";
import { RootStackScreenProps } from "../types/navigation/types";
import Feather from "react-native-vector-icons/Feather"
import { Colors } from "../constants/colors/Colors";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants/Constants";
import { ITEM_SIZE } from "./tabs/Home";
import MatchPercent from "../components/MatchPercent";
import BottomBlue from "../components/bottomBlue";

import * as Animatable from "react-native-animatable";
import Animated, { FadeInUp } from "react-native-reanimated";
import ButtonVoteMe from "../components/ButtonVoteMe";
import { IMG_URL } from "../api/constant";
import { toVote } from "../api/elector";
import AsyncStorage from "@react-native-async-storage/async-storage";


const SPACING:number = 10;
const ITEM_HEIGHT:number = SCREEN_HEIGHT * 0.18;
const TOP_HEADER_HEIGHT:number = SCREEN_HEIGHT * 0.3




const PresidentInfo = ({route, navigation} : RootStackScreenProps<'PresidentInfo'>) => {

    const { item } = route.params;
    console.log(item.candidateId);

    const handleSubmitToVote = async () =>{

        try {
            const token = await AsyncStorage.getItem('token');
            if(!token) return;
            const result = await toVote(item.candidateId, token);
            if(result.message){
                Alert.alert('Success', result.message);
            }
            
        } catch (error: any) {
            console.log(error);
            
            Alert.alert('error', error.error)
        }

    }
    
     
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.arrowBack}
                activeOpacity={0.7} // Opacité lorsqu'il est pressé
                onPress={() => navigation.goBack()}
            >
                <Feather 
                    name="arrow-left" 
                    size={30}
                                  
            />
            </TouchableOpacity>
            <View  
                style={[StyleSheet.absoluteFillObject,
                    {
                        backgroundColor: "rgba(90,140,207,0.6)",
                        height: TOP_HEADER_HEIGHT + 32,
                        borderRadius: 0,
                    }
                ]}
            />
                <Animated.Image sharedTransitionTag={`item.${item.id}.image`}  entering={FadeInUp.duration(1000)}
                source={{uri: `${IMG_URL}/${item.image}`}} style={styles.posterImage} />
               
                <Animated.Text sharedTransitionTag={`item.${item.id}.name`} style={styles.posterName}>{`${item.firstname} ${item.lastname}`} </Animated.Text>

                    <Animated.Text sharedTransitionTag={`item.${item.id}.status`} style={styles.posterStatus}>{item.politicalStatus}</Animated.Text>
                

                    <Animated.View
                    sharedTransitionTag="general.bg"
                        style={styles.bgView}
                    >
                        <ScrollView style={{}} showsVerticalScrollIndicator={false}>
                            <Animatable.View 
                                animation="bounceIn" easing="ease-out" 
                                duration={1000}
                                style={styles.matchContainer} 
                            >
                                <MatchPercent percent={item.matchPercent!!} />
                            </Animatable.View>
                            
                                <Animatable.Text
                                animation="fadeInUp"
                                style={styles.posterBio}
                            >
                                {item.brefSpeechAndBio}
                            </Animatable.Text>
                            
                            <View style={{height: item.brefSpeechAndBio.length >= 476 ? TOP_HEADER_HEIGHT + ITEM_HEIGHT : TOP_HEADER_HEIGHT,}} />             
                        </ScrollView>
                </Animated.View>
            <View style={{position: 'absolute', right: 30, top: TOP_HEADER_HEIGHT - ITEM_SIZE * 0.1 + 50, zIndex:1}}>
                <ButtonVoteMe onPress={handleSubmitToVote} />
            </View>
            
                {/*<CustomBottomSheet ref={bottomSheetRef}>
                    {renderContent(index)}
                </CustomBottomSheet>
                <CustomBottomSheet ref={bottomSheetEdRef}>
                    <View style={{alignItems:'center'}}>
                        <ListEducationItem items={item.aboutPresident.education} />
                    </View>
            </CustomBottomSheet>*/}
                
            <Animatable.View
                animation='bounceIn' delay={300}  duration={2000} easing="ease-in"
                style={{position: 'absolute', bottom: 0}}
            >
                <BottomBlue name={item.firstname}  onPress={() => navigation.navigate('PresidentAbout', {item})}/>
            </Animatable.View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5FCFF",
    },
    arrowBack: {
        padding: 12,
        position: "absolute",
        top: SPACING * 2,
        left: SPACING,
        zIndex: 2,
    },
    posterImage: {
        position: "absolute",
        width: ITEM_HEIGHT * 0.8,
        height: ITEM_HEIGHT * 0.8,
        resizeMode: 'contain',
        right: SPACING,
        top: TOP_HEADER_HEIGHT - ITEM_HEIGHT * 0.8,

    },
    posterName :{
        fontFamily: 'Poppins-Bold',
        fontSize: 28,
        color: Colors.witheOpacity,
        position: "absolute",
        top: TOP_HEADER_HEIGHT - SPACING * 17,
        letterSpacing: 3,
        left: SPACING * 2,
    },
    posterStatus: {
        fontFamily: 'Poppins-Regular',
        fontSize: 24,
        color: Colors.witheOpacity,
        position: "absolute",
        top: TOP_HEADER_HEIGHT - SPACING * 12,
        letterSpacing: 3,
        marginLeft: SPACING * 2,
    },
    matchContainer: {
        justifyContent: 'center',
        marginLeft: -20,
        marginTop: 0,
        marginBottom: SPACING,
    },
    posterBio:{
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        color: Colors.darkOpacity,
        letterSpacing:1.2,
    },
    bgView:{
        position: 'absolute',
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        backgroundColor: Colors.white,
        transform: [{translateY: TOP_HEADER_HEIGHT}],
        borderRadius: 32,
        padding: SPACING + 32,
        paddingRight: SPACING,
        paddingTop: 32 + SPACING,
        flex: 1,
  
    },
    containerAbout:{
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        paddingRight: 20, 
        paddingVertical: 10,
        marginTop: 10,
        //backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: 10,
    },
    aboutText:{
        fontFamily: 'Poppins-Bold',
        fontSize: 20,
        color: Colors.black,
        letterSpacing: 2,
    }

});

PresidentInfo.sharedElements = ({route} : RootStackScreenProps<'PresidentInfo'>) => {
    const { item } = route.params;
    return [
        {id : `item.${item.id}.name`,},
        {id : `item.${item.id}.status`,},
        {id : `item.${item.id}.image`},
        {id : 'general.bg',},
        
    ];
}



export default PresidentInfo;