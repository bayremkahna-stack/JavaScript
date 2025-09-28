let count = 0; // Initialize count to 0
function increaseCount(){
    count++;
    DisplayCount();
    checkCountValue();
}

function DisplayCount(){
    document.getElementById('countDisplay').innerHTML = count;
}
function checkCountValue(){
    if(count === 10){
        alert("Your instagram post 10 follower! Congratulations!") ;   }
        else if (count === 20){
            alert("Your instagram post gained 20 followers! keep it up");
        }
    }