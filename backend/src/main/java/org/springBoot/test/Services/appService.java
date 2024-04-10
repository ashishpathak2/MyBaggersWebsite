package org.springBoot.test.Services;

import java.beans.JavaBean;
import java.util.List;

import org.springBoot.test.databaseEntity.mybagEntity;
import org.springBoot.test.databaseEntity.productEntity;
import org.springBoot.test.databaseEntity.userEntity;

@JavaBean
public interface appService {

    // User Services
    public List<userEntity> showusers();

    public boolean addUsers(userEntity user);

    public List<userEntity> checkUser(String email);

    public boolean deleteUsers(long id);

    public String updateUser(long id, userEntity user);

    // Product Services
    public List<productEntity> productView();

    public boolean addProduct(productEntity product);

    public boolean deleteProduct(long id);

    public String updateProduct(long id, productEntity product);

    // Bag Services
    public List<mybagEntity> bagView();

    public boolean addbag(mybagEntity item);

    public boolean deletebag(long id);

    public String updatebag(long id, mybagEntity item);

    public String quantityupdatebag(long id, mybagEntity item);

}
