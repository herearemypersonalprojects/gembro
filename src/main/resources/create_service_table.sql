CREATE TABLE IF NOT EXISTS service (
  `id` smallint(6) NOT NULL AUTO_INCREMENT,
  `latitude` double DEFAULT NULL,
  `longitude` double DEFAULT NULL,
  `info` varchar(200) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `postal_code` varchar(255) DEFAULT NULL,
  `service_type` varchar(255) DEFAULT NULL,
  `update_date` datetime DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;


insert into service (address, city, postal_code, info)

  select b.ADRESSE, b.VILLE, b.CP,
    CONCAT('Dien tich: ', b.surface,', ', b.etage, ', tien thue:', bail.loyer, ', tien charges:', bail.charges, '.\nChu ho: ', p.nom, ' ', p.prenom, ',\ndia chi: ', p.ADRESSE, ', ', p.VILLE, ',\nemail: ', p.EMAIL, ', dien thoai: ', p.TELEPHONE) as info
  from LOC_BIEN b
    join LOC_PROPRIETAIRE p on b.ID_PROPRIETAIRE = p.id
    left join LOC_BAIL bail on bail.ID_BIEN = b.id;

