"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformLinaria = exports.parseBase64Image = exports.getCommonStyle = exports.getFileContent = exports.isNPMComponent = exports.isSourceComponent = exports.isPageFile = exports.getStyleCode = exports.getConfigContent = exports.getConfigFilePath = void 0;
const fs = require("node:fs");
const nodePath = require("node:path");
const core_1 = require("@babel/core");
const parser = require("@babel/parser");
const traverse_1 = require("@babel/traverse");
const t = require("@babel/types");
const helper_1 = require("@tarojs/helper");
const mimeType = require("mime-types");
const mkdirp = require("mkdirp");
const normalize = require("normalize-path");
const index_1 = require("./types/index");
const RN_CSS_EXT = ['.css', '.scss', '.sass', '.less', '.styl', '.stylus'];

const {transform} = require('@wyw-in-js/transform');

const pluginOptions = {
  babelOptions: {
    babelrc: false,
  },
};

function transform4rn(root, inputFilePath, outputFilename, sourceCode, resolve) {
      const services = {
        options: { root, filename: inputFilePath, pluginOptions },
      }

	transform(services, sourceCode, {}).then(result=>resolve(result, inputFilePath,outputFilename));
	
}

function getConfigFilePath(filePath) {
    return (0, helper_1.resolveMainFilePath)(`${filePath.replace(nodePath.extname(filePath), '')}.config`);
}
exports.getConfigFilePath = getConfigFilePath;
function getConfigContent(path) {
    if (!path)
        return {};
    const fileConfigPath = getConfigFilePath(path);
    const content = (0, helper_1.readConfig)(fileConfigPath);
    return content;
}
exports.getConfigContent = getConfigContent;
function getStyleCode(code, basePath) {
    const ast = parser.parse(code, {
        sourceType: 'module',
        plugins: [
            'jsx',
            'typescript',
            'classProperties',
            'decorators-legacy'
        ]
    });
    const styleTypes = RN_CSS_EXT;
    const styleSource = [];
    t.isNode(ast) && (0, traverse_1.default)(ast, {
        ImportDeclaration(path) {
            const node = path.node;
            const resource = node.source.value;
            const ext = nodePath.extname(resource);
            // 是否是样式文件
            if (!styleTypes.includes(ext)) {
                return;
            }
            let sourceName = '';
            if (node.specifiers.length) {
                sourceName = node.specifiers[0].local.name;
            }
            const realPath = nodePath.resolve(basePath, resource);
            const fileName = nodePath.basename(realPath);
            styleSource.push({
                name: sourceName,
                path: realPath,
                fileName: fileName
            });
        }
    });
    return styleSource;
}
exports.getStyleCode = getStyleCode;
function isPageFile(file, sourceDir) {
    if ((helper_1.REG_NODE_MODULES.test(file)) || file.indexOf(sourceDir) === -1)
        return false;
    const pagesList = index_1.globalAny.__taroAppPages || [];
    const dirname = nodePath.dirname(file).replace(/\\/g, '/');
    const fileObj = nodePath.parse(file);
    const name = fileObj.name.split('.')[0];
    const filePath = `${dirname}/${name}`;
    const filename = nodePath.basename(file).replace(nodePath.extname(file), '');
    return pagesList.includes(filePath) && !(filename.endsWith('.config'));
}
exports.isPageFile = isPageFile;
function isJSXSource(file, code) {
    let result = false;
    if (/.(j|t)sx$/.test(file)) { // jsx,tsx 组件
        result = true;
    }
    else if (file.endsWith('.ts')) { // ts 脚本
        result = false;
    }
    else {
        // .js
        const ast = parser.parse(code, {
            sourceType: 'module',
            plugins: [
                'jsx',
                'classProperties',
                'decorators-legacy'
            ]
        });
        t.isNode(ast) && (0, traverse_1.default)(ast, {
            JSXElement() {
                result = true;
            }
        });
    }
    return result;
}
function isSourceComponent(file, code, sourceDir) {
    if ((helper_1.REG_NODE_MODULES.test(file)) || file.indexOf(sourceDir) === -1)
        return false;
    return isJSXSource(file, code);
}
exports.isSourceComponent = isSourceComponent;
function isNPMComponent(file, code, rn) {
    var _a, _b;
    if (!((_b = (_a = rn === null || rn === void 0 ? void 0 : rn.resolve) === null || _a === void 0 ? void 0 : _a.include) === null || _b === void 0 ? void 0 : _b.find(npm => file.includes(nodePath.join('node_modules', npm))))) {
        return false;
    }
    return isJSXSource(file, code);
}
exports.isNPMComponent = isNPMComponent;
function getFileContent(fileName) {
    let code = '';
    if (!fs.existsSync(fileName))
        return code;
    try {
        code = fs.readFileSync(fileName, 'utf-8').toString();
    }
    catch (error) {
        code = '';
    }
    return code;
}
exports.getFileContent = getFileContent;
function getCommonStyle(appPath, basePath) {
    let styles = [];
    // 读取入口文件的内容
    const jsExt = ['tsx', 'ts', 'jsx', 'js'];
    let codeStr = '';
    // 先读带rn后缀的
    for (let i = 0; i < jsExt.length; i++) {
        const rnfilePath = `${appPath}.rn.${jsExt[i]}`;
        const rnFileContent = getFileContent(rnfilePath);
        if (!rnFileContent) {
            codeStr = rnFileContent;
            break;
        }
    }
    // 不带rn后缀的
    if (!codeStr) {
        for (let i = 0; i < jsExt.length; i++) {
            const filePath = `${appPath}.${jsExt[i]}`;
            const fileContent = getFileContent(filePath);
            if (fileContent) {
                codeStr = fileContent;
                break;
            }
        }
    }
    if (!codeStr)
        return styles;
    styles = getStyleCode(codeStr, basePath);
    return styles;
}
exports.getCommonStyle = getCommonStyle;
function parseBase64Image(iconPath, baseRoot) {
    const imagePath = nodePath.join(baseRoot, iconPath);
    const fileMimeType = mimeType.lookup(imagePath);
    // 如果不是图片文件，则退出
    if (!fileMimeType.toString().includes('image')) {
        return iconPath;
    }
    const data = fs.readFileSync(imagePath);
    const buff = Buffer.from(data).toString('base64');
    const base64 = 'data:' + fileMimeType + ';base64,' + buff;
    return base64;
}
exports.parseBase64Image = parseBase64Image;

