package com.erick.replay.controller;

import com.erick.replay.entity.MessageRecord;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/search")
@Slf4j
public class SearchController {



    public MessageRecord search(MessageRecord messageRecord) {
        return null;
    }

}
