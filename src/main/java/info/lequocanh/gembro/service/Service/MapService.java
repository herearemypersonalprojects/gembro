package info.lequocanh.gembro.service.Service;

import info.lequocanh.gembro.domain.good.ServiceMap;
import info.lequocanh.gembro.repository.MapRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by quocanh on 03/07/15.
 */
@Service
public class MapService {

    private final MapRepository mapRepository;

    @Autowired
    public MapService(MapRepository mapRepository) {
        this.mapRepository = mapRepository;
    }

    public ServiceMap create(ServiceMap serviceMap) {
        return mapRepository.save(serviceMap);
    }
}
