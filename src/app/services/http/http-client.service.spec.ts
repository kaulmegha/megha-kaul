/*
 * INTEL CONFIDENTIAL
 *
 * Copyright 2019 - 2020 Intel Corporation.
 *
 * This software and the related documents are Intel copyrighted materials,
 * and your use of them is governed by the express license under which they
 * were provided to you ("License"). Unless the License provides otherwise,
 * you may not use, modify, copy, publish, distribute, disclose or transmit this
 * software or the related documents without Intel's prior written permission.
 *
 * This software and the related documents are provided as is, with no express
 * or implied warranties, other than those that are expressly stated in the
 * License.
 */

import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClientService} from './http-client.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

describe('HttpClient', () => {
  let service: HttpClientService;
  let httpServer: HttpTestingController;
  const baseUrl = 'https://example.com';
  const version = 'v1';

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
    service = new HttpClientService(TestBed.get(HttpClient), {baseUrl, version});
    httpServer = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    // After every test, assert that there are no readmeLink pending requests.
    httpServer.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('once created', () => {

    const testMethodRequest = (requestType: string) => {
      httpServer.match(req => {
        expect(req.method).toEqual(`${requestType.toUpperCase()}`);
        return true;
      });
    };

    const testRequestUrl = (expectedUrl) => {
      httpServer.match(req => {
        expect(req.urlWithParams).toBe(expectedUrl);
        return true;
      });
    };

    const testGET = () => {
      it(`should be a GET request`, () => {
        testMethodRequest('GET');
      });
    };

    const testRequestBody = () => {
      httpServer.match(req => {
        expect(req.body).toEqual({value: 123});
        return true;
      });
    };

    const testPOST = () => {
      it(`should be a POST request`, () => {
        testMethodRequest('POST');
      });

      it('should have a body', () => {
        testRequestBody();
      });

    };

    describe('httpGet Requests', () => {
      beforeEach(() => {
        service.httpGet('api').subscribe();
      });

      testGET();

      it('should match request', () => {
        testRequestUrl(`${baseUrl}/${version}/api`);
      });
    });

    describe('httpGetResponse Requests', () => {
      beforeEach(() => {
        service.httpGetResponse('api').subscribe();
      });

      testGET();

      it('should match request', () => {
        httpServer.match(req => {
          expect(req.urlWithParams).toBe(`${baseUrl}/${version}/api`);
          return true;
        });
      });
    });

    describe('httpGetNoVersion Requests', () => {
      beforeEach(() => {
        service.httpGetNoVersion('api').subscribe();
      });
      testGET();

      it('should match request', () => {
        testRequestUrl(`${baseUrl}/api`);
      });
    });

    describe('httpPost requests', () => {
      beforeEach(() => {
        service.httpPost('api', {value: 123}).subscribe();
      });

      testPOST();

      it('should match request', () => {
        testRequestUrl(`${baseUrl}/${version}/api`);
      });

    });

    describe('httpPost requests with extra headers', () => {
      beforeEach(() => {
        service.httpPost('api', {value: 123}, null).subscribe();
      });

      it('should have proper headers', () => {
        httpServer.match(req => {
          expect(req.headers.has('Content-Type')).toBe(false);
          expect(req.headers.has('Accept')).toBe(false);
          return true;
        });
      });

    });

    describe('httpPostResponse requests', () => {
      beforeEach(() => {
        service.httpPostResponse('api', {value: 123}).subscribe();
      });

      testPOST();

      it('should match request', () => {
        testRequestUrl(`${baseUrl}/${version}/api`);
      });
    });

    describe('httpPostResponse requests with extra headers', () => {
      beforeEach(() => {
        const extraHeaders = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        });

        service.httpPostResponse('api', {value: 123}, null, extraHeaders).subscribe();
      });

      it('should have proper headers', () => {
        httpServer.match(req => {
          expect(req.headers.has('Content-Type')).toBe(true);
          expect(req.headers.has('Accept')).toBe(false);
          return true;
        });
      });
    });

    describe('httpPut requests', () => {
      beforeEach(() => {
        service.httpPut('api', {value: 123}).subscribe();
      });

      it(`should be a PUT request`, () => {
        testMethodRequest('PUT');
      });

      it('should have a body', () => {
        httpServer.match(req => {
          expect(req.body).toEqual({value: 123});
          return true;
        });
      });

    });

  });

});
