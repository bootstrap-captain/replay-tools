package com.erick.replay.entity;

import lombok.Data;

import java.util.List;

@Data
public class MessageResponse {
    List<MessageRecord> data;
    private int total;
}
