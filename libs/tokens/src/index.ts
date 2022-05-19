import { InjectionToken } from '@angular/core';

export * from './lib/tokens.module';

export const NEW_TOKEN = new InjectionToken<string>("foo");