function palindrome(str){
	str = str.toLowerCase();
    let ori = str.split(" ").join("");

    let rev = str.split(" ").join("").split("").reverse().join("");

    if(ori == rev){
        console.log("y");
        return true;
    }else{
        console.log("n");
        return false;
    }
}
module.exports = palindrome