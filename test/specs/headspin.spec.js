describe('HeadSpin Mobile Test', () => {
    it('open Google in Chrome', async () => {
        await browser.url('https://google.com');
        await browser.pause(5000); // allow time to see it on live view
    });
});
