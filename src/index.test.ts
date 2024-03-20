import {batch} from "./index";


describe("Array Batcher", () => {

  describe("batch", () => {

    it("Should batch arrays", () => {
      const input = [1,2,3,4,5,6,7,8,9]
      const batched = batch(input, 2)

      expect(batched.length).toBe(5)
      expect(batched[0]).toStrictEqual([1,2])
      expect(batched[1]).toStrictEqual([3,4])
      expect(batched[2]).toStrictEqual([5,6])
      expect(batched[3]).toStrictEqual([7,8])
      expect(batched[4]).toStrictEqual([9])
    })

  })

})