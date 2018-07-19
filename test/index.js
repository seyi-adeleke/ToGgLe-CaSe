import assert from 'assert';
import toggle from '../src';


describe('Mocha', () => {
    it('should run tests correctly', () => {
        assert.equal(2 + 2, 4);
    });
});


describe('Toggle', () => {
    it('should convert a string to toggle case', () => {
        assert.equal(toggle('the quick brown fox did the thing'), 'ThE QuIcK BrOwN FoX DiD ThE ThInG');
    });
    it('should convert a camelCased string to toggle case', () => {
        assert.equal(toggle('TheQuickBrownFoxDidTheThing'), 'ThEqUiCkBrOwNfOxDiDtHeThInG');
    });
    it('should convert a snake_cased string to toggle case', () => {
        assert.equal(toggle('The_Quick_Brown_Fox_Did_The_Thing'), 'ThEqUiCkBrOwNfOxDiDtHeThInG');
    });
    it('should convert a dash_cased string to toggle case', () => {
        assert.equal(toggle('The-Quick-Brown-Fox-Did-The-Thing'), 'ThEqUiCkBrOwNfOxDiDtHeThInG');
    });
    it('should convert a mixed-_Case string to toggle case', () => {
        assert.equal(toggle('TheQuick_BrownFox-Didthe-Thing'), 'ThEqUiCkBrOwNfOxDiDtHeThInG');
    });
    it('should return whitespace for non string values', () => {
        assert.equal(toggle(12), '');
        assert.equal(toggle({
            key: 'value',
        }), '');
    });
});
