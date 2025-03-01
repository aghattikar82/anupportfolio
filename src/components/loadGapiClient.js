import { gapi } from 'gapi-script';

export const loadGapiClient = () => {
  return new Promise((resolve, reject) => {
    gapi.load('client:auth2', async () => {
      try {
        await gapi.client.init({
          apiKey: 'da37052f30b6a57d8d0d9359e238dc7529f9445a', // Replace with your actual API key
          discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
        });
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  });
};
