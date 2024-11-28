package com.erick.replay.controller;

import com.erick.replay.entity.Metadata;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("/home")
@RestController
@Slf4j
public class HomeController {

    @GetMapping("/metadata")
    public Metadata getMetadata() {
        Metadata data = new Metadata();
        data.setServiceName(List.of("FLXB-RT-TxnPostingService", "IE-CIP-FLXB-FSRT-EM-TxnPosting24*7"));
        data.setMessageStatus(List.of("OK", "NOK", "NACK", "NO RESPONSE"));
        data.setMessageDescription(List.of("Unknown Error", "Posting/Earmarking Failed", "listen response topic1"));
        return data;
    }
}
