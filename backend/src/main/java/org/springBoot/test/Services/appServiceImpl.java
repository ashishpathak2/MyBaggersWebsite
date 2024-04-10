package org.springBoot.test.Services;

import java.util.List;

import org.springBoot.test.Repos.bagRepo;
import org.springBoot.test.Repos.productRepo;
import org.springBoot.test.Repos.userRepo;
import org.springBoot.test.databaseEntity.mybagEntity;
import org.springBoot.test.databaseEntity.productEntity;
import org.springBoot.test.databaseEntity.userEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class appServiceImpl implements appService {

    @Autowired
    private userRepo userRepositories;
    @Autowired
    private productRepo productRepositories;
    @Autowired
    private bagRepo bagRepositories;

    // User Service Implementation
    @Override
    public List<userEntity> showusers() {

        return userRepositories.findAll();
    }

    // @SuppressWarnings("null")
    @Override
    public boolean addUsers(userEntity user) {
        userRepositories.save(user);
        return true;
    }

    @Override
    public List<userEntity> checkUser(String email) {

        return userRepositories.data(email);
        // return userRepositories.data(logUser.getEmail());
    }

    // @SuppressWarnings("null")
    @Override
    public boolean deleteUsers(long id) {
        userEntity user = userRepositories.findById(id).get();
        userRepositories.delete(user);
        return true;
    }

    @Override
    public String updateUser(long id, userEntity user) {
        userEntity exsistingUser = userRepositories.findById(id).get();
        exsistingUser.setName(user.getName());
        exsistingUser.setPassword(user.getPassword());
        userRepositories.save(exsistingUser);
        return "User Details Update";
    }

    // Product Service Implementation
    @Override
    public List<productEntity> productView() {
        return productRepositories.findAll();
    }

    @Override
    public boolean addProduct(productEntity product) {
        productRepositories.save(product);
        return true;
    }

    @Override
    public boolean deleteProduct(long id) {

        productEntity product = productRepositories.findById(id).get();
        productRepositories.delete(product);
        return true;
    }

    @Override
    public String updateProduct(long id, productEntity product) {
        productEntity exsistingProduct = productRepositories.findById(id).get();
        exsistingProduct.setName(product.getName());
        exsistingProduct.setDescription(product.getDescription());
        exsistingProduct.setPrice(product.getPrice());
        exsistingProduct.setImageUrl(product.getImageUrl());
        exsistingProduct.setCategory(product.getCategory());
        exsistingProduct.setCotton(product.getCotton());
        exsistingProduct.setSize(product.getSize());
        exsistingProduct.setColor(product.getColor());

        productRepositories.save(exsistingProduct);
        return "product Details Update";
    }

    // Bag Service Implementation

    @Override
    public boolean addbag(mybagEntity item) {
        bagRepositories.save(item);
        return true;

    }

    @Override
    public List<mybagEntity> bagView() {
        return bagRepositories.findAll();
    }

    @Override
    public boolean deletebag(long id) {

        mybagEntity item = bagRepositories.findById(id).get();
        bagRepositories.delete(item);
        return true;
    }

    @Override
    public String updatebag(long id, mybagEntity item) {

        mybagEntity exsistingItem = bagRepositories.findById(id).get();
        // exsistingItem.setBag_name(item.getBag_name());
        // exsistingItem.setBag_description(item.getBag_description());
        // exsistingItem.setBag_price(item.getBag_price());
        // exsistingItem.setImageUrl(item.getImageUrl());
        // exsistingItem.setBag_size(item.getBag_size());
        // exsistingItem.setBag_color(item.getBag_color());
        exsistingItem.setBag_type(item.getBag_type());
        bagRepositories.save(exsistingItem);
        return "product Details Update";
    }

    @Override
    public String quantityupdatebag(long id, mybagEntity item) {

        mybagEntity exsistingItem = bagRepositories.findById(id).get();
        exsistingItem.setQuantity(item.getQuantity());
        bagRepositories.save(exsistingItem);

        return "product Details Update";
    }

}
