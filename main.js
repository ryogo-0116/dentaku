let lastClickedIsOperator = false;

function clickButton(target) {
    let result = document.getElementById("result")
    let target_value = target.innerHTML;

    if (target_value == "AC") {
        result.innerHTML = "0";
        lastClickedIsOperator = false;
    } else if (target_value == "=") {
        result.innerHTML = eval(result.innerHTML)
        lastClickedIsOperator = false;
    } else {
        if (lastClickedIsOperator && isNaN(parseInt(target_value))) {
            return;
        }
        if (result.innerHTML == "0" || result.innerHTML == "00") {
            result.innerHTML = target_value;
        }  else {
            result.innerHTML += target_value;
        }
        lastClickedIsOperator = isNaN(parseInt(target_value));
       
    }
}