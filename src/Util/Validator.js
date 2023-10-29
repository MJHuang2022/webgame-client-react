const validate = (property, schema) => {
    if (!schema) {
        return {isValid: true, errorReson: ""};
    }

    const {error} = schema.validate(property);
    if (error) {
        return {isValid: false, errorReson: error.details[0].message};
    }

    return {isValid: true, errorReson: ""};
}

export default validate;