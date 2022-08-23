import { expect } from 'chai';



describe('terms-of-use', function TermsOfUseSpec () {
    it('it exists', () => {
        fetch('./terms-of-use.md').then(response => {
            response.text().then(body=> {
                expect(body).to.be.ok;
            }).catch(resError=>{
                expect(resError).throw
            })
        }).catch(error=>{
            expect(error).throw
        })
       
    });
});
