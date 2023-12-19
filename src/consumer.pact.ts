import {MessageConsumerPact, MatchersV3} from "@pact-foundation/pact";
import {AnyTemplate} from "@pact-foundation/pact/src/dsl/matchers";
import {synchronousBodyHandler} from "@pact-foundation/pact/src/messageConsumerPact";


describe("pact test", () => {
    const pact = new MessageConsumerPact({
        consumer: "Consumer",
        provider: "Provider",
    })


    test("C-P", () => {
        return pact
            .expectsToReceive("List")
            .withContent({
                list: MatchersV3.arrayContaining(["df", "aa", 1])
            } as unknown as AnyTemplate)
            .verify(synchronousBodyHandler((data) => {
                console.log(JSON.stringify(data))
                return
            }))
    })
})