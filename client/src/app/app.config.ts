import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { apolloClient } from './apollo.config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch(),withInterceptorsFromDi() ),
    importProvidersFrom(
      BrowserAnimationsModule,
      BrowserModule,
      // HttpClientModule,
      ApolloModule
    ),
    { provide: APOLLO_OPTIONS, 
      useFactory: () => {
        return {
          cache: apolloClient.cache,
          link: apolloClient.link,
        }
      }
     },
  ],
};
