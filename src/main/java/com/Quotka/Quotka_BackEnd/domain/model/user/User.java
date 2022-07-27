package com.Quotka.Quotka_BackEnd.domain.model.user;

import com.Quotka.Quotka_BackEnd.config.auth.BaseTimeEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.security.Timestamp;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity //User 클래스가 MySQL에 테이블이 생성이 된다.
//ORM은 Object를 테이블로 매핑해주는 기술임.
@Table(name="user")
public class User extends BaseTimeEntity {
    @Id //Primary Key
    @GeneratedValue(strategy = GenerationType.IDENTITY) //프로젝트에 연결된 DB의 넘버링 전략을 따라간다.
    // 굳이 nullable 하지 않아도 자동 입력 됨.
    private Long userId; //sequence, auto_increment

    @Column(nullable = false, length = 30)
    private String nickname;

    @Column(nullable = false, length = 50)
    private String email;

    @Column(nullable = false, length = 100) //비밀번호를 해쉬로 바꿀 거임. (비밀번호 암호화)
    private String password;

//    @CreationTimestamp //시간이 자동 입력
//    //굳이 nullable 하지 않아도 자동 입력됨.
//    private Timestamp createDate;

//    @ColumnDefault("'user")
//    private String role; //Enum을 쓰는게 좋다. (domain을 만들어 주는 거임) //admin, user, manager

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Role role;

}
