package net.javaguides.springboot.dto;

import net.javaguides.springboot.model.Admin;

public class AdminDto {
	private long id;
	private long userid;
	
	public AdminDto() {
		
	}
	
	public AdminDto(Admin admin) {
		this.id = admin.getId();
		this.userid = admin.getUserid();
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public long getUserId() {
		return userid;
	}

	public void setUserId(long userid) {
		this.userid = userid;
	}
}