package net.javaguides.springboot.dto;

import net.javaguides.springboot.model.User;

public class UserDto {
	private long id;
	private String vezetekNev;
	private String keresztNev;
	private String nem;
	private String szulHely;
	private String szulIdo;
	private String iranyitoSzam;
	private String lakhelyVaros;
	private String eMail;
	private String jelszo;
	private String magassag;
	private String testsuly;
	
	public UserDto() {
		
	}
	
	public UserDto(User user) {
		this.id = user.getId();
		this.vezetekNev = user.getVezetekNev();
		this.keresztNev = user.getKeresztNev();
		this.nem = user.getNem();
		this.szulHely = user.getSzulHely();
		this.szulIdo = user.getSzulIdo();
		this.iranyitoSzam = user.getIranyitoSzam();
		this.lakhelyVaros = user.getLakhelyVaros();
		this.eMail = user.geteMail();
		this.jelszo = user.getJelszo();
		this.magassag = user.getMagassag();
		this.testsuly = user.getTestsuly();
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
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

	public String getMagassag() {
		return magassag;
	}

	public void setMagassag(String magassag) {
		this.magassag = magassag;
	}

	public String getTestsuly() {
		return testsuly;
	}

	public void setTestsuly(String testsuly) {
		this.testsuly = testsuly;
	}
}
