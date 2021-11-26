//capture necessary DOM elements
const ctaButton = document.getElementById('cta-button');
const welcomeContainer = document.getElementById('welcome-container');
const usersContainer = document.getElementById('users-container');
const cardGroup = document.getElementById('card-group');
const loadingContainer = document.getElementById('loadingContainer');


//declare empty string to later be used for HTML insertion into DOM
let userString = '';
//declare null variable to be used later to hold parsed JSON
let userList = null;

//array can be used to store each user from the fetched object
let userArray = [];

//when cta-button is clicked, will make api call to GitHub Users API
ctaButton.addEventListener('click', apiCall);

function apiCall() {
    //hide welcome page
    welcomeContainer.style.display = 'none';

    //display
    loadingContainer.style.display = 'block';

    //creates xhr object and sends request/recieves response from server
    //simulates longer load times/return trips from server with data

    setTimeout(() => {
        //make connection to GitHub api with xhr object
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users', true);
    
        xhr.onload = function(){
            if(this.status == 200)
            {
                //parse response JSON text into an array object
                userList = JSON.parse(this.responseText);
                
                //convert response object to array
                userList.forEach(user => {
                    userArray.push(user);
                });

                //creat output string with new user array
                creatUserOutputString(userArray);
            }
    
            //insert HTML block into this container for insertion into the DOM
            cardGroup.innerHTML = userString;

            //hide the loading spinner
            loadingContainer.style.display = 'none';

            //display the container with the newly processed HTML
            usersContainer.style.display = 'block';
        }
        //error handling
        xhr.onerror = () => console.log('Request Error');
    
        //send the http request
        xhr.send();
    }, 1750)
}

//function creates the HTML DOM output from the user array
function creatUserOutputString(userArrayIn)
{
    //loops through each user array object and retrives desired information
    //and places it into the output string along with the necessary HTML
    userArrayIn.forEach(user => {
        userString += `
        <div class="card col-sm-4" style="width: 10rem; margin: 60px .63em 0 .63em;">
            <img class="card-img-top" src="${user.avatar_url}" alt="user avatar">
            <div class="card-body">
                <p class="card-title">Username: ${user.login}</p>
                <p class="card-text">ID: ${user.id}</p>
            </div>
        </div>
        `;
        // <div class='users'>
        //     <img src='${user.avatar_url}'/>
        //     <ul>
        //         <li>Username: ${user.login}</li>
        //         <li>ID: ${user.id}</li>
        //         <li>Github Page: ${user.html_url}</li>
        //     </ul>
        // </div>
        
    });
}