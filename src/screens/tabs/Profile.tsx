import React, { useEffect, useState } from "react";
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../../constants/colors/Colors";
import BackgroundProfile from "../../components/BackgroundProfile";
import { BACKDROP_HEIGHT } from "./Home";
import { SCREEN_WIDTH } from "@gorhom/bottom-sheet";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getProfil } from "../../api/elector";
import { differenceInYears, isValid, parse } from "date-fns";
import { fr } from "date-fns/locale";
import { IMG_URL } from "../../api/constant";

export const calculateAge = (dob: string): number => {
    // Liste des formats de date que vous souhaitez gérer
    const formats = ['yyyy-MM-dd', 'MM/dd/yyyy', 'dd/MM/yyyy', 'MMMM d, yyyy', 'dd-MM-yyyy', 'MM-dd-yyyy', 'dd.MM.yyyy'];
    let birthDate: Date | null = null;
  
    // Parcours des formats pour parser la date de naissance
    for (const format of formats) {
      const parsedDate = parse(dob, format, new Date(), { locale: fr });
      if (isValid(parsedDate)) {
        birthDate = parsedDate;
        break;
      }
    }
  
    // Si aucun format n'a fonctionné, lever une erreur
    if (!birthDate) {
      throw new Error('Invalid date format');
    }
  
    // Calculer la différence en années entre la date actuelle et la date de naissance
    return differenceInYears(new Date(), birthDate);
  };
const Profile = () => {

    const [elector, setElector] = useState<any>();

    const fetchData = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            if (!token) return;
            const result = await getProfil(token);
            if (result.elector) {
                setElector(result.elector);
                console.log(elector);

            }
        } catch (error) {
            
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    if (!elector) return null;
    return (
        <View style={styles.container} >
            <BackgroundProfile user_profile_cover={`${IMG_URL}/${elector.image}`} />
            <View style={styles.containerContent}>
                <View style={styles.blockContent1}>
                    <Text style={styles.name}>{`${elector.firstname} ${elector.lastname}`}</Text>
                    <Text style={styles.city}> {elector.city} </Text>
                </View>
                <View style={styles.blockContent2}>
                    <View style={styles.blockContent22}>
                        <Text style={[styles.age, {fontSize: 14, color: 'rgba(255, 255, 255, 0.8)'}]}>Age</Text>
                        <Text style={styles.age}>{calculateAge(elector.birthdate)}</Text>
                    </View>
                    <View style={styles.blockContent22}>
                        <Text style={[styles.relationshipStatus, {fontSize: 14, color: 'rgba(255, 255, 255, 0.8)'}]}>Satut Matrimonial</Text>
                        <Text style={styles.relationshipStatus}> {elector.relationshipStatus} </Text>
                    </View>
                    <View style={styles.blockContent22}>
                        <Text style={[styles.gender, {fontSize: 14, color: 'rgba(255, 255, 255, 0.8)'}]}>Genre</Text>
                        <Text style={styles.gender}> {elector.gender} </Text>
                    </View>
                    <View style={styles.blockContent22}>
                        <Text style={[styles.gender, {fontSize: 14, color: 'rgba(255, 255, 255, 0.8)'}]}>Occupation</Text>
                        <Text style={styles.gender}> {elector.occupation} </Text>
                    </View>
                    <View style={styles.blockContent22}>
                        <Text style={[styles.age, {fontSize: 14, color: 'rgba(255, 255, 255, 0.8)'}]}>Numéro</Text>
                        <Text style={styles.age}> {elector.phones} </Text>
                    </View>
                    
                    <View style={styles.blockContent22}>
                        <Text style={[styles.relationshipStatus, {fontSize: 14, color: 'rgba(255, 255, 255, 0.8)'}]}>Réligion</Text>
                        <Text style={styles.relationshipStatus}>{elector.religion}</Text>
                    </View>
                    <View style={styles.blockContent22}>
                        <Text style={[styles.relationshipStatus, {fontSize: 14, color: 'rgba(255, 255, 255, 0.8)'}]}>Naissance</Text>
                        <Text style={styles.relationshipStatus}>{elector.birthdate}</Text>
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