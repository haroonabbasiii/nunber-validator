function checkValid(str)
{
    var regexp=/[0-9]{1} [0-9]{3} [0-9]{3} [0-9]{4}|[0-9]{1} [0-9]{3}[\-][0-9]{3}[\-][0-9]{4}|[0-9]{1} [\(][0-9]{3}[\)] [0-9]{3}[\-][0-9]{4}|[0-9]{10,16}|[0-9]{3}[\-][0-9]{3}[\-][0-9]{4}|[\(][0-9]{3}[\)][0-9]{3}[\-][0-9]{4}|[0-9]{1}[\(][0-9]{3}[0-9]{3}[\-][0-9]{4}|[0-9]{1} [0-9]{3} [0-9]{3} [0-9]{4}/;
    if(regexp.test(str))
    {
        return true;
    }
    else
    {
        return false;
    }
}

function run() {
    var intext = document.getElementById("in").value;
    alert(intext.charAt(0));
    check(intext.charAt(0));
}
function Main_ra() {
    var Str = document.getElementById("Number").value;
    if (checkValid(Str)) {
        document.getElementById("displaytext").innerText = "The Number is Correct";
        alert("The Number is Correct");
    }
    else {
        document.getElementById("displaytext").innerText = "The Number is Not Correct";
        alert("The Number is Not Correct");
    }
}