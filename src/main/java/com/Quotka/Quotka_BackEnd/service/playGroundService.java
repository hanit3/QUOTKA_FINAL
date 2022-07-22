package com.Quotka.Quotka_BackEnd.service;

import com.Quotka.Quotka_BackEnd.domain.board.playGroundRepo;
import com.Quotka.Quotka_BackEnd.domain.board.playground;
import com.Quotka.Quotka_BackEnd.web.dto.playGroundResponseDto;
import com.Quotka.Quotka_BackEnd.web.dto.playGroundSaveRequestDto;
import com.Quotka.Quotka_BackEnd.web.dto.playGroundUpdateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
public class playGroundService {

    private final playGroundRepo playGroundRepo;

    @Transactional
    public Long save(playGroundSaveRequestDto playGroundRequestDto) {
        return playGroundRepo.save(playGroundRequestDto.toEntity()).getId();
    }

    @Transactional
    public Long update(Long id, playGroundUpdateRequestDto playGroundRequestDto) {
        playground playground = playGroundRepo.findById(id)
                .orElseThrow(() -> new
                IllegalArgumentException("해당 게시글이 없습니다. id="+ id));

        playground.update(playGroundRequestDto.getTitle(), playGroundRequestDto.getAuthor(),
                playGroundRequestDto.getRegDate(), playGroundRequestDto.getCount(),  playGroundRequestDto.getContent());

        return id;
    }

    public playGroundResponseDto findById (Long id) {
        playground entity = playGroundRepo.findById(id)
                .orElseThrow(() -> new
                IllegalArgumentException("해당 게시글이 없습니다. id=\"+ id"));

        return new playGroundResponseDto(entity);
    }

}
