package com.Quotka.Quotka_BackEnd.web.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;


@Getter
@NoArgsConstructor
public class quoteMasterUpdateRequestDto {
    private Long id;
    private String title;
    private String author;
    private int count;
    private String content;

    @Builder
    public quoteMasterUpdateRequestDto(String title, String author, int count, String content) {
        this.title = title;
        this.author = author;
        this.count = count;
        this.content = content;
    }
}
