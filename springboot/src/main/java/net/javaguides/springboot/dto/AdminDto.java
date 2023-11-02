package net.javaguides.springboot.dto;

import net.javaguides.springboot.model.Admin;

public class AdminDto {
	private long id;
	private String userId;
	
	public AdminDto() {
		
	}
	
	public AdminDto(Admin admin) {
		this.id = admin.getId();
		this.userId = admin.getUserId();
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}
}
