export class MissingParamError extends Error {
  constructor (praramName: string) {
    super(`Missing param: ${praramName}`)
    this.name = 'MissingParamError'
  }
}
