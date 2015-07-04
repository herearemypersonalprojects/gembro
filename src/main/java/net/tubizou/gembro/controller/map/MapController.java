package net.tubizou.gembro.controller.map;

import net.tubizou.gembro.domain.good.ServiceMap;
import net.tubizou.gembro.domain.user.UserCreateForm;
import net.tubizou.gembro.service.Service.MapService;
import net.tubizou.gembro.service.property.PropertyService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by quocanh on 02/07/15.
 */

@Controller
public class MapController {

    private static final Logger LOGGER = LoggerFactory.getLogger(MapController.class);
    private final MapService mapService;

    @Autowired
    public MapController(MapService mapService) {
        this.mapService = mapService;
    }

    @RequestMapping(value = "/maps", method = RequestMethod.GET)
    public ModelAndView getMaps() {
        LOGGER.debug("Maps Page");
        return new ModelAndView("maps", "serviceMap", new ServiceMap());
    }

}
