export class InvalidParamError extends Error {
  constructor (praramName: string) {
    super(`Invalid param: ${praramName}`)
    this.name = 'InvalidParamError'
  }
}
