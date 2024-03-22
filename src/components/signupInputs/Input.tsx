import React from "react";
import { useForm } from "react-hook-form";
import { StyleSheet, Text, TextInput } from "react-native";
import { View } from "react-native-animatable";

type InputProps = {
    name: string;
    placeholder: string;
    onChangeText: (value: string) => void;
};
const Input  = ({name, placeholder, onChangeText} : InputProps) : React.JSX.Element => {


    return (
        <View style={styles.container}>
            <Text>
                {name}
            </Text>

            <TextInput
                style={styles.textInput}
                placeholder={placeholder}
                onChangeText={onChangeText}
             />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
    textInput: {},
});

export default Input;