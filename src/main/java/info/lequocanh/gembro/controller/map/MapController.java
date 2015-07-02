package info.lequocanh.gembro.controller.map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by quocanh on 02/07/15.
 */

@Controller
public class MapController {

    @RequestMapping("/public/maps")
    public String getMap() {
        return "/public/maps";
    }
}
