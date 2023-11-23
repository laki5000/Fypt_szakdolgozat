package net.javaguides.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.CrossOrigin;
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
	private JwtTokenProvider jtp;
	
	@Autowired
	private UserRepository userrepository;
	
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/users/save")
	public User saveUser(@RequestBody UserDto userdto) {
		User user = new User(userdto);
		return userrepository.save(user);
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/users/login")
	public String[] loginUser(@RequestBody User user) {
		User u = userrepository.findByEmailAndPassword(user.getEmail(), user.getPassword());
		if(u != null) {
			String[] data = new String[2];
			data[0] = "" + u.getId();
			data[1] = jtp.createToken("" + u.getId());
			return data;
		}
		else {
			return null;
		}
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/users/auth")
    public String authUser(@RequestHeader("Authorization") String token) {
        if (jtp.validateToken(token)) {
        	return jtp.getUsernameFromToken(token);
        } else {
            return null;
        }
    }
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/users/load/byemail/{email}")
	public Page<UserDto> getUserByEmail(@PathVariable String email, Pageable pageable) {
	    return userrepository.findByEmail(email, pageable).map(UserDto::new);
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/users/load/byid/{id}")
	public Page<UserDto> getUserById(@PathVariable long id, Pageable pageable) {
	    return userrepository.findById(id, pageable).map(UserDto::new);
	}
}
