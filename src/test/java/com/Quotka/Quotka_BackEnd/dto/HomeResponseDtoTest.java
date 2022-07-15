package com.Quotka.Quotka_BackEnd.dto;

import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

public class HomeResponseDtoTest {

    @Test
    public void 롬복_기능_테스트() {

        //given
        String name = "Sohyun";
        String nickname = "Sarah";

        //when
        HomeResponseDto homeResponseDto = new HomeResponseDto(name, nickname); //필드가 포함된 생성자를 만들어주었음.

        //then
        assertThat(homeResponseDto.getName()).isEqualTo(name); //get 메소드를 선언하지 않아도 getName()을 사용할 수 있음.
        assertThat(homeResponseDto.getNickname()).isEqualTo(nickname);
    }
}
