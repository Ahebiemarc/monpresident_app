import React, { useState } from "react";
import { useForm, UseFormRegister } from "react-hook-form";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { IElector } from "../interfaces/interfaces";
import Input from "../components/signupInputs/Input";
import { resolver } from "../utils/Resolver";
import { Colors } from "../constants/colors/Colors";



const Signup = () => {

    const {control, handleSubmit, formState:{errors} } = useForm<IElector>();

    const onSubmit = (data: any) => {
        console.log(data); // Log des données
    };
    


    

   
    

    return (
        <View style={styles.container}>
            <View style={{margin: 20}}>
                <Text style={styles.title}>Enrollement pour l'élection</Text>
                <Text style={styles.titleFine}>Entrez vos différents informations</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator contentContainerStyle={{padding:20,}}>
                <Input
                    text="Nom"
                    name="firstname" 
                    placeholder="Entrez votre nom"
                    control={control}
                    errors={ errors.firstname?.message}
                 />

                <Input
                    text="Prénom"
                    name="lastname" 
                    placeholder="Entrez votre Prénom" 
                    control={control}
                    errors={errors.lastname?.message}
                    
                 />

                 <Input
                    text="Date de naissance"
                    name="birthdate" 
                    placeholder="23/01/2002" 
                    control={control}
                    errors={errors.birthdate?.message}
                />
                 <Input
                    text="Occupation"
                    name="occupation" 
                    placeholder="Entrez votre occupation" 
                    control={control}
                    errors={errors.occupation?.message}
                />
                
                <Button title="S'inscrire" onPress={handleSubmit(onSubmit)} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5FCFF",
    },
    title:{
        fontSize: 30,
        fontFamily: 'Poppins-Bold',
        letterSpacing: 1.5,
        color: Colors.black,
    },
    titleFine:{
        fontSize: 18,
        fontFamily: 'Poppins-Regular',
        color: 'rgba(0, 0, 0,0.5)',
        letterSpacing: 1.5,
    },

});

export default Signup;