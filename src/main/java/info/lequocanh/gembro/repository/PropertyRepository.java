package info.lequocanh.gembro.repository;

import info.lequocanh.gembro.domain.good.Property;
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
    static String FIND_BY_POSTAL_CODE = "SELECT t FROM Property t where t.postalCode = :postalCode";

    @Query(FIND_BY_POSTAL_CODE)
    Collection<Property> findByPostalCode(@Param("postalCode") Integer postalCode);


}
