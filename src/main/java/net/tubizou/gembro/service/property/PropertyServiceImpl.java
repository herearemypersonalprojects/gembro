package net.tubizou.gembro.service.property;

import net.tubizou.gembro.domain.good.Property;
import net.tubizou.gembro.repository.PropertyRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

/**
 * Created by quocanh on 23/06/15.
 * <p>
 * Contact: ing.dev.java@gmail.com
 */
@Service
public class PropertyServiceImpl implements PropertyService {

    private static final Logger LOGGER = LoggerFactory.getLogger(PropertyServiceImpl.class);
    private final PropertyRepository propertyRepository;

    @Autowired
    public PropertyServiceImpl(PropertyRepository propertyRepository) {
        this.propertyRepository = propertyRepository;
    }

    @Override
    public Collection<Property> getPropertiesByPostalCode(Integer postalCode) {
        LOGGER.debug("Getting all properties in the postal code: " + postalCode);
        Collection<Property> results = propertyRepository.findByPostalCode(postalCode);
        LOGGER.debug("results: " + results.size());
        return results;
    }

    @Override
    public Collection<Property> getPropertiesByCity(String city) {
        LOGGER.debug("Getting all properties in the city: " + city);
        Collection<Property> results = propertyRepository.findByCity(city);
        LOGGER.debug("results: " + results.size());
        return results;
    }
}
