//highlight active page in the navbar
    var path = window.location.pathname;
    var page = path.split("/").pop();

    switch (page) {
        case "home.html":
            var element = document.getElementById("nav-link-home");
            element.classList.add("nav-pill-active");
            break;

        case "menu.html":
            var element = document.getElementById("nav-link-menu");
            element.classList.add("nav-pill-active");
            break;

        case "contactus.html":
            var element = document.getElementById("nav-link-contactus");
            element.classList.add("nav-pill-active");
            break;
    }

//form validation
    function submitForm() {
        //get form inputs
        var name = document.getElementById("inputName").nodeValue;
        var email = document.getElementById("inputEmail").nodeValue;
        var phone = document.getElementById("inputPhone").nodeValue;

        if (name != "" && email != "" && phone != "") {
            alert("Form submitted!\nsick");
        }
        else {
            alert("Please fill out all form fields!");
        }
    }