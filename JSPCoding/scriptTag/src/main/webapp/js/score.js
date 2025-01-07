$("#sendBtn").on("click", ()=>{
	const pattern = /^\d{1,3}$/;
	if($("#score").val().replace(/\s/g,"")==""){
		alert("점수를 입력해 주세요");
		$("#score").val("");
		$("#score").focus();
		return;
	} else if(!pattern.test($("#score").val())){
		alert("점수는 숫자만 입력해 주셔야 합니다");
		$("#score").val("");
		$("#score").focus();
		return;
	} else if($("#score").val() < 0 || $("#score").val() > 100){
		alert("점수는 0 ~ 100사이로 입력해 주세요");
		$("#score").val("");
		$("#score").focus();
		return;
	}

	/*$("#scoreForm").attr({
		"method":"post",
		"action":"/scriptTag/implicitobject/score.jsp"
		//"action":"score.jsp"
		//"action":"/scriptTag/score"
	});
	$("#scoreForm").submit();*/

			
	$.ajax({
		url:"/scriptTag/implicitobject/score2.jsp",
		method:"post",                      // 전송방식(get/post)
		data:$("#scoreForm").serialize(),    // 서버에 전달한 파라미터(serialize():폼전체 데이터 전송하는 메서드)
		dataType:"text"                // 서버로부터 응답받을 문서 타입(text/json/xml)   
	}).done(function (data) {
		console.log(data);
		$("#result").val(data);
	}).fail(function(xhr, status) {
		alert(status + " 발생.\n상태: " + xhr.status);
	});

});