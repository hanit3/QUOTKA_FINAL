package com.Quotka.Quotka_BackEnd.web;

import com.Quotka.Quotka_BackEnd.domain.model.board.playGroundRepo;
import com.Quotka.Quotka_BackEnd.domain.model.board.playground;
import com.Quotka.Quotka_BackEnd.domain.model.board.quoteMaster;
import com.Quotka.Quotka_BackEnd.domain.model.board.quoteMasterRepo;
import com.Quotka.Quotka_BackEnd.service.playGroundService;
import com.Quotka.Quotka_BackEnd.service.quoteMasterService;
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

    @Autowired
    private quoteMasterService quoteMasterService;

    @GetMapping("/quoteMaster")
    public String quoteMaster(Model model) {

        model.addAttribute("quoteMaster", quoteMasterService.quoteMasterList());

        return "board/quoteMaster";
    }

    @Autowired
    private playGroundService playGroundService;

    @GetMapping("/playGround")
    public String play(Model model) {

        model.addAttribute("playground", playGroundService.playgroundList());

        return "board/playGround";
    }


}
