package net.javaguides.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import net.javaguides.springboot.dto.UserDto;
import net.javaguides.springboot.model.User;
import net.javaguides.springboot.repository.UserRepository;

@RestController
@RequestMapping("/api/v1/")
public class UserController {
	@Autowired
	private UserRepository userrepository;
	
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/users/save")
	public User saveUser(@RequestBody UserDto userdto) {
		User user = new User(userdto);
		return userrepository.save(user);
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/users/load/byemail/{email}")
	public Page<UserDto> getUserByEmail(@PathVariable String email, Pageable pageable) {
	    return userrepository.findByEmail(email, pageable).map(UserDto::new);
	}
}
