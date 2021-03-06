/**
 * Copyright (c) 2017, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

class AbstractTreeUtil {


    isAction(node) {
        return node.kind === 'Action';
    }

    isAnnotation(node) {
        return node.kind === 'Annotation';
    }

    isAnnotationAttachment(node) {
        return node.kind === 'AnnotationAttachment';
    }

    isAnnotationAttribute(node) {
        return node.kind === 'AnnotationAttribute';
    }

    isCatch(node) {
        return node.kind === 'Catch';
    }

    isCompilationUnit(node) {
        return node.kind === 'CompilationUnit';
    }

    isDeprecated(node) {
        return node.kind === 'Deprecated';
    }

    isDocumentation(node) {
        return node.kind === 'Documentation';
    }

    isEndpoint(node) {
        return node.kind === 'Endpoint';
    }

    isEnum(node) {
        return node.kind === 'Enum';
    }

    isFunction(node) {
        return node.kind === 'Function';
    }

    isIdentifier(node) {
        return node.kind === 'Identifier';
    }

    isImport(node) {
        return node.kind === 'Import';
    }

    isPackage(node) {
        return node.kind === 'Package';
    }

    isPackageDeclaration(node) {
        return node.kind === 'PackageDeclaration';
    }

    isResource(node) {
        return node.kind === 'Resource';
    }

    isService(node) {
        return node.kind === 'Service';
    }

    isTypeDefinition(node) {
        return node.kind === 'TypeDefinition';
    }

    isVariable(node) {
        return node.kind === 'Variable';
    }

    isWorker(node) {
        return node.kind === 'Worker';
    }

    isDocumentationAttribute(node) {
        return node.kind === 'DocumentationAttribute';
    }

    isAnnotationAttachmentAttribute(node) {
        return node.kind === 'AnnotationAttachmentAttribute';
    }

    isAnnotationAttachmentAttributeValue(node) {
        return node.kind === 'AnnotationAttachmentAttributeValue';
    }

    isArrayLiteralExpr(node) {
        return node.kind === 'ArrayLiteralExpr';
    }

    isBinaryExpr(node) {
        return node.kind === 'BinaryExpr';
    }

    isElvisExpr(node) {
        return node.kind === 'ElvisExpr';
    }

    isBracedTupleExpr(node) {
        return node.kind === 'BracedTupleExpr';
    }

    isTypeInitExpr(node) {
        return node.kind === 'TypeInitExpr';
    }

    isFieldBasedAccessExpr(node) {
        return node.kind === 'FieldBasedAccessExpr';
    }

    isIndexBasedAccessExpr(node) {
        return node.kind === 'IndexBasedAccessExpr';
    }

    isIntRangeExpr(node) {
        return node.kind === 'IntRangeExpr';
    }

    isInvocation(node) {
        return node.kind === 'Invocation';
    }

    isLambda(node) {
        return node.kind === 'Lambda';
    }

    isLiteral(node) {
        return node.kind === 'Literal';
    }

    isRecordLiteralExpr(node) {
        return node.kind === 'RecordLiteralExpr';
    }

    isSimpleVariableRef(node) {
        return node.kind === 'SimpleVariableRef';
    }

    isStringTemplateLiteral(node) {
        return node.kind === 'StringTemplateLiteral';
    }

    isTernaryExpr(node) {
        return node.kind === 'TernaryExpr';
    }

    isAwaitExpr(node) {
        return node.kind === 'AwaitExpr';
    }

    isTypedescExpression(node) {
        return node.kind === 'TypedescExpression';
    }

    isTypeCastExpr(node) {
        return node.kind === 'TypeCastExpr';
    }

    isTypeConversionExpr(node) {
        return node.kind === 'TypeConversionExpr';
    }

    isUnaryExpr(node) {
        return node.kind === 'UnaryExpr';
    }

    isRestArgsExpr(node) {
        return node.kind === 'RestArgsExpr';
    }

    isNamedArgsExpr(node) {
        return node.kind === 'NamedArgsExpr';
    }

    isStatementExpression(node) {
        return node.kind === 'StatementExpression';
    }

    isMatchExpression(node) {
        return node.kind === 'MatchExpression';
    }

    isMatchExpressionPatternClause(node) {
        return node.kind === 'MatchExpressionPatternClause';
    }

    isCheckExpr(node) {
        return node.kind === 'CheckExpr';
    }

    isSelectExpression(node) {
        return node.kind === 'SelectExpression';
    }

    isAbort(node) {
        return node.kind === 'Abort';
    }

    isDone(node) {
        return node.kind === 'Done';
    }

    isRetry(node) {
        return node.kind === 'Retry';
    }

    isAssignment(node) {
        return node.kind === 'Assignment';
    }

    isCompoundAssignment(node) {
        return node.kind === 'CompoundAssignment';
    }

    isPostIncrement(node) {
        return node.kind === 'PostIncrement';
    }

    isBind(node) {
        return node.kind === 'Bind';
    }

    isBlock(node) {
        return node.kind === 'Block';
    }

    isBreak(node) {
        return node.kind === 'Break';
    }

    isExpressionStatement(node) {
        return node.kind === 'ExpressionStatement';
    }

    isForeach(node) {
        return node.kind === 'Foreach';
    }

    isForkJoin(node) {
        return node.kind === 'ForkJoin';
    }

    isIf(node) {
        return node.kind === 'If';
    }

    isMatch(node) {
        return node.kind === 'Match';
    }

    isMatchPatternClause(node) {
        return node.kind === 'MatchPatternClause';
    }

    isReply(node) {
        return node.kind === 'Reply';
    }

    isReturn(node) {
        return node.kind === 'Return';
    }

    isThrow(node) {
        return node.kind === 'Throw';
    }

    isTransaction(node) {
        return node.kind === 'Transaction';
    }

    isTry(node) {
        return node.kind === 'Try';
    }

    isTupleDestructure(node) {
        return node.kind === 'TupleDestructure';
    }

    isVariableDef(node) {
        return node.kind === 'VariableDef';
    }

    isWhile(node) {
        return node.kind === 'While';
    }

    isLock(node) {
        return node.kind === 'Lock';
    }

    isWorkerReceive(node) {
        return node.kind === 'WorkerReceive';
    }

    isWorkerSend(node) {
        return node.kind === 'WorkerSend';
    }

    isArrayType(node) {
        return node.kind === 'ArrayType';
    }

    isUnionTypeNode(node) {
        return node.kind === 'UnionTypeNode';
    }

    isTupleTypeNode(node) {
        return node.kind === 'TupleTypeNode';
    }

    isConstrainedType(node) {
        return node.kind === 'ConstrainedType';
    }

    isFunctionType(node) {
        return node.kind === 'FunctionType';
    }

    isUserDefinedType(node) {
        return node.kind === 'UserDefinedType';
    }

    isEndpointType(node) {
        return node.kind === 'EndpointType';
    }

    isValueType(node) {
        return node.kind === 'ValueType';
    }

    isRecordType(node) {
        return node.kind === 'RecordType';
    }

    isObjectType(node) {
        return node.kind === 'ObjectType';
    }

    isOrderBy(node) {
        return node.kind === 'OrderBy';
    }

    isOrderByVariable(node) {
        return node.kind === 'OrderByVariable';
    }

    isLimit(node) {
        return node.kind === 'Limit';
    }

    isGroupBy(node) {
        return node.kind === 'GroupBy';
    }

    isHaving(node) {
        return node.kind === 'Having';
    }

    isSelectClause(node) {
        return node.kind === 'SelectClause';
    }

    isWhere(node) {
        return node.kind === 'Where';
    }

    isFunctionClause(node) {
        return node.kind === 'FunctionClause';
    }

    isWindowClause(node) {
        return node.kind === 'WindowClause';
    }

    isStreamAction(node) {
        return node.kind === 'StreamAction';
    }

    isPatternStreamingEdgeInput(node) {
        return node.kind === 'PatternStreamingEdgeInput';
    }

    isPatternStreamingInput(node) {
        return node.kind === 'PatternStreamingInput';
    }

    isStreamingQuery(node) {
        return node.kind === 'StreamingQuery';
    }

    isWithin(node) {
        return node.kind === 'Within';
    }

    isPatternClause(node) {
        return node.kind === 'PatternClause';
    }

    isOutputRateLimit(node) {
        return node.kind === 'OutputRateLimit';
    }

    isForever(node) {
        return node.kind === 'Forever';
    }

    isTransformer(node) {
        return node.kind === 'Transformer';
    }
}

export default AbstractTreeUtil;
