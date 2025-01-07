$("#operation").click(function () { 
    const number1 = $("#number1").val();
    if(number1.replace(/\s/g, "") == "" || isNaN(number1)){
        alert("첫번째 숫자를 입력해주세요.");
        $("#number1").val("");
        $("#number1").focus();
        return;
    }

    const number2 = $("#number2").val();
    if (number2.replace(/\s/g,"")=="" || isNaN(number2)) {
        alert("두번째 숫자를 입력해 주세요.");
        $("#number2").val("");
        $("#number2").focus();
        return;
    }
    
    const symbol = $("#symbol > option:selected").val();
    let result;

    switch (symbol) {
        case "+":
            result = parseInt(number1) + parseInt(number2);
            break;
        case "-":
            result = parseInt(number1) - parseInt(number2);
            break;
        case "*":
            result = parseInt(number1) * parseInt(number2);
            break;
        case "/":
            result = parseInt(number1) / parseInt(number2);
            if(!isFinite(result)){
                $("#result").val("0으로 나눌 수 없습니다");
                return;
            }
            break;
        default:
            break;
    }

    $("#result").val(result);

});

$("#plusBtn").on("click", function () {
    const pattern = /[^\d]+/g;
    let temp, total = 0;

    let number3 = $("#number3").val();
    if(number3.replace(/\s/g,"")=="" || pattern.test(number3)){
        alert("첫번째 숫자를 입력해 주세요.");
        $("#number3").val("");
        $("#number3").focus();
        return;
    }
    let number4 = $("#number4").val();
    if (number4.replace(/\s/g,"")=="" || pattern.test(number4)) {
        alert("두번째 숫자를 입력해 주세요.");
        $("#number4").val("");
        $("#number4").focus();
        return;
    }
    number3 = parseInt(number3);
    number4 = parseInt(number4);

    if (number3 < number4) {
        temp = number3;
        number3 = number4;
        number4 = temp;
    }

    for (let i = 1; i <= number4; i++) {
        total += number3;
    }
    $("#area").val(total);
});

$("#joinBtn").on("click", function(){
    if($("#userId").val().replace(/\s/g, "") == ""){
        alert("아이디는 필수 항목입니다");
        $("#userId").val("");
        return;
    }
    if($("#userName").val().replace(/\s/g, "") == ""){
        alert("이름은 필수 항목입니다");
        $("#userName").val("");
        return;
    }
});

$(".inputData").on("focusout", function(){
    if($(this).val().replace(/\s/g, "") == ""){
        $(this).next().html($(this).prev().html() +"는 필수항목입니다");
        return;
    }
});
$(".inputData").on("focusin", function () {
    $(this).next().html("");
});
    
$("p").on({
    mouseenter:function(){
        $(this).css("background-color", "lightgray");
    },
    mouseleave: function(){
        $(this).css("background-color", "lightblue");
    },
    click: function(){
        $(this).css("background-color", "yellow");
    }
});