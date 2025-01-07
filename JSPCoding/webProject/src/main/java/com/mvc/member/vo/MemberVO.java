package com.mvc.member.vo;

public class MemberVO {

	private int num;         // 글 번호
	private	String id;   // 글 작성자
	private	String pwd;    // 글제목
	private	String name;  // 글내용
	private	String address;     // 글 조회수
	private	String regdate; // 글 작성일

	//조건검색시 사용할 속성
	private String search = "";  // 기본값을 null이 아니라 ""(빈문자)로 제어. 검색대상
	private String keyword = ""; // 검색어
	
	
	public MemberVO() {
	}
	public MemberVO(int num, String id, String pwd, String name, String address, String regdate) {
		this.num = num;
		this.id = id;
		this.pwd = pwd;
		this.name = name;
		this.address = address;
		this.regdate = regdate;
	}
	public int getNum() {
		return num;
	}
	public void setNum(int num) {
		this.num = num;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getRegdate() {
		return regdate;
	}
	public void setRegdate(String regdate) {
		this.regdate = regdate;
	}

	public String getSearch() {
		return search;
	}


	public void setSearch(String search) {
		this.search = search;
	}


	public String getKeyword() {
		return keyword;
	}


	public void setKeyword(String keyword) {
		this.keyword = keyword;
	}
	
	
	
	
	
	@Override
	public String toString() {
		return "MemberVO [num=" + num + ", id=" + id + ", pwd=" + pwd + ", name=" + name + ", address=" + address
				+ ", regdate=" + regdate + "]";
	}
	
	
	
}
