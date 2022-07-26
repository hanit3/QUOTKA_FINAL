package com.Quotka.Quotka_BackEnd.web;

import com.Quotka.Quotka_BackEnd.service.playGroundService;
import com.Quotka.Quotka_BackEnd.service.quoteMasterService;
import com.Quotka.Quotka_BackEnd.web.dto.*;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
public class quoteMasterApiController {

    private final quoteMasterService quoteMasterService;

    @PostMapping("/api/v1/quoteMaster")
    public Long save(@RequestBody quoteMasterSaveRequestDto quoteMasterSaveRequestDto) {
        return quoteMasterService.save(quoteMasterSaveRequestDto);
    }

    @PutMapping("/api/v1/quoteMaster/{id}")
    public Long update(@PathVariable Long id, @RequestBody quoteMasterUpdateRequestDto quoteMasterUpdateRequestDto) {
        return quoteMasterService.update(id, quoteMasterUpdateRequestDto);
    }

    @GetMapping("/api/v1/quoteMaster/{id}")
    public quoteMasterResponseDto findById (@PathVariable Long id)
    {
        return quoteMasterService.findById(id);
    }
}
