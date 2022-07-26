package com.Quotka.Quotka_BackEnd.web.dto;

import com.Quotka.Quotka_BackEnd.domain.model.board.playground;
import lombok.Getter;

import java.time.LocalDate;

@Getter
public class playGroundResponseDto {

    private Long id;
    private String title;
    private String author;
    private LocalDate regDate;
    private int count;
    private String content;

    public playGroundResponseDto(playground entity) {
        this.id = entity.getId();
        this.title = entity.getTitle();
        this.author = entity.getAuthor();
        this.regDate = entity.getRegDate();
        this.count = entity.getCount();
        this.content = entity.getContent();
    }
}
