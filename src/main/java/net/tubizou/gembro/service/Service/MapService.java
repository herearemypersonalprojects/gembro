package net.tubizou.gembro.service.Service;

import com.google.gson.Gson;
import net.tubizou.gembro.domain.map.GoogleResponse;
import net.tubizou.gembro.domain.map.Result;
import net.tubizou.gembro.domain.map.ServiceMap;
import net.tubizou.gembro.repository.MapRepository;
import net.tubizou.gembro.tools.Address2LatLongitude;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
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

    public void address2latlong() {
        List<ServiceMap> lstServices = mapRepository.findAll();

        GoogleResponse res = null;
        for (ServiceMap serviceMap : lstServices) {
            if (serviceMap.getLatitude() == null || serviceMap.getLongitude() == null)
            try {
                String address = serviceMap.getAddress()+", " + serviceMap.getCity() + " " + serviceMap.getPostalCode();
                res = new Address2LatLongitude().convertToLatLong(address);
                if (res.getStatus().equals("OK")) {
                    for (Result result : res.getResults()) {
                        serviceMap.setLatitude(Double.parseDouble(result.getGeometry().getLocation().getLat()));
                        serviceMap.setLongitude(Double.parseDouble(result.getGeometry().getLocation().getLng()));
                        /*
                        System.out.println("Lattitude of address is :" + result.getGeometry().getLocation().getLat());
                        System.out.println("Longitude of address is :" + result.getGeometry().getLocation().getLng());
                        System.out.println("Location is " + result.getGeometry().getLocation_type());
                        */
                    }
                } else {
                    System.out.println(res.getStatus());
                }

            } catch (IOException e) {
                LOGGER.debug(e.getMessage());
            }
        }
    }
}
