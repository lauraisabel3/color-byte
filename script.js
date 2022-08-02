// let img = document.getElementById('main__img');



let input = document.getElementById('comment__input').value;

console.log('input',input);


async function fetchImgs() {
  let containerImgs =  document.querySelector("#slider");
  const response = await fetch('https://picsum.photos/v2/list?page=2&limit=100');
  const json = await response.json();
  const imgs = await json.map(el => {
    // img.src = el.download_url;
    let img = document.createElement("img");
    img.src = el.download_url;
    img.width = el.width;
    img.height = el.height;
    
    console.log(img.width)
    containerImgs.appendChild(img)
  }
  )
}


let container = document.getElementById('comments__container');

let comment = document.getElementById('comment');

const getComment = () => {
  let inputValue = document.getElementById('comment__input').value;
  let newComment = document.createElement("p")
  let text = document.createTextNode(inputValue);
  
  newComment.appendChild(text)
  console.log('type', typeof newComment, newComment)
  container.appendChild(newComment)

}

let commentButton = document.getElementById("comment__button");
commentButton.addEventListener("click", getComment)
fetchImgs()

