package com.Quotka.Quotka_BackEnd.web.dto;

import com.Quotka.Quotka_BackEnd.domain.model.board.playground;
import com.Quotka.Quotka_BackEnd.domain.model.board.quoteMaster;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;


@Getter
@NoArgsConstructor
public class quoteMasterSaveRequestDto {
    private String title;
    private String author;
    private Timestamp createDate;
    private int count;
    private String content;

    @Builder
    public quoteMasterSaveRequestDto(String title, String author, Timestamp createDate, int count, String content) {
        this.title = title;
        this.author = author;
        this.createDate = createDate;
        this.count = count;
        this.content = content;
    }

    public quoteMaster toEntity() {
        return quoteMaster.builder()
                .title(title)
                .author(author)
                .createDate(createDate)
                .count(count)
                .content(content)
                .build();

    }


}
