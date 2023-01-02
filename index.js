var mykey = config.ACCESS_KEY

const url = `https://api.unsplash.com/photos/random?count=3&orientation=landscape&client_id=${mykey}`

// axios.get(url)
//     .then(response => {
//         // console.log(response.data.urls.regular)
//         document.getElementById('imgslide1').src = response.data[0].urls.regular
//         document.getElementById('imgslide2').src = response.data[1].urls.regular
//         document.getElementById('imgslide3').src = response.data[2].urls.regular

//         document.getElementById('user1').textContent = response.data[0].user.name
//         document.getElementById('user2').textContent = response.data[1].user.name 
//         document.getElementById('user3').textContent = response.data[2].user.name 
//     })
//     .catch(error => {
//         console.log(error)
//     })