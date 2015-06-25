package info.lequocanh.gembro.domain.user;

import info.lequocanh.gembro.service.user.UserService;
import info.lequocanh.gembro.tools.EmailTool;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

/**
 * Created by quocanh on 23/06/15.
 */
@Component
public class UserCreateFormValidator implements Validator {

    private static final Logger LOGGER = LoggerFactory.getLogger(UserCreateFormValidator.class);
    private final UserService userService;

    @Autowired
    public UserCreateFormValidator(UserService userService) {
        this.userService = userService;
    }

    @Override
    public boolean supports(Class<?> clazz) {
        return clazz.equals(UserCreateForm.class);
    }

    @Override
    public void validate(Object target, Errors errors) {
        LOGGER.debug("Validating {}", target);
        UserCreateForm form = (UserCreateForm) target;
        validatePasswords(errors, form);
        validateEmail(errors, form);
    }

    private void validatePasswords(Errors errors, UserCreateForm form) {
        if (!form.getPassword().equals(form.getPasswordRepeated())) {
            errors.reject("password.no_match", "Passwords do not match");
        }
    }

    private void validateEmail(Errors errors, UserCreateForm form) {
        if (!EmailTool.isValidEmailAddress(form.getEmail())) {
            errors.reject("email.invalid", "The email " + form.getEmail() + " can not be validated. Please enter your right email format: user@domain.extension)");
        }

        if (userService.getUserByEmail(form.getEmail()).isPresent()) {
            errors.reject("email.exists", "User with this email already exists");
        }
    }
}
