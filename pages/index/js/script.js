window.onload = function () {

    document.addEventListener("DOMContentLoaded", function (event) {
        document.querySelectorAll('img').forEach(function (img) {
            img.onerror = function () { this.style.display = 'none'; };
        })
    });

    const toggle = document.getElementById('Open');
    const sidebar = document.getElementById('sidebar-menu');

    toggle.onclick = function () {
        toggle.classList.toggle('sidebar-active');
        sidebar.classList.toggle('sidebar-active');
    }

    document.onscroll = function () { closeSidebar(); }

    document.onclick = function (event) {
        var target = event.target;
        if (target.getAttribute('id') != 'Open' && target.getAttribute('id') != 'sidebar-menu') {
            closeSidebar();
        }
    }

    function closeSidebar() {
        toggle.classList.remove('sidebar-active');
        sidebar.classList.remove('sidebar-active');
    }


    showImage(0)  
    showImage2(0) 
    showImage3(0) //запуск функцій при першому завантажені 
}


function handleFormSubmit(event) {
    event.preventDefault(); // prevent the form from submitting
    // collect the form data
    var formData = {
        name: document.querySelector(".form__name").value,
        email: document.querySelector(".form__email").value,
        theme: document.querySelector(".form__message").value,
        message: document.querySelector(".form__text").value
    };

    fetch("http://localhost:3000/send-email", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
        "Content-Type": "application/json"
    }
})

}