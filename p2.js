function SimplePassword(str){
    var hasletter = /[A-Z]/.test(str);
    var hasNumber = /\d/.test(str);
    var hasSymbol = /[^\w\s]/.test(str);
    var notPassword = !/password/i.test(str);
    var isLengthValid = str.length > 7 && str.length <31 ;

    if(hasletter && hasNumber && hasSymbol && notPassword && isLengthValid){
        return "true";
    }else{
        return "false";
    }
}

console.log(SimplePassword("passwordapple!M7"));
console.log(SimplePassword("apple!M7"));