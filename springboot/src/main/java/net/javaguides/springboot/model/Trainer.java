package net.javaguides.springboot.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "trainers")
public class Trainer {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "kiket_vallal")
	private String kiketVallal;
	
	@Column(name = "specializacio")
	private String specializacio;
	
	@Column(name = "vegzettseg")
	private String vegzettseg;
	
	@Column(name = "hol")
	private String hol;
	
	@Column(name = "online")
	private boolean online;
	
	@Column(name = "tapasztalat")
	private String tapasztalat;
	
	@Column(name = "telefonszam")
	private String telefonszam;
	
	@Column(name = "bemutatkozas")
	private String bemutatkozas;
	
	@Column(name = "user_id")
	private long userId;
	
	@Column(name = "hiteles")
	private boolean hiteles;
	
	public Trainer() {
		
	}

	public Trainer(long id, String kiketVallal, String specializacio, String vegzettseg, String hol, boolean online,
			String tapasztalat, String telefonszam, String bemutatkozas, long userId, boolean hiteles) {
		super();
		this.id = id;
		this.kiketVallal = kiketVallal;
		this.specializacio = specializacio;
		this.vegzettseg = vegzettseg;
		this.hol = hol;
		this.online = online;
		this.tapasztalat = tapasztalat;
		this.telefonszam = telefonszam;
		this.bemutatkozas = bemutatkozas;
		this.userId = userId;
		this.hiteles = hiteles;
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

	public String getHol() {
		return hol;
	}

	public void setHol(String hol) {
		this.hol = hol;
	}

	public boolean isOnline() {
		return online;
	}

	public void setOnline(boolean online) {
		this.online = online;
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
