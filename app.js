// DECLARATION VARIABLES

let shareBtn = document.querySelector('.div-share-btn');
let sharingDiv = document.querySelector('.sharing');

shareBtn.addEventListener('click', function(){
    if(sharingDiv.style.display === 'none'){
        sharingDiv.style.display = 'flex';
    }else{
        sharingDiv.style.display = 'none';
    }

    // sharingDiv.classList.toggle('active');


});