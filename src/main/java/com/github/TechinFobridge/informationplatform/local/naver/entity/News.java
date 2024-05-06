package com.github.TechinFobridge.informationplatform.local.naver.entity;

import lombok.Builder;

@Builder
public class News {

    private String title;
    private String body;
    private String link;
}