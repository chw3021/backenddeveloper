package com.mvc.notice.dao;



import java.util.List;



import com.mvc.notice.vo.NoticeVO;



public interface NoticeMapper {

	public List<NoticeVO> noticeList(NoticeVO vo);

}