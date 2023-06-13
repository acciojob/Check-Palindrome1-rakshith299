// complete the given function

function palindrome(){

	let userInput = document.getElementById("input").value;

    let splitted = userInput.split(" ").join("");

    let stringrev = "";

    for(let i = splitted.length - 1; i > -1 ; i--){
        stringrev = stringrev + splitted.charAt(i);
    }



    if(splitted === stringrev){
        document.getElementById("ans").innerHTML = "true";
    }else{
        document.getElementById("ans").innerHTML = "false";
    }
}

module.exports = palindrome

