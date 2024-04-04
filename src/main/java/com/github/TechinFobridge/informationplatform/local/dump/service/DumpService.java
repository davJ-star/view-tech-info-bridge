package com.github.TechinFobridge.informationplatform.local.dump.service;

import com.github.TechinFobridge.informationplatform.local.dump.entity.Dump;
import com.github.TechinFobridge.informationplatform.local.dump.entity.repository.DumpRepository;
import org.springframework.stereotype.Service;

@Service
public class DumpService {

    public DumpService(DumpRepository repository) {
        this.repository = repository;
    }

    private final DumpRepository repository;

    public Dump getOne() {
        return repository.findAll().get(0);
    }

}
