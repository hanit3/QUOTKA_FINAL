package com.Quotka.Quotka_BackEnd.web;

import com.Quotka.Quotka_BackEnd.domain.board.playGroundRepo;
import com.Quotka.Quotka_BackEnd.domain.board.playground;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/board")
public class BoardController {

    @GetMapping("/quoteMaster")
    public String quoteMaster() {

        return "board/quoteMaster";
    }

    @Autowired
    private playGroundRepo playGroundRepo;

    @GetMapping("/playGround")
    public String play(Model model) {
//        List<playground> playgrounds = playGroundRepo.findAll();
//        model.addAttribute("playgrounds", playgrounds);

        return "board/playGround";
    }

    @GetMapping("/board/save")
    public String save() {
        return "layout/board/board-save";
    }
}
