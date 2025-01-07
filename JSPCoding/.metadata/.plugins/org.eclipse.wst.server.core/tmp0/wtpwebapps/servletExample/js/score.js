/**
 * 
 */
$(function(){
    $("#sendBtn").on("click", function (e) {
        const reg = /\s/g;
        const pattern = /^\d{1,3}$/;
        const sval = $("#score").val();

        if(sval.replace(reg) == ""){
            alert("점수를 입력");
            $("#score").val("");
            $("#score").focus();
            return;
        }
        else if(!pattern.test(sval)){
            alert("숫자만 입력");
            $("#score").val("");
            $("#score").focus();
            return;
        }
        else if(sval<0 || sval>100){
            alert("0~100만 입력");
            $("#score").val("");
            $("#score").focus();
            return;
        }

        $("#scoreForm").attr(
            {
                "method": "post",
                //"action": "/scriptTag/implictobject/score.jsp"
                "action":"score.jsp"
            }
        );
        $("#scoreForm").submit();

    
    });
});