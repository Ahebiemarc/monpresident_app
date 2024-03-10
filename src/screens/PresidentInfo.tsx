import React, { useCallback, useRef, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { RootStackScreenProps } from "../types/navigation/types";
import Feather from "react-native-vector-icons/Feather"
import { Colors } from "../constants/colors/Colors";
import { Image } from "react-native";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants/Constants";
import { ITEM_SIZE } from "./tabs/Home";
import MatchPercent from "../components/MatchPercent";
import CustomBottomSheet from "../components/bottomsheet/CustomBottomSheet";
import ListOccupationItem from "../components/bottomsheet/ListOccupationItem";
import BottomSheet from "@gorhom/bottom-sheet";
import ListItem from "../components/bottomsheet/ListItem";

const SPACING:number = 10;
const ITEM_HEIGHT:number = SCREEN_HEIGHT * 0.18;
const TOP_HEADER_HEIGHT:number = SCREEN_HEIGHT * 0.3





const PresidentInfo = ({route, navigation} : RootStackScreenProps<'PresidentInfo'>) => {

    const { item } = route.params
    const bottomSheetRef = useRef<BottomSheet>(null);
    const [index, setIndex] = useState(1)


    

    
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
            /*µcase 2:
                return <ListOccupationItem itemsOccupation={item.occupations} />*/
            case 3:
                return <View style={{alignItems: 'center'}}><ListItem choice={c} itemsEducation={item.aboutPresident.education} /></View>
            /*case 4:
                return <ListOccupationItem itemsOccupation={item.occupations} />*/
            default:
                return null;
        }
    }, [index]);
     

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
                        borderBottomRightRadius: 16,
                        borderBottomLeftRadius: 16,
                    }
                ]}
            >

                <Image source={item.image} style={styles.posterImage} />
                <Text style={styles.posterName}>{`${item.firstname} ${item.lastname}`} </Text>
                <Text style={styles.posterStatus}>{item.politicalStatus}</Text>
                {/*<Text style={styles.posterBio}>{item.brefSpeechAndBio}</Text>*/}

                <View 
                    style={styles.bgView}
                >
                    <View style={styles.matchContainer} >
                        <MatchPercent percent={item.matchPercent} />
                    </View>
                    <Text style={styles.posterBio}>{item.brefSpeechAndBio}</Text>
                    <TouchableOpacity 
                        style={styles.containerAbout} 
                        activeOpacity={0.5}
                        onPress={handleOpenOccupationPress}
                        >
                        <Text style={styles.aboutText}>Occupation</Text>
                        <Feather name="activity" color={Colors.black} size={24}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.containerAbout} activeOpacity={0.7}>
                        <Text style={styles.aboutText}>Expérience</Text>
                        <Feather name="user-check" color={Colors.black} size={24}/>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    style={styles.containerAbout} 
                    activeOpacity={0.7}
                    onPress={handleOpenEducationPress}
                    >
                        <Text style={styles.aboutText}>Education</Text>
                        <Feather name="award" color={Colors.black} size={24}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.containerAbout} activeOpacity={0.7}>
                        <Text style={styles.aboutText}>Projet</Text>
                        <Feather name="briefcase" color={Colors.black} size={24}/>
                    </TouchableOpacity>
                </View>
                
            </View>
                <CustomBottomSheet ref={bottomSheetRef}>
                    {renderContent(index)}
                </CustomBottomSheet>
                {/*<CustomBottomSheet ref={bottomSheetEdRef}>
                    <View style={{alignItems:'center'}}>
                        <ListEducationItem items={item.aboutPresident.education} />
                    </View>
            </CustomBottomSheet>*/}

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
        width: ITEM_SIZE * 0.4,
        height: ITEM_SIZE * 0.4,
        resizeMode: 'contain',
        right: SPACING,
        top: TOP_HEADER_HEIGHT - ITEM_SIZE * 0.3

    },
    posterName :{
        fontFamily: 'Poppins-Bold',
        fontSize: 28,
        color: Colors.witheOpacity,
        position: "absolute",
        top: TOP_HEADER_HEIGHT - SPACING * 14,
        letterSpacing: 3,
        left: SPACING * 2,
    },
    posterStatus: {
        fontFamily: 'Poppins-Regular',
        fontSize: 24,
        color: Colors.witheOpacity,
        position: "absolute",
        top: TOP_HEADER_HEIGHT - SPACING * 9,
        letterSpacing: 3,
        marginLeft: SPACING * 2,
    },
    matchContainer: {
        justifyContent: 'center',
        marginLeft: -20,
        marginTop: -25
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
        transform: [{translateY: SCREEN_HEIGHT /3.4}],
        borderRadius: 32,
        zIndex: -1,
        padding: SPACING + 32,
        paddingRight: SPACING,
        paddingTop: 32,
  
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



export default PresidentInfo;