
const grid = document.querySelector(".grid-container");

for(let x = 0; x < 4; x++){
    for(let y = 0; y < 5; y++){
        grid.children[y*4+x].onclick = function(){
            if (grid.children[y*4+x].innerHTML=='0'){
                grid.children[y*4+x].innerHTML=' ';
            }
            else{
                grid.children[y*4+x].innerHTML='0'
            }
        }
    }
}

function click(x, y){
    console.log(`${w},${h}`)
}


