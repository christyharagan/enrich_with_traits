import { test_dest } from 'segment-sloth'
import { dest_payload } from './payload'

describe('Test destination function', function () {
  it('verifies successful response', async () => {
    const settings: FunctionSettings = {
      namespaceId: 'REPLACE ME',
      profileAccessToken: 'REPLACE ME',
      writeKey: 'REPLACE ME'
    }

    // Testing destinations is less obvious than testing sources. Suggestions include stubbing the fetch function
    await test_dest(dest_payload, settings, 3001)
  }).timeout(10000);
});
