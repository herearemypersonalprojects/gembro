package info.lequocanh.gembro.service.property;

import info.lequocanh.gembro.domain.good.Property;

import java.util.Collection;

/**
 * Created by quocanh on 23/06/15.
 * <p>
 * Contact: ing.dev.java@gmail.com
 */
public interface PropertyService {
    Collection<Property> getPropertiesByPostalCode(Integer postalCode);

    Collection<Property> getPropertiesByCity(String city);
}
