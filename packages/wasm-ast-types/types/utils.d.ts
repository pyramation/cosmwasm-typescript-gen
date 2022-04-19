import * as t from '@babel/types';
import { TSTypeAnnotation, TSExpressionWithTypeArguments } from '@babel/types';
export declare const bindMethod: (name: string) => t.ExpressionStatement;
export declare const typedIdentifier: (name: string, typeAnnotation: TSTypeAnnotation, optional?: boolean) => t.Identifier;
export declare const promiseTypeAnnotation: (name: any) => t.TSTypeAnnotation;
export declare const classDeclaration: (name: string, body: any[], implementsExressions?: TSExpressionWithTypeArguments[], superClass?: t.Identifier) => t.ClassDeclaration;
export declare const classProperty: (name: string, typeAnnotation?: TSTypeAnnotation, isReadonly?: boolean, isStatic?: boolean) => t.ClassProperty;
export declare const arrowFunctionExpression: (params: (t.Identifier | t.Pattern | t.RestElement)[], body: t.BlockStatement, returnType: t.TSTypeAnnotation, isAsync?: boolean) => t.ArrowFunctionExpression;
export declare const recursiveNamespace: (names: any, moduleBlockBody: any) => any;
export declare const arrayTypeNDimensions: (body: any, n: any) => any;
export declare const FieldTypeAsts: {
    string: () => t.TSStringKeyword;
    array: (type: any) => t.TSArrayType;
    Duration: () => t.TSTypeReference;
    Height: () => t.TSTypeReference;
    Coin: () => t.TSTypeReference;
    Long: () => t.TSTypeReference;
};
export declare const shorthandProperty: (prop: string) => t.ObjectProperty;
export declare const importStmt: (names: string[], path: string) => t.ImportDeclaration;
export declare const importAminoMsg: () => t.ImportDeclaration;
export declare const getFieldDimensionality: (field: Field) => {
    typeName: any;
    dimensions: number;
    isArray: any;
};
export declare const memberExpressionOrIdentifier: (names: any) => any;
export declare const memberExpressionOrIdentifierSnake: (names: any) => any;
