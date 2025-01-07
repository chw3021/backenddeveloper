$(document).ready(function () {
    $("h5").css("color","red");

    $("p").css("color", "blue");

    $("h5, p").css("background-color", "green");

    $(".item").css("color", "orange");

    $(".select").css("background-color", "yellowgreen");
    
    $(".item, .select").css("font-size", "10px");
    
    $(".item.select").css("font-size", "50px");

    $(".area > h4").css("color", "red");
    
    $(".area > ul > .qqq").css("background-color", "yellow");

    $(".area .qqq").css("font-size", "30px");

    $(".area li > h4").css("background-color","red").css("color","white");

    $("#check").on("click", function () {
        const gender = $("input[name='gender']:checked");

        console.log("check ", gender.length);

        if(gender.length == 0){
            alert("남자 또는 여자 중 하나를 선택해 주세요.");
        }else {
            // 1) 체크된 요소를 모두 얻어왔으므로 배열 형태로 저장된 gender 변수에서
            //    0번 인덱스의 value만 얻어오기 (순수 JS)
            console.log(gender[0].value);

            // 2) 체크된 요소를 모두 얻어와도
            //    radio는 1개만 체크되어 있기 때문에
            //    변수 한개랑 같다라고 해석하여
            //    자동으로 0번 인덱스 요소에 있는 value를 얻어옴 (JS + jQuery)
            console.log(gender.val());

            // 3) 순수 jQuery
            console.log( $(gender).val() );
            // $(gender) : 체크된 요소만 담긴 배열 + 요소를 선택해라 기호
            // --> 체크된 radio 버튼을 선택하는 jQuery 선택자

            alert( $(gender).val() + "자를 선택하셨습니다.");
            //alert( $("input[name='gender']:checked").val() + "자를 선택하셨습니다.");
        }
    });

    $("#btn1").on("click",function(){
        // 체크박스 접근 - 1
        const array = $("input[name='hobby']");
        let str = ""; // 체크된 요소의 value 값을 누적해서 저장할 변수
        console.log("hobby", array.prop("checked") );// 배열명을 적을 경우 0번 인덱스만 확인 가능
    
        for(let i=0; i<array.length; i++){
            // 각 인덱스 저장된 checkbox 요소가 체크되어있는 상태인지 확인 
            console.log( i + " : " + $(array[i]).prop("checked"));
    
            if($(array[i]).prop("checked")){
                // 체크된 요소의 value값을 얻어와 str 변수에 누적
                str += $(array[i]).val() + " ";
            }
        }
        //alert(str);

        // 체크박스 접근 - 2
        //const hobby = $("input[name='hobby']:checked");
        const hobby = $(".hobby_check:checked");
        let select_hobby = "";
        // each() 함수에 hobby의 개체 수 만큼 반복적으로 function()이 실행된다.
        hobby.each(function() {
            // 이벤트가 발생한 자기 자신을 가리키는 키워드
            select_hobby += $(this).val() + " ";
        });
        alert(select_hobby);
    
    });

});