package com.mvc.member.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.mvc.member.vo.MemberVO;

import mybatis.SqlSessionTemplate;

public class MemberMapperImpl implements MemberMapper {

	private SqlSession session;
	
	public MemberMapperImpl() {
		session = SqlSessionTemplate.getSqlSession();
	}

	public List<MemberVO> memberList(MemberVO vo){
		return session.selectList("memberList", vo);
	}



}