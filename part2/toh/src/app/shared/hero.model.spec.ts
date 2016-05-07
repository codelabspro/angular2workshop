import {
  describe,
  ddescribe,
  expect,
  iit,
  it
} from '@angular/testing';
import {Hero} from './hero.model';

describe('Hero', () => {
  it('should create an instance', () => {
    expect(new Hero()).toBeTruthy();
  });
});
