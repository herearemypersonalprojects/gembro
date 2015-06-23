package info.lequocanh.gembro.domain.user;

import org.springframework.security.core.authority.AuthorityUtils;

/**
 * Created by quocanh on 23/06/15.
 */
public class CurrentUser extends org.springframework.security.core.userdetails.User{
    private User user;

    public CurrentUser(User user) {
        super(user.getEmail(), user.getPasswordHash(), AuthorityUtils.createAuthorityList(user.getRole().toString()));
        this.user = user;
    }

    public User getUser() {
        return user;
    }

    public Long getId() {
        return user.getId();
    }

    public Role getRole() {
        return user.getRole();
    }

    @Override
    public String toString() {
        return "CurrentUser{" +
                "user=" + user +
                "} " + super.toString();
    }
}
