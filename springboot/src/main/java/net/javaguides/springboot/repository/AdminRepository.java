package net.javaguides.springboot.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.javaguides.springboot.model.Admin;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Long>{
	Page<Admin> findByUserid(long userid, Pageable pageable);
}