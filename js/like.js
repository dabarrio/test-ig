const like = document.getElementById('like');

const addLike = ()=>{
        if(!like.classList.contains('liked')){
        like.classList.add('liked')
    } else{
        like.classList.remove('liked')
    }
}

like.addEventListener('click', addLike)