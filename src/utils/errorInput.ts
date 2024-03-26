import { IElector } from "../interfaces/interfaces";

export interface IFormError {
    firstname?: string;
    lastname?: string;
    birthday?: string;
    gender?: string;
    cin?: string;
    email?: string;
    phone?: string;
    occupation?: string;
    photo?: string;
    address?: string;
    city?: string;
    country?: string;
    religion?: string;
    relationshipStatus?: string;
}

export const  validateForm = (formData: IElector, setFormErrors:(errors: IFormError) => void) : boolean => {
    let errors: IFormError = {};
    if (!formData.firstname  || formData.firstname.trim().length === 0) {
        errors = {...errors, firstname : "Nom réquis"}
    }
    if (!formData.cin  || formData.cin.trim().length === 0) {
        errors = {...errors, cin : "CIN réquis"}
    }
    if (!formData.lastname  || formData.lastname.trim().length === 0) {
        errors = {...errors, lastname : "Prénom réquis"}
    }
    if (!formData.birthday || formData.birthday.toDateString().trim().length === 0) {
        errors = {...errors, birthday : "Date de naissance réquis"}
    }
    if (!formData.gender || formData.gender.trim().length === 0) {
        errors = {...errors, gender : "Genre réquis"}
    }
    if (!formData.phone ||  formData.phone.toString().trim().length === 0) {
        errors = {...errors, phone : "Numéro réquis"}
    }
    if (formData.phone && formData.phone.toString().trim().length !== 10) {
        errors = {...errors, phone : "Le numéro de téléphone doit contenir 10 chiffres"}
    }
    if (!formData.occupation || formData.occupation.trim().length === 0) {
        errors = {...errors, occupation : "Occupation réquis"}
    }
    if (!formData.photo || formData.photo.trim().length === 0) {
        errors = {...errors, photo : "Photo réquis"}
    }
    if (!formData.address || formData.address.trim().length === 0) {
        errors = {...errors, address : "Adresse réquis"}
    }
    if (!formData.city || formData.city.trim().length === 0) {
        errors = {...errors, city : "Ville réquis"}
    }
    if (!formData.country || formData.country.trim().length === 0) {
        errors = {...errors, country : "Pays réquis"}
    }
    if (!formData.religion || formData.religion.trim().length === 0) {
        errors = {...errors, religion : "Religion réquis"}
    }
    if (!formData.relationshipStatus || formData.relationshipStatus.trim().length === 0) {
        errors = {...errors, relationshipStatus : "Statut de la relation réquis"}
    }


    // Set errors and return validation result

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
}