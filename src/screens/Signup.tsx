import React, { useRef, useState, useEffect } from "react";
import { Alert, Button, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IElector } from "../interfaces/interfaces";
import Input from "../components/signupInputs/Input";
import { Colors } from "../constants/colors/Colors";
import DatePicker from "../components/signupInputs/DatePicker";
import { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { IFormError, validateForm } from "../utils/errorInput";
import Select from "../components/signupInputs/Select";
import { TextInput } from "react-native";
import ImagePicer from "../components/signupInputs/ImagePicker";
import { RootStackScreenProps } from "../types/navigation/types";
import { createElector } from "../api/elector";

const Signup: React.FC<RootStackScreenProps<'Signup'>> = ({ navigation, route }) => {
    const [formData, setFormData] = useState<IElector>({
        cin: 'CI210009',
        firstname: 'Duran',
        lastname: 'Franck',
        birthdate: new Date(),
        gender: '',
        email: 'duran@gmail.com',
        phones: '0779770733',
        occupation: 'Ingénieur IA',
        image: '',
        address: 'monastir 4019',
        city: 'Monastir',
        country: 'Tunis',
        religion: 'chrétien',
        relationshipStatus: '',
    });

    const { photo } = route.params || {};
    const photoPath = photo?.path ?? '';
    const photoImg = photoPath?.split('/').pop() ?? '';
    //console.log(photoImg);

    const [formErrors, setFormErrors] = useState<IFormError>({});
    const cinRef = useRef<TextInput>(null);
    const firstnameRef = useRef<TextInput>(null);
    const lastnameRef = useRef<TextInput>(null);

    useEffect(() => {
        if (photoPath) {
            setFormData(prevState => ({ ...prevState, image: photoPath }));
        }
    }, [photoPath]);

    const handleInputChange = (name: keyof IElector, value: string | Date) => {
        setFormData({ ...formData, [name]: value });

        if (formErrors[name]) {
            setFormErrors({ ...formErrors, [name]: undefined });
        }
    }

    const handleSubmit = async () => {
        if (!formData.image) {
            Alert.alert('Erreur', 'Une photo est requise');
            return;
        }

        const formDataToSend = new FormData();
        formDataToSend.append('cin', formData.cin);
        formDataToSend.append('firstname', formData.firstname);
        formDataToSend.append('lastname', formData.lastname);
        formDataToSend.append('birthdate', formData.birthdate.toISOString());
        formDataToSend.append('gender', formData.gender);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('phones', formData.phones);
        formDataToSend.append('occupation', formData.occupation);
        formDataToSend.append('address', formData.address);
        formDataToSend.append('city', formData.city);
        formDataToSend.append('country', formData.country);
        formDataToSend.append('religion', formData.religion);
        formDataToSend.append('relationshipStatus', formData.relationshipStatus);
        formDataToSend.append('image', {
            uri: formData.image,
            type: 'image/jpeg',
            name: 'photo.jpg',
        });


        const response = await createElector(formDataToSend);
        Alert.alert('Message', response.message);
        if(response.message === 'Utilisateur créé avec succès; vous aurez la confirmation des autorités'){
          Alert.alert('Message', response.message);
          //navigation.navigate('LoginByCin');
        }else{
            Alert.alert('Message', response.message);
        }



        
    }

    const onChange = (event: DateTimePickerEvent, selectedDate: Date | undefined) => {
        if (event.type === 'set') {
            const currentDate = selectedDate || formData.birthdate;
            setFormData({ ...formData, birthdate: currentDate});

            if (Platform.OS === "android") {
                setFormData({ ...formData, birthdate: currentDate });
            }
        }
    };

    const handleNextField = (nextField: React.RefObject<TextInput> | null) => {
        if (nextField && nextField.current) {
            nextField.current.focus();
        }
    }

    const takePhoto = () => {
        navigation.navigate('CameraFace');
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ margin: 20 }}>
                <Text style={styles.title}>Enrollez vous pour l'élection</Text>
                <Text style={styles.titleFine}>Entrez vos différents informations</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator contentContainerStyle={{ padding: 20 }}>
                <ImagePicer onPress={takePhoto} />
                <View style={{ display: 'none' }}>
                    <Input
                        label="photo"
                        placeholder="aaaa.jpg"
                        
                        value={formData.image}
                        onChangeText={(text) => handleInputChange('image', text)}
                        errorMessage={formErrors.image}
                    />
                </View>
                <Input
                    ref={cinRef}
                    label="CIN"
                    placeholder="CI200009"
                    value={formData.cin}
                    onChangeText={(value) => handleInputChange('cin', value)}
                    errorMessage={formErrors.cin}
                    onSubmitEditing={() => handleNextField(firstnameRef)}
                />
                <Input
                    ref={firstnameRef}
                    label="Nom"
                    placeholder="Ali"
                    value={formData.firstname}
                    onChangeText={(value) => handleInputChange('firstname', value)}
                    errorMessage={formErrors.firstname}
                />
                <Input
                    ref={lastnameRef}
                    label="Prénom"
                    placeholder="Ouattara"
                    value={formData.lastname}
                    onChangeText={(value) => handleInputChange('lastname', value)}
                    errorMessage={formErrors.lastname}
                />
                <DatePicker
                    label="Date de naissance"
                    date={formData.birthdate}
                    valueText={format(formData.birthdate, 'dd/MM/yyyy', { locale: fr })}
                    onChangeText={(text) => handleInputChange('birthdate', text)}
                    onChange={onChange}
                    errorMessage={formErrors.birthdate}
                />
                <Select
                    label="Genre"
                    selectedValue={formData.gender}
                    onValueChange={(itemValue, itemIdex) => handleInputChange('gender', itemValue)}
                    items={[
                        { label: 'Homme', value: 'homme' },
                        { label: 'Femme', value: 'femme' }
                    ]}
                    errorMessage={formErrors.gender}
                />
                <Input
                    label="Email"
                    placeholder="test@example.com"
                    value={formData.email}
                    onChangeText={(text) => handleInputChange('email', text)}
                    errorMessage={formErrors.email}
                />
                <Input
                    label="Phone"
                    placeholder="0758454590"
                    value={formData.phones}
                    onChangeText={(text) => handleInputChange('phones', text)}
                    errorMessage={formErrors.phones}
                />
                <Input
                    label="Occupation"
                    placeholder="Ingénieur en cybersécurité"
                    value={formData.occupation}
                    onChangeText={(text) => handleInputChange('occupation', text)}
                    errorMessage={formErrors.occupation}
                />
                <Input
                    label="adresse"
                    placeholder="Cocody Avenue Dunkan"
                    value={formData.address}
                    onChangeText={(text) => handleInputChange('address', text)}
                    errorMessage={formErrors.address}
                />
                <Input
                    label="Ville"
                    placeholder="Munich"
                    value={formData.city}
                    onChangeText={(text) => handleInputChange('city', text)}
                    errorMessage={formErrors.city}
                />
                <Input
                    label="Pays"
                    placeholder="Allemagne"
                    value={formData.country}
                    onChangeText={(text) => handleInputChange('country', text)}
                    errorMessage={formErrors.country}
                />
                <Input
                    label="Religion"
                    placeholder="Chrétien"
                    value={formData.religion}
                    onChangeText={(text) => handleInputChange('religion', text)}
                    errorMessage={formErrors.religion}
                />
                <Select
                    label="Statut Matrimonial"
                    selectedValue={formData.relationshipStatus}
                    onValueChange={(itemValue, itemIdex) => handleInputChange('relationshipStatus', itemValue)}
                    items={[
                        { label: 'Marié', value: 'marié' },
                        { label: 'Divoré', value: 'divoré' },
                        { label: 'Célibataire', value: 'célibataire' },
                        { label: 'Veuf / Veuve', value: 'veuf / veuve' }
                    ]}
                />
            </ScrollView>
            <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={handleSubmit}>
                <Text style={styles.buttonText}>S'enregistrer</Text>
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
        backgroundColor: Colors.blueDark,
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    buttonText: {
        fontFamily: 'Poppins-Medium',
        fontSize: 18,
        textAlign: 'center',
        color: Colors.white,
        letterSpacing: 2,
    }
});

export default Signup;
