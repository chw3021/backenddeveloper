package com.example;

public class Calc {
	private double result;
	
	public Calc() {
		result = 0;
		
	}
	
	public Calc(double d1, double d2, String operator) {

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
	}
	
	public double getResult() {
		return result;
	}
}
