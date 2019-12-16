import * as rg4js from 'raygun4js';
import { ErrorHandler } from '@angular/core';

const VERSION_NUMBER = '1.0.0.0';
rg4js('apiKey', 'CSEECHAoLq3P5ZeF97dj6Q');
rg4js('setVersion', VERSION_NUMBER);
rg4js('enableCrashReporting', true);
export class RaygunErrorHandler implements ErrorHandler {
  handleError(e: any) {
    rg4js('setUser', {
      identifier: '42000',
      isAnonymous: false,
      email: 'Matt@KillAllDefects.com',
      firstName: 'Matt',
      fullName: 'Matt Eland',
    });

    rg4js('send', {
      error: e,
    });
  }
}
