package net.javaguides.springboot.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.dto.UserDto;
import net.javaguides.springboot.model.User;
import net.javaguides.springboot.repository.UserRepository;
import net.javaguides.springboot.service.JwtTokenProvider;

@RestController
@RequestMapping("/api/v1/")
public class UserController {
	@Autowired
	private JwtTokenProvider JTP;
	
	@Autowired
	private UserRepository userRepository;
	
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/users/save")
	public User saveUser(@RequestBody User user) {
		return userRepository.save(user);
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/users/login")
	public String[] loginUser(@RequestBody User user) {
		User u = userRepository.findByeMailAndJelszo(user.geteMail(), user.getJelszo());
		if(u != null) {
			String[] data = new String[3];
			data[0] = JTP.createToken(u.geteMail());
			data[1] = "" + u.getId();
			data[2] = u.getKeresztNev();
			return data;
		}
		return new String[0];
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/users/load")
	public UserDto getUser(@RequestHeader("Id") String id){
		User user = userRepository.findById(Long.parseLong(id));
		if(user != null) {
			return new UserDto(user);
		}
		return null;
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/users/load/all")
	public List<UserDto> getAllUser(){
		List<User> users = userRepository.findAll();
		List<UserDto> userdtos = new ArrayList<UserDto>();
		for (User u : users) {
			userdtos.add(new UserDto(u));
		}
		return userdtos;
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/users/load/byemail")
	public UserDto getUserByEmail(@RequestHeader("Email") String email){
		User user = userRepository.findByeMail(email);
		if(user != null) {
			return new UserDto(user);
		}
		return null;
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/users/auth")
    public boolean authUser(@RequestHeader("Authorization") String token) {
        if (JTP.validateToken(token)) {
            return true;
        } else {
            return false;
        }
    }
	
	@CrossOrigin(origins = "http://localhost:3000")
	@DeleteMapping("/users/delete/{id}")
	public void deleteUser(@PathVariable Long id) {
		Optional<User> optionalUser = userRepository.findById(id);
		if (optionalUser.isPresent()) {
		       User user = optionalUser.get();
		       userRepository.delete(user);
	    }
	}
}
