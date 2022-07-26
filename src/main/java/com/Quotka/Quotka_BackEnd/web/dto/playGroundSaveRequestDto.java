package com.Quotka.Quotka_BackEnd.web.dto;

import com.Quotka.Quotka_BackEnd.domain.model.board.playground;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;


@Getter
@NoArgsConstructor
public class playGroundSaveRequestDto {
    private String title;
    private String author;
    private Timestamp createDate;
    private int count;
    private String content;

    @Builder
    public playGroundSaveRequestDto(String title, String author, Timestamp createDate, int count, String content) {
        this.title = title;
        this.author = author;
        this.createDate = createDate;
        this.count = count;
        this.content = content;
    }

    public playground toEntity() {
        return playground.builder()
                .title(title)
                .author(author)
                .createDate(createDate)
                .count(count)
                .content(content)
                .build();

    }


}
