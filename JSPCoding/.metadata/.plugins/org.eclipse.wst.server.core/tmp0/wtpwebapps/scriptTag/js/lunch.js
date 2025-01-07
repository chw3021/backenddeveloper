$(function(){
    $("#inputForm").submit(function (e) {
		if ($("#menu").val() == "" || $("#menu > option:selected").length <2) {
            e.preventDefault();
            alert("값을 입력하세요");
        }
    });
});