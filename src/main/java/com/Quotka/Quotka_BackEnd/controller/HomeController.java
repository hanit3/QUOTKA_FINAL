package com.Quotka.Quotka_BackEnd.controller;

import com.Quotka.Quotka_BackEnd.dto.HomeResponseDto;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping("/home")
    public String home() {
        return "This is Home Page!";
    }

    @GetMapping("/home/dto")
    public HomeResponseDto homeResponseDto(@RequestParam("name") String name, @RequestParam("nickname") String nickname) {
        return new HomeResponseDto(name, nickname);
    }
}
