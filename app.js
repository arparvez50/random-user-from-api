let avatar_link = 'https://robohash.org/'
let user_link = 'https://jsonplaceholder.typicode.com/users/'
let randomUserBtn = document.getElementById('create_user_btn')
let randomUserId = Math.ceil(Math.random() * 10)






randomUserBtn.addEventListener('click', function (e) {
    // console.log(randomUserId);
    let randomUserId = Math.ceil(Math.random() * 10)
    fetch(`${user_link}${randomUserId}`)
        .then(rawData => rawData.json())
        .then(data => {
            // console.log(data);
            document.getElementById('username').innerText = data.name
            document.getElementById('email').innerText = data.email
            document.getElementById('phone').innerText = data.phone
            document.getElementById('avatar_image').src = `${avatar_link}/${data.name}`
        })


})