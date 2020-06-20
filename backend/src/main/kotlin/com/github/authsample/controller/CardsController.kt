package com.github.authsample.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.ResponseBody
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/cards")
class CardsController {
    @GetMapping
    @ResponseBody
    fun index(): List<Card> {
        return listOf(
                Card("Hello Hoge", "Hoge is Hoge", CardStatus.TODO),
                Card("Fuga2", "Fuga is nothing", CardStatus.DOING),
                Card("DONE", "DONE is done", CardStatus.DONE)
        )
    }
}

data class Card(
        val title: String,
        val desc: String,
        val status: CardStatus
)

enum class CardStatus(val status: String) {
    TODO("todo"),
    DOING("doing"),
    DONE("done")
}
