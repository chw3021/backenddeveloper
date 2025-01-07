package com.forward.book;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class BookOutputServlet
 */
@WebServlet("/bookOutput")
public class BookOutputServlet extends HttpServlet {

	/**
	 * 
	 */
	private static final long serialVersionUID = 4563468282766235778L;

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html;charset=UTF-8");
		PrintWriter out = response.getWriter();

		//String title = (String)request.getAttribute("title");
		//String author = (String)request.getAttribute("author");
		//String publisher = (String)request.getAttribute("publisher");
		
		BookDTO book = (BookDTO)request.getAttribute("book");
		out.println("<!DOCTYPE html><html>");
		out.println("<head><meta charset='UTF-8' />");
		out.println("<title>dispatcher 예제</title>");
	  	out.println("<link rel='icon' href='data:,'></head>");
	  	out.println("<body>");
		out.print("<table><caption>[입력한 책정보]</caption>");
		out.print("<tr><td>책제목</td><td>"+book.getTitle()+"</td></tr>");
		out.print("<tr><td>책저자</td><td>"+book.getAuthor()+"</td></tr>");
		out.print("<tr><td>출판사</td><td>"+book.getPublisher()+"</td></tr>");
		out.print("</table>");
	  	out.println("</body></html>");   	
		out.close();
	}

}
