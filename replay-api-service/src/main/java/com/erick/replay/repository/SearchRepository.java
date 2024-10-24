package com.erick.replay.repository;

import com.mongodb.client.MongoClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class SearchRepository {

    @Autowired
    private MongoTemplate mongoTemplate;

    @Autowired
    private MongoClient client;

    public void get(){

    }
}
