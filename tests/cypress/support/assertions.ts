chai.use(require('chai-subset'));
chai.use(require('chai-subset-jest-diff')());

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Chai {
  interface LanguageChains {
    containSubset(obj: Record<string, any>): void;
  }
}
