package com.mvc.notice.dao;



import java.util.List;



import org.apache.ibatis.session.SqlSession;



import com.mvc.notice.vo.NoticeVO;



import mybatis.SqlSessionTemplate;



public class NoticeMapperImpl implements NoticeMapper {

	private SqlSession session;


	public NoticeMapperImpl() {

		session = SqlSessionTemplate.getSqlSession();

	}



	@Override

	public List<NoticeVO> noticeList(NoticeVO vo) {

		//session에서 매핑된 값들을 가져와야 한다.
		List<NoticeVO> noticeList = session.selectList("noticeList");

		return noticeList;

	}


}