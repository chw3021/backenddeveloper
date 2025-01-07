<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.util.ArrayList, com.books.BooksVO" %>
<%	
	@SuppressWarnings("unchecked")
	ArrayList<BooksVO> list = (ArrayList<BooksVO>)request.getAttribute("list");
	int counter = list.size();
%>
<!DOCTYPE html>
<html lang="ko">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />		
		<link rel="shortcut icon" href="/servletExample/image/icon.png" />
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" >
		<title>BooksList</title>
	</head>
	<body>
	
		<div class="container">
			<h3> 테이블 Books 책 정보 조회 </h3>
			<hr />
			<div id="booksList">
				<table class="table table-striped">
					<thead>
						<tr class="text-center table-primary">
					        <th>책번호</th>
							<th style="width: 40%;">책제목</th>
							<th>출판사</th>
							<th>출간연도</th>
							<th>책가격</th>
							<th>수정</th>
							<th>삭제</th>
					    </tr>
					</thead>
					<tbody class="table-group-divider">	
					<% if (counter > 0) { 
						for( BooksVO book : list ) {
					%>
						    <tr class="text-center" data-bookId="<%= book.getBook_id() %>">
						    	<td><%= book.getBook_id()%></td>
						        <td class="text-start"><%= book.getTitle()%></td>
						        <td><%= book.getPublisher()%></td>
						        <td><%= book.getYear() %></td>
						        <td><%= book.getPrice() %></td>
		       					<td><button type="button" class="updateBtn btn btn-outline-success btn-sm">수정</button></td>
		       					<td><button type="button" class="deleteBtn btn btn-outline-danger btn-sm">삭제</button></td>
						    </tr>
					<%
						}
					   } else{
					%>
							<tr>
								<td colspan="3" class="text-center">
									조회된 책 정보가 존재하지 않습니다.
								</td>
							</tr>
					<% } %>
					</tbody>
				</table>
				<div class="text-end">
					조회된 책의 권수는 <span id="counter"><%=counter%></span>입니다.
				</div>
			</div>
		</div>
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
        
		<script src="/servletExample/js/jquery-3.7.1.min.js"></script>
        <script src="/servletExample/js/common.js"></script>
		<script src="/servletExample/js/booksList.js"></script>
	
	</body>
</html>