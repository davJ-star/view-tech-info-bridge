package com.github.TechinFobridge.informationplatform.local.naver.entity;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class ApiConfig {

    private String url;
    private String id;
    private String secret;
}
