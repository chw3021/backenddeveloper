package com.mvc.notice.service;



import java.util.List;



import com.mvc.notice.dao.NoticeMapper;

import com.mvc.notice.dao.NoticeMapperImpl;

import com.mvc.notice.vo.NoticeVO;



public class NoticeServiceImpl implements NoticeService {

	private NoticeMapper mapper = new NoticeMapperImpl();


	private static NoticeServiceImpl service = null;

	private NoticeServiceImpl(){ }

	public static NoticeServiceImpl getInstance() {

		if(service == null) {

			service = new NoticeServiceImpl();

		}

		return service;

	}

	@Override

	public List<NoticeVO> noticeList(NoticeVO vo) {

		List<NoticeVO> noticeList = mapper.noticeList(vo);

		//리턴값이 명시되지 않았다.
		return noticeList;

	}

}

