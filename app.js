// https://randomuser.me/api/
var url = "https://randomuser.me/api/";
var btn = document.querySelector("#btn");
var avatar = document.querySelector('#avatar');
var fullnameDisp = document.querySelector('#fullname');
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var city = document.querySelector('#city');

btn.addEventListener('click', function(){
  fetch(url)
  .then(handleErrors)
  .then(parseJSON)
  .then(updateProfile)
  .catch(displayErrors)
});

function handleErrors(res){
  if(!res.ok){
    throw Error(res.status);
  }
  return res;
}

function parseJSON (res){
  return res.json().then(function(parseData){
    return parseData.results[0];
  });
}

  function updateProfile (data){
    var fullname = data.name.first + " " + data.name.last;
    fullnameDisp.innerText = fullname;
    avatar.src = data.picture.medium;
    username.innerText = data.login.username;
    city.innerText = data.location.city;
    email.innerText = data.email;
  }

function displayErrors(err){
    console.log("Insidde displayErrors");
    console.log(err);
 }