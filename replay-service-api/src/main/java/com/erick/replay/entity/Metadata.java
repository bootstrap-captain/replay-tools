package com.erick.replay.entity;

import lombok.Data;

import java.util.List;

@Data
public class Metadata {
    private List<String> serviceName;
    private List<String> messageDescription;
    private List<String> messageStatus;
}
