package com.books;

import static com.common.JDBCTemplate.*;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;


public class BooksDAO {

	public ArrayList<BooksVO> getBooksTotal(){
		ArrayList<BooksVO> list = new ArrayList<>();

	    StringBuffer sql = new StringBuffer();
	    sql.append("select book_id, title, publisher, year, price from books ");
	    sql.append("order by book_id");

	    try(Connection conn = getConnection();
	    	PreparedStatement pstmt = conn.prepareStatement(sql.toString());	
	    	ResultSet rs = pstmt.executeQuery();){
	
	        //ResultSet의 결과에서 모든 행을 각각의 SubjectVO 객체에 저장
	        while(rs.next()) {
	            //한 행의 학과 정보를 저장할 VO 객체 생성
	            BooksVO bvo = new BooksVO();
	            //한 행의 학과 정보를 VO 객체에  저장
	            bvo.setBook_id(rs.getInt(1));
	            bvo.setTitle(rs.getString(2));
	            bvo.setPublisher(rs.getString(3));
	            bvo.setYear(rs.getString(4));
	            bvo.setPrice(rs.getInt(5));
	
	            // ArrayList 객체에 원소로 추가
	            list.add(bvo);
	        }
	    }catch(SQLException se) {
	        System.out.println("조회에 문제가 있어 잠시 후에 다시 진행해 주세요.");
	        se.printStackTrace();
	    }catch (Exception e){
	        System.err.println("error = [ "+e.getMessage()+" ]");
	    }
	    return list;
	}
}
