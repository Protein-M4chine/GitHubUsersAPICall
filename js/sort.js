function sortByUsername(){
    //sort by username (login)
    userArray.sort(function(a, b){
        if(a.login.toLowerCase() < b.login.toLowerCase()){
            return -1;
        }
        if(a.login.toLowerCase() > b.login.toLowerCase()){
            return 1;
        }
        return 0;
    });

    //clear output string of existing content
    userString = '';

    //create new output sting from the user array
    creatUserOutputString(userArray);

    //display newly created output string of users to the DOM
    cardGroup.innerHTML = userString;
}

//function sorts the user array by id and redisplays the user list as such
function sortById(){
    //sort by id
    userArray.sort(function(a, b){
        if(a.id < b.id){
            return -1;
        }
        if(a.id > b.id){
            return 1;
        }
        return 0;
    });

    //clear output string of existing content
    userString = '';

    //create new output sting from the user array
    creatUserOutputString(userArray);

    //display newly created output string of users to the DOM
    cardGroup.innerHTML = userString;
}