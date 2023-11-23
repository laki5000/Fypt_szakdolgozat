package net.javaguides.springboot.dto;

import net.javaguides.springboot.model.Trainer;

public class TrainerDto {
	private long id;
	private long userid;
	private int target;
	private String targetcity;
	private boolean online;
	private boolean diet;
	private String trainingtype;
	private String phone;
	private String introduction;
	
	public TrainerDto() {
		
	}

	public TrainerDto(long id, long userid, int target, String targetcity, boolean online, boolean diet, String trainingtype, String phone,
			String introduction) {
		super();
		this.id = id;
		this.userid = userid;
		this.target = target;
		this.targetcity = targetcity;
		this.online = online;
		this.diet = diet;
		this.trainingtype = trainingtype;
		this.phone = phone;
		this.introduction = introduction;
	}
	
	public TrainerDto(Trainer trainer) {
		super();
		this.id = trainer.getId();
		this.userid = trainer.getUserid();
		this.target = trainer.getTarget();
		this.targetcity = trainer.getTargetcity();
		this.online = trainer.isOnline();
		this.diet = trainer.isDiet();
		this.trainingtype = trainer.getTrainingtype();
		this.phone = trainer.getPhone();
		this.introduction = trainer.getIntroduction();
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public long getUserid() {
		return userid;
	}

	public void setUserid(long userid) {
		this.userid = userid;
	}

	public int getTarget() {
		return target;
	}

	public void setTarget(int target) {
		this.target = target;
	}

	public String getTargetcity() {
		return targetcity;
	}

	public void setTargetcity(String targetcity) {
		this.targetcity = targetcity;
	}

	public boolean isOnline() {
		return online;
	}

	public void setOnline(boolean online) {
		this.online = online;
	}
	
	public boolean isDiet() {
		return diet;
	}

	public void setDiet(boolean diet) {
		this.diet = diet;
	}

	public String getTrainingtype() {
		return trainingtype;
	}

	public void setTrainingtype(String trainingtype) {
		this.trainingtype = trainingtype;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getIntroduction() {
		return introduction;
	}

	public void setIntroduction(String introduction) {
		this.introduction = introduction;
	}
}
