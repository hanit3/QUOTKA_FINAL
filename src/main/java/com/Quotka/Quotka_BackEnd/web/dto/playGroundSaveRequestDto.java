package com.Quotka.Quotka_BackEnd.web.dto;

import com.Quotka.Quotka_BackEnd.domain.model.board.playground;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;


@Getter
@NoArgsConstructor
public class playGroundSaveRequestDto {
    private String title;
    private String author;
    private int count;
    private String content;

    @Builder
    public playGroundSaveRequestDto(String title, String author, int count, String content) {
        this.title = title;
        this.author = author;
        this.count = count;
        this.content = content;
    }

    public playground toEntity() {
        return playground.builder()
                .title(title)
                .author(author)
                .count(count)
                .content(content)
                .build();

    }


}
