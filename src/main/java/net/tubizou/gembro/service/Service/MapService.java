package net.tubizou.gembro.service.Service;

import com.google.gson.Gson;
import net.tubizou.gembro.domain.map.ServiceMap;
import net.tubizou.gembro.repository.MapRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by quocanh on 03/07/15.
 */
@Service
public class MapService {

    private static final Logger LOGGER = LoggerFactory.getLogger(MapService.class);

    private final MapRepository mapRepository;

    @Autowired
    public MapService(MapRepository mapRepository) {
        this.mapRepository = mapRepository;
    }

    public ServiceMap create(ServiceMap serviceMap) {
        return mapRepository.save(serviceMap);
    }

    public String getListMaps() {
        List<ServiceMap> lstServices = mapRepository.findAll();

        LOGGER.debug("So luong dich vu: " + lstServices.size());

        // create a new Gson instance
        Gson gson = new Gson();
        // convert your list to json
        String jsonServiceList = gson.toJson(lstServices);
        // print your generated json
        LOGGER.debug("jsonServiceList: " + jsonServiceList);
        return jsonServiceList;
    }
}
