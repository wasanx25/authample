package com.github.authsample

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.ResponseBody
import org.springframework.web.bind.annotation.RestController
import java.security.Principal

@RestController
@RequestMapping("/sample")
class SampleController {
    @GetMapping
    @ResponseBody
    fun index(principal: Principal?): List<String> {
        return listOf("hello, ${principal?.name}", "Goodbye")
    }
}
