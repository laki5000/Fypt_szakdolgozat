package net.javaguides.springboot.dto;

import net.javaguides.springboot.model.Trainer;

public class TrainerDto {
	private long id;
	private String kiketVallal;
	private String specializacio;
	private String vegzettseg;
	private String tapasztalat;
	private String telefonszam;
	private String bemutatkozas;
	private long userId;
	private boolean hiteles;
	
	public TrainerDto() {
		
	}
	
	public TrainerDto(Trainer trainer) {
		this.id = trainer.getId();
		this.kiketVallal = trainer.getKiketVallal();
		this.specializacio = trainer.getSpecializacio();
		this.vegzettseg = trainer.getVegzettseg();
		this.tapasztalat = trainer.getTapasztalat();
		this.telefonszam = trainer.getTelefonszam();
		this.bemutatkozas = trainer.getBemutatkozas();
		this.userId = Long.parseLong(trainer.getUserId());
		this.hiteles = trainer.getHiteles();
		
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getKiketVallal() {
		return kiketVallal;
	}

	public void setKiketVallal(String kiketVallal) {
		this.kiketVallal = kiketVallal;
	}

	public String getSpecializacio() {
		return specializacio;
	}

	public void setSpecializacio(String specializacio) {
		this.specializacio = specializacio;
	}

	public String getVegzettseg() {
		return vegzettseg;
	}

	public void setVegzettseg(String vegzettseg) {
		this.vegzettseg = vegzettseg;
	}

	public String getTapasztalat() {
		return tapasztalat;
	}

	public void setTapasztalat(String tapasztalat) {
		this.tapasztalat = tapasztalat;
	}

	public String getTelefonszam() {
		return telefonszam;
	}

	public void setTelefonszam(String telefonszam) {
		this.telefonszam = telefonszam;
	}

	public String getBemutatkozas() {
		return bemutatkozas;
	}

	public void setBemutatkozas(String bemutatkozas) {
		this.bemutatkozas = bemutatkozas;
	}

	public long getUserId() {
		return userId;
	}

	public void setUserId(long userId) {
		this.userId = userId;
	}

	public boolean isHiteles() {
		return hiteles;
	}

	public void setHiteles(boolean hiteles) {
		this.hiteles = hiteles;
	}
}
