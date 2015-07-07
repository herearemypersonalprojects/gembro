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


