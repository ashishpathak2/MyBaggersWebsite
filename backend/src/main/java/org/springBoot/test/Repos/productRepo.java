package org.springBoot.test.Repos;

import org.springBoot.test.databaseEntity.productEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface productRepo extends JpaRepository<productEntity , Long> {

}
