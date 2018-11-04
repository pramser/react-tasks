import expect from 'expect';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

describe('Minimal unit test', () => {
  it('informs the reader', () => {
    expect('tautology').toEqual('tautology');
  });
});
