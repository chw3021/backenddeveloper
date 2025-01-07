package com.example;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class GetData
 */
@WebServlet({ "/getData", "/postData" })
public class GetData extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		process(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		process(request, response);
	}


	protected void process(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html;charset=utf-8");
		
		PrintWriter out = response.getWriter();
		
		String userName = request.getParameter("user_name");
		String userAddr = request.getParameter("user_addr");
		
		out.println("<!DOCTYPE html><html><head><meta charset='UTF-8' />");
		out.println("<title>Post Data</title>");
		out.println("<link rel='icon' href='data:,'></head>");
		out.println("<body>");
		
		out.println("<h1>POST 방식 테스트 입니다.</h1>");
		
		out.print("<ul><li>입력한 이름: "+ userName+"</li>");
		out.print("<li>입력한 주소: "+userAddr+"</li></ul>");
		/* out.print("<a href='"+request.getHeader("referer")+"'>입력화면으로 가기</a>"); */
		out.print("<a href='#' onclick='history.back();'>이전 페이지</a>");
		
		out.println("</body></html>");
		out.close();
	}
}
