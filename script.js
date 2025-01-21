document.addEventListener('click', function (event) {
    console.log(event.target.tagName)
    console.log(event.target.id)
    if(event.target && (event.target.tagName == 'BUTTON' || event.target.tagName == 'LI')){
        const nextPage = event.target.getAttribute('data-page');
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => page.classList.remove('active'));
        document.getElementById(`${nextPage}-page`).classList.add('active');

    }
});

const $list = document.querySelectorAll('li');

function activateLink(){
    $list.forEach(($li) => {
        $li.classList.remove('active')
    });
    this.classList.add('active');
}
function deactivateLink(){
    $list.forEach(($li) => {
        $li.classList.remove('active')
    });
} 

$list.forEach(($li) => {
    $li.addEventListener('click', activateLink);
    $li.addEventListener('mouseenter', activateLink);

});
