const jsonInput = document.getElementById('json-input');
const stringifyBtn = document.getElementById('stringify-btn');
const jsonOutput = document.getElementById('json-output');

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

const copyBtn = document.getElementById('copy-btn');

copyBtn.addEventListener('click', () => {
    const outputTextarea = document.getElementById('json-output');
    outputTextarea.select();
    document.execCommand('copy');
});
