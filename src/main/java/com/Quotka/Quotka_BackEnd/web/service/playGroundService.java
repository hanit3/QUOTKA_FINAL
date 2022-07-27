package com.Quotka.Quotka_BackEnd.web.service;

import com.Quotka.Quotka_BackEnd.domain.model.board.playGroundRepo;
import com.Quotka.Quotka_BackEnd.domain.model.board.playground;
import com.Quotka.Quotka_BackEnd.web.dto.playGroundResponseDto;
import com.Quotka.Quotka_BackEnd.web.dto.playGroundSaveRequestDto;
import com.Quotka.Quotka_BackEnd.web.dto.playGroundUpdateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Service
public class playGroundService {

    @Autowired
    private playGroundRepo playGroundRepo;

    @Transactional
    public Long save(playGroundSaveRequestDto playGroundSaveRequestDto) {
//        playGroundSaveRequestDto.setUser(user);
        return playGroundRepo.save(playGroundSaveRequestDto.toEntity()).getId();
    }

    @Transactional
    public Long update(Long id, playGroundUpdateRequestDto playGroundUpdateRequestDto) {
        playground playground = playGroundRepo.findById(id)
                .orElseThrow(() -> new
                IllegalArgumentException("해당 게시글이 없습니다. id="+ id));

        playground.playGroundUpdate(playGroundUpdateRequestDto.getTitle(), playGroundUpdateRequestDto.getAuthor(),
                playGroundUpdateRequestDto.getCount(), playGroundUpdateRequestDto.getContent());

        return id;
    }

    public playGroundResponseDto findById (Long id) {
        playground entity = playGroundRepo.findById(id)
                .orElseThrow(() -> new
                IllegalArgumentException("해당 게시글이 없습니다. id=\"+ id"));

        return new playGroundResponseDto(entity);
    }

    public List<playground> playgroundList() {
        return playGroundRepo.findAll();
    }


}
