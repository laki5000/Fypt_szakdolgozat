package net.javaguides.springboot.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "vezetek_nev")
	private String vezetekNev;
	
	@Column(name = "kereszt_nev")
	private String keresztNev;
	
	@Column(name = "nem")
	private String nem;
	
	@Column(name = "szul_hely")
	private String szulHely;
	
	@Column(name = "szul_ido")
	private String szulIdo;
	
	@Column(name = "iranyitoszam")
	private String iranyitoSzam;
	
	@Column(name = "lakhely_varos")
	private String lakhelyVaros;
	
	@Column(name = "email")
	private String eMail;
	
	@Column(name = "jelszo")
	private String jelszo;
	
	public User() {
		
	}
	
	public User(String vezetekNev, String keresztNev, String nem, String szulHely, String szulIdo, String iranyitoSzam,
			String lakhelyVaros, String eMail, String password) {
		super();
		this.vezetekNev = vezetekNev;
		this.keresztNev = keresztNev;
		this.nem = nem;
		this.szulHely = szulHely;
		this.szulIdo = szulIdo;
		this.iranyitoSzam = iranyitoSzam;
		this.lakhelyVaros = lakhelyVaros;
		this.eMail = eMail;
		this.jelszo = password;
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
}
