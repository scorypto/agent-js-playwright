/*
 *  Copyright 2021 EPAM Systems
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */

import { test, expect } from '@playwright/test';
import { ReportingApi } from '../../src/reportingApi';

test.describe('attributes for suite/test',  () => {
  ReportingApi.addAttributes([
    {
      key: 'suitekey',
      value: 'suitevalue',
    },
  ], 'attributes for suite/test');
  ReportingApi.setTestCaseId('TestCaseIdForTheSuite', 'attributes for suite/test');

  test('test should be passed',  () => {
    ReportingApi.addAttributes([
      {
        key: 'keyy',
        value: 'value',
      },
    ]);
    ReportingApi.setTestCaseId('TestCaseIdForTheTest');
    expect(true).toBe(true);
  });

  test('test should be failed',  () => {
    expect(false).toBe(true);
  });
});