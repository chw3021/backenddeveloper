package com.mvc.member.dao;

import java.util.List;

import com.mvc.member.vo.MemberVO;

public interface MemberMapper {
	public List<MemberVO> memberList(MemberVO vo);
}
