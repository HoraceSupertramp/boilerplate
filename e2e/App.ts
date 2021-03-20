
describe('test', () => {

    it('works', (browser) => {
        browser
            .url('http://localhost:8080/')
            .expect.element('#root').to.be.present;
    });

})