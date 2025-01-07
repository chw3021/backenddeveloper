package com.jdbc;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/loginInfo")
public class MemberLoginInfoServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	// 로그인 후 정보 보여주기
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		RequestDispatcher dispatcher = request.getRequestDispatcher("jdbc/loginInfo.jsp");
		dispatcher.forward(request, response);
	}
}