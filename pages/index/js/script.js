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


}