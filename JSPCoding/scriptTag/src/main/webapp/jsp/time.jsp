<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
		<title>Insert title here</title>
	</head>
	<body>
		<h2>첫 번째 JSP 테스트 예제입니다.</h2>
		<hr>
		오늘날짜: <%= java.time.LocalDate.now() %> <br>
		현재시간: <%= java.time.LocalTime.now() %> <br>
	</body>
</html>