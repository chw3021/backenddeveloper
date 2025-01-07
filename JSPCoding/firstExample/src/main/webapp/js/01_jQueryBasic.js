
window.addEventListener("load", function(){
    document.querySelector("#jsBtn").addEventListener("click", function(){
        this.style.backgroundColor = "black";
        this.style.color = "yellow";
        this.style.fontSize = "20px";
    });

    document.getElementById("colorChange").addEventListener("click", function(){
        let wrapper = document.getElementById("wrapper");
        let ul = wrapper.getElementsByTagName("ul");
        let li = ul[0].getElementsByTagName("li");

        for(let i = 0; i < li.length; i++){
            let l = li[i];
            if(l.className=="three"){
                let txt = l.getElementsByTagName("span");
                txt[0].style.color = "red";
            }
        }
    });
});


$(function(){

    $("#jQueryBtn").on("click", function(){
        //$(this).css("background-color", "black").css("color", "yellow").css("font-size", "20px");
        
        $(this).css({
            "background-color":"black",
            "color":"yellow",
            "font-size":"20px"
        });
    });

    $("#colorChange").on("click", function(){
        $("#wrapper > ul > li.three > span").css("color", "blue");
    });
    
    let isVisible = false; // 상태를 관리하는 변수

    $("#btnChange").on("click", function () {
        if (isVisible) {
            $("#text").html(""); // 글씨를 사라지게 함
        } else {
            $("#text").html("읽어온 문자: " + $("#hello").html()); // 글씨를 표시
        }
        isVisible = !isVisible; // 상태를 반전
    });

    $("#img").hover(function(){
        $(this).attr("src","../images/easys-2.jpg");
    }, function(){
        $(this).attr("src","../images/easys-1.jpg");
    }
    );
    
    const regExp = /^[A-Za-z](?=.*[0-9])[A-Za-z0-9]{7,19}$/
    $("#input1").on("keyup", function(){
        if(regExp.test($("#input1").val())){
            $("#span1").text("유효한 문자열 형식입니다.");
            $("#span1").css("color", "green");
        }else{
            $("#span1").text("유효하지 않는 문자열 형식입니다.").css("color", "red");
        }

        if( $("#input1").val().length == 0){
            $("#span1").text("");
        }
    });

    $("#singleButton").on("click", function(){
        $(this).html("오늘도 파이팅합시다~!");
    });

    $(".multiButton").on("click", function () {
        let index = $(this).index();
        let result = index + "번째 요소를 눌렀습니다.";
        $(this).html(result);
    });

    let number = 1;
    $("#treeImage").on("click", function() {
       number = (number % 6) + 1;
       $(this).attr("src", "../images/tree-"+number+".jpg");
    });
});
