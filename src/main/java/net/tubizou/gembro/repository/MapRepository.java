package net.tubizou.gembro.repository;

import net.tubizou.gembro.domain.good.ServiceMap;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by quocanh on 03/07/15.
 */
public interface MapRepository extends JpaRepository<ServiceMap, Long> {

}
