package net.tubizou.gembro.service.user;

import net.tubizou.gembro.domain.user.Role;
import net.tubizou.gembro.domain.user.User;
import net.tubizou.gembro.domain.user.UserCreateForm;

import java.util.Collection;
import java.util.Optional;

/**
 * Created by quocanh on 23/06/15.
 *
 * Contact: ing.dev.java@gmail.com
 */
public interface UserService {

    Optional<User> getUserById(long id);

    Optional<User> getUserByEmail(String email);

    Collection<User> getAllUsers();

    Collection<User> getUsersByRole(Role role);

    User create(UserCreateForm form);
}
