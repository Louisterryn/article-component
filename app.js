// DECLARATION VARIABLES

let shareBtn = document.querySelector('.div-share-btn');
let sharingDiv = document.querySelector('.sharing');
let svg = document.querySelector('.share-btn');

shareBtn.addEventListener('click', function(){
    if(sharingDiv.style.display === 'none'){
        sharingDiv.style.display = 'flex';
        shareBtn.style.background = 'hsl(217, 19%, 35%)';
        svg.src = "images/icon-share white.svg";


    }else{
        sharingDiv.style.display = 'none';
        shareBtn.style.background = 'hsl(210, 46%, 95%)';
        svg.src = "images/icon-share.svg";
    }
});