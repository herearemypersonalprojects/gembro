package net.tubizou.gembro.service.property;

import net.tubizou.gembro.domain.map.Property;

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
