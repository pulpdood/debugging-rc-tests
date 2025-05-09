// defer importing the API until after config has been loaded.
//     this is required due to config loading secrets async
const startPortalApi = async () => {
    await import('./api-code');
}

void startPortalApi();
