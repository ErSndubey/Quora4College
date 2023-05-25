function updateElementClass() {
    var element = document.getElementById('mid-col');
    if (window.innerWidth < 992) {
        element.classList.remove('col-6');
        element.classList.add('col');
    } else {
        element.classList.add('col-6');
        element.classList.remove('col');
    }
}