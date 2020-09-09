const OptionalSettings = {
}
const RequiredSettings = {
  writeKey: {
    description: 'The write key of the source to repeat events into',
    type: string
  },
  profileAccessToken: {
    description: 'The profile API access token',
    type: string
  },
  namespaceId: {
    description: 'The namespace ID of the space to read traits from',
    type: string
  }
}

validate(OptionalSettings, RequiredSettings)
