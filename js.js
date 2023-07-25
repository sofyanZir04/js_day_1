function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;//currentTime it is about sets or returns the current position
    audio.play();
}
function remove(e){
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    key.classList.remove('playing');
}

const background=()=>{
    const search = document.querySelector('#search').value;
    console.log(search);
    document.body.style.backgroundColor=search;
}

window.addEventListener('keydown',playSound);
window.addEventListener('keyup',remove)
