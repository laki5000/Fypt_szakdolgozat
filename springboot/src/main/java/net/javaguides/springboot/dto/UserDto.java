package net.javaguides.springboot.dto;

import java.util.Date;

import net.javaguides.springboot.model.User;

public class UserDto {
	private long id;
	private String lastname;
	private String firstname;
	private int gender;
	private String birthplace;
	private Date dateofbirth;
	private String city;
	private String email;
	private String password;
	private int weight;
	private int height;
	
	public UserDto() {
		
	}

	public UserDto(long id, String lastname, String firstname, int gender, String birthplace, Date dateofbirth,
			String city, String email, String password, int weight, int height) {
		super();
		this.id = id;
		this.lastname = lastname;
		this.firstname = firstname;
		this.gender = gender;
		this.birthplace = birthplace;
		this.dateofbirth = dateofbirth;
		this.city = city;
		this.email = email;
		this.password = password;
		this.weight = weight;
		this.height = height;
	}
	
	public UserDto(User user) {
		super();
		this.id = user.getId();
		this.lastname = user.getLastname();
		this.firstname = user.getFirstname();
		this.gender = user.getGender();
		this.birthplace = user.getBirthplace();
		this.dateofbirth = user.getDateofbirth();
		this.city = user.getCity();
		this.email = user.getEmail();
		this.password = user.getPassword();
		this.weight = user.getWeight();
		this.height = user.getHeight();
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public int getGender() {
		return gender;
	}

	public void setGender(int gender) {
		this.gender = gender;
	}

	public String getBirthplace() {
		return birthplace;
	}

	public void setBirthplace(String birthplace) {
		this.birthplace = birthplace;
	}

	public Date getDateofbirth() {
		return dateofbirth;
	}

	public void setDateofbirth(Date dateofbirth) {
		this.dateofbirth = dateofbirth;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getWeight() {
		return weight;
	}

	public void setWeight(int weight) {
		this.weight = weight;
	}

	public int getHeight() {
		return height;
	}

	public void setHeight(int height) {
		this.height = height;
	}
}
