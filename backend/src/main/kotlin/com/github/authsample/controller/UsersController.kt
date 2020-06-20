package com.github.authsample.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.ResponseBody
import org.springframework.web.bind.annotation.RestController
import java.security.Principal

@RestController
@RequestMapping("/users")
class UsersController {
    @GetMapping
    @ResponseBody
    fun index(principal: Principal?): User {
        return User(principal?.name ?: "NONAME")
    }
}

data class User(val username: String)
