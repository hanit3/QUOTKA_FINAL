package com.Quotka.Quotka_BackEnd.web.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Getter
@NoArgsConstructor
public class playGroundUpdateRequestDto {
    private Long id;
    private String title;
    private String author;
    private LocalDate regDate;
    private int count;
    private String content;

    @Builder
    public playGroundUpdateRequestDto(String title, String author, LocalDate regDate, int count, String content) {
        this.title = title;
        this.author = author;
        this.regDate = regDate;
        this.count = count;
        this.content = content;
    }
}
