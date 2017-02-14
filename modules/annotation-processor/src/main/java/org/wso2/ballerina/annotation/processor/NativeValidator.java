/*
 * Copyright (c) 2017, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
package org.wso2.ballerina.annotation.processor;

import org.ballerinalang.util.program.BLangPackages;
import org.wso2.ballerina.core.exception.BallerinaException;
import org.wso2.ballerina.core.model.BLangPackage;
import org.wso2.ballerina.core.model.BLangProgram;
import org.wso2.ballerina.core.model.GlobalScope;
import org.wso2.ballerina.core.model.SymbolName;
import org.wso2.ballerina.core.model.symbols.BLangSymbol;
import org.wso2.ballerina.core.model.types.BTypes;
import org.wso2.ballerina.core.nativeimpl.NativeConstructLoader;
import org.wso2.ballerina.core.nativeimpl.NativePackageProxy;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.ServiceLoader;

/**
 * Class to process built-in ballerina sources and validate them.
 */
public class NativeValidator {

    /**
     * Process built-in ballerina sources and validate them.
     * 
     * @param args
     */
    public static void main(String[] args) {
        // Get package list
        String targetDir = args[0];
        List<String> builtInPackages = getBuiltInBalPackages(targetDir);
        
        // Load all natives to globalscope
        GlobalScope globalScope = GlobalScope.getInstance();
        loadConstructs(globalScope);
        
        // create program
        Path programDirPath = Paths.get(targetDir, Constants.BAL_FILES_DIR);
        BLangProgram bLangProgram = new BLangProgram(globalScope, programDirPath);
        
        // process each package separately
        for (String builtInPkg : builtInPackages) {
            BLangSymbol pkgSymbol = globalScope.resolve(new SymbolName(builtInPkg));
            BLangPackage nativePackage = (BLangPackage)((NativePackageProxy) pkgSymbol).load();
            Path packagePath = Paths.get(builtInPkg.replace(".", File.separator));
            
            BLangPackage mainPackage = BLangPackages.loadPackage(packagePath, nativePackage.getPackageRepository(), bLangProgram);
            bLangProgram.define(new SymbolName(mainPackage.getPackagePath()), mainPackage);
            bLangProgram.setMainPackage(mainPackage);

//            // Analyze the semantic properties of the Ballerina program
//            SemanticAnalyzer semanticAnalyzer = new SemanticAnalyzer(bLangProgram);
//            bLangProgram.accept(semanticAnalyzer);
        }
    }

    private static void loadConstructs(GlobalScope globalScope) {
        BTypes.loadBuiltInTypes(globalScope);
        Iterator<NativeConstructLoader> nativeConstructLoaders =
            ServiceLoader.load(NativeConstructLoader.class).iterator();
        while (nativeConstructLoaders.hasNext()) {
            NativeConstructLoader constructLoader = nativeConstructLoaders.next();
            constructLoader.load(globalScope);
        }
    }
    
    private static List<String> getBuiltInBalPackages(String targetDir) {
        List<String> builtInPackages  = new ArrayList<String>();
        Path source = Paths.get(targetDir, Constants.BAL_FILES_DIR);
        
        // Traverse through built-in ballerina files and identify the packages
        try {
            Files.walkFileTree(source, new PackageFinder(source, builtInPackages));
        } catch (IOException e) {
            throw new BallerinaException("error while reading built-in packages: " + e.getMessage());
        }
        return builtInPackages;
    }
}
