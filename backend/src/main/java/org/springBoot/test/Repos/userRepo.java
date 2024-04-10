package org.springBoot.test.Repos;

import org.springBoot.test.databaseEntity.userEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface userRepo extends JpaRepository<userEntity, Long> {

    @Query("SELECT u FROM `userEntity` u WHERE u.email= :n ")
    public java.util.List<userEntity> data(@Param("n") String email);

   

}
