'use strict';

describe('Service: seekerApi', function () {

  // load the service's module
  beforeEach(module('seekerToolApp'));

  // instantiate service
  var seekerApi;
  beforeEach(inject(function (_seekerApi_) {
    seekerApi = _seekerApi_;
  }));

  it('should do something', function () {
    expect(!!seekerApi).toBe(true);
  });

});
