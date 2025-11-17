import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getVertexAI, provideVertexAI } from '@angular/fire/vertexai';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'genkit-vertexai',
        appId: '1:74555973654:web:ac8fac09b825eb8e0c5537',
        storageBucket: 'genkit-vertexai.firebasestorage.app',
        apiKey: 'AIzaSyDmDfOh4YemsLIBgwt-ydbJjjlSVJ1J0sg',
        authDomain: 'genkit-vertexai.firebaseapp.com',
        messagingSenderId: '74555973654'
      })
    ),
    provideAuth(() => getAuth()),
    provideFunctions(() => getFunctions()),
    provideVertexAI(() => getVertexAI()),
  ],
};
