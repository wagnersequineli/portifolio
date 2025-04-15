let position = 0;

const free = document.getElementById('free');

function moveFree() {
   if (position <300){
    position += 2
    free.style.left = position + `px` ;
    requestAnimationFrame(moveFree);
   }else{
    position = 0
   }
}
moveFree();