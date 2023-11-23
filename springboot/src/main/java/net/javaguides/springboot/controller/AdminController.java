package net.javaguides.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.dto.AdminDto;
import net.javaguides.springboot.repository.AdminRepository;

@RestController
@RequestMapping("/api/v1/")
public class AdminController {
	@Autowired
	private AdminRepository adminrepository;

	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/admins/load/byuserid/{userid}")
	public Page<AdminDto> getAdminByUserid(@PathVariable long userid, Pageable pageable) {
	    return adminrepository.findByUserid(userid, pageable).map(AdminDto::new);
	}
}
