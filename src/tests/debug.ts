import { test_dest } from 'segment-sloth'
import { dest_payload } from './payload'

const settings: FunctionSettings = {
  namespaceId: 'REPLACE ME',
  profileAccessToken: 'REPLACE ME',
  writeKey: 'REPLACE ME'
}

test_dest(dest_payload, settings, 3001).then(() => {
}).catch(e =>{
  console.error(e)
})