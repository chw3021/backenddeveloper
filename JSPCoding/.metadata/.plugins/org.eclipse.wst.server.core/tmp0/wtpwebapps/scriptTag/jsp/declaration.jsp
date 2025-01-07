<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page trimDirectiveWhitespaces="true" %>
<%@ page import="java.util.Calendar"%>
<!DOCTYPE html>
<html lang="ko">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
		<title>JSP 예제 - declaration.jsp</title>
		<link href="../image/icon.png" rel="icon" type="image/x-icon" />
	</head>
	<body>
		<%! double radius = 4.8; %>
		<%! 
			public double getArea(double r) {
				return r * r * 3.14;	
			}
		%>
		반지름이 <%= radius %>인 
		원의 면적은 <%= getArea(radius) %>이다.
		<%!
			char getKorDay() {
			    char result=' ';
				int day = Calendar.getInstance().get(Calendar.DAY_OF_WEEK);
				switch(day) {
					case 1 : result = '일'; break;
					case 2 : result = '월'; break;
					case 3 : result = '화'; break;
					case 4 : result = '수'; break;
					case 5 : result = '목'; break;
					case 6 : result = '금'; break;
					case 7 : result = '토'; 
				}
			    return result;	
		   }
		%>
		<p>오늘은 <%=  getKorDay() %>요일입니다.</p>

		<p>
			<% int i = 0; %>
			<label>[지역변수] i = <%= ++i %></label> 
		</p>
		<p>
			<label>[전역변수/필드] fieldi = <%= ++fieldi %></label> 
			<%! int fieldi  = 0; %>
		</p>
		<!-- 1부터 10까지의 합 구하기 (sum 메서드 선언)-->
		<p>
			<%! 
				public int sum(int a, int b) {
					int sumN = 0;
					for(int i = a; i<=b; i++){
						sumN += i;
					}
					return sumN;
				}
			%>
			<%= "1부터 10까지 합은 " + sum(1, 10) + " 입니다" %>
		</p>
	</body>
</html>