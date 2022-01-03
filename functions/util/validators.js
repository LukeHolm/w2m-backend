const isEmail = (email) => {
    const regEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(email.match(regEx)) return true;
    else return false;
};

 const isEmpty = (string) => {
     if(string.trim() === '') return true;
     else return false;
};

exports.validateSignupData = (data) => {

    let errors = {};
    if(isEmpty(data.email)) {
        errors.email = 'Can not be empty'
    } else if(!isEmail(data.email)){
        errors.email = 'Must be a valid email address'
    };

    if(isEmpty(data.password)) errors.password = 'Can not be empty';
    if(data.password !== data.confirmPassword) errors = 'Passwords must match';
    if(isEmpty(data.handle)) errors.handle = 'Can not be empty';

    return {
        errors,
        valid: Object.keys(errors).length === 0 ? true : false
    }

};


exports.validateLoginData = (data) => {
    let errors = {};

    if(isEmpty(user.email)) errors.email = 'Must not be empty';
    if(isEmpty(user.password)) errors.password = 'Must not be empty';
    
    return {
        errors,
        valid: Object.keys(errors).length === 0 ? true : false
    }
};