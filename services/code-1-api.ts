// defer importing the API until after config has been loaded.
//     this is required due to config loading secrets async
const startCode1Api = async () => {
    await import('./code-1');
}

void startCode1Api();
