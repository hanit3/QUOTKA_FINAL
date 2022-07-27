package com.Quotka.Quotka_BackEnd.web;

import com.Quotka.Quotka_BackEnd.domain.model.board.playGroundRepo;
import com.Quotka.Quotka_BackEnd.domain.model.board.playground;
import com.Quotka.Quotka_BackEnd.domain.model.board.quoteMaster;
import com.Quotka.Quotka_BackEnd.domain.model.board.quoteMasterRepo;
import com.Quotka.Quotka_BackEnd.web.dto.playGroundSaveRequestDto;
import com.Quotka.Quotka_BackEnd.web.dto.quoteMasterSaveRequestDto;
import com.Quotka.Quotka_BackEnd.web.service.playGroundService;
import com.Quotka.Quotka_BackEnd.web.service.quoteMasterService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

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

    @GetMapping("/quoteMasterForm")
    public String quoteMasterForm(Model model) {
        model.addAttribute("quoteMasterForm", new quoteMaster());
        return "board/quoteMasterForm";
    }

//    @Autowired
//    private quoteMasterRepo quoteMasterRepo;

    @PostMapping("/quoteMasterFormPro")
    public String quoteMasterFormSubmit(@ModelAttribute quoteMaster quoteMaster){
        quoteMasterService.save(quoteMaster);
        return "redirect:/board/quoteMaster";
    }

    @GetMapping("/playGroundForm")
    public String playGroundForm(@ModelAttribute playground playground, Model model) {
        model.addAttribute("playGround", new playground());
        return "board/playGroundForm";
    }

    @PostMapping("/playGroundForm")
    public String playGroundFormSubmit(playGroundSaveRequestDto playGroundSaveRequestDto){
        playGroundService.save(playGroundSaveRequestDto);
        return "redirect:/board/playGround";
    }


}
