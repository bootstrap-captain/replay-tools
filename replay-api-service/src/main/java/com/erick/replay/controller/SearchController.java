package com.erick.replay.controller;

import com.erick.replay.entity.MessageRecord;
import com.erick.replay.entity.SearchRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/search")
@Slf4j
public class SearchController {



    public MessageRecord search(SearchRequest request) {
        return null;
    }

}
