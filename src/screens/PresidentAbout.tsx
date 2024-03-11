import React, { useCallback, useRef, useState } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootStackScreenProps } from '../types/navigation/types';
import { SCREEN_WIDTH } from '@gorhom/bottom-sheet';
import { Colors } from '../constants/colors/Colors';
import Feather from "react-native-vector-icons/Feather";
import { SCREEN_HEIGHT } from '../constants/Constants';
import * as Animatable from "react-native-animatable";
import BottomBlue from '../components/bottomBlue';
import BottomSheet from '@gorhom/bottom-sheet';
import ListItem from '../components/bottomsheet/ListItem';
import CustomBottomSheet from '../components/bottomsheet/CustomBottomSheet';


const SPACING:number = 10;


const PresidentAbout = ({route, navigation}: RootStackScreenProps<'PresidentInfo'>) => {

    const {item} = route.params;
    const bottomSheetRef = useRef<BottomSheet>(null);
    const [index, setIndex] = useState(1);

    
    const handleOpenOccupationPress = () => {
        setIndex(i => i = 1)
        bottomSheetRef.current?.snapToIndex(0);
    };
    const handleOpenEducationPress = () => {
        setIndex(i => i = 3)
        bottomSheetRef.current?.snapToIndex(0);
    };

    const renderContent = useCallback((c: number) => {
        switch (c) {
            case 1:
                return <View style={{alignItems:'center'}}><ListItem choice={c} itemsOccupation={item.aboutPresident.occupation} /></View>
   
            case 3:
                return <View style={{alignItems: 'center'}}><ListItem choice={c} itemsEducation={item.aboutPresident.education} /></View>
            
            default:
                return null;
        }
    }, [index]);

    return(
        <View style={styles.container}>
            <Animatable.View style={styles.containerHeader}
                animation='bounceIn'  duration={2000} easing="ease-in"
            >          
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
                <View style={styles.header}>
                    <Image style={styles.headeImage}  source={item.image}/>
                    <View>
                        <Text style={[styles.headerState]}> {item.politicalStatus} </Text>
                        <Text style={styles.headerName}> {`${item.firstname} ${item.lastname}`} </Text>
                    </View>
                    <Feather name="arrow-down" size={24} color="white" style={{marginLeft:50}} />
                </View>
            </Animatable.View>

            <View style={{alignItems: 'center'}}>
                <View style={styles.blockContainer1}>
                    <TouchableOpacity onPress={handleOpenOccupationPress} activeOpacity={0.7} style={[styles.caseLeft, styles.boxWithShadow, {backgroundColor: Colors.colorOnclick}]}>
                        <Feather name="activity" color={Colors.white} size={50} style={styles.icon} />
                        <Text style={[styles.iconText, {color: Colors.white}]}>Occupation</Text>  
                    </TouchableOpacity>
                    <View style={[styles.caseRight, styles.boxWithShadow, {backgroundColor: Colors.white}]}>
                        <Feather name="user-check" color={Colors.black} size={50} style={styles.icon} />
                        <Text style={styles.iconText}>Expérience</Text>
                    </View>
                </View>
                <View style={styles.blockContainer2}>
                    <TouchableOpacity onPress={handleOpenEducationPress} activeOpacity={0.7} style={[styles.caseLeft, styles.boxWithShadow]}>
                        <Feather name="award" color={Colors.black} size={50} style={styles.icon} />
                        <Text style={styles.iconText}>Education</Text>
                    </TouchableOpacity>
                    <View style={[styles.caseRight, styles.boxWithShadow]}>
                    <Feather name="briefcase" color={Colors.white} size={50} style={styles.icon} />
                        <Text style={[styles.iconText, {color: Colors.white}]}>Projet</Text>
                    </View>
                </View>
            </View>

                
            
            <Animatable.View
                    animation='bounceIn'  duration={2000} easing="ease-in"
                    style={{position: 'absolute', bottom: 0,}}
                >
                    <BottomBlue name={item.firstname}  onPress={() => navigation.goBack()}/>
            </Animatable.View>

                <CustomBottomSheet ref={bottomSheetRef}>
                    {renderContent(index)}
                </CustomBottomSheet>
            
    
            
            
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    containerHeader:{
        height: 150,
        width: SCREEN_WIDTH,
        padding: 20,
        backgroundColor: '#6468e7',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    arrowBack: {
        padding: 12,
        position: "absolute",
        top: SPACING,
        left: SPACING,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 50,
    },
    headeImage: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginLeft: 20,
        marginRight: 10,
    },
    headerState:{
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        color: Colors.white,
        letterSpacing: 3,
    },
    headerName:{
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        color: Colors.white,
        letterSpacing: 2,
    },

    blockContainer1:{
        position: 'absolute',
        top: SCREEN_HEIGHT / 6,
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
    blockContainer2:{
        position: 'absolute',
        top: SCREEN_HEIGHT /2.5,
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
    caseLeft: {
        width: 150,
        height: 150,
        backgroundColor: Colors.white,
        marginRight: 30,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    caseRight: {
        width: 150,
        height: 150,
        backgroundColor: Colors.greenDark,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',

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

    icon: {
    },
    iconText: {
        marginTop: 10,
        fontFamily: 'Poppins-Medium',
        fontSize: 16,
        color: Colors.black,
        letterSpacing: 2,
    },


});

export default PresidentAbout;