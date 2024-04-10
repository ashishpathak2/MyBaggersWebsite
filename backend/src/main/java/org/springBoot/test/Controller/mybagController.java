package org.springBoot.test.Controller;

import java.util.List;
import org.springBoot.test.Services.appService;
import org.springBoot.test.databaseEntity.mybagEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class mybagController {

    @Autowired
    private appService service;

    @GetMapping("bag")
    public List<mybagEntity> bagView() {
        return this.service.bagView();
    }

    @PostMapping("bag/add")
    public boolean addbag(@ModelAttribute mybagEntity item) {
        return this.service.addbag(item);

    }

    @DeleteMapping("bag/delete/{id}")
    public String deletebag(@PathVariable long id) {
        if (this.service.deletebag(id)) {
            return "bag deleted";
        }
        return "not done";
    }

    @PutMapping("bag/update/{id}")
    public String updatebag(@PathVariable long id, @ModelAttribute mybagEntity item) {

        return this.service.updatebag(id, item);
    }

    
    @PutMapping("bag/quantity/{id}")
    public String quantityupdatebag(@PathVariable long id, @ModelAttribute mybagEntity item) {

        return this.service.quantityupdatebag(id, item);
    }


}
