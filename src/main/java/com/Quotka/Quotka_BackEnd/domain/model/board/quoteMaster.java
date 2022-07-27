package com.Quotka.Quotka_BackEnd.domain.model.board;

import com.Quotka.Quotka_BackEnd.domain.BaseTimeEntity;
import com.Quotka.Quotka_BackEnd.domain.model.user.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.sql.Timestamp;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "quoteMaster")
public class quoteMaster extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "quote_id")
    private Long id;

    @Column(nullable = false, length = 500, name = "quote_title")
    private String title;

    @Column(length = 500, name = "quote_author")
    private String author;

    @ManyToOne(targetEntity = User.class) //Many = Board, User = One
    @JoinColumn(name="userId")
    private User user; //DB는 오브젝트를 저장할 수 없다. FK, 자바는 오브젝트를 저장할 수 있다.

    @ColumnDefault("0")
    @Column(name = "quote_count")
    private int count;

    @Lob //대용량 데이터
    @Column(nullable = false, name = "quote_content")
    private String content;

    @Builder
    public quoteMaster(String title, String author, int count, String content) {
        this.title = title;
        this.author = author;
        this.count = count;
        this.content = content;

    }

    public void quoteMasterUpdate(String title, String author, int count, String content) {
        this.title = title;
        this.author = author;
        this.count = count;
        this.content = content;
    }

}
