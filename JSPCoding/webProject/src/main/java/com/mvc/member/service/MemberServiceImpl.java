package com.mvc.member.service;

import java.util.List;

import com.mvc.member.dao.MemberMapper;
import com.mvc.member.dao.MemberMapperImpl;
import com.mvc.member.vo.MemberVO;

public class MemberServiceImpl implements MemberService {
	private MemberMapper mapper = new MemberMapperImpl();
	
	private static MemberServiceImpl service = null;
	private MemberServiceImpl() {}
	public static MemberServiceImpl getInstance() {
		if(service == null) {
			service = new MemberServiceImpl();
		}
		return service;
	}

	public List<MemberVO> memberList(MemberVO vo){
		List<MemberVO> memberList = mapper.memberList(vo);
		return memberList;
	}
}
