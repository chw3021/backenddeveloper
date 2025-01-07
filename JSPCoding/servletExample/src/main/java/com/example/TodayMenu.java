package com.example;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Lunch
 */
@WebServlet("/todayMenu")
public class TodayMenu extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		
		PrintWriter out = response.getWriter();
		
		String[] menu = request.getParameterValues("menu");
		
		out.println("<!DOCTYPE html><html><head><meta charset='UTF-8' />");
		out.println("<title>Select and Post</title>");
		out.println("<link rel='icon' href='data:,'></head>");
		out.println("<body>");
		
		out.print("<h2>오늘 점심: "+String.join(", ", menu)+"</h2>");
		/* out.print("<a href='"+request.getHeader("referer")+"'>입력화면으로 가기</a>"); */
		out.print("<a href='#' onclick='history.back();'>입력화면으로 가기</a>");
		
		out.println("</body></html>");
		out.close();
		
	}

}
