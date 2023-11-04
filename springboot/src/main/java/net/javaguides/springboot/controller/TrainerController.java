package net.javaguides.springboot.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.dto.TrainerAndUserDto;
import net.javaguides.springboot.dto.TrainerDto;
import net.javaguides.springboot.model.Trainer;
import net.javaguides.springboot.repository.TrainerRepository;
import net.javaguides.springboot.repository.UserRepository;

@RestController
@RequestMapping("/api/v1/")
public class TrainerController {
	@Autowired
	private TrainerRepository trainerRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/trainers/save")
	public Trainer saveTrainer(@RequestBody Trainer trainer) {
		return trainerRepository.save(trainer);
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/trainers/load")
	public TrainerDto getTrainer(@RequestHeader("Id") String Id){
		Trainer trainer = trainerRepository.findById(Long.parseLong(Id));
		if(trainer != null) {
			return new TrainerDto(trainer);
		}
		return null;
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/trainers/load/byuserid")
	public TrainerDto getTrainerByUserId(@RequestHeader("UserId") String UserId){
		Trainer trainer = trainerRepository.findByUserId(Long.parseLong(UserId));
		if(trainer != null) {
			return new TrainerDto(trainer);
		}
		return null;
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/trainers/load/applications")
	public List<TrainerAndUserDto> loadTrainerApplications(@RequestHeader("Hiteles") String hiteles) {
		boolean hitelesBool;
		if(hiteles.equals("0")) {
			hitelesBool = false;
		}
		else {
			hitelesBool = true;
		}
		List<Trainer> trainers = trainerRepository.findByHiteles(hitelesBool);
		List<TrainerAndUserDto> trainersAndUsers = new ArrayList<TrainerAndUserDto>();
		for (Trainer t : trainers) {
			trainersAndUsers.add(new TrainerAndUserDto(t, userRepository.findById(Long.parseLong(t.getUserId()))));
		}
		return trainersAndUsers;
	}
}
