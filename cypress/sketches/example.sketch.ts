import { Sketch } from '@kentan-official/core';

import { Example } from './example.model';

export class ForExample extends Sketch<Example> {
  constructor() {
    super(Example, {
      name: 'Using fixtures to represent data',
      email: 'hello@cypress.io',
      body: 'Fixtures are a great way to mock data for responses to routes'
    });
  }
}
