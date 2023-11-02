package net.javaguides.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.javaguides.springboot.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
	User findByeMailAndJelszo(String eMail, String jelszo);
	User findById(long id);
	User findByeMail(String eMail);
}
