/*
 * Copyright (c) 2018, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * you may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
package org.ballerinalang.persistence.states;

import org.ballerinalang.bre.bvm.WorkerExecutionContext;

/**
 * Represents execution state for given @{@link WorkerExecutionContext}.
 *
 * @since 0.981.1
 */
public class State {

    private WorkerExecutionContext context;

    private String id;

    private int ip;

    public State(WorkerExecutionContext context, String stateId) {
        this.context = context;
        this.id = stateId;
    }

    public State(WorkerExecutionContext context, String id, int ip) {
        this.context = context;
        this.id = id;
        this.ip = ip;
    }

    public WorkerExecutionContext getContext() {
        return context;
    }

    public void setContext(WorkerExecutionContext context) {
        this.context = context;
    }

    public int getIp() {
        return ip;
    }

    public void setIp(int ip) {
        this.ip = ip;
    }

    public String getId() {
        return id;
    }
}
