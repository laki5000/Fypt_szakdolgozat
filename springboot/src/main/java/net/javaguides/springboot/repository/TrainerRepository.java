package net.javaguides.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.javaguides.springboot.model.Trainer;

@Repository
public interface TrainerRepository extends JpaRepository<Trainer, Long>{
	List<Trainer> findByHiteles(boolean hiteles);
	Trainer findById(long id);
	Trainer findByUserId(long userId);
}
