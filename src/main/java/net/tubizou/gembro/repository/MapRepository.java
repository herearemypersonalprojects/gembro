package net.tubizou.gembro.repository;

import net.tubizou.gembro.domain.map.ServiceMap;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Collection;

/**
 * Created by quocanh on 03/07/15.
 */
public interface MapRepository extends JpaRepository<ServiceMap, Long> {

    @Query(value = "select distinct * from service where postal_code = :postalCode", nativeQuery = true)
    Collection<ServiceMap> findByPostalCode(@Param("postalCode") Integer postalCode);

}
