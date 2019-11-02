import {Prepend} from './Prepend'
import {Pos} from '../Iteration/Pos'
import {Next} from '../Iteration/Next'
import {Length} from './Length'
import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Cast} from '../Any/Cast'
import {Tuple} from './Tuple'
import {Overwrite} from './Overwrite'

/**
 * @hidden
 */
type _Reverse<T extends Tuple, TO extends Tuple, I extends Iteration = IterationOf<'0'>> = {
    0: _Reverse<T, Prepend<TO, T[Pos<I>]>, Next<I>>
    1: TO
}[
    Pos<I> extends Length<T>
    ? 1
    : 0
]

/** Turn a **tuple** the other way around
 * @param T to reverse
 * @param TO to append to (?=[])
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Reverse<T extends Tuple, TO extends Tuple = []> =
    _Reverse<Overwrite<Required<T>, T>, TO> extends infer X
    // `T` is `Required` so that we can preserve its length
    // Then `Overwrite` with itself to preserve `undefined`
    ? Cast<X, Tuple>
    : never
