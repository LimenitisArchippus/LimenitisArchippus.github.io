"use strict";
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
        const form = document.querySelector("#quote_form");
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
    const phone = getElement("#phone_number");
    const make = getElement("#make");
    const model = getElement("#model");
    const year = getElement("#year");
    // create array for error messages
    const msgs = [];
    // check user entries for validity
    if (email === null) {
        throw new Error("Email is null");
    }
    else if (email.val() === undefined) {
        msgs.push("Please enter an email address.");
    }
    else {
        if (((_a = email.val()) === null || _a === void 0 ? void 0 : _a.toString().match(/[@]/)) == null) {
            msgs.push("Your email adress must include an @");
        }
        if (((_b = email.val()) === null || _b === void 0 ? void 0 : _b.toString().match(/[.]/)) == null) {
            msgs.push("Your email adress must include a Period");
        }
    }
    if (phone == null) {
        throw new Error("Phone is null");
    }
    else if (phone.val() === "") {
        msgs.push("Please enter a mobile phone number.");
    }
    if (make == null) {
        throw new Error("Make is null");
    }
    else if (make.val() === "") {
        msgs.push("Please enter the make of your motorcycle.");
    }
    if (model == null) {
        throw new Error("Model is null");
    }
    else if (model.val() === "") {
        msgs.push("Please enter the model of your motorcycle.");
    }
    if (year == null) {
        throw new Error("Year is null");
    }
    else if (phone.val() === "") {
        msgs.push("Please enter the year of your motorcycle.");
    }
    // submit the form or notify user of errors
    if (msgs.length === 0) { // no error messages
        const form = getElement("#quote_form");
        if (form != null)
            form.trigger("submit");
    }
    else {
        displayErrorMsgs(msgs);
    }
};
const resetForm = () => {
    const form = getElement("#quote_form");
    if (form != null)
        form.trigger("reset");
    // remove error messages if any
    const ul = getElement("main ul");
    if (ul !== null)
        ul.remove();
    const email = getElement("#email_address");
};
const testFunction = () => {
    console.log("works");
};
jQuery(function () {
    getElement("#register").on("click", processEntries);
    $("#reset_form").on("click", resetForm);
});
