$(function(){
    $("#bookForm").submit(function (e) { 

        const textInputs = $("input[type='text']");
        let isBlank = false;
        let blankCon = "";
        const reg = /\s/g;

        $(textInputs).each(function () {
            if($(this).val().trim() == "" || reg.test($(this).val())){
                isBlank = true;
                blankCon = $(this).attr("placeholder");
                return false;
            }
        });

        if (isBlank) {
            alert(blankCon+"을 입력하세요");
            e.preventDefault();
            return;
        }

		// $.ajax({
		//     url: "/servletExample/bookInput",
        //     type: "POST",  // POST 요청 방식으로 변경
		//     data: {
		//         "title":$("#title").val(),
		//         "author":$("#author").val(),
		//         "publisher":$("#publisher").val(),
		//     },
		//     dataType: "text"
		// }).done(function (response){
        //     alert("서버 응답: " + response);
		// }).fail(function(xhr, status){
		//     alert(status + " 발생.\n상태: "+xhr.status);
		// });
        // e.preventDefault();

        
    });
});