package net.javaguides.springboot.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.javaguides.springboot.model.Trainer;

@Repository
public interface TrainerRepository extends JpaRepository<Trainer, Long>{
	Page<Trainer> findByUserid(long userid, Pageable pageable);

}
