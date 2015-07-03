package info.lequocanh.gembro.controller.map;

import info.lequocanh.gembro.domain.good.ServiceMap;
import info.lequocanh.gembro.service.Service.MapService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by quocanh on 02/07/15.
 */

@Controller
public class MapController {

    private final MapService mapService;

    @Autowired
    public MapController(MapService mapService) {

        this.mapService = mapService;
    }

    @RequestMapping(value = "/public/maps", method = RequestMethod.GET)
    public String getMap(Model model)
    {
        model.addAttribute("serviceMap", new ServiceMap());
        return "/public/maps";
    }

    @RequestMapping(value = "/public/maps", method = RequestMethod.POST)
    public String getMap(@ModelAttribute("serviceMap") ServiceMap serviceMap, Model model)
    {
        try {

        } catch (DataIntegrityViolationException e) {

        }
        return "/public/maps";
    }

}
