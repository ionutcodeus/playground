const shareButton = document.getElementById("share-button");
const shareBar = document.getElementById("share-bar");
const arrow = document.querySelector('.arrow-down');

shareBar.style.display = "none";
arrow.style.display ="none";

shareButton.onclick = function(){
    if(shareBar.style.display === 'none' && arrow.style.display === 'none'){
        shareBar.style.display = "block";
        arrow.style.display ="block";
    } else if(shareBar.style.display === 'block' && arrow.style.display === 'block'){
        shareBar.style.display = "none";
        arrow.style.display ="none";
    }
}