import React from "react";
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../../constants/colors/Colors";
import BackgroundProfile from "../../components/BackgroundProfile";
import { BACKDROP_HEIGHT } from "./Home";
import { SCREEN_WIDTH } from "@gorhom/bottom-sheet";


const Profile = () => {
    return (
        <View style={styles.container} >
            <BackgroundProfile user_profile_cover={require('../../../assets/images/user_profile_cover.jpg')} />
            <View style={styles.containerContent}>
                <View style={styles.blockContent1}>
                    <Text style={styles.name}>Mougo Elise</Text>
                    <Text style={styles.city}>Monastir</Text>
                </View>
                <View style={styles.blockContent2}>
                    <View style={styles.blockContent22}>
                        <Text style={[styles.age, {fontSize: 14, color: 'rgba(255, 255, 255, 0.8)'}]}>Age</Text>
                        <Text style={styles.age}>21</Text>
                    </View>
                    <View style={styles.blockContent22}>
                        <Text style={[styles.relationshipStatus, {fontSize: 14, color: 'rgba(255, 255, 255, 0.8)'}]}>Satut Matrimonial</Text>
                        <Text style={styles.relationshipStatus}>Célibataire</Text>
                    </View>
                    <View style={styles.blockContent22}>
                        <Text style={[styles.gender, {fontSize: 14, color: 'rgba(255, 255, 255, 0.8)'}]}>Genre</Text>
                        <Text style={styles.gender}>Femme</Text>
                    </View>
                    <View style={styles.blockContent22}>
                        <Text style={[styles.gender, {fontSize: 14, color: 'rgba(255, 255, 255, 0.8)'}]}>Occupation</Text>
                        <Text style={styles.gender}>Etudiante</Text>
                    </View>
                    <View style={styles.blockContent22}>
                        <Text style={[styles.age, {fontSize: 14, color: 'rgba(255, 255, 255, 0.8)'}]}>Numéro</Text>
                        <Text style={styles.age}>0749435490</Text>
                    </View>
                    
                    <View style={styles.blockContent22}>
                        <Text style={[styles.relationshipStatus, {fontSize: 14, color: 'rgba(255, 255, 255, 0.8)'}]}>Réligion</Text>
                        <Text style={styles.relationshipStatus}>Chrétienne</Text>
                    </View>
                    <View style={styles.blockContent22}>
                        <Text style={[styles.relationshipStatus, {fontSize: 14, color: 'rgba(255, 255, 255, 0.8)'}]}>Naissance</Text>
                        <Text style={styles.relationshipStatus}>23/11/2002</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: Colors.white,
    },

    containerContent:{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'absolute',
        bottom: 120,
        height: BACKDROP_HEIGHT,
        width: SCREEN_WIDTH * 0.9,
        borderRadius: 25,

    }, 
    blockContent1: {
        marginBottom: 10,
        padding: 20,
    },
    blockContent2: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding : 20,
        paddingBottom: 10,
    },
    blockContent3: {
        flexDirection: 'row',
        padding : 20,
        paddingTop: 0
    },
    blockContent4: {},

    blockContent22:{
        alignItems: 'center', 
        justifyContent: 'center', 
        borderWidth: 0.5, 
        borderColor: Colors.white, 
        padding: 10,
        borderRadius: 8,
        marginRight: 8,
        marginBottom: 10,
    },
    name: {
        fontFamily: 'Poppins-Bold',
        fontSize: 30,
        color: Colors.white,
        letterSpacing: 2,
    },
    city: {
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        color: 'rgba(255, 255, 255, 0.8)',
        letterSpacing: 2,
    },
    age: {
        color: Colors.white,
        fontFamily: 'Poppins-Medium',
        fontSize: 20,
        letterSpacing: 2,
    },
    gender: {
        color: Colors.white,
        fontFamily: 'Poppins-Medium',
        fontSize: 20,
        letterSpacing: 2,
    },
    relationshipStatus: {
        color: Colors.white,
        fontFamily: 'Poppins-Medium',
        fontSize: 20,
        letterSpacing: 2,
    },

});

export default Profile;