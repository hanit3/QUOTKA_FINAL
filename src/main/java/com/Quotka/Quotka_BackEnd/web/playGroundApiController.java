package com.Quotka.Quotka_BackEnd.web;

import com.Quotka.Quotka_BackEnd.service.playGroundService;
import com.Quotka.Quotka_BackEnd.web.dto.playGroundResponseDto;
import com.Quotka.Quotka_BackEnd.web.dto.playGroundSaveRequestDto;
import com.Quotka.Quotka_BackEnd.web.dto.playGroundUpdateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
public class playGroundApiController {

    private final playGroundService playGroundService;

    @PostMapping("/api/v1/playGround")
    public Long save(@RequestBody playGroundSaveRequestDto playGroundSaveRequestDto) {
        return playGroundService.save(playGroundSaveRequestDto);
    }

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
