
const { join } = require('path');
//const transform4rn = require("./transform");
const babel = require('@babel/core');
const { loadWywOptions, shaker, Entrypoint, parseFile, prepareCode, withDefaultServices } = require('@wyw-in-js/transform');

const pluginOptions = loadWywOptions({});

function transform4rn(root, inputFilePath, sourceCode) {
	const services = withDefaultServices({
		babel,
		options: { pluginOptions },
	});

	const entrypoint = Entrypoint.createRoot(
		services,
		inputFilePath,
		[],
		sourceCode
	);

	if (entrypoint.ignored) {
		throw new Error('Ignored');
	}

	const ast = parseFile(babel, inputFilePath, sourceCode, {filename: inputFilePath,root});

	const [transformedCode, imports, metadata] = prepareCode(services, entrypoint, ast);
	console.log(transformedCode)
	return transformedCode;
}
