import {Iteration} from '../Iteration/Iteration'
import {IterationOf} from '../Iteration/IterationOf'
import {Merge} from './Merge'
import {Pos} from '../Iteration/Pos'
import {Next} from '../Iteration/Next'
import {Length} from '../List/Length'
import {Cast} from '../Any/Cast'
import {List} from '../List/List'
import {Extends} from '../Any/Extends'
import {Depth} from './_Internal'
import {BuiltInObject} from '../Misc/BuiltInObject'

/**
 * @hidden
 */
type __Assign<O extends object, Os extends List<object>, depth extends Depth, ignore extends object, fill extends any, I extends Iteration = IterationOf<0>> = {
    0: __Assign<Merge<Os[Pos<I>], O, depth, ignore, fill>, Os, depth, ignore, fill, Next<I>>
    1: O
}[Extends<Pos<I>, Length<Os>>]

/**
 * @hidden
 */
export type _Assign<O extends object, Os extends List<object>, depth extends Depth, ignore extends object, fill extends any> =
    __Assign<O, Os, depth, ignore, fill> extends infer X
    ? Cast<X, object>
    : never

/**
 * Assign a list of [[Object]] into `O` with [[Merge]]. Merges from right to
 * left, first items get overridden by the next ones (last-in overrides).
 * @param O to assign to
 * @param Os to assign
 * @param depth (?=`'flat'`) 'deep' to do it deeply
 * @param style (?=`1`) 0 = lodash, 1 = ramda
 * @param ignore (?=`BuiltinObject`) types not to merge
 * @param fill (?=`fill`) types of `O` to be replaced with ones of `O1`
 * @returns [[Object]]
 * @example
 * ```ts
 * ```
 */
export type Assign<O extends object, Os extends List<object>, depth extends Depth = 'flat', ignore extends object = BuiltInObject, fill extends any = never> =
    O extends unknown
    ? Os extends unknown
      ? _Assign<O, Os, depth, ignore, fill>
      : never
    : never
