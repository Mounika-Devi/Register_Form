document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector("#form");
    var nam = document.querySelector("#uname");
    var age = document.querySelector("#age");
    var email = document.querySelector("#email");
    var course = document.querySelector("#course");
    var dataTable = document.querySelector("#data-table tbody");

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (validateInputs()) {
            addRow();
        }
    });

    function validateInputs() {
        var namev = nam.value.trim();
        var agev = age.value.trim();
        var emailv = email.value.trim();
        var coursev = course.value.trim();
        var isValid = true;

        if (namev === '') {
            setError(nam, "Name is required");
            isValid = false;
        } else {
            setSuccess(nam);
        }

        if (agev === '') {
            setError(age, "Age is required");
            isValid = false;
        } else if (agev <= 0 || isNaN(agev)) {
            setError(age, "Please enter a correct age");
            isValid = false;
        } else {
            setSuccess(age);
        }

        if (coursev === '') {
            setError(course, "Course is required");
            isValid = false;
        } else {
            setSuccess(course);
        }

        if (emailv === '') {
            setError(email, "Email is required");
            isValid = false;
        } else if (!validateEmail(emailv)) {
            setError(email, "Please enter a valid email");
            isValid = false;
        } else {
            setSuccess(email);
        }

        return isValid;
    }

    function setError(element, message) {
        var inputGroup = element.parentElement;
        var errorElement = inputGroup.querySelector('.error');

        errorElement.innerText = message;
        inputGroup.classList.add('Error');
        inputGroup.classList.remove('Success');
    }

    function setSuccess(element) {
        var inputGroup = element.parentElement;
        var errorElement = inputGroup.querySelector('.error');

        errorElement.innerText = '';
        inputGroup.classList.add('Success');
        inputGroup.classList.remove('Error');
    }

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    function addRow() {
        var namev = nam.value.trim();
        var agev = age.value.trim();
        var emailv = email.value.trim();
        var coursev = course.value.trim();

        var newRow = dataTable.insertRow();

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);

        cell1.innerText = namev;
        cell2.innerText = agev;
        cell3.innerText = emailv;
        cell4.innerText = coursev;

        form.reset();
    }
});
