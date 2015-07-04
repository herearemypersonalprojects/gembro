package net.tubizou.gembro.controller.property;

import net.tubizou.gembro.service.property.PropertyService;
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
public class PropertiesController {
    private static final Logger LOGGER = LoggerFactory.getLogger(PropertiesController.class);
    private final PropertyService propertyService;

    @Autowired
    public PropertiesController(PropertyService propertyService) {
        this.propertyService = propertyService;
    }

    @RequestMapping("/listProperties")
    public ModelAndView getPropertiesPage(Integer postalCode) {
        LOGGER.debug("Getting properties page");
        return new ModelAndView("properties", "properties", propertyService.getPropertiesByPostalCode(postalCode));
    }

    @RequestMapping("/list")
    public ModelAndView getPropertiesPage(String city) {
        LOGGER.debug("Getting properties page in the city: " + city);
        return new ModelAndView("properties", "properties", propertyService.getPropertiesByCity(city));
    }
}
