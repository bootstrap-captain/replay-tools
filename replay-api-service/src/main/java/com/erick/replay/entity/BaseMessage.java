package com.erick.replay.entity;

import lombok.Data;

import java.util.Date;

@Data
public class BaseMessage {
    private Integer id;
    private String uniqueId;
    private String serviceName;
    private String serviceVersion;
    private String countryCode;
    private String partnerId;
    private Date messageDateTime;
    private String messageStatus;
    private String replayStatus;
}
