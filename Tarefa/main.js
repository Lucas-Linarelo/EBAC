document.addEventListener('DOMContentLoaded', function(){

const nameElement = document.querySelector('#name');
const userNameElement = document.querySelector('#username');
const avatarElement = document.querySelector('#avatar');
const resposElement = document.querySelector('#reps');
const followersElement = document.querySelector('#f-ers');
const followingElement = document.querySelector('#f-ing');
const LinkElement = document.querySelector('#link');

fetch('https://api.github.com/users/ogiansouza')
.then(function(resposta){
    return resposta.json();
})
.then(function(json){
    nameElement.innerText = json.name;
    userNameElement.innerText = json.login;
    avatarElement.src = json.avatar_url;
    resposElement.innerText=json.public_repos;
    followersElement.innerText = json.followers;
    followingElement.innerText=json.following;
    LinkElement.href=json.html_url;
})
});