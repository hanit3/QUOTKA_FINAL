package com.Quotka.Quotka_BackEnd.web.service;

import com.Quotka.Quotka_BackEnd.domain.model.board.playGroundRepo;
import com.Quotka.Quotka_BackEnd.domain.model.board.playground;
import com.Quotka.Quotka_BackEnd.domain.model.board.quoteMaster;
import com.Quotka.Quotka_BackEnd.domain.model.board.quoteMasterRepo;
import com.Quotka.Quotka_BackEnd.web.dto.*;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Service
public class quoteMasterService {

    @Autowired
    private quoteMasterRepo quoteMasterRepo;

//    @Transactional
//    public Long save(quoteMasterSaveRequestDto quoteMasterRequestDto) {
////        playGroundSaveRequestDto.setUser(user);
//        return quoteMasterRepo.save(quoteMasterRequestDto.toEntity()).getId();
//    }

    public List<quoteMaster> quoteMasterList() {
        return quoteMasterRepo.findAll();
    }

    public void save(quoteMaster quoteMaster) {
        quoteMasterRepo.save(quoteMaster);
    }
    @Transactional
    public Long update(Long id, quoteMasterUpdateRequestDto quoteMasterUpdateRequestDto) {
        quoteMaster quoteMaster = quoteMasterRepo.findById(id)
                .orElseThrow(() -> new
                        IllegalArgumentException("해당 게시글이 없습니다. id="+ id));

        quoteMaster.quoteMasterUpdate(quoteMasterUpdateRequestDto.getTitle(), quoteMasterUpdateRequestDto.getAuthor(),
                quoteMasterUpdateRequestDto.getCount(),  quoteMasterUpdateRequestDto.getContent());

        return id;
    }

    public quoteMasterResponseDto findById (Long id) {
        quoteMaster entity = quoteMasterRepo.findById(id)
                .orElseThrow(() -> new
                        IllegalArgumentException("해당 게시글이 없습니다. id=\"+ id"));

        return new quoteMasterResponseDto(entity);
    }

}
