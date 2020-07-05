package com.github.authsample.controller

import org.jetbrains.annotations.NotNull
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate
import org.springframework.validation.annotation.Validated
import org.springframework.web.bind.annotation.*

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

    @PostMapping
    fun create(
            @Validated
            @RequestBody
            form: CardForm
    ) {
        jdbcTemplate.update("""
            INSERT INTO cards (title, description, status) VALUES
            (:INPUT_TITLE, :INPUT_DESCRIPTION, :INPUT_STATUS::status)
        """.trimIndent(), mapOf(
                "INPUT_TITLE" to form.title,
                "INPUT_DESCRIPTION" to form.desc,
                "INPUT_STATUS" to form.status
        ))
    }
}

class CardForm(
        @field:NotNull
        val title: String,
        @field:NotNull
        val desc: String,
        @field:NotNull
        val status: String
)

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
