package net.javaguides.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.dto.AdminDto;
import net.javaguides.springboot.model.Admin;
import net.javaguides.springboot.repository.AdminRepository;

@RestController
@RequestMapping("/api/v1/")
public class AdminController {
	@Autowired
	private AdminRepository adminRepository;

	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/admins/load")
	public AdminDto getAdmin(@RequestHeader("UserId") String user_id){
		Admin admin = adminRepository.findByUserId(user_id);
		if(admin != null) {
			return new AdminDto(admin);
		}
		return null;
	}
}
