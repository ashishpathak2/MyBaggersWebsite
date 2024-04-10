package org.springBoot.test.Controller;

import java.util.List;
import org.springBoot.test.Services.appService;
import org.springBoot.test.databaseEntity.productEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
// import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class productController {

    @Autowired
    private appService service;

    @GetMapping("products")
    public List<productEntity> productView() {
        return this.service.productView();
    }

    @PostMapping("products")
    public boolean addProducts(@ModelAttribute productEntity product) {
        return this.service.addProduct(product);

    }

    @DeleteMapping("products/{id}")
    public String deleteProduct(@PathVariable long id) {
        if (this.service.deleteProduct(id)) {
            return "product deleted";
        }
        return "not done";
    }

    @PutMapping("products/{id}")
    public String updateProduct(@PathVariable long id, @ModelAttribute productEntity product) {

        return this.service.updateProduct(id, product);
    }

}
