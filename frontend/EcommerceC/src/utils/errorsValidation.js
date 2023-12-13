export const getValidationErrorMessage = (fieldName, errorType) => {
    switch (errorType) {
        case 'required':
            return `${fieldName} is required`;
        case 'minLength':
            return `Min length required for ${fieldName} is 8`;
        case 'maxLength':
            return `Max length possible for ${fieldName} is 50`;
        default:
            return '';
    }
};