
export const validationContact = (name, value) => {

    let errMessage = '';
    switch (name) {
        case 'name':
            if (!value.trim()) {
                errMessage = 'Name is required.'
            } else if (value.length < 2) {
                errMessage = 'Name must be at least 2 characters.'
            } else if (value.length > 50) {
                errMessage = 'Name must be no more than 50 characters.'
            } else if (!/\p{L}/u.test(value)) {
                errMessage = 'Name must contain at least one letter.'
            } else if (!/^[\p{L}\p{N}\s-]+$/u.test(value)) {
                errMessage = 'Name cannot contain special characters.'
            }
            break
        case 'email':
            if (!value.trim()) {
                errMessage = 'Email is required.'
            } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
                errMessage = 'Invalid email format (e.g., abc@example.com).'
            }

            break;
        default:
            if (!value.trim()) {
                errMessage = 'Message is required.'
            } else if (value.length > 1000) {
                errMessage = 'Message cannot exceed 1000 characters.'
            }
            break;
    }

    return errMessage;
}