package com.Quotka.Quotka_BackEnd.web;

import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@Log4j2
@RequestMapping("/user")
public class UserController {

    //로그인 안해도 가능
    @GetMapping("/all")
    public void exAll(){
        log.info("exAll..........");
    }

    //멤버 사용가능
    @GetMapping("/member")
    public void exMember(){
        log.info("exMember..........");
    }

    //관리자 가능
    @GetMapping("/admin")
    public void exAdmin(){
        log.info("exAdmin..........");
    }
}
