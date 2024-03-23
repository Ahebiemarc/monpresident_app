import React from "react";
import { Control, FieldErrors, useController } from "react-hook-form";
import { StyleSheet, Text, TextInput } from "react-native";
import { View } from "react-native-animatable";
import { Colors } from "../../constants/colors/Colors";
import { IElector } from "../../interfaces/interfaces";

type InputProps = {
    text: string;
    name: any;
    placeholder: string;
    control: Control<IElector>;
    errors?: string | undefined;
};
function Input ({text, name, placeholder, control, errors}: InputProps) {

    const {field} = useController({
        control,
        defaultValue: '',
        name,
    });

    


    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {text}
            </Text>

            <TextInput
                style={styles.textInput}
                placeholder={placeholder}
                value={field.value}
                onChangeText={field.onChange}
                //onBlur={field.onBlur}
             />

             <Text style={styles.errorText}>{errors}</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
    text: { 
        fontSize: 18,
        fontFamily: 'Poppins-Medium',
        letterSpacing: 1.5,
        color: Colors.black,
        marginTop: 10,
        //marginBottom: ,
    },
    textInput: {
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.1)',
        padding: 15,
        borderRadius: 8,
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
    },
    errorText: {
        color: 'red',
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
    },
});

export default Input;