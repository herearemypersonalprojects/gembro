package info.lequocanh.gembro.service.user;

import info.lequocanh.gembro.domain.user.CurrentUser;

/**
 * Created by quocanh on 23/06/15.
 *
 * Contact: ing.dev.java@gmail.com
 */
public interface CurrentUserService {

    boolean canAccessUser(CurrentUser currentUser, Long userId);
}
