package org.springBoot.test.Repos;

import org.springBoot.test.databaseEntity.mybagEntity;
import org.springframework.data.jpa.repository.JpaRepository;


import org.springframework.stereotype.Repository;

@Repository
public interface bagRepo extends JpaRepository<mybagEntity, Long> {

}
