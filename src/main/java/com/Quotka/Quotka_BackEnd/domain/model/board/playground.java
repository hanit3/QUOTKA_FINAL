package com.Quotka.Quotka_BackEnd.domain.model.board;

import com.Quotka.Quotka_BackEnd.domain.BaseTimeEntity;
import com.Quotka.Quotka_BackEnd.domain.model.reply.playGroundReply;
import com.Quotka.Quotka_BackEnd.domain.model.user.User;
import lombok.*;

import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.util.List;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "playground")
public class playground extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "play_id")
    private Long id;

    @Column(length = 500, name = "play_title")
    private String title;

    @Column(length = 500, name = "play_author")
    private String author;

    @ManyToOne(fetch = FetchType.EAGER, targetEntity = User.class) //Many = Board, User = One
    @JoinColumn(name="userId")
    private User user; //DB는 오브젝트를 저장할 수 없다. FK, 자바는 오브젝트를 저장할 수 있다.

    @ColumnDefault("0")
    @Column(name = "play_count")
    private int count;

    @Lob //대용량 데이터
    @Column(name = "play_content")
    private String content;

    @OneToMany(mappedBy = "playground", fetch = FetchType.EAGER)
    private List<playGroundReply> playGroundReply;

    @Builder
    public playground(String title, String author, int count, String content) {
        this.title = title;
        this.author = author;
        this.count = count;
        this.content = content;

    }

    public void playGroundUpdate(String title, String author, int count, String content) {
        this.title = title;
        this.author = author;
        this.count = count;
        this.content = content;
    }

}
