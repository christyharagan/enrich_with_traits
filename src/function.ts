import { usersTraits } from 'segment-typescript-api/cjs/profile_api'
import { Id } from 'segment-typescript-api/cjs/profile_request'

const A = 'a'.charCodeAt(0)
function create_message_id() {
  let message_id = 'dg-'
  for (let i = 0; i < 32; i++) {
    let r = Math.round(Math.random() * 15)
    message_id += r > 9 ? String.fromCharCode(A + r - 10) : r
  }
  return message_id
}

export async function onIdentify(event: SegmentIdentifyEvent, settings: FunctionSettings) {
  let id: Id
  if (event.userId) {
    id = {user_id: event.userId}
  } else if (event.anonymousId) {
    id = { anonymous_id: event.anonymousId }
  } else {
    throw 'Invalid payload: No user identifier found'
  }
  let traits = await usersTraits(settings.profileAccessToken, settings.namespaceId, id, { limit: 100 })

  const body = {
    context: event.context,
    traits: traits.traits,
    timestamp: new Date().toISOString(),
    messageId: create_message_id(),
    type: 'identify',
    writeKey: settings.writeKey,
  } as SegmentIdentifyEvent

  if (event.userId) {
    body.userId = event.userId
  }
  if (event.anonymousId) {
    body.anonymousId = event.anonymousId
  }

  await fetch('https://api.segment.io/v1/i', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
}