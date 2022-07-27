package com.Quotka.Quotka_BackEnd.domain.model.user;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum Role {

    USER("user", "사용자"),
    ADMIN("admin", "관리자");

    private final String key;
    private final String title;
}
