<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="com.member.MemberDTO"%>
<!DOCTYPE html>
<html lang="ko">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
		<title>Insert title here</title>
	
		<link rel="stylesheet" type="text/css" href="/servletExample/css/login.css">
	</head>
	<body>        
			<% 	
				MemberDTO dto = (MemberDTO)session.getAttribute("login");  
			%>
					
			<% if(dto != null) {  %>
			<div>
				<%= dto.getMemberName() %>님 반갑습니다.
			</div>
			<div>
				<a href='/servletExample/loginInfo'>
					로그인 정보 확인하기
				</a>
			</div>
			<% } else { %>
			
				<% String message = (String)session.getAttribute("message");
				if(message != null) {  %>
				<div>
					<%= message %>
				</div>
				<div>
					<a href="#" onclick="clearSessionAndRedirect();">
						이전 화면으로
					</a>
				</div>
				<script>
					function clearSessionAndRedirect() {
						<%
							session.removeAttribute("message");
						%>
			            location.reload();
					}
				</script>
				<% } else { %>
					<form id="login">
						<fieldset>
							<div>
								<label for="memberId">아이디</label>
								<input type="text" name="memberId" id="memberId" />
							</div>
							<div>
								<label for="memberPasswd">비밀번호</label>
								<input type="password" name="memberPasswd" id="memberPasswd" />
							</div>
							<div>
								<button type="button" id="loginBtn">로그인</button>
							</div>
						</fieldset>
					</form>
				<% } %>
			<% } %>
			
		<script src="/servletExample/js/jquery-3.7.1.min.js"></script>
		<script src="/servletExample/js/common.js"></script>
		<script src="/servletExample/js/login.js"></script>
	</body>
</html>