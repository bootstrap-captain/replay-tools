package com.erick.replay.entity;

import lombok.Data;

import java.util.List;

@Data
public class SearchRequest {
    private List<String> ids;
    private String serviceName;
    private String serviceVersion;
    private String replayStatus;
    private String partnerId;
    private String messageStatus;
    private String messageDescription;
    private Integer pageNumber;
    private Integer pageSize;

    /*startTime and endTime for messageDateTime*/
    private String startTime;
    private String endTime;

}
