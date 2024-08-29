function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)    // try without "this" and ".call"
    
    this.email = email
    this.password = password
}

const chai = new createUser("youtube", "youtube@fb.com", "123")
console.log(chai);