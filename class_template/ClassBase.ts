export default class TemplateObject<T> {
    private _rawValue: T
    constructor(value: T) {
      this._rawValue = value
      //console.log('-----------------', typeof this._rawValue, this._rawValue)
    }
}
