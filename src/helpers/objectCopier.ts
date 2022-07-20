const objectCopier = (object: object): any => {
  return JSON.parse(JSON.stringify(object))
}

export default objectCopier
