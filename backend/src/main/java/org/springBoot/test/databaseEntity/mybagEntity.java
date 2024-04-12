package org.springBoot.test.databaseEntity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
// @Entity
@Table(name = "bag_DB")
public class mybagEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String bag_name;
    private String bag_description;
    private String bag_price;
    private String imageUrl;
    private String bag_size;
    private String bag_color;
    private String quantity;
    private String bag_type;
    private String discount;

}