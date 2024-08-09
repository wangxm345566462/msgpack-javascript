import assert from "assert";
import {encode, decode} from "@msgpack/msgpack";

describe("encode", () => {
    context("useBigInt64", () => {
        it("encodes numbers in bigInt without useBigInt64", () => {
            const source = {
                foo: BigInt("1234567890123456789")
            };
            const encoded = encode(source, {useBigInt64: true})
            const decoded = decode(encoded, {useBigInt64: true});
            assert.deepStrictEqual(source, decoded);
        });

    });
});
