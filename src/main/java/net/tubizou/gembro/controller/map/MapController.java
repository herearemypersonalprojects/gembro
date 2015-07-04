package net.tubizou.gembro.controller.map;

import net.tubizou.gembro.domain.map.ServiceMap;
import net.tubizou.gembro.domain.user.UserCreateForm;
import net.tubizou.gembro.service.Service.MapService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import javax.validation.Valid;

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

    @RequestMapping(value = "/maps", method = RequestMethod.POST)
    public String getMaps(@ModelAttribute("serviceMap") ServiceMap serviceMap) {
        LOGGER.debug(serviceMap.toString());
        try {
            mapService.create(serviceMap);
        } catch (DataIntegrityViolationException e) {
           LOGGER.warn("Exception occurred when trying to save the map, assuming invalid information", e);
            return "maps";
        }
        // ok, redirect
        return "redirect:/maps";
    }

}
