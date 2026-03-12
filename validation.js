export function validateForm(data) {
    console.log("Server side validation happens here");
    console.log(data);

// store error msg
const errors = [];

// validate first name
if (!data.fname || data.fname.trim() == "") {
    errors.push("First name is required.");
}
// validate last name
if (!data.lname || data.lname.trim() == "") {
    errors.push("Last name is required. ")
}
//validate method (pick up or delivery)
const validMethods = ['pickup', 'delivery'];
if (!validMethods.includes(data.method)) {
    errors.push("Method must be pick up or delivery.");
}
// validated pizza size (small, medium or large)
const validSizes = ['small', 'medium', 'large'];
if (!validSizes.includes(data.size)) {
    errors.push("Size must be small, medium or large. ")
}

// validate email
if (!data.email || data.email.trim() =="") {
    errors.push("Email is required. ")
}
console.log(errors);
return {
    isValid: errors.length === 0,
    errors
};
}