
package com.mvc.notice.controller;



import java.util.List;



import javax.servlet.http.HttpServletRequest;

import javax.servlet.http.HttpServletResponse;



import com.mvc.common.controller.Controller;

import com.mvc.notice.service.NoticeService;

import com.mvc.notice.service.NoticeServiceImpl;

import com.mvc.notice.vo.NoticeVO;



public class NoticeListController implements Controller {

	@Override

	public String execute(HttpServletRequest request, HttpServletResponse response) {


		NoticeVO vo = null;


		NoticeService service = NoticeServiceImpl.getInstance();

		List<NoticeVO> noticeList = service.noticeList(vo);


		request.setAttribute("noticeList", noticeList);

		return "/notice/noticeList";

	}

}