function resolve(result,filename,outputFilename) {
    // 生成样式文件
	console.log('reach here4')
//console.log(result)
    if (result.cssText) {
        // Read the file first to compare the content
        // Write the new content only if it's changed
        // This will prevent unnecessary WDS reloads
        let currentCssText;
        try {
            currentCssText = fs.readFileSync(outputFilename, 'utf-8');
        }
        catch (e) {
            // Ignore error
        }
        if (currentCssText !== result.cssText) {
            mkdirp.sync(nodePath.dirname(outputFilename));
            fs.writeFileSync(outputFilename, result.cssText);
        }
    }
    else {
        // 没有生成 linaria 样式文件不走下面处理语法的逻辑
	console.log('reach here5')
        return;
    }
    const ast = (0, core_1.parseSync)(result, {
        filename,
        caller: { name: 'taro' }
    });
	
	//console.log(ast)
	
    // 遍历 ast 处理引入的样式文件和更改属性名
    let linariaStyle;
    /**
     * 维护对应组件和样式的关系
     * 比如 const Background = styled(View)`width: 100px;`
     * Map => [['Background', className]]
     */
    const componentClassMap = new Map();
    if (t.isNode(ast)) {
        (0, traverse_1.default)(ast, {
            Program: {
                enter(astPath) {
                    linariaStyle = astPath.scope.generateUidIdentifier('linariaStyle');
                    let lastImportAstPath;
                    for (const stmt of astPath.get('body')) {
                        if (core_1.types.isImportDeclaration(stmt.node)) {
                            lastImportAstPath = stmt;
                        }
                    }
                    if (lastImportAstPath) {
                        const cssImportCSS = core_1.types.importDeclaration([core_1.types.importDefaultSpecifier(linariaStyle)], core_1.types.stringLiteral(outputFilename));
                        lastImportAstPath.insertAfter(cssImportCSS);
                    }
                }
            },
            ObjectExpression(astPath) {
                for (const node of astPath.node.properties) {
                    if (core_1.types.isObjectProperty(node) && core_1.types.isIdentifier(node.key) && node.key.name === 'class') {
                        if (core_1.types.isStringLiteral(node.value) && Object.keys(result.rules).includes(`.${node.value.value}`)) {
                            const componentProperty = astPath.node.properties.find((property) => {
                                if (core_1.types.isObjectProperty(property) && core_1.types.isIdentifier(property.key)) {
                                    return property.key.name === 'name';
                                }
                            });
                            if (core_1.types.isObjectProperty(componentProperty) && core_1.types.isStringLiteral(componentProperty.value)) {
                                componentClassMap.set(componentProperty.value.value, node.value.value);
                            }
                            break;
                        }
                    }
                }
            },
            JSXOpeningElement(astPath) {
                const { attributes, name: component } = astPath.node;
                const className = core_1.types.isJSXIdentifier(component) && componentClassMap.get(component.name);
                if (className) {
                    const index = attributes.findIndex(attribute => core_1.types.isJSXAttribute(attribute) && attribute.name.name === 'style');
                    let attribute = attributes[index];
                    const linariaExpression = core_1.types.memberExpression(linariaStyle, core_1.types.identifier(className));
                    // 不处理行内字符串样式，删除 style 属性
                    if (attribute && core_1.types.isJSXAttribute(attribute) && core_1.types.isStringLiteral(attribute.value)) {
                        attributes.splice(index, 1);
                        attribute = null;
                    }
                    if (attribute) {
                        if (core_1.types.isJSXAttribute(attribute) && core_1.types.isJSXExpressionContainer(attribute.value)) {
                            const expression = attribute.value.expression;
                            let elements;
                            if (core_1.types.isArrayExpression(expression)) {
                                elements = expression.elements;
                            }
                            else {
                                elements = expression;
                            }
                            // 合并 style 对象
                            // style = Object.assign({}, linariaStyle, { color: 'red' })
                            const mergeStyleExpression = core_1.types.callExpression(core_1.types.identifier('Object.assign'), 
                            // @ts-ignore
                            [core_1.types.objectExpression([])].concat(linariaExpression, elements));
                            attribute.value = core_1.types.jSXExpressionContainer(mergeStyleExpression);
                        }
                    }
                    else {
                        attributes.push(core_1.types.jsxAttribute(core_1.types.jsxIdentifier('style'), core_1.types.jsxExpressionContainer(linariaExpression)));
                    }
                }
            }
        });
        // 根据 ast 生成新的结果
        const transformResult = (0, core_1.transformFromAstSync)(ast, result.code, {
            filename,
            babelrc: false,
            configFile: false,
            sourceMaps: true,
            sourceFileName: filename,
            inputSourceMap: result.sourceMap
        });
		console.log('rrrrrrrrrrrrrrrrrrrrrrrrrrrrr')
		console.log(transformResult)
        return transformResult;
    }
}

function transformLinaria({ sourcePath, sourceCode }) {
    // TODO：配置 option, 小程序和 h5 可配置 webpack loader 更改配置，RN没有loader，所以默认不可配置，后续可考虑加配置
    const cacheDirectory = '.linaria-cache';
    const resolver = undefined;
    const preprocessor = undefined;
    const extension = '.linaria.css';
    const root = process.cwd();
    // 处理 option 参数
    const baseOutputFileName = sourcePath.replace(/\.[^.]+$/, extension);
    const outputFilename = normalize(nodePath.join(nodePath.isAbsolute(cacheDirectory)
        ? cacheDirectory
        : nodePath.join(process.cwd(), cacheDirectory), sourcePath.includes(root)
        ? nodePath.relative(root, baseOutputFileName)
        : baseOutputFileName));
    const filename = nodePath.relative(process.cwd(), sourcePath);
    // linaria代码转换
	
	console.log('reach here')
    const result = transform4rn(root, filename, outputFilename, sourceCode, resolve);
	console.log('reach here2')
	
}

exports.transformLinaria = transformLinaria;
//# sourceMappingURL=utils.js.map