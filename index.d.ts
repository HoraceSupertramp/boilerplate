declare module '*.css';

declare function describe(title: string, fn: () => void);
declare function it(title: string, fn: (browser: import('nightwatch').NightwatchBrowser) => void);
declare function test(title: string, fn: (browser: import('nightwatch').NightwatchBrowser) => void);