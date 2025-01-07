$(function(){

    
    $("#frm").submit(function (e) {
        let isBlank = false;
        const reg = /\s/g;
        $(".number").each(function(){

            if($(this).val().trim() === ""|| isNaN($(this).val()) || reg.test($(this).val())){
                isBlank = true;
                return false;
            }
        });
        
        if (isBlank) {
            alert("값을 입력하세요");
            e.preventDefault();
            return;
        }

		$.ajax({
		    url: "/servletExample/calcServlet2",
            type: "POST",  // POST 요청 방식으로 변경
		    data: {
		        "num1":$("#num1").val(),
		        "operator":$("#operator").val(),
		        "num2":$("#num2").val(),
		    },
		    dataType: "text"
		}).done(function (data){
		    $("#result").val(data);
		}).fail(function(xhr, status){
		    alert(status + " 발생.\n상태: "+xhr.status);
		});
        e.preventDefault();

    });
});