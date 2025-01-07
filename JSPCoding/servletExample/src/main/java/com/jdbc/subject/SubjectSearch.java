package com.jdbc.subject;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.subject.SubjectDAO;
import com.subject.SubjectVO;

/**
 * Servlet implementation class SubjectSearch
 */
@WebServlet("/search")
public class SubjectSearch extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		
		SubjectVO vo = new SubjectVO();
		//vo.setNo(Integer.parseInt(request.getParameter("no")));
		vo.setSubjectName(request.getParameter("subjectName"));
		
		SubjectDAO dao = new SubjectDAO();
		ArrayList<SubjectVO> result = dao.subjectSearch(vo);
		
		request.setAttribute("list", result);
		RequestDispatcher dispatcher = request.getRequestDispatcher("subject/subjectList.jsp");
		dispatcher.forward(request, response);
		
	}

}
