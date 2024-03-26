import React, { forwardRef } from "react";
import { StyleSheet, Text, TextInput, TextInputProps } from "react-native";
import { View } from "react-native-animatable";
import { Colors } from "../../constants/colors/Colors";

interface InputProps extends TextInputProps  {
    label: string;
    value: string;
    placeholder: string;
    onChangeText: (text: string) => void;
    onSubmitEditing?: () => void;
    keyboardType?: 'default' | 'numeric'
    errorMessage?: string
};
const Input = forwardRef<TextInput, InputProps>((props, ref) =>{

    const {label, value, placeholder, onChangeText, keyboardType='default', errorMessage, onSubmitEditing, ...rest} = props;


    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                {label}
            </Text>

            <TextInput
                ref={ref}
                style={styles.textInput}
                autoCorrect={false}
                autoCapitalize="none"
                value={value}
                placeholder={placeholder}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                onSubmitEditing={onSubmitEditing}
             />

             <Text style={styles.errorText}>{errorMessage}</Text>

        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
    },
    label: { 
        fontSize: 18,
        fontFamily: 'Poppins-Medium',
        letterSpacing: 1.5,
        color: Colors.black,
        marginBottom: 5,
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
        marginTop: 5,
    },
});

export default Input;