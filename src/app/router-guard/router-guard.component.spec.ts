// https://atom-morgan.github.io/how-to-test-angular-canactivate-guards/

export class MockRouter {

  queryParams = {
    returnUrl: undefined
  };

  navigate(path, queryParams) {
  }
}

describe('RouterGuard', () => {

});
