function validateForm() {
    // Validate first name
    const firstName = document.getElementById('first-name').value;
    const namePattern = /^[A-Za-z]+$/;
    if (!namePattern.test(firstName)) {
        alert('First name should contain only alphabets.');
        return false;
    }

    // Validate last name
    const lastName = document.getElementById('last-name').value;
    if (!namePattern.test(lastName)) {
        alert('Last name should contain only alphabets.');
        return false;
    }

    // Validate phone number
    const phone = document.getElementById('phone').value;
    const phonePattern = /^[6-9]\d{9}$/;
    if (!phonePattern.test(phone)) {
        alert('Phone number should start with 6-9 and contain exactly 10 digits.');
        return false;
    }

    return true;
}