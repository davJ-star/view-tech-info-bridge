package com.github.TechinFobridge.informationplatform.local.naver;

import com.github.TechinFobridge.informationplatform.local.naver.entity.ApiConfig;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import org.json.JSONArray;
import org.json.JSONObject;


public class NaverApiGETNews {

    ApiConfig config;

    public NaverApiGETNews(String url, String id, String secret) {
        this.config = ApiConfig.builder().url(url).id(id).secret(secret).build();
    }

    public String getNews(String keyword) throws IOException {
        String jsonString = "";

        String encodedKeyword = URLEncoder.encode(keyword, StandardCharsets.UTF_8);

        URL url = new URL(config.getUrl() + "?query=" + encodedKeyword);

        HttpURLConnection con = (HttpURLConnection) url.openConnection();
        con.setRequestMethod("GET");
        con.setRequestProperty("X-Naver-Client-Id", config.getId());
        con.setRequestProperty("X-Naver-Client-Secret", config.getSecret());

        int responseCode = con.getResponseCode();
        if (responseCode == HttpURLConnection.HTTP_OK) {
            System.out.println("OK!!");
            // 응답 데이터 읽기
            BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
            String inputLine;
            StringBuilder response = new StringBuilder();
            while ((inputLine = in.readLine()) != null) {
                response.append(inputLine);
            }
            in.close();

            // JSON 문자열 생성
            JSONObject object = new JSONObject(response.toString());
            JSONArray items = object.getJSONArray("items");
            JSONArray jsonArray = new JSONArray();
            for (int i = 0; i < items.length(); i++) {
                JSONObject item = items.getJSONObject(i);
                JSONObject jsonObject = new JSONObject();
                jsonObject.put("title", item.getString("title"));
                jsonObject.put("description", item.getString("description"));
                jsonObject.put("originallink", item.getString("originallink"));
                jsonArray.put(jsonObject);
            }
            jsonString = jsonArray.toString();

        } else {
            System.out.println("GET request failed. Response code: " + responseCode);
        }

        return jsonString;
    }
}
