package net.javaguides.springboot.dto;

import net.javaguides.springboot.model.Trainer;
import net.javaguides.springboot.model.User;

public class TrainerAndUserDto {
	private long id;
	private String kiketVallal;
	private String specializacio;
	private String vegzettseg;
	private String hol;
	private boolean online;
	private String tapasztalat;
	private String telefonszam;
	private String bemutatkozas;
	private long userId;
	private boolean hiteles;
	private String vezetekNev;
	private String keresztNev;
	private String nem;
	private String szulHely;
	private String szulIdo;
	private String iranyitoSzam;
	private String lakhelyVaros;
	private String eMail;
	private String jelszo;
	
	public TrainerAndUserDto() {
		
	}
	
	public TrainerAndUserDto(Trainer trainer, User user) {
		this.id = trainer.getId();
		this.kiketVallal = trainer.getKiketVallal();
		this.specializacio = trainer.getSpecializacio();
		this.vegzettseg = trainer.getVegzettseg();
		this.hol = trainer.getHol();
		this.online = trainer.isOnline();
		this.tapasztalat = trainer.getTapasztalat();
		this.telefonszam = trainer.getTelefonszam();
		this.bemutatkozas = trainer.getBemutatkozas();
		this.userId = trainer.getUserId();
		this.hiteles = trainer.isHiteles();
		this.vezetekNev = user.getVezetekNev();
		this.keresztNev = user.getKeresztNev();
		this.nem = user.getNem();
		this.szulHely = user.getSzulHely();
		this.szulIdo = user.getSzulIdo();
		this.iranyitoSzam = user.getIranyitoSzam();
		this.lakhelyVaros = user.getLakhelyVaros();
		this.eMail = user.geteMail();
		this.jelszo = user.getJelszo();
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

	public String getVezetekNev() {
		return vezetekNev;
	}

	public void setVezetekNev(String vezetekNev) {
		this.vezetekNev = vezetekNev;
	}

	public String getKeresztNev() {
		return keresztNev;
	}

	public void setKeresztNev(String keresztNev) {
		this.keresztNev = keresztNev;
	}

	public String getNem() {
		return nem;
	}

	public void setNem(String nem) {
		this.nem = nem;
	}

	public String getSzulHely() {
		return szulHely;
	}

	public void setSzulHely(String szulHely) {
		this.szulHely = szulHely;
	}

	public String getSzulIdo() {
		return szulIdo;
	}

	public void setSzulIdo(String szulIdo) {
		this.szulIdo = szulIdo;
	}

	public String getIranyitoSzam() {
		return iranyitoSzam;
	}

	public void setIranyitoSzam(String iranyitoSzam) {
		this.iranyitoSzam = iranyitoSzam;
	}

	public String getLakhelyVaros() {
		return lakhelyVaros;
	}

	public void setLakhelyVaros(String lakhelyVaros) {
		this.lakhelyVaros = lakhelyVaros;
	}

	public String geteMail() {
		return eMail;
	}

	public void seteMail(String eMail) {
		this.eMail = eMail;
	}

	public String getJelszo() {
		return jelszo;
	}

	public void setJelszo(String jelszo) {
		this.jelszo = jelszo;
	}
}
