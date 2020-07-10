import { decodeMorse } from './index.js';
import chai from 'chai';

const { expect, should, assert } = chai;

describe('GIVEN decodeMorse function', () => {
    describe(`AND the input is '.... . -.--   .--- ..- -.. .'`, () => {
        it(`SHOULD return 'HEY JUDE'`, () => {
            expect(decodeMorse('.... . -.--   .--- ..- -.. .')).to.eql('HEY JUDE');
        });
    });
});
