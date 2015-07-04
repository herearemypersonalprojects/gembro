package net.tubizou.gembro.repository;

import net.tubizou.gembro.domain.user.Role;
import net.tubizou.gembro.domain.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

/**
 * Created by quocanh on 23/06/15.
 */
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findOneByEmail(String email);

    @Query("select u from User u where u.role = :role")
    List<User> findUsersByRole(@Param("role") Role role);

}
