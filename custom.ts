/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace custom {
    /**
     * for loop with initial value and step. Ensure step changes index from first towards last
     * @param first first index value, eg: 0
     * @param limit index limit, eg: 4
     * @param step index increment, eg: 1
     */
    //% handlerStatement=1
    //% draggableParameters
    //% block="for $index | from $first | to $limit | step $step "
    export function forWithStep(first: number, limit: number, step: number, body: ( index: number) => void): void {
        if (first <= limit) {
            for (let index = first; index <= limit; index += step) {
                body( index)
            }
        } else {
            for (let index = first; index >= limit; index += step) {
                body(index)
            }
        }
    }
}
