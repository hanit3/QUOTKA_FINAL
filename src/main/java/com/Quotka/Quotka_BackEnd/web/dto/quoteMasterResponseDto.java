package com.Quotka.Quotka_BackEnd.web.dto;

import com.Quotka.Quotka_BackEnd.domain.model.board.quoteMaster;
import lombok.Getter;


@Getter
public class quoteMasterResponseDto {

    private Long id;
    private String title;
    private String author;
    private int count;
    private String content;

    public quoteMasterResponseDto(quoteMaster entity) {
        this.id = entity.getId();
        this.title = entity.getTitle();
        this.author = entity.getAuthor();
        this.count = entity.getCount();
        this.content = entity.getContent();
    }
}
