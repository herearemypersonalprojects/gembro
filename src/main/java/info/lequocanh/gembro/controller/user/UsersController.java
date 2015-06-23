package info.lequocanh.gembro.controller.user;

import info.lequocanh.gembro.domain.user.Role;
import info.lequocanh.gembro.service.user.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by quocanh on 23/06/15.
 * <p>
 * Contact: ing.dev.java@gmail.com
 */
@Controller
public class UsersController {

    private static final Logger LOGGER = LoggerFactory.getLogger(UsersController.class);
    private final UserService userService;

    @Autowired
    public UsersController(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping("/users")
    public ModelAndView getUsersPage() {
        LOGGER.debug("Getting users page");
        return new ModelAndView("users", "users", userService.getAllUsers());
    }

    @RequestMapping("/role")
    public ModelAndView getUsersPage(Role role) {
        LOGGER.debug("Getting users page by their role: " + role.name());
        return new ModelAndView("users", "users", userService.getUsersByRole(role));
    }


}
