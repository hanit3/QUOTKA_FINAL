package com.Quotka.Quotka_BackEnd.web;

import com.Quotka.Quotka_BackEnd.domain.model.board.playGroundRepo;
import com.Quotka.Quotka_BackEnd.domain.model.board.playground;
import com.Quotka.Quotka_BackEnd.service.playGroundService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@RequiredArgsConstructor
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
        List<playground> playgroundList = playGroundRepo.findAll();
        model.addAttribute("playground", playgroundList);

        return "board/playGround";
    }

}
