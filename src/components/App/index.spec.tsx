import { expect } from 'chai';
import {render} from "react-dom";
import App from "./index";
import React from "react";

describe('Test Unit', () => {

    const div = document.createElement('div');
    div.id = 'root';

    before(() => document.body.appendChild(div))

    it('works', () => {
        render(<App/>, div);
        expect(window.getComputedStyle(document.querySelector('#root > div')!).getPropertyValue('height')).to.equal('50px');
    });

});