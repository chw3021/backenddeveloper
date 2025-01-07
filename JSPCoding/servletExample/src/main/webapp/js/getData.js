/**
 * 
 */
$(function(){
    $("#inputForm").submit(function (e) {
        let isBlank = false;
        const reg = /\s/g;
        $("input[type='text']").each(function(){
            console.log($(this));
			console.log($(this).val());
            if($(this).val().trim() === "" || reg.test($(this).val())){
                isBlank = true;
                return false;
            }
        });
        
        if (isBlank) {
            e.preventDefault();
            alert("값을 입력하세요");
        }
    });
});