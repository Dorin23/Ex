function DivisionStringified(num1,num2){
    var result = Math.round(num1/num2).toString();
    var formResult = "";
    var count = 0;

    for (var i = result.length - 1; i>=0 ; i--){
        formResult = result.charAt(i) + formResult;
        count++;

        if(count % 3 === 0 && i !== 0 ){
            formResult = "," + formResult;
        }
    }
    return formResult;
}

var num1 = 2;
var num2 = 3;
var result = DivisionStringified(num1, num2);
console.log(result);