$.fn.showAlert = function () {
    if (this.val().replace(/\s/g, "") == "") {
        const con = this.parent().parent().find("label").eq(0).text();
        alert(con + "은(는) 필수 항목입니다");
        this.val("");
        return true;
    }
    return false; 
};

function conditioncheck(){
    let isInvalid = false; // 반복 종료를 위한 플래그

    $("input[type='text'], input[type='password']").each(function () {
        if($(this).showAlert()){
            isInvalid = true;
            return false;
        }
    });

    if (isInvalid) return;
    // 성별 체크
    if ($("input[name='gender']:checked").length === 0) {
        alert("성별은 필수 항목입니다");
        return;
    }

    // 취미 체크박스 체크
    if ($(".hobby_check:checked").length === 0) {
        alert("취미는 필수 항목입니다");
        return;
    }

    if (!$("#job").val()) {
        alert("직업은 필수 항목입니다");
        return;
    }

    return !isInvalid;
}

function showResult(){
    const formResult = $("#formResult");
    formResult.empty();

    formResult.css("display", "block");


    
    
    $("input[type='text'], input[type='password']").each(function () {
        const con = $(this).parent().parent().find("label").eq(0).text();
        const inputValue = $(this).val();
        if(con == "이메일" || con == "비밀번호"){
            return;
        }
        let resultLine = $("<div>").css("color", "blue").html(con + ": " + inputValue);
        resultLine.addClass("line");

        formResult.append(resultLine);
    });

    const gender = $("input[name='gender']:checked")
    let resultLineG = $("<div>").css("color", "blue").html("성별: " + gender.val());
    resultLineG.addClass("line");

    const hobbyCheck = $(".hobby_check:checked");
    let hobbies = [];
    hobbyCheck.each(function() {
        hobbies.push($(this).val());
    });
    let resultLineH = $("<div>").css("color", "blue").html("취미: " + hobbies.join(", "));
    resultLineH.addClass("line");

    const email = $("#email").val()+"@"+$("#emailDomain").val();
    let resultLineE = $("<div>").css("color", "blue").html("이메일: " + email);
    resultLineE.addClass("line");
    
    const job = $("#job").val();
    let resultLineJ = $("<div>").css("color", "blue").html("직업: " + job);
    resultLineJ.addClass("line");

    formResult.children().eq(2).after(resultLineG); 
    formResult.children().eq(3).after(resultLineE);
    formResult.children().eq(5).after(resultLineH);
    formResult.children().eq(6).after(resultLineJ);
    
}

$("#joinBtn").on("click", function(){
    if(conditioncheck()){
        showResult();
    }

});

$("#emailAddress").on("change", function(){
    const domain = $("#emailDomain"); 
    domain.attr("disabled", false);
    domain.attr("readonly", true);

    if($(this).val() == "직접입력"){
        domain.val("");
        domain.attr("readonly", false);
    }
    else{
        domain.val($(this).val());
    }
});

$("#emailAddress").on("change", function(){
    const domain = $("#emailDomain"); 
    domain.attr("disabled", false);
    domain.attr("readonly", true);

    if($(this).val() == "직접입력"){
        domain.val("");
        domain.attr("readonly", false);
    }
    else{
        domain.val($(this).val());
    }
});