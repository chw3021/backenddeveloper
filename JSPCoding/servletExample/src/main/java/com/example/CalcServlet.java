package com.example;

import java.io.IOException;
import java.io.PrintWriter;
import java.math.BigDecimal;
import java.math.RoundingMode;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class CalcServlet
 */
@WebServlet("/calcServlet")
public class CalcServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		
		PrintWriter out = response.getWriter();
		
		String num1 = request.getParameter("num1");
		String num2 = request.getParameter("num2");
		String operator = request.getParameter("operator");
		
		out.println("<!DOCTYPE html><html><head><meta charset='UTF-8' />");
		out.println("<title>Select and Post</title>");
		out.println("<link rel='icon' href='data:,'></head>");
		out.println("<body>");
		
		out.print("<h1>계산결과</h1>");
		out.print("<hr>");
		out.println(num1+" " + operator+" " + num2 +" = "+calc(num1,num2,operator));
		/* out.print("<a href='"+request.getHeader("referer")+"'>입력화면으로 가기</a>"); */
		out.println("<a href='#' onclick='history.back();'>입력화면으로 가기</a>");
		
		out.println("</body></html>");
		out.close();
		
	}

	protected Double calc(String num1, String num2, String operator) {
	    Double d1 = Double.parseDouble(num1);
	    Double d2 = Double.parseDouble(num2);
	    Double result = 0d;
	
	    switch (operator) {
	        case "+":
	            result = d1 + d2;
	            break;
	        case "-":
	            result = d1 - d2;
	            break;
	        case "*":
	            result = d1 * d2;
	            break;
	        case "/":
	            if (d2 != 0) {
	                result = d1 / d2;
	            } else {
	                throw new ArithmeticException("Cannot divide by zero");
	            }
	            break;
	        default:
	            throw new IllegalArgumentException("Invalid operator: " + operator);
	    }
	
	    // 소수점 두 자리까지만 반올림
	    BigDecimal roundedResult = new BigDecimal(result).setScale(2, RoundingMode.HALF_UP);
	    return roundedResult.doubleValue();
	}
}
