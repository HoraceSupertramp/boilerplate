import { expect } from 'chai';
import { container } from './index.css';

describe('Test Unit', () => {
    it('works', () => {
        const div = document.createElement('div');
        div.className = container;
        document.body.appendChild(div);
        expect(window.getComputedStyle(div).getPropertyValue('height')).to.equal('50px');
    });
});