document.addEventListener('click', function (event) {
    console.log(event.target.tagName)
    console.log(event.target.id)
    if(event.target && event.target.tagName == 'BUTTON'){

        
        const nextPage = event.target.getAttribute('data-page');
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => page.classList.remove('active'));
        document.getElementById(`${nextPage}-page`).classList.add('active');

    }
});