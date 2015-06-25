package info.lequocanh.gembro.tools;

import org.springframework.util.StringUtils;

import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Created by quocanh on 25/06/15.
 * <p>
 * Contact: ing.dev.java@gmail.com
 */
final public class EmailTool {

    private final static String PATTERN_EMAIL_VALIDE = "[\\w-\\.\\+]+@[\\w-\\.]+\\.[a-zA-Z]+";
    private final static Pattern PATTERN_DOMAINE = Pattern.compile("^.+@([\\w-\\.]+\\.[a-zA-Z]+)$");
    private final static Pattern PATTERN_USER = Pattern.compile("^([\\w-\\.\\+]+)@.+$");

    // This class can not be instantiated
    private EmailTool(){}

    /**
     * Check whether an email is correct.
     * @param email
     * @return
     */
    public static boolean isValidEmailAddress(String email) {
        boolean result = true;
        if (StringUtils.isEmpty(email)) {
            return false;
        }
        if (!email.matches(PATTERN_EMAIL_VALIDE)) {
            return false;
        }
        try {
            InternetAddress emailAddr = new InternetAddress(email);
            result = true;
        } catch (AddressException e) {
            result = false;
        }
        return result;
    }

    /**
     * Getting the email domain.
     * @param email
     * @return
     */
    public static String extractDomain(String email) {
        if (isValidEmailAddress(email) == false) {
            return null;
        }
        Matcher matcher = PATTERN_DOMAINE.matcher(email);
        if (matcher.find() == false) {
            return null;
        }
        return matcher.group(1).toLowerCase();
    }

    /**
     * Getting the email user.
     * @param email
     * @return
     */
    public static String extractUser(String email) {
        if (isValidEmailAddress(email) == false) {
            return null;
        }
        Matcher matcher = PATTERN_USER.matcher(email);
        if (matcher.find() == false) {
            return null;
        }
        return matcher.group(1);
    }
}
