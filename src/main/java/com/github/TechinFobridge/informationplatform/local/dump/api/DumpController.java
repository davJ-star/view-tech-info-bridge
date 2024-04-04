package com.github.TechinFobridge.informationplatform.local.dump.api;

import com.github.TechinFobridge.informationplatform.local.dump.entity.Dump;
import com.github.TechinFobridge.informationplatform.local.dump.service.DumpService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/dump")
public class DumpController {

    public DumpController(DumpService service) {
        this.service = service;
    }

    private final DumpService service;

    @GetMapping("/getData")
    public Dump getData() {
        return service.getOne();
    }
}
