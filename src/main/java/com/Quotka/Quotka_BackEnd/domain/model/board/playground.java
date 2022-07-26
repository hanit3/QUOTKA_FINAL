package com.Quotka.Quotka_BackEnd.domain.model.board;

import com.Quotka.Quotka_BackEnd.domain.BaseTimeEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.apache.catalina.User;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDate;

@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "playground")
public class playground extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "play_id")
    private Long id;

    @Column(nullable = false, length = 500, name = "play_title")
    private String title;

    @Column(nullable = false, length = 500, name = "play_author")
    private String author;

    @Column(name = "play_regDate")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate regDate;

    @Column(name = "play_count")
    private int count;

    @Lob
    @Column(name = "play_content")
    private String content;

    @Builder
    public playground(String title, String author, LocalDate regDate, int count, String content) {
        this.title = title;
        this.author = author;
        this.regDate = regDate;
        this.count = count;
        this.content = content;

    }

    public void update(String title, String author, LocalDate regDate, int count, String content) {
        this.title = title;
        this.author = author;
        this.regDate = regDate;
        this.count = count;
        this.content = content;
    }

//    @ManyToOne(fetch = FetchType.EAGER)
//    @JoinColumn(name = "userId")
//    private User user;

}
