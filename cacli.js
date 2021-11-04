const params = new URLSearchParams(document.location.search);
const a1 = params.get("a");
var a = parseInt(a1, 10);
const b1 = params.get("b");
var b = parseInt(b1, 10);
const c = params.get("exp");
var d = 0;
if (a == null || b == null || c == null){
    document.getElementById("result").innerHTML ="Error in Params";
}else{
    if (c == "plus"){
        d = a + b
        document.getElementById("result").innerHTML = d;
    }
    if (c == "sub"){
        d = a - b;
        document.getElementById("result").innerHTML = d;
    }
    if (c == "mul"){
        d = a * b
        document.getElementById("result").innerHTML = d;
    }
    if (c == "div"){
        d = a / b
        document.getElementById("result").innerHTML = d;
    }
    if (c == "mod"){
        d = a % b
        document.getElementById("result").innerHTML = d;
    }
}