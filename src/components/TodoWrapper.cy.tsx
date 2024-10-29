import React from 'react'
import TodoWrapper from './TodoWrapper'
import { mount } from 'cypress/react';
/// <reference path="../support/component.ts" />


describe('<TodoWrapper />', () => {

  beforeEach(() => {
    // @ts-ignore
    cy.mount(<TodoWrapper />)
  })

  it('renders', () => {
    // @ts-ignore
    cy.mount(<TodoWrapper />)
  })

  it('adds a new todo to the list', () => {
    cy.get('input[placeholder="Add a new todo"]').type('new todo');
    cy.get('button[type="submit"]').click();

    cy.contains('new todo').should('be.visible');
  })

})