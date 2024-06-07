package com.github.TechinFobridge.informationplatform.local.dump.entity.repository;

import com.github.TechinFobridge.informationplatform.local.dump.entity.Dump;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DumpRepository extends JpaRepository<Dump, Long> {
}
