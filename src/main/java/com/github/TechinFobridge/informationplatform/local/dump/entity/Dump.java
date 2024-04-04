package com.github.TechinFobridge.informationplatform.local.dump.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table
@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Dump {
    // insert: insert into dump (id, body, is_ai, title, writer) values(1, '보디', false, '제목', '작가');

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column()
    private String title;

    @Column()
    private String body;

    @Column()
    private String writer;

    @Column()
    private Boolean isAi;
}
