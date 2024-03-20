import {batch} from "./index";


declare global {
  interface Array<T> {
    batch: <T> (batchSize:number) => Array<Array<T>>
  }
}

Array.prototype.batch = function<T>(batchSize:number):Array<Array<T>> {
  return batch(this, batchSize)
}