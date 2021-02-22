const expect = require('chai').expect;
const {initEditor, toHtml, serialize, simulateInputRule, setSelection, clickMenuItem, type} = require('../../testEditor');

describe("Plugin:em", () => {
    it("test init emphasized text", (done) => {
        initEditor('*This is emphasized*');
        expect(toHtml()).to.equal('<p><em>This is emphasized</em></p>');
        expect(serialize()).to.equal('*This is emphasized*');
        done();
    });

    // TODO: Implment em input rule
    /*
        it("test emphasized input rule", (done) => {
            initEditor();
            expect(simulateInputRule('*Make me emphasized!*')).to.be.true;
            expect(toHtml()).to.equal('<p><strong>Make me bold!</strong></p>');
            expect(serialize()).to.equal('*Make me emphasized!*');
            done();
        });
        */

    it("test emphasized menu item mark selection", (done) => {
        let editor = initEditor('Make this emphasized!');
        setSelection(5,10);
        clickMenuItem('markEm');
        expect(toHtml()).to.equal('<p>Make <em>this</em> emphasized!</p>');
        done();
    });

   it("test emphasized menu item mark type", (done) => {
       let editor = initEditor();
       clickMenuItem('markEm');
       type('Test', editor);
       expect(toHtml()).to.equal('<p><em>Test</em></p>');
       done();
   });

});