async function fetchImgs() {
  let containerImgs =  document.querySelector("#slider");
  const response = await fetch('https://picsum.photos/v2/list?page=2&limit=100');
  const json = await response.json();
  const imgs = await json.map(el => {
    let img = document.createElement("img");
    img.src = el.download_url;
    img.classList.add('swiper-slide');
   
    containerImgs.appendChild(img);
  }
  )
}

fetchImgs()

let icon = document.getElementById('icon__like');
const changeColorIcon = () => {
  if (icon.classList.contains('icon__like-white')) {
    icon.classList.replace('icon__like-white', 'icon__like-red')
  } else {
    icon.classList.replace('icon__like-red', 'icon__like-white')
  }
}
icon.addEventListener('click', changeColorIcon)



let container = document.getElementById('comments__container');

const getComment = () => {
  let inputValue = document.getElementById('comment__input').value;
  let newComment = document.createElement("p")
  let text = document.createTextNode(inputValue);
  
  newComment.appendChild(text);
  newComment.textContent != "" && container.appendChild(newComment);

  let input = document.getElementById('comment__input');
  input.value = '';
}

let commentButton = document.getElementById("comment__button");
commentButton.addEventListener("click", getComment)


