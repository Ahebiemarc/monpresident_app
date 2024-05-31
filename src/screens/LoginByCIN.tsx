import React, { useRef, useState, useEffect } from "react";
import { Alert, Button, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Input from "../components/signupInputs/Input";
import { Colors } from "../constants/colors/Colors";
import { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { RootStackScreenProps } from "../types/navigation/types";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants/Constants";
import { verifyCIN } from "../api/elector";

const LoginByCin: React.FC<RootStackScreenProps<'LoginByCin'>> = ({ navigation, route }) => {
    const [cin, setCin] = useState<string>('ci200009');


    const [error, setError] = useState<string>('');

   

    const handleSubmit = async () => {
        try {
            const response = await verifyCIN(cin);
            Alert.alert('Success', 'Logged in successfully');
            navigation.replace('Tab', {screen: 'Home'});
          } catch (error) {
            Alert.alert('Error', 'Failed to login');
        }
        
    }

    const handleLogin = async () => {
        
      };


    return (
        <SafeAreaView style={styles.container}>
            <View style={{ margin: 20 }}>
                <Text style={styles.title}>Enrollez vous pour l'élection</Text>
                <Text style={styles.titleFine}>Entrez vos différents informations</Text>
            </View>
            <View style={{justifyContent: 'center', marginTop: SCREEN_HEIGHT * 0.29, marginHorizontal: 10}}>
                
                <Input
                    label="CIN"
                    placeholder="CI200009"
                    value={cin}
                    onChangeText={setCin}
                    errorMessage={error}
                    //secureTextEntry
                />

          
            </View>
            <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Se Connecter</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 32,
        fontFamily: 'Poppins-Bold',
        letterSpacing: 1.5,
        color: Colors.blueDark,
    },
    titleFine: {
        fontSize: 18,
        fontFamily: 'Poppins-Regular',
        color: Colors.kaki,
        letterSpacing: 1.5,
    },
    button: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: Colors.blueDark,
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        width: SCREEN_WIDTH
    },
    buttonText: {
        fontFamily: 'Poppins-Medium',
        fontSize: 18,
        textAlign: 'center',
        color: Colors.white,
        letterSpacing: 2,
    },
    errorText:{
        color: Colors.STROKE_COLOR,
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
        letterSpacing: 2,
        //textAlign: 'center'
    }
});

export default LoginByCin;
