"use strict";
function getContactElement(selector) {
    const element = $(selector);
    return element;
}
const displayContactErrorMsgs = (msgs) => {
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
        const form = document.querySelector("#contact_form");
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
const processContactEntries = () => {
    var _a, _b;
    // get form controls to check for validity
    console.log("works");
    const email = getContactElement("#contact_email_address");
    const phone = getContactElement("#contact_phone");
    const firstName = getContactElement("#first_name");
    const lastName = getContactElement("#last_name");
    const state = getContactElement("#state");
    const zip = getContactElement("#zip");
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
    // submit the form or notify user of errors
    if (msgs.length === 0) { // no error messages
        const form = getContactElement("form");
        if (form != null)
            form.trigger("submit");
    }
    else {
        displayContactErrorMsgs(msgs);
    }
};
const resetContactForm = () => {
    const contact_form = getContactElement("#contact_form");
    if (contact_form != null)
        contact_form.trigger("reset");
    // remove error messages if any
    const ul = getContactElement("main ul");
    if (ul !== null)
        ul.remove();
    const email = getContactElement("#contact_email_address");
};
jQuery(function () {
    getContactElement("#contact_register").on("click", processContactEntries);
    //registerBtn.trigger("click");
    $("#contact_reset_form").on("click", resetContactForm);
});
