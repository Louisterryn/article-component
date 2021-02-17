// DECLARATION VARIABLES

let shareBtn = document.querySelector('.div-share-btn');
let sharingDiv = document.querySelector('.sharing');
let sharingDivSmall = document.querySelector('.sharing-small');
let svg = document.querySelector('.share-btn');

shareBtn.addEventListener('click', function(){
    // Condition taille écran
    if(screen.width <= 1000){
        // Condition display du sharing
        if(sharingDivSmall.style.display === 'none'){
            sharingDivSmall.style.display = 'flex';
            shareBtn.style.background = 'hsl(214, 17%, 51%)';
            svg.src = "images/icon-share white.svg";
    
    
        }else{
            sharingDivSmall.style.display = 'none';
            shareBtn.style.background = 'hsl(210, 46%, 95%)';
            svg.src = "images/icon-share.svg";
        }
    }else{
        if(sharingDiv.style.display === 'none'){
            sharingDiv.style.display = 'flex';
            shareBtn.style.background = 'hsl(217, 19%, 35%)';
            svg.src = "images/icon-share white.svg";
        }else{
            sharingDiv.style.display = 'none';
            shareBtn.style.background = 'hsl(210, 46%, 95%)';
            svg.src = "images/icon-share.svg";
        }
    }
});