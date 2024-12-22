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

import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HttpConfiguration, HttpConfigurationToken} from './http-configuration';

/**
 * Common methods making authorized HTTP requests. Note: the Flask web services used to require (rather wonkily)  a / at the end of
 * requests, e.g. .../retailers/?... If you see browsers failing in the CORS negotiation due to a redirect it may be because of this /; I
 * did remove the / at one point from rpa-ws
 */
@Injectable()
export class HttpClientService {
  constructor(private http: HttpClient,
              @Inject(HttpConfigurationToken) private config: HttpConfiguration) {
  }

  httpPut<T>(path: string, body: any | null, params?: { [param: string]: string }, extraHeaders?: HttpHeaders) {
    validatePath(path);
    const url = this.buildUrl(path);
    const options = buildOptions(params, false, extraHeaders);
    return this.http.put<T>(url, body, options);
  }

  httpPost<T>(path: string, body: any | null, params?: { [param: string]: string }, extraHeaders?: HttpHeaders) {
    validatePath(path);
    const url = this.buildUrl(path);
    const options = buildOptions(params, false, extraHeaders);
    return this.http.post<T>(url, body, options);
  }

  httpPostResponse<T>(path: string,
                      body: any | null,
                      params?: { [param: string]: string },
                      extraHeaders?: HttpHeaders): Observable<HttpResponse<T>> {
    validatePath(path);
    const url = this.buildUrl(path);
    const options = buildOptions(params, true, extraHeaders);
    return this.http.post<HttpResponse<T>>(url, body, options);
  }

  httpGet<T>(path: string, params?: { [param: string]: string | string[] }, versioning = true): Observable<T> {
    validatePath(path);
    const url = this.buildUrl(path, versioning);
    const options = buildOptions(params);
    return this.http.get<T>(url, options);

  }

  httpGetNoVersion<T>(path, params?: { [param: string]: string | string[] }): Observable<T> {
    validatePath(path);
    const url = this.buildUrl(path, false);
    const options = buildOptions(params);
    return this.http.get<T>(url, options);

  }

  httpGetResponse<T>(path: string, params?: { [param: string]: string | string[] }): Observable<HttpResponse<T>> {
    validatePath(path);
    const url = this.buildUrl(path);
    const options = buildOptions(params, true);
    return this.http.get<HttpResponse<T>>(url, options);
  }

  httpDelete(path: string, params?: { [param: string]: string }): Observable<{}> {
    validatePath(path);
    const url = this.buildUrl(path);
    const options = buildOptions(params);
    return this.http.delete(url, options);
  }

  httpPatch<T>(path: string, body: any | null, params?: { [param: string]: string }): Observable<T> {
    validatePath(path);
    const url = this.buildUrl(path);
    const options = buildOptions(params);
    return this.http.patch<T>(url, body, options);
  }

  protected buildUrl(path: string, versioning = true) {
    return versioning ? `${this.config.baseUrl}/${this.config.version}/${path}` : `${this.config.baseUrl}/${path}`;
  }
}

function validatePath(path: string) {
  // TODO perhaps this should return an Observable error
  if (!path) {
    throw new Error('Path must not be empty');
  }
  if (path[0] === '/') {
    throw new Error(`Paths must be relative: ${path}`);
  }
}

function buildOptions(params?: { [param: string]: string | string[] }, fullResponse = false, httpHeaders?: HttpHeaders) {
  const options = {};
  if (params) {
    Object.assign(options, {params: new HttpParams({fromObject: params})});
  }
  if (httpHeaders) {
    Object.assign(options, {headers: httpHeaders});
  }
  if (fullResponse) {
    Object.assign(options, {observe: 'response'});
  }
  return options;
}


