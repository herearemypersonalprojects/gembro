package net.tubizou.gembro.repository;

import net.tubizou.gembro.domain.good.Property;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Collection;

/**
 * http://www.petrikainulainen.net/programming/spring-framework/spring-data-jpa-tutorial-three-custom-queries-with-query-methods/
 * Created by quocanh on 23/06/15.
 * <p>
 * Contact: ing.dev.java@gmail.com
 */
public interface PropertyRepository  extends JpaRepository<Property, Long> {

    @Query(value = "select distinct * from LOC_BIEN where CP = :postalCode", nativeQuery = true)
    Collection<Property> findByPostalCode(@Param("postalCode") Integer postalCode);

    Collection<Property> findByCity(@Param("city") String city);
}
