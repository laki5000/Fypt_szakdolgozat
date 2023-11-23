package net.javaguides.springboot.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import net.javaguides.springboot.dto.TrainerDto;


@Entity
@Table(name = "trainers")
public class Trainer {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "userid")
	private long userid;
	
	@Column(name = "target")
	private int target;
	
	@Column(name = "targetcity")
	private String targetcity;
	
	@Column(name = "online")
	private boolean online;
	
	@Column(name = "diet")
	private boolean diet;
	
	@Column(name = "trainingtype")
	private String trainingtype;
	
	@Column(name = "phone")
	private String phone;
	
	@Column(name = "introduction")
	private String introduction;
	
	public Trainer() {
		
	}

	public Trainer(long id, long userid, int target, String targetcity, boolean online, boolean diet, String trainingtype, String phone,
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
	
	public Trainer(TrainerDto trainerdto) {
		super();
		this.id = trainerdto.getId();
		this.userid = trainerdto.getUserid();
		this.target = trainerdto.getTarget();
		this.targetcity = trainerdto.getTargetcity();
		this.online = trainerdto.isOnline();
		this.diet = trainerdto.isDiet();
		this.trainingtype = trainerdto.getTrainingtype();
		this.phone = trainerdto.getPhone();
		this.introduction = trainerdto.getIntroduction();
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
