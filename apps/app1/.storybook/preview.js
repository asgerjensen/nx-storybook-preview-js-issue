import {
    moduleMetadata
} from '@storybook/angular';
import { NEW_TOKEN } from '@test/tokens';

export const decorators =
[
    moduleMetadata({
      providers: [
          {
            provide: NEW_TOKEN,
            useValue: 'foo'
          }
      ]
    })
]
