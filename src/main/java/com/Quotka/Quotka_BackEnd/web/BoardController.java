package com.Quotka.Quotka_BackEnd.web;

import com.Quotka.Quotka_BackEnd.domain.model.board.playGroundRepo;
import com.Quotka.Quotka_BackEnd.service.playGroundService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequiredArgsConstructor
@Controller
@RequestMapping("/board")
public class BoardController {

    @GetMapping("/board/quoteMaster")
    public String quoteMaster() {

        return "board/quoteMaster";
    }

    @Autowired
    private playGroundRepo playGroundRepo;

    private final playGroundService playGroundService;

    @GetMapping("/playGround")
    public String play(Model model) {
        model.addAttribute("playgrounds", playGroundService.findAll());

        return "board/playGround";
    }

    @GetMapping("/save")
    public String save() {
        return "layout/board/board-save";
    }
}
