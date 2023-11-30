package net.javaguides.springboot.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import net.javaguides.springboot.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
	Page<User> findByEmail(String email, Pageable pageable);
	Page<User> findById(long id, Pageable pageable);
	User findByEmailAndPassword(String email, String password);
	
	@Query("SELECT u FROM User u ORDER BY u.lastname ASC, u.firstname ASC")
	Page<User> findAllOrderByFullNameAsc(Pageable pageable);

	@Query("SELECT u FROM User u ORDER BY u.lastname DESC, u.firstname DESC")
	Page<User> findAllOrderByFullNameDesc(Pageable pageable);
}
