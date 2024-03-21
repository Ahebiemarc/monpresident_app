import React from "react";
import { Resolver, useForm } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";
import { IElector } from "../interfaces/interfaces";

// Définition du type pour les valeurs du formulaire
type FormValues = Partial<IElector>;


const Signup = () => {

    const {register, handleSubmit} = useForm<FormValues>();

    return (
        <View style={styles.container} >
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    },

});

export default Signup;