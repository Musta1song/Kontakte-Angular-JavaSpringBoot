import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'acontact',
  webDir: 'dist/acontact',
  server: {
    androidScheme: 'https'
  }
};

export default config;
