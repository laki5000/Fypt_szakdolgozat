package net.javaguides.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.dto.TrainerDto;
import net.javaguides.springboot.model.Trainer;
import net.javaguides.springboot.repository.TrainerRepository;

@RestController
@RequestMapping("/api/v1/")
public class TrainerController {
	@Autowired
	private TrainerRepository trainerrepository;
	
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/trainers/save")
	public Trainer saveTrainer(@RequestBody TrainerDto trainerdto) {
		Trainer trainer = new Trainer(trainerdto);
		return trainerrepository.save(trainer);
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/trainers/load/byuserid/{userid}")
	public Page<TrainerDto> getTrainerByUserid(@PathVariable long userid, Pageable pageable) {
	    return trainerrepository.findByUserid(userid, pageable).map(TrainerDto::new);
	}
}
