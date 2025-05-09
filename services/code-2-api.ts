// defer importing the API until after config has been loaded.
//     this is required due to config loading secrets async
const startCode2Api = async () => {
  await import('./code-2');
}

void startCode2Api();
