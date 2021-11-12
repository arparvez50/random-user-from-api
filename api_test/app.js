let loadBtn = document.getElementById('load-btn')
let reloadBtn = document.getElementById('reload-btn')
let posts = document.getElementById('posts')
let myUrl = 'https://jsonplaceholder.typicode.com/users'


loadBtn.addEventListener('click', function() {
    fetch(myUrl)
    .then(rawData => rawData.json())
    .then(pureData => {
        // posts.appendChild(genLi(ele))
        pureData.forEach((ele,ind) => {
            // posts.appendChild(genLi(ele))
            // document.getElementById('name').innerHTML = ele.name
            // document.getElementById('email').innerHTML = ele.email
            // document.getElementById('phone').innerHTML = ele.phone
            // console.log(ind);
            if(ind == randomNumber){
                document.getElementById('name').innerHTML = ele.name
                document.getElementById('email').innerHTML = ele.email
                document.getElementById('phone').innerHTML = ele.phone
            }
        })
       
    })
})
reloadBtn.addEventListener('click',function(){
    location.reload()
})

// function genLi(data){
//     let li = document.createElement('li')
//     li.className = 'list-group-item'
//     li.innerHTML = data.name

//     return li
// }

let randomNumber = Math.floor(Math.random() * 10)


// let profile = document.getElementById('profile')
// let name = document.getElementById('name')
// let email = document.getElementById('email')
// let phone = document.getElementById('phone')