function chkData(item, msg) {
    if($(item).val().replace(/\s/g,"")==""){
        alert(msg+" 입력해주세요");
        $(item).val("");
        $(item).focus();
        return false;
    }
    else{
        return true;
    }
}

/* dataCheck(유효성 체크 대상, 출력 영역, 메시지 내용) */ 
function dataCheck(item, out, msg){
	if($(item).val().replace(/\s/g,"")==""){
		$(out).html(msg + " 입력해 주세요");
		$(item).val("");
		return false;
	}else{
		return true;
	}
}