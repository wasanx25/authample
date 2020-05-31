package com.github.wasanx25

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class AuthSampleApplication

fun main(args: Array<String>) {
	runApplication<AuthSampleApplication>(*args)
}
