package com.Quotka.Quotka_BackEnd.domain.model.reply;

import com.Quotka.Quotka_BackEnd.domain.BaseTimeEntity;
import com.Quotka.Quotka_BackEnd.domain.model.board.playground;
import com.Quotka.Quotka_BackEnd.domain.model.board.quoteMaster;
import com.Quotka.Quotka_BackEnd.domain.model.user.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.sql.Timestamp;

@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "quoteMasterReply")
public class quoteMasterReply extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "quote_reply_id")
    private int id;

    @Column(name = "quote_reply_content", nullable = false, length = 500)
    private String content;

    @ManyToOne(targetEntity = quoteMaster.class)
    @JoinColumn(name="quoteId")
    private quoteMaster quoteMaster;

    @ManyToOne(targetEntity = User.class)
    @JoinColumn(name="userId")
    private User user;

    @CreationTimestamp
    private Timestamp createDate;
}
