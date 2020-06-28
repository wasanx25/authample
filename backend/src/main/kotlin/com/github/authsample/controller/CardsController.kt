package com.github.authsample.controller

import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.ResponseBody
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/cards")
class CardsController(
        val jdbcTemplate: NamedParameterJdbcTemplate
) {
    @GetMapping
    @ResponseBody
    fun index(): List<Card> {
        return jdbcTemplate.query("""
            SELECT * FROM cards;
        """.trimIndent()) { rs, _ ->
            Card(
                    id = rs.getInt("id"),
                    title = rs.getString("title"),
                    desc = rs.getString("description"),
                    status = CardStatus.valueOf(rs.getString("status").toUpperCase())
            )
        }
    }
}

data class Card(
        val id: Int,
        val title: String,
        val desc: String,
        val status: CardStatus
)

enum class CardStatus(val status: String) {
    TODO("todo"),
    DOING("doing"),
    DONE("done")
}
