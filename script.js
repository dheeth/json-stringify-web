const stringifyBtn = document.getElementById('stringify-btn');
const destringifyBtn = document.getElementById('destringify-btn');
const jsonInput = document.getElementById('json-input');
const jsonOutput = document.getElementById('json-output');
const copyBtn = document.getElementById('copy-btn');

stringifyBtn.addEventListener('click', () => {
    try {
        const jsonObject = JSON.parse(jsonInput.value);
        const jsonString = JSON.stringify(jsonObject, (key, value) => value);
        const escapedJsonString = jsonString.replace(/"/g, '\\"');
        jsonOutput.value = '"' + escapedJsonString + '"';
    } catch (error) {
        jsonOutput.value = 'Invalid JSON input!';
    }
});

destringifyBtn.addEventListener('click', () => {
    try {
        const jsonString = jsonInput.value;
        const unescapedJsonString = jsonString.replace(/\\"/g, '"'); // Unescape double quotes
        const unquotedJsonString = unescapedJsonString.replace(/^"|"$/g, ''); // Remove surrounding quotes
        const jsonObject = JSON.parse(unquotedJsonString);
        jsonOutput.value = JSON.stringify(jsonObject, null, 2);
    } catch (error) {
        jsonOutput.value = 'Invalid JSON input!';
    }
});

copyBtn.addEventListener('click', () => {
    const outputTextarea = document.getElementById('json-output');
    outputTextarea.select();
    document.execCommand('copy');
});
