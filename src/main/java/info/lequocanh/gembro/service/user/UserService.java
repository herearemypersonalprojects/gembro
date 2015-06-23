package info.lequocanh.gembro.service.user;

import info.lequocanh.gembro.domain.user.User;
import info.lequocanh.gembro.domain.user.UserCreateForm;

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

    User create(UserCreateForm form);
}
