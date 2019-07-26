export default class CommonHelper {
    // Auth validatrion
    authValidation = (name, value) => {
        let errors = {};
        switch (name) {
            case 'userName':
                errors.userName = value.length  && '';
                break;
            case 'password':
                errors.password = value.length  && '';
                break;
            case 'email':
                errors.email = value.length  && '';
                break;
            case 'referralCode':
                errors.referralCode = value.length  && '';
                break;
            default:
                break;
        }
        return errors;
    };
}
