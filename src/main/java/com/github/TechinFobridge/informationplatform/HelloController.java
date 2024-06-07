package com.github.TechinFobridge.informationplatform;

import com.github.TechinFobridge.informationplatform.local.naver.NaverApiGETNews;
import java.io.IOException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class HelloController {

    @GetMapping("/test")
    public String hello() {
        return "Test";
    }

    @GetMapping("/getnews/{keyword}")
    public String get(@PathVariable(name = "keyword") String keyword) throws IOException {
        NaverApiGETNews news = new NaverApiGETNews("https://openapi.naver.com/v1/search/news.json", "<id>", "<secret>");
        return news.getNews(keyword);
    }
}
