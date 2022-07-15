package com.Quotka.Quotka_BackEnd.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/board")
public class BoardController {

    @GetMapping("/quoteMaster")
    public String quoteMaster() {

        return "board/quoteMaster";
    }

    @GetMapping("/playGround")
    public String play() {

        return "board/playGround";
    }
}
