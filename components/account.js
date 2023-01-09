const auth = firebase.auth()
const database = firebase.database()

//register
function register() {
    //get all input fields
    email = document.getElementById('email').value
    username = document.getElementById('username').value
    password = document.getElementById("password").value

    //validate email and username
    if (validate_email(email) == false || validate_password(password) == false) {
        alert("Email or password are not valid")
        return
    }
    if (validate_field(username) == false) {
        alert("Username are not valid")
        return
    }

    auth.createUserWithEmailAndPassword(email, password)
    .then(function() {

        var user = auth.currentUser

        var database_ref = database.ref()

        var user_data = {
            email: email,
            username: username,
            last_login: Date.now()
        }

        database_ref.child('users/' + user.uid).set(user_data)

        alert("User created")

    })
    .catch(function(error) {
        var error_code = error.code
        var error_message = error.message

        alert(error_message)
    })
}

//login
function login() {
    email = document.getElementById('email').value
    password = document.getElementById("password").value

    if (validate_email(email) == false || validate_password(password) == false) {
        alert("Email or password are not valid")
        return
    }

    auth.signInWithEmailAndPassword(email, password)
    .then(function() {

        var user = auth.currentUser

        var database_ref = database.ref()

        var user_data = {
            last_login: Date.now()
        }

        database_ref.child('users/' + user.uid).update(user_data)

        alert("User created")

    })
    .catch(function(error) {
        var error_code = error.code
        var error_message = error.message

        alert(error_message)
    })
}


function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
        //validate email
        return true
    } else {
        //unvalidate email
        return false
    }
}

function validate_password(password) {
    if (password < 6) {
        return false
    } else {
        return true
    }
}

function validate_field(field) {
    if (field == null) {
        return false
    }

    if (field.length <= 0) {
        return false
    } else {
        return true
    }
}