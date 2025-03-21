
//## ADD OR REMOVE WIP ICON
const wipIcons = document.querySelectorAll('.wip-icon')

wipIcons.forEach(icon =>{
const isWorkinprogress = icon.getAttribute('data-isWIP') === 'true';

if(isWorkinprogress){
    icon.classList.add('show');
} else {
    icon.classList.remove('show');
}
});