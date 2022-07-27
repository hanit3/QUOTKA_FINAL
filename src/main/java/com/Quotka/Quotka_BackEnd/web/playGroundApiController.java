package com.Quotka.Quotka_BackEnd.web;

import com.Quotka.Quotka_BackEnd.web.dto.quoteMasterSaveRequestDto;
import com.Quotka.Quotka_BackEnd.web.service.playGroundService;
import com.Quotka.Quotka_BackEnd.web.dto.playGroundResponseDto;
import com.Quotka.Quotka_BackEnd.web.dto.playGroundSaveRequestDto;
import com.Quotka.Quotka_BackEnd.web.dto.playGroundUpdateRequestDto;
import com.Quotka.Quotka_BackEnd.web.service.quoteMasterService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
public class playGroundApiController {

    @Autowired
    private playGroundService playGroundService;

//    @PostMapping("/playGroundForm")
//    public Long save(@RequestBody playGroundSaveRequestDto playGroundSaveRequestDto) {
//        return playGroundService.save(playGroundSaveRequestDto);
//    }

//    @PostMapping("/playGroundForm")
//    public String playGroundFormSubmit(playGroundSaveRequestDto playGroundSaveRequestDto){
//        playGroundService.save(playGroundSaveRequestDto);
//        return "redirect:/board/playGround";
//    }

    @PutMapping("/api/v1/playGround/{id}")
    public Long update(@PathVariable Long id, @RequestBody playGroundUpdateRequestDto playGroundUpdateRequestDto) {
        return playGroundService.update(id, playGroundUpdateRequestDto);
    }

    @GetMapping("/api/v1/playGround/{id}")
    public playGroundResponseDto findById (@PathVariable Long id)
    {
        return playGroundService.findById(id);
    }
}
