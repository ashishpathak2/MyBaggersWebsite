package org.springBoot.test.Controller;


import java.util.List;
import org.springBoot.test.Services.appService;
import org.springBoot.test.databaseEntity.userEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class UserController {

    @Autowired
    private appService service;
    

    @GetMapping("users")
    public List<userEntity> showusers() {
        return this.service.showusers();
    }

    @PostMapping("users")
    public boolean addUser(@ModelAttribute userEntity user) {
        return this.service.addUsers(user);

    }

    @GetMapping("users/login/{email}")
    public List<userEntity> checkUser(@PathVariable String email) {

            // return email;

        return this.service.checkUser(email);

    }

    @DeleteMapping("users/{id}")
    public String deleteUser(@PathVariable long id) {
        if (this.service.deleteUsers(id)) {
            return "User deleted";
        }
        return "not done";
    }

    @PutMapping("users/{id}")
    public String updateUser(@PathVariable long id, @RequestBody userEntity user) {

        return this.service.updateUser(id, user);
    }

}
