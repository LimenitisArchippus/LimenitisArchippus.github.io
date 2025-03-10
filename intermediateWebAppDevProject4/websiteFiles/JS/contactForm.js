"use strict";
//import { get } from "jquery";
function getElement(selector) {
    const element = $(selector);
    return element;
}
const displayErrorMsgs = (msgs) => {
    // create a new ul element
    const ul = document.createElement("ul");
    ul.classList.add("messages");
    // create a new li element for each error message, add to ul
    for (let msg of msgs) {
        const li = document.createElement("li");
        const text = document.createTextNode(msg);
        li.appendChild(text);
        ul.appendChild(li);
    }
    // if ul node isn't in document yet, add it
    const node = document.querySelector("main ul");
    if (node == null) {
        // get the form element 
        const form = document.querySelector("form");
        // add ul to parent of form, before the form
        if (form != null)
            if (form.parentNode != null)
                form.parentNode.insertBefore(ul, form);
    }
    else {
        // replace existing ul node
        if (node.parentNode != null)
            node.parentNode.replaceChild(ul, node);
    }
};
const processEntries = () => {
    var _a, _b;
    // get form controls to check for validity
    console.log("works");
    const email = getElement("#email_address");
    const phone = getElement("#phone");
    const firstName = getElement("#first_name");
    const lastName = getElement("#last_name");
    const country = getElement("#country");
    const terms = getElement("#terms");
    const state = getElement("#state");
    const zip = getElement("#zip");
    // create array for error messages
    const msgs = [];
    // check user entries for validity
    if (email === null) {
        throw new Error("Email is null");
    }
    else if (email.val() === undefined) {
        msgs.push("Please enter an email address.");
    }
    else if (((_a = email.val()) === null || _a === void 0 ? void 0 : _a.toString().match(/[@]/)) == null) {
        msgs.push("Your email adress must include an @");
    }
    else if (((_b = email.val()) === null || _b === void 0 ? void 0 : _b.toString().match(/[.]/)) == null) {
        msgs.push("Your email adress must include a Period");
    }
    if (phone == null) {
        throw new Error("Phone is null");
    }
    else if (phone.val() === "") {
        msgs.push("Please enter a mobile phone number.");
    }
    if (firstName == null) {
        throw new Error("First Name is null");
    }
    else if (firstName.val() === "") {
        msgs.push("Please enter your First Name.");
    }
    if (lastName == null) {
        throw new Error("Last Name is null");
    }
    else if (lastName.val() === "") {
        msgs.push("Please enter your Last Name.");
    }
    if (country == null) {
        throw new Error("Country is null");
    }
    else if (country.val() === "") {
        msgs.push("Please select a country.");
    }
    if (state == null) {
        throw new Error("state is null");
    }
    else if (state.val() === "") {
        msgs.push("Please enter your state.");
    }
    if (zip == null) {
        throw new Error("Zip is null");
    }
    else if (zip.val() === "") {
        msgs.push("Please enter your zip code");
    }
    if (terms == null) {
        throw new Error("terms is null");
    }
    else if (!terms.prop("checked", true)) {
        msgs.push("You must agree to the terms of service.");
    }
    // submit the form or notify user of errors
    if (msgs.length === 0) { // no error messages
        const form = getElement("form");
        if (form != null)
            form.trigger("submit");
    }
    else {
        displayErrorMsgs(msgs);
    }
};
const resetForm = () => {
    const form = getElement("form");
    if (form != null)
        form.trigger("reset");
    // remove error messages if any
    const ul = getElement("main ul");
    if (ul !== null)
        ul.remove();
    const email = getElement("#email_address");
    if (email != null)
        email.focus();
};
const testFunction = () => {
    console.log("works");
};
jQuery(function () {
    getElement("#register").on("click", processEntries);
    //registerBtn.trigger("click");
    $("#reset_form").on("click", resetForm);
    $("#email_address").trigger("focus");
});
