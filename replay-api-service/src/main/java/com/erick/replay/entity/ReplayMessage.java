package com.erick.replay.entity;

import lombok.Data;


@Data
public class ReplayMessage extends MessageRecord{
    private String requestPayload;
    private String responsePayload;
}
