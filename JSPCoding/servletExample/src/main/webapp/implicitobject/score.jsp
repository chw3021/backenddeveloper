<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% 
    String data = request.getParameter("score"); 
    int score = 0;
    String grade = ""; // 학점을 저장할 변수
    if(data != null){
        try {
            score = Integer.parseInt(data);

            // 학점 계산 로직
            if (score >= 90) {
                grade = "A";
            } else if (score >= 80) {
                grade = "B";
            } else if (score >= 70) {
                grade = "C";
            } else if (score >= 60) {
                grade = "D";
            } else {
                grade = "F";
            }
        } catch (NumberFormatException e) {
            grade = "유효하지 않은 점수입니다.";
        }
    } else {
        grade = "점수를 입력해주세요.";
    }
%>    
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">	
		<title>스크립트릿을 활용한 학점 구하기 예제 - score.jsp</title>
	    <link href="../image/icon.png" rel="icon" type="image/x-icon" />
	</head>
	<body>
		<div>입력한 점수는 <%= score %>입니다</div>
		<div>학점은 <%= grade %>입니다.</div>
	</body>
</html>
