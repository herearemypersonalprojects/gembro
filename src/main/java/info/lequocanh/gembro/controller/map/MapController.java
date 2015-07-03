package info.lequocanh.gembro.controller.map;

import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by quocanh on 02/07/15.
 */

@Controller
public class MapController {

    @RequestMapping(value = "/public/maps", method = RequestMethod.GET)
    public String getMap(ModelMap model) {
        return "/public/maps";
    }

    @RequestMapping(value = "/public/maps", method = RequestMethod.POST)
    public String getMap(@ModelAttribute("Service") Service, ModelMap model) {
        return "/public/maps";
    }

}
