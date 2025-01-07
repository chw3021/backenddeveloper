package com.jdbc;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.books.BooksDAO;
import com.books.BooksVO;

/**
 * Servlet implementation class BooksServlet
 */
@WebServlet("/booksList")
public class BooksServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    /**
     * Handles GET requests
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        handleRequest(request, response); // 요청 처리 로직을 별도 메서드로 분리
    }


	/**
     * Handles POST requests
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        handleRequest(request, response); // GET과 POST 모두 동일 로직 사용
    }

    private void handleRequest(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		BooksDAO dao = new BooksDAO();
		ArrayList<BooksVO> list = dao.getBooksTotal();
		
		request.setAttribute("list", list);
		RequestDispatcher dispatcher = request.getRequestDispatcher("books/booksList.jsp");
		
		dispatcher.forward(request, response);
	}
}
