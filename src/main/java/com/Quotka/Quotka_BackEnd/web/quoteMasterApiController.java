package com.Quotka.Quotka_BackEnd.web;

import com.Quotka.Quotka_BackEnd.web.service.quoteMasterService;
import com.Quotka.Quotka_BackEnd.web.dto.*;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
public class quoteMasterApiController {

    @Autowired
    private quoteMasterService quoteMasterService;

//    @PostMapping("/quoteMasterForm")
//    public Long save(@RequestBody quoteMasterSaveRequestDto quoteMasterSaveRequestDto) {
//        return quoteMasterService.save(quoteMasterSaveRequestDto);
//    }

//    @PostMapping("/quoteMasterForm")
//    public String quoteMasterFormSubmit(quoteMasterSaveRequestDto quoteMasterRequestDto){
//        quoteMasterService.save(quoteMasterRequestDto);
//        return "redirect:/board/quoteMaster";
//    }

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
