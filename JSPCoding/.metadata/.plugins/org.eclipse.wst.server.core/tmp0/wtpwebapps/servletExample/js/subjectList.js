$(function() {

	const autoSubjectNumber = () => {
		// 자동으로 학번 구하기
		$.ajax({
			url : "/servletExample/subjectNumber", // 요청 url
			method:"post",                         // 전송방식(get/post)
			dataType:"text"                        // 서버로부터 응답받을 문서 타입(text/json/xml)   
		}).done(function (data) {
			//console.log(data);
			$("#subjectNumber").val(data);
		}).fail(function(xhr, textStatus) {
			alert(textStatus + " 발생.\n상태: " + xhr.status);
		});	
	}

	autoSubjectNumber();
	
    $(document).on("click", "#insertBtn", function() {
        if (!chkData("#subjectName", "학과명을 ")) return;
        
        $("#subject").attr("method", "post");

        if ($("#no").val() === "0") {
            $("#subject").attr("action", "/servletExample/insert");
        } else {
            $("#subject").attr("action", "/servletExample/update");
        }
        
        $("#subject").submit();
    });

    $("#resetBtn").on("click", function() {
        $("#subjectName").val("");
    });

	// "수정" 버튼 제어
	$(".updateBtn").on("click", function(){
		$(".upResetBtn").detach();
		
		let no = $(this).parents("tr").attr("data-no");
		console.log(no);
		$("#no").val(no);
		
		let subjectNumber = $(this).parents("tr").attr("data-number");
		$("#subjectNumber").val(subjectNumber);
		
		let subjectName = $(this).parents("tr").children().eq(2).html();
		console.log(subjectName);
		$("#subjectName").val(subjectName);
		
		// "입력완료"" 버튼을 "수정완료"" 버튼으로 변경
		$("#insertBtn").html("수정완료");

		// "수정취소" 버튼 추가
		let upReset = $("<button>");
		upReset.attr("type","button");
		upReset.addClass("upResetBtn btn btn-success ms-1");
		upReset.html("수정취소");
		$("#insertBtn").after(upReset);
	});

    $(document).on("click", ".upBtn", function() {
        if (!chkData("#subjectName", "학과명을 ")) return;

        $("#subject").attr({
            method: "post",
            action: "/servletExample/update"
        });
        $("#subject").submit();
    });
	
	
	$(document).on("click", ".upResetBtn", ()=>{
		$(".upResetBtn").detach();
		
		$("#insertBtn").html("입력완료");
		$("#subjectName").val("");
		$("#no").val(0);
		
		autoSubjectNumber();
	});
	
	$("#searchBtn").on("click", () => {
	    const subjectName = $("#name").val();
	    if (!chkData("#name", "학과명을 ")) return;

	    $.ajax({
	        url: "/servletExample/search",
	        method: "get",
	        data: { subjectName: subjectName },
	        success: function(response) {
	            // 서버 응답에서 특정 테이블만 가져오기
	            const parsedHTML = $("<div>").html(response); // 응답 HTML을 가상 DOM에 넣기
	            const table = parsedHTML.find(".table"); // 테이블만 추출

	            if (table.length > 0) {
	                $("#subjectList").html(table); // 테이블만 업데이트
	            } else {
	                $("#subjectList").html("<p>검색 결과가 없습니다.</p>"); // 결과 없을 경우
	            }
	        },
	        error: function(xhr, textStatus) {
	            alert("검색 중 오류가 발생했습니다.");
	        }
	    });
	});


	/*
	$("#searchBtn").on("click", ()=>{
		const subjectName = $("#name").val();
		if(!chkData("#name","학과명을 ")) return;
		else{
			$("#search").attr({
				"method":"get",
				"action":"/servletExample/search?subjectName="+subjectName
			});
			$("#search").submit();
			$("#name").val(subjectName);
		}
	});
*/
	$("#searchAllBtn").on("click", ()=>{
		location.href = "/servletExample/list";
	});
	
	$(".deleteBtn").on("click", function(){
		let no = $(this).parents("tr").attr("data-no");
		let subjectNumber = $(this).parents("tr").attr("data-number");
		//let no = $(this).parents("tr").data("no");
		
		$.ajax({
			url:"/servletExample/studentCheck",  // 요청 url
			method:"post",                       // 전송방식(get/post)
			data:{                               // 요청 url에 전달할 값(파라미터). subjectNumber=01
				"subjectNumber":subjectNumber  
			},
			dataType:"text"                 // 서버로부터 응답받을 문서 타입(text/json/xml)   
		}).done(function (data) {
			console.log(subjectNumber + " / " + data);
			if(data > 0){
				alert("소속된 학생이 존재함으로 학과데이터를 삭제할 수 없습니다.");
				return;
			} else{
				if(confirm("삭제하시겠습니까?")){
					location.href="/servletExample/delete?no="+no;
				}
			}
		}).fail(function(xhr, textStatus) {
			alert(textStatus + " 발생.\n상태: " + xhr.status);
		});
		
	}); 
});
