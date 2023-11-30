package net.javaguides.springboot.model;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import net.javaguides.springboot.dto.UserDto;


@Entity
@Table(name = "users")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "lastname")
	private String lastname;
	
	@Column(name = "firstname")
	private String firstname;
	
	@Column(name="gender")
	private int gender;
	
	@Column(name = "birthplace")
	private String birthplace;
	
	@Column(name = "dateofbirth")
	private Date dateofbirth;
	
	@Column(name = "city")
	private String city;
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "password")
	private String password;
	
	@Column(name = "weight")
	private int weight;
	
	@Column(name = "height")
	private int height;
	
	public User() {
		
	}

	public User(long id, String lastname, String firstname, int gender, String birthplace, Date dateofbirth,
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
	
	public User(UserDto userdto) {
		super();
		this.id = userdto.getId();
		this.lastname = userdto.getLastname();
		this.firstname = userdto.getFirstname();
		this.gender = userdto.getGender();
		this.birthplace = userdto.getBirthplace();
		this.dateofbirth = userdto.getDateofbirth();
		this.city = userdto.getCity();
		this.email = userdto.getEmail();
		this.password = userdto.getPassword();
		this.weight = userdto.getWeight();
		this.height = userdto.getHeight();
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
	
	public String[] createUserToken(String tkn) {
		String[] token = new String[2];
		token[0] = "" + this.id;
		token[1] = tkn;
		return token;
	}
}
