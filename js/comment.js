const comment = document.getElementById('comment');
const buttonComment = document.getElementById('buttonComment');
const allComment = document.getElementById('allComment');

console.log(comment.value)

const addComment = ()=>{
    if(comment.value!= ''){
        const h4 = document.createElement('h4');
        h4.innerHTML = 'comment ';
        h4.classList.add('comment__text')
        const span = document.createElement('span');
        span.innerHTML = comment.value;
        span.classList.add('comment__text--comment')
        h4.appendChild(span)
        allComment.appendChild(h4)
        comment.value = ('')
    }
}

buttonComment.addEventListener('click', addComment)