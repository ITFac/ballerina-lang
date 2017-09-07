/*
*  Copyright (c) 2017, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
*
*  WSO2 Inc. licenses this file to you under the Apache License,
*  Version 2.0 (the "License"); you may not use this file except
*  in compliance with the License.
*  You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
*  Unless required by applicable law or agreed to in writing,
*  software distributed under the License is distributed on an
*  "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
*  KIND, either express or implied.  See the License for the
*  specific language governing permissions and limitations
*  under the License.
*/
package org.wso2.ballerinalang.compiler.tree.statements;

import org.ballerinalang.model.tree.NodeKind;
import org.ballerinalang.model.tree.expressions.ExpressionNode;
import org.ballerinalang.model.tree.statements.BlockNode;
import org.ballerinalang.model.tree.statements.ElseIfNode;
import org.wso2.ballerinalang.compiler.tree.BLangNodeVisitor;
import org.wso2.ballerinalang.compiler.tree.expressions.BLangExpression;

/**
 * @since 0.94
 */
public class BLangElseIf extends BLangStatement implements ElseIfNode {
    public BLangExpression condition;
    public BLangBlockStmt body;

    public BLangExpression getCondition() {
        return condition;
    }

    public void setCondition(ExpressionNode condition) {
        this.condition = (BLangExpression) condition;
    }

    public BLangBlockStmt getBody() {
        return body;
    }

    public void setBody(BlockNode body) {
        this.body = (BLangBlockStmt) body;
    }

    @Override
    public NodeKind getKind() {
        return NodeKind.ELSE_IF;
    }

    @Override
    public void accept(BLangNodeVisitor visitor) {
    }
    
    @Override
    public String toString() {
        return "BLangElseIf: (" + condition + ") " + body;
    }
}
