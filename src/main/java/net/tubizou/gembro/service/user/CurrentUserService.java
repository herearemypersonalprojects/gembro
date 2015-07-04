package net.tubizou.gembro.service.user;

import net.tubizou.gembro.domain.user.CurrentUser;

/**
 * Created by quocanh on 23/06/15.
 *
 * Contact: ing.dev.java@gmail.com
 */
public interface CurrentUserService {

    boolean canAccessUser(CurrentUser currentUser, Long userId);
}
