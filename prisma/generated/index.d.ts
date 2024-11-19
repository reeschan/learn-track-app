
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Summary
 * 
 */
export type Summary = $Result.DefaultSelection<Prisma.$SummaryPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model SummaryTag
 * 
 */
export type SummaryTag = $Result.DefaultSelection<Prisma.$SummaryTagPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model SummaryCategory
 * 
 */
export type SummaryCategory = $Result.DefaultSelection<Prisma.$SummaryCategoryPayload>
/**
 * Model ChatGPTHistory
 * 
 */
export type ChatGPTHistory = $Result.DefaultSelection<Prisma.$ChatGPTHistoryPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.summary`: Exposes CRUD operations for the **Summary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Summaries
    * const summaries = await prisma.summary.findMany()
    * ```
    */
  get summary(): Prisma.SummaryDelegate<ExtArgs>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs>;

  /**
   * `prisma.summaryTag`: Exposes CRUD operations for the **SummaryTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SummaryTags
    * const summaryTags = await prisma.summaryTag.findMany()
    * ```
    */
  get summaryTag(): Prisma.SummaryTagDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs>;

  /**
   * `prisma.summaryCategory`: Exposes CRUD operations for the **SummaryCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SummaryCategories
    * const summaryCategories = await prisma.summaryCategory.findMany()
    * ```
    */
  get summaryCategory(): Prisma.SummaryCategoryDelegate<ExtArgs>;

  /**
   * `prisma.chatGPTHistory`: Exposes CRUD operations for the **ChatGPTHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatGPTHistories
    * const chatGPTHistories = await prisma.chatGPTHistory.findMany()
    * ```
    */
  get chatGPTHistory(): Prisma.ChatGPTHistoryDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Summary: 'Summary',
    Tag: 'Tag',
    SummaryTag: 'SummaryTag',
    Category: 'Category',
    SummaryCategory: 'SummaryCategory',
    ChatGPTHistory: 'ChatGPTHistory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "summary" | "tag" | "summaryTag" | "category" | "summaryCategory" | "chatGPTHistory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Summary: {
        payload: Prisma.$SummaryPayload<ExtArgs>
        fields: Prisma.SummaryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SummaryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SummaryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryPayload>
          }
          findFirst: {
            args: Prisma.SummaryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SummaryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryPayload>
          }
          findMany: {
            args: Prisma.SummaryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryPayload>[]
          }
          create: {
            args: Prisma.SummaryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryPayload>
          }
          createMany: {
            args: Prisma.SummaryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SummaryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryPayload>[]
          }
          delete: {
            args: Prisma.SummaryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryPayload>
          }
          update: {
            args: Prisma.SummaryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryPayload>
          }
          deleteMany: {
            args: Prisma.SummaryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SummaryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SummaryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryPayload>
          }
          aggregate: {
            args: Prisma.SummaryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSummary>
          }
          groupBy: {
            args: Prisma.SummaryGroupByArgs<ExtArgs>
            result: $Utils.Optional<SummaryGroupByOutputType>[]
          }
          count: {
            args: Prisma.SummaryCountArgs<ExtArgs>
            result: $Utils.Optional<SummaryCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      SummaryTag: {
        payload: Prisma.$SummaryTagPayload<ExtArgs>
        fields: Prisma.SummaryTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SummaryTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SummaryTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryTagPayload>
          }
          findFirst: {
            args: Prisma.SummaryTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SummaryTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryTagPayload>
          }
          findMany: {
            args: Prisma.SummaryTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryTagPayload>[]
          }
          create: {
            args: Prisma.SummaryTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryTagPayload>
          }
          createMany: {
            args: Prisma.SummaryTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SummaryTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryTagPayload>[]
          }
          delete: {
            args: Prisma.SummaryTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryTagPayload>
          }
          update: {
            args: Prisma.SummaryTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryTagPayload>
          }
          deleteMany: {
            args: Prisma.SummaryTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SummaryTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SummaryTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryTagPayload>
          }
          aggregate: {
            args: Prisma.SummaryTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSummaryTag>
          }
          groupBy: {
            args: Prisma.SummaryTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<SummaryTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.SummaryTagCountArgs<ExtArgs>
            result: $Utils.Optional<SummaryTagCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      SummaryCategory: {
        payload: Prisma.$SummaryCategoryPayload<ExtArgs>
        fields: Prisma.SummaryCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SummaryCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SummaryCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryCategoryPayload>
          }
          findFirst: {
            args: Prisma.SummaryCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SummaryCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryCategoryPayload>
          }
          findMany: {
            args: Prisma.SummaryCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryCategoryPayload>[]
          }
          create: {
            args: Prisma.SummaryCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryCategoryPayload>
          }
          createMany: {
            args: Prisma.SummaryCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SummaryCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryCategoryPayload>[]
          }
          delete: {
            args: Prisma.SummaryCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryCategoryPayload>
          }
          update: {
            args: Prisma.SummaryCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryCategoryPayload>
          }
          deleteMany: {
            args: Prisma.SummaryCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SummaryCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SummaryCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryCategoryPayload>
          }
          aggregate: {
            args: Prisma.SummaryCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSummaryCategory>
          }
          groupBy: {
            args: Prisma.SummaryCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<SummaryCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.SummaryCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<SummaryCategoryCountAggregateOutputType> | number
          }
        }
      }
      ChatGPTHistory: {
        payload: Prisma.$ChatGPTHistoryPayload<ExtArgs>
        fields: Prisma.ChatGPTHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatGPTHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGPTHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatGPTHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGPTHistoryPayload>
          }
          findFirst: {
            args: Prisma.ChatGPTHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGPTHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatGPTHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGPTHistoryPayload>
          }
          findMany: {
            args: Prisma.ChatGPTHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGPTHistoryPayload>[]
          }
          create: {
            args: Prisma.ChatGPTHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGPTHistoryPayload>
          }
          createMany: {
            args: Prisma.ChatGPTHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatGPTHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGPTHistoryPayload>[]
          }
          delete: {
            args: Prisma.ChatGPTHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGPTHistoryPayload>
          }
          update: {
            args: Prisma.ChatGPTHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGPTHistoryPayload>
          }
          deleteMany: {
            args: Prisma.ChatGPTHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatGPTHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChatGPTHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGPTHistoryPayload>
          }
          aggregate: {
            args: Prisma.ChatGPTHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatGPTHistory>
          }
          groupBy: {
            args: Prisma.ChatGPTHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatGPTHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatGPTHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<ChatGPTHistoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    summaries: number
    chatHistories: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    summaries?: boolean | UserCountOutputTypeCountSummariesArgs
    chatHistories?: boolean | UserCountOutputTypeCountChatHistoriesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSummariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SummaryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatGPTHistoryWhereInput
  }


  /**
   * Count Type SummaryCountOutputType
   */

  export type SummaryCountOutputType = {
    tags: number
    categories: number
  }

  export type SummaryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | SummaryCountOutputTypeCountTagsArgs
    categories?: boolean | SummaryCountOutputTypeCountCategoriesArgs
  }

  // Custom InputTypes
  /**
   * SummaryCountOutputType without action
   */
  export type SummaryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SummaryCountOutputType
     */
    select?: SummaryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SummaryCountOutputType without action
   */
  export type SummaryCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SummaryTagWhereInput
  }

  /**
   * SummaryCountOutputType without action
   */
  export type SummaryCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SummaryCategoryWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    summaryTags: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    summaryTags?: boolean | TagCountOutputTypeCountSummaryTagsArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountSummaryTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SummaryTagWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    summaryCategories: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    summaryCategories?: boolean | CategoryCountOutputTypeCountSummaryCategoriesArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountSummaryCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SummaryCategoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
    lastLogin: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
    lastLogin: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    passwordHash: number
    createdAt: number
    updatedAt: number
    lastLogin: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
    lastLogin?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
    lastLogin?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
    lastLogin?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    email: string
    passwordHash: string
    createdAt: Date
    updatedAt: Date
    lastLogin: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLogin?: boolean
    summaries?: boolean | User$summariesArgs<ExtArgs>
    chatHistories?: boolean | User$chatHistoriesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLogin?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLogin?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    summaries?: boolean | User$summariesArgs<ExtArgs>
    chatHistories?: boolean | User$chatHistoriesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      summaries: Prisma.$SummaryPayload<ExtArgs>[]
      chatHistories: Prisma.$ChatGPTHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      passwordHash: string
      createdAt: Date
      updatedAt: Date
      lastLogin: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    summaries<T extends User$summariesArgs<ExtArgs> = {}>(args?: Subset<T, User$summariesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "findMany"> | Null>
    chatHistories<T extends User$chatHistoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$chatHistoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatGPTHistoryPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly lastLogin: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.summaries
   */
  export type User$summariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
    where?: SummaryWhereInput
    orderBy?: SummaryOrderByWithRelationInput | SummaryOrderByWithRelationInput[]
    cursor?: SummaryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SummaryScalarFieldEnum | SummaryScalarFieldEnum[]
  }

  /**
   * User.chatHistories
   */
  export type User$chatHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGPTHistory
     */
    select?: ChatGPTHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGPTHistoryInclude<ExtArgs> | null
    where?: ChatGPTHistoryWhereInput
    orderBy?: ChatGPTHistoryOrderByWithRelationInput | ChatGPTHistoryOrderByWithRelationInput[]
    cursor?: ChatGPTHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatGPTHistoryScalarFieldEnum | ChatGPTHistoryScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Summary
   */

  export type AggregateSummary = {
    _count: SummaryCountAggregateOutputType | null
    _min: SummaryMinAggregateOutputType | null
    _max: SummaryMaxAggregateOutputType | null
  }

  export type SummaryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    content: string | null
    summary: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SummaryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    content: string | null
    summary: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SummaryCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    content: number
    summary: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SummaryMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    content?: true
    summary?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SummaryMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    content?: true
    summary?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SummaryCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    content?: true
    summary?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SummaryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Summary to aggregate.
     */
    where?: SummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Summaries to fetch.
     */
    orderBy?: SummaryOrderByWithRelationInput | SummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Summaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Summaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Summaries
    **/
    _count?: true | SummaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SummaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SummaryMaxAggregateInputType
  }

  export type GetSummaryAggregateType<T extends SummaryAggregateArgs> = {
        [P in keyof T & keyof AggregateSummary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSummary[P]>
      : GetScalarType<T[P], AggregateSummary[P]>
  }




  export type SummaryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SummaryWhereInput
    orderBy?: SummaryOrderByWithAggregationInput | SummaryOrderByWithAggregationInput[]
    by: SummaryScalarFieldEnum[] | SummaryScalarFieldEnum
    having?: SummaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SummaryCountAggregateInputType | true
    _min?: SummaryMinAggregateInputType
    _max?: SummaryMaxAggregateInputType
  }

  export type SummaryGroupByOutputType = {
    id: string
    userId: string
    title: string
    content: string
    summary: string
    createdAt: Date
    updatedAt: Date
    _count: SummaryCountAggregateOutputType | null
    _min: SummaryMinAggregateOutputType | null
    _max: SummaryMaxAggregateOutputType | null
  }

  type GetSummaryGroupByPayload<T extends SummaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SummaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SummaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SummaryGroupByOutputType[P]>
            : GetScalarType<T[P], SummaryGroupByOutputType[P]>
        }
      >
    >


  export type SummarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    content?: boolean
    summary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tags?: boolean | Summary$tagsArgs<ExtArgs>
    categories?: boolean | Summary$categoriesArgs<ExtArgs>
    _count?: boolean | SummaryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["summary"]>

  export type SummarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    content?: boolean
    summary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["summary"]>

  export type SummarySelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    content?: boolean
    summary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SummaryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tags?: boolean | Summary$tagsArgs<ExtArgs>
    categories?: boolean | Summary$categoriesArgs<ExtArgs>
    _count?: boolean | SummaryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SummaryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SummaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Summary"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      tags: Prisma.$SummaryTagPayload<ExtArgs>[]
      categories: Prisma.$SummaryCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      content: string
      summary: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["summary"]>
    composites: {}
  }

  type SummaryGetPayload<S extends boolean | null | undefined | SummaryDefaultArgs> = $Result.GetResult<Prisma.$SummaryPayload, S>

  type SummaryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SummaryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SummaryCountAggregateInputType | true
    }

  export interface SummaryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Summary'], meta: { name: 'Summary' } }
    /**
     * Find zero or one Summary that matches the filter.
     * @param {SummaryFindUniqueArgs} args - Arguments to find a Summary
     * @example
     * // Get one Summary
     * const summary = await prisma.summary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SummaryFindUniqueArgs>(args: SelectSubset<T, SummaryFindUniqueArgs<ExtArgs>>): Prisma__SummaryClient<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Summary that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SummaryFindUniqueOrThrowArgs} args - Arguments to find a Summary
     * @example
     * // Get one Summary
     * const summary = await prisma.summary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SummaryFindUniqueOrThrowArgs>(args: SelectSubset<T, SummaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SummaryClient<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Summary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryFindFirstArgs} args - Arguments to find a Summary
     * @example
     * // Get one Summary
     * const summary = await prisma.summary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SummaryFindFirstArgs>(args?: SelectSubset<T, SummaryFindFirstArgs<ExtArgs>>): Prisma__SummaryClient<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Summary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryFindFirstOrThrowArgs} args - Arguments to find a Summary
     * @example
     * // Get one Summary
     * const summary = await prisma.summary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SummaryFindFirstOrThrowArgs>(args?: SelectSubset<T, SummaryFindFirstOrThrowArgs<ExtArgs>>): Prisma__SummaryClient<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Summaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Summaries
     * const summaries = await prisma.summary.findMany()
     * 
     * // Get first 10 Summaries
     * const summaries = await prisma.summary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const summaryWithIdOnly = await prisma.summary.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SummaryFindManyArgs>(args?: SelectSubset<T, SummaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Summary.
     * @param {SummaryCreateArgs} args - Arguments to create a Summary.
     * @example
     * // Create one Summary
     * const Summary = await prisma.summary.create({
     *   data: {
     *     // ... data to create a Summary
     *   }
     * })
     * 
     */
    create<T extends SummaryCreateArgs>(args: SelectSubset<T, SummaryCreateArgs<ExtArgs>>): Prisma__SummaryClient<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Summaries.
     * @param {SummaryCreateManyArgs} args - Arguments to create many Summaries.
     * @example
     * // Create many Summaries
     * const summary = await prisma.summary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SummaryCreateManyArgs>(args?: SelectSubset<T, SummaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Summaries and returns the data saved in the database.
     * @param {SummaryCreateManyAndReturnArgs} args - Arguments to create many Summaries.
     * @example
     * // Create many Summaries
     * const summary = await prisma.summary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Summaries and only return the `id`
     * const summaryWithIdOnly = await prisma.summary.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SummaryCreateManyAndReturnArgs>(args?: SelectSubset<T, SummaryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Summary.
     * @param {SummaryDeleteArgs} args - Arguments to delete one Summary.
     * @example
     * // Delete one Summary
     * const Summary = await prisma.summary.delete({
     *   where: {
     *     // ... filter to delete one Summary
     *   }
     * })
     * 
     */
    delete<T extends SummaryDeleteArgs>(args: SelectSubset<T, SummaryDeleteArgs<ExtArgs>>): Prisma__SummaryClient<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Summary.
     * @param {SummaryUpdateArgs} args - Arguments to update one Summary.
     * @example
     * // Update one Summary
     * const summary = await prisma.summary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SummaryUpdateArgs>(args: SelectSubset<T, SummaryUpdateArgs<ExtArgs>>): Prisma__SummaryClient<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Summaries.
     * @param {SummaryDeleteManyArgs} args - Arguments to filter Summaries to delete.
     * @example
     * // Delete a few Summaries
     * const { count } = await prisma.summary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SummaryDeleteManyArgs>(args?: SelectSubset<T, SummaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Summaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Summaries
     * const summary = await prisma.summary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SummaryUpdateManyArgs>(args: SelectSubset<T, SummaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Summary.
     * @param {SummaryUpsertArgs} args - Arguments to update or create a Summary.
     * @example
     * // Update or create a Summary
     * const summary = await prisma.summary.upsert({
     *   create: {
     *     // ... data to create a Summary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Summary we want to update
     *   }
     * })
     */
    upsert<T extends SummaryUpsertArgs>(args: SelectSubset<T, SummaryUpsertArgs<ExtArgs>>): Prisma__SummaryClient<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Summaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryCountArgs} args - Arguments to filter Summaries to count.
     * @example
     * // Count the number of Summaries
     * const count = await prisma.summary.count({
     *   where: {
     *     // ... the filter for the Summaries we want to count
     *   }
     * })
    **/
    count<T extends SummaryCountArgs>(
      args?: Subset<T, SummaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SummaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Summary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SummaryAggregateArgs>(args: Subset<T, SummaryAggregateArgs>): Prisma.PrismaPromise<GetSummaryAggregateType<T>>

    /**
     * Group by Summary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SummaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SummaryGroupByArgs['orderBy'] }
        : { orderBy?: SummaryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SummaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSummaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Summary model
   */
  readonly fields: SummaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Summary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SummaryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    tags<T extends Summary$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Summary$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SummaryTagPayload<ExtArgs>, T, "findMany"> | Null>
    categories<T extends Summary$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Summary$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SummaryCategoryPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Summary model
   */ 
  interface SummaryFieldRefs {
    readonly id: FieldRef<"Summary", 'String'>
    readonly userId: FieldRef<"Summary", 'String'>
    readonly title: FieldRef<"Summary", 'String'>
    readonly content: FieldRef<"Summary", 'String'>
    readonly summary: FieldRef<"Summary", 'String'>
    readonly createdAt: FieldRef<"Summary", 'DateTime'>
    readonly updatedAt: FieldRef<"Summary", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Summary findUnique
   */
  export type SummaryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
    /**
     * Filter, which Summary to fetch.
     */
    where: SummaryWhereUniqueInput
  }

  /**
   * Summary findUniqueOrThrow
   */
  export type SummaryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
    /**
     * Filter, which Summary to fetch.
     */
    where: SummaryWhereUniqueInput
  }

  /**
   * Summary findFirst
   */
  export type SummaryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
    /**
     * Filter, which Summary to fetch.
     */
    where?: SummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Summaries to fetch.
     */
    orderBy?: SummaryOrderByWithRelationInput | SummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Summaries.
     */
    cursor?: SummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Summaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Summaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Summaries.
     */
    distinct?: SummaryScalarFieldEnum | SummaryScalarFieldEnum[]
  }

  /**
   * Summary findFirstOrThrow
   */
  export type SummaryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
    /**
     * Filter, which Summary to fetch.
     */
    where?: SummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Summaries to fetch.
     */
    orderBy?: SummaryOrderByWithRelationInput | SummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Summaries.
     */
    cursor?: SummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Summaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Summaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Summaries.
     */
    distinct?: SummaryScalarFieldEnum | SummaryScalarFieldEnum[]
  }

  /**
   * Summary findMany
   */
  export type SummaryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
    /**
     * Filter, which Summaries to fetch.
     */
    where?: SummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Summaries to fetch.
     */
    orderBy?: SummaryOrderByWithRelationInput | SummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Summaries.
     */
    cursor?: SummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Summaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Summaries.
     */
    skip?: number
    distinct?: SummaryScalarFieldEnum | SummaryScalarFieldEnum[]
  }

  /**
   * Summary create
   */
  export type SummaryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
    /**
     * The data needed to create a Summary.
     */
    data: XOR<SummaryCreateInput, SummaryUncheckedCreateInput>
  }

  /**
   * Summary createMany
   */
  export type SummaryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Summaries.
     */
    data: SummaryCreateManyInput | SummaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Summary createManyAndReturn
   */
  export type SummaryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Summaries.
     */
    data: SummaryCreateManyInput | SummaryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Summary update
   */
  export type SummaryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
    /**
     * The data needed to update a Summary.
     */
    data: XOR<SummaryUpdateInput, SummaryUncheckedUpdateInput>
    /**
     * Choose, which Summary to update.
     */
    where: SummaryWhereUniqueInput
  }

  /**
   * Summary updateMany
   */
  export type SummaryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Summaries.
     */
    data: XOR<SummaryUpdateManyMutationInput, SummaryUncheckedUpdateManyInput>
    /**
     * Filter which Summaries to update
     */
    where?: SummaryWhereInput
  }

  /**
   * Summary upsert
   */
  export type SummaryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
    /**
     * The filter to search for the Summary to update in case it exists.
     */
    where: SummaryWhereUniqueInput
    /**
     * In case the Summary found by the `where` argument doesn't exist, create a new Summary with this data.
     */
    create: XOR<SummaryCreateInput, SummaryUncheckedCreateInput>
    /**
     * In case the Summary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SummaryUpdateInput, SummaryUncheckedUpdateInput>
  }

  /**
   * Summary delete
   */
  export type SummaryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
    /**
     * Filter which Summary to delete.
     */
    where: SummaryWhereUniqueInput
  }

  /**
   * Summary deleteMany
   */
  export type SummaryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Summaries to delete
     */
    where?: SummaryWhereInput
  }

  /**
   * Summary.tags
   */
  export type Summary$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SummaryTag
     */
    select?: SummaryTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryTagInclude<ExtArgs> | null
    where?: SummaryTagWhereInput
    orderBy?: SummaryTagOrderByWithRelationInput | SummaryTagOrderByWithRelationInput[]
    cursor?: SummaryTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SummaryTagScalarFieldEnum | SummaryTagScalarFieldEnum[]
  }

  /**
   * Summary.categories
   */
  export type Summary$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SummaryCategory
     */
    select?: SummaryCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryCategoryInclude<ExtArgs> | null
    where?: SummaryCategoryWhereInput
    orderBy?: SummaryCategoryOrderByWithRelationInput | SummaryCategoryOrderByWithRelationInput[]
    cursor?: SummaryCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SummaryCategoryScalarFieldEnum | SummaryCategoryScalarFieldEnum[]
  }

  /**
   * Summary without action
   */
  export type SummaryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type TagMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    summaryTags?: boolean | Tag$summaryTagsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    summaryTags?: boolean | Tag$summaryTagsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      summaryTags: Prisma.$SummaryTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    summaryTags<T extends Tag$summaryTagsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$summaryTagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SummaryTagPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tag model
   */ 
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'String'>
    readonly name: FieldRef<"Tag", 'String'>
    readonly createdAt: FieldRef<"Tag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
  }

  /**
   * Tag.summaryTags
   */
  export type Tag$summaryTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SummaryTag
     */
    select?: SummaryTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryTagInclude<ExtArgs> | null
    where?: SummaryTagWhereInput
    orderBy?: SummaryTagOrderByWithRelationInput | SummaryTagOrderByWithRelationInput[]
    cursor?: SummaryTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SummaryTagScalarFieldEnum | SummaryTagScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model SummaryTag
   */

  export type AggregateSummaryTag = {
    _count: SummaryTagCountAggregateOutputType | null
    _min: SummaryTagMinAggregateOutputType | null
    _max: SummaryTagMaxAggregateOutputType | null
  }

  export type SummaryTagMinAggregateOutputType = {
    summaryId: string | null
    tagId: string | null
    createdAt: Date | null
  }

  export type SummaryTagMaxAggregateOutputType = {
    summaryId: string | null
    tagId: string | null
    createdAt: Date | null
  }

  export type SummaryTagCountAggregateOutputType = {
    summaryId: number
    tagId: number
    createdAt: number
    _all: number
  }


  export type SummaryTagMinAggregateInputType = {
    summaryId?: true
    tagId?: true
    createdAt?: true
  }

  export type SummaryTagMaxAggregateInputType = {
    summaryId?: true
    tagId?: true
    createdAt?: true
  }

  export type SummaryTagCountAggregateInputType = {
    summaryId?: true
    tagId?: true
    createdAt?: true
    _all?: true
  }

  export type SummaryTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SummaryTag to aggregate.
     */
    where?: SummaryTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SummaryTags to fetch.
     */
    orderBy?: SummaryTagOrderByWithRelationInput | SummaryTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SummaryTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SummaryTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SummaryTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SummaryTags
    **/
    _count?: true | SummaryTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SummaryTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SummaryTagMaxAggregateInputType
  }

  export type GetSummaryTagAggregateType<T extends SummaryTagAggregateArgs> = {
        [P in keyof T & keyof AggregateSummaryTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSummaryTag[P]>
      : GetScalarType<T[P], AggregateSummaryTag[P]>
  }




  export type SummaryTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SummaryTagWhereInput
    orderBy?: SummaryTagOrderByWithAggregationInput | SummaryTagOrderByWithAggregationInput[]
    by: SummaryTagScalarFieldEnum[] | SummaryTagScalarFieldEnum
    having?: SummaryTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SummaryTagCountAggregateInputType | true
    _min?: SummaryTagMinAggregateInputType
    _max?: SummaryTagMaxAggregateInputType
  }

  export type SummaryTagGroupByOutputType = {
    summaryId: string
    tagId: string
    createdAt: Date
    _count: SummaryTagCountAggregateOutputType | null
    _min: SummaryTagMinAggregateOutputType | null
    _max: SummaryTagMaxAggregateOutputType | null
  }

  type GetSummaryTagGroupByPayload<T extends SummaryTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SummaryTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SummaryTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SummaryTagGroupByOutputType[P]>
            : GetScalarType<T[P], SummaryTagGroupByOutputType[P]>
        }
      >
    >


  export type SummaryTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    summaryId?: boolean
    tagId?: boolean
    createdAt?: boolean
    summary?: boolean | SummaryDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["summaryTag"]>

  export type SummaryTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    summaryId?: boolean
    tagId?: boolean
    createdAt?: boolean
    summary?: boolean | SummaryDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["summaryTag"]>

  export type SummaryTagSelectScalar = {
    summaryId?: boolean
    tagId?: boolean
    createdAt?: boolean
  }

  export type SummaryTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    summary?: boolean | SummaryDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type SummaryTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    summary?: boolean | SummaryDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }

  export type $SummaryTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SummaryTag"
    objects: {
      summary: Prisma.$SummaryPayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      summaryId: string
      tagId: string
      createdAt: Date
    }, ExtArgs["result"]["summaryTag"]>
    composites: {}
  }

  type SummaryTagGetPayload<S extends boolean | null | undefined | SummaryTagDefaultArgs> = $Result.GetResult<Prisma.$SummaryTagPayload, S>

  type SummaryTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SummaryTagFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SummaryTagCountAggregateInputType | true
    }

  export interface SummaryTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SummaryTag'], meta: { name: 'SummaryTag' } }
    /**
     * Find zero or one SummaryTag that matches the filter.
     * @param {SummaryTagFindUniqueArgs} args - Arguments to find a SummaryTag
     * @example
     * // Get one SummaryTag
     * const summaryTag = await prisma.summaryTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SummaryTagFindUniqueArgs>(args: SelectSubset<T, SummaryTagFindUniqueArgs<ExtArgs>>): Prisma__SummaryTagClient<$Result.GetResult<Prisma.$SummaryTagPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SummaryTag that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SummaryTagFindUniqueOrThrowArgs} args - Arguments to find a SummaryTag
     * @example
     * // Get one SummaryTag
     * const summaryTag = await prisma.summaryTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SummaryTagFindUniqueOrThrowArgs>(args: SelectSubset<T, SummaryTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SummaryTagClient<$Result.GetResult<Prisma.$SummaryTagPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SummaryTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryTagFindFirstArgs} args - Arguments to find a SummaryTag
     * @example
     * // Get one SummaryTag
     * const summaryTag = await prisma.summaryTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SummaryTagFindFirstArgs>(args?: SelectSubset<T, SummaryTagFindFirstArgs<ExtArgs>>): Prisma__SummaryTagClient<$Result.GetResult<Prisma.$SummaryTagPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SummaryTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryTagFindFirstOrThrowArgs} args - Arguments to find a SummaryTag
     * @example
     * // Get one SummaryTag
     * const summaryTag = await prisma.summaryTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SummaryTagFindFirstOrThrowArgs>(args?: SelectSubset<T, SummaryTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__SummaryTagClient<$Result.GetResult<Prisma.$SummaryTagPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SummaryTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SummaryTags
     * const summaryTags = await prisma.summaryTag.findMany()
     * 
     * // Get first 10 SummaryTags
     * const summaryTags = await prisma.summaryTag.findMany({ take: 10 })
     * 
     * // Only select the `summaryId`
     * const summaryTagWithSummaryIdOnly = await prisma.summaryTag.findMany({ select: { summaryId: true } })
     * 
     */
    findMany<T extends SummaryTagFindManyArgs>(args?: SelectSubset<T, SummaryTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SummaryTagPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SummaryTag.
     * @param {SummaryTagCreateArgs} args - Arguments to create a SummaryTag.
     * @example
     * // Create one SummaryTag
     * const SummaryTag = await prisma.summaryTag.create({
     *   data: {
     *     // ... data to create a SummaryTag
     *   }
     * })
     * 
     */
    create<T extends SummaryTagCreateArgs>(args: SelectSubset<T, SummaryTagCreateArgs<ExtArgs>>): Prisma__SummaryTagClient<$Result.GetResult<Prisma.$SummaryTagPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SummaryTags.
     * @param {SummaryTagCreateManyArgs} args - Arguments to create many SummaryTags.
     * @example
     * // Create many SummaryTags
     * const summaryTag = await prisma.summaryTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SummaryTagCreateManyArgs>(args?: SelectSubset<T, SummaryTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SummaryTags and returns the data saved in the database.
     * @param {SummaryTagCreateManyAndReturnArgs} args - Arguments to create many SummaryTags.
     * @example
     * // Create many SummaryTags
     * const summaryTag = await prisma.summaryTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SummaryTags and only return the `summaryId`
     * const summaryTagWithSummaryIdOnly = await prisma.summaryTag.createManyAndReturn({ 
     *   select: { summaryId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SummaryTagCreateManyAndReturnArgs>(args?: SelectSubset<T, SummaryTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SummaryTagPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SummaryTag.
     * @param {SummaryTagDeleteArgs} args - Arguments to delete one SummaryTag.
     * @example
     * // Delete one SummaryTag
     * const SummaryTag = await prisma.summaryTag.delete({
     *   where: {
     *     // ... filter to delete one SummaryTag
     *   }
     * })
     * 
     */
    delete<T extends SummaryTagDeleteArgs>(args: SelectSubset<T, SummaryTagDeleteArgs<ExtArgs>>): Prisma__SummaryTagClient<$Result.GetResult<Prisma.$SummaryTagPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SummaryTag.
     * @param {SummaryTagUpdateArgs} args - Arguments to update one SummaryTag.
     * @example
     * // Update one SummaryTag
     * const summaryTag = await prisma.summaryTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SummaryTagUpdateArgs>(args: SelectSubset<T, SummaryTagUpdateArgs<ExtArgs>>): Prisma__SummaryTagClient<$Result.GetResult<Prisma.$SummaryTagPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SummaryTags.
     * @param {SummaryTagDeleteManyArgs} args - Arguments to filter SummaryTags to delete.
     * @example
     * // Delete a few SummaryTags
     * const { count } = await prisma.summaryTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SummaryTagDeleteManyArgs>(args?: SelectSubset<T, SummaryTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SummaryTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SummaryTags
     * const summaryTag = await prisma.summaryTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SummaryTagUpdateManyArgs>(args: SelectSubset<T, SummaryTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SummaryTag.
     * @param {SummaryTagUpsertArgs} args - Arguments to update or create a SummaryTag.
     * @example
     * // Update or create a SummaryTag
     * const summaryTag = await prisma.summaryTag.upsert({
     *   create: {
     *     // ... data to create a SummaryTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SummaryTag we want to update
     *   }
     * })
     */
    upsert<T extends SummaryTagUpsertArgs>(args: SelectSubset<T, SummaryTagUpsertArgs<ExtArgs>>): Prisma__SummaryTagClient<$Result.GetResult<Prisma.$SummaryTagPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SummaryTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryTagCountArgs} args - Arguments to filter SummaryTags to count.
     * @example
     * // Count the number of SummaryTags
     * const count = await prisma.summaryTag.count({
     *   where: {
     *     // ... the filter for the SummaryTags we want to count
     *   }
     * })
    **/
    count<T extends SummaryTagCountArgs>(
      args?: Subset<T, SummaryTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SummaryTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SummaryTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SummaryTagAggregateArgs>(args: Subset<T, SummaryTagAggregateArgs>): Prisma.PrismaPromise<GetSummaryTagAggregateType<T>>

    /**
     * Group by SummaryTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryTagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SummaryTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SummaryTagGroupByArgs['orderBy'] }
        : { orderBy?: SummaryTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SummaryTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSummaryTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SummaryTag model
   */
  readonly fields: SummaryTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SummaryTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SummaryTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    summary<T extends SummaryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SummaryDefaultArgs<ExtArgs>>): Prisma__SummaryClient<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SummaryTag model
   */ 
  interface SummaryTagFieldRefs {
    readonly summaryId: FieldRef<"SummaryTag", 'String'>
    readonly tagId: FieldRef<"SummaryTag", 'String'>
    readonly createdAt: FieldRef<"SummaryTag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SummaryTag findUnique
   */
  export type SummaryTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SummaryTag
     */
    select?: SummaryTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryTagInclude<ExtArgs> | null
    /**
     * Filter, which SummaryTag to fetch.
     */
    where: SummaryTagWhereUniqueInput
  }

  /**
   * SummaryTag findUniqueOrThrow
   */
  export type SummaryTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SummaryTag
     */
    select?: SummaryTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryTagInclude<ExtArgs> | null
    /**
     * Filter, which SummaryTag to fetch.
     */
    where: SummaryTagWhereUniqueInput
  }

  /**
   * SummaryTag findFirst
   */
  export type SummaryTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SummaryTag
     */
    select?: SummaryTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryTagInclude<ExtArgs> | null
    /**
     * Filter, which SummaryTag to fetch.
     */
    where?: SummaryTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SummaryTags to fetch.
     */
    orderBy?: SummaryTagOrderByWithRelationInput | SummaryTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SummaryTags.
     */
    cursor?: SummaryTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SummaryTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SummaryTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SummaryTags.
     */
    distinct?: SummaryTagScalarFieldEnum | SummaryTagScalarFieldEnum[]
  }

  /**
   * SummaryTag findFirstOrThrow
   */
  export type SummaryTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SummaryTag
     */
    select?: SummaryTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryTagInclude<ExtArgs> | null
    /**
     * Filter, which SummaryTag to fetch.
     */
    where?: SummaryTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SummaryTags to fetch.
     */
    orderBy?: SummaryTagOrderByWithRelationInput | SummaryTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SummaryTags.
     */
    cursor?: SummaryTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SummaryTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SummaryTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SummaryTags.
     */
    distinct?: SummaryTagScalarFieldEnum | SummaryTagScalarFieldEnum[]
  }

  /**
   * SummaryTag findMany
   */
  export type SummaryTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SummaryTag
     */
    select?: SummaryTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryTagInclude<ExtArgs> | null
    /**
     * Filter, which SummaryTags to fetch.
     */
    where?: SummaryTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SummaryTags to fetch.
     */
    orderBy?: SummaryTagOrderByWithRelationInput | SummaryTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SummaryTags.
     */
    cursor?: SummaryTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SummaryTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SummaryTags.
     */
    skip?: number
    distinct?: SummaryTagScalarFieldEnum | SummaryTagScalarFieldEnum[]
  }

  /**
   * SummaryTag create
   */
  export type SummaryTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SummaryTag
     */
    select?: SummaryTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryTagInclude<ExtArgs> | null
    /**
     * The data needed to create a SummaryTag.
     */
    data: XOR<SummaryTagCreateInput, SummaryTagUncheckedCreateInput>
  }

  /**
   * SummaryTag createMany
   */
  export type SummaryTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SummaryTags.
     */
    data: SummaryTagCreateManyInput | SummaryTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SummaryTag createManyAndReturn
   */
  export type SummaryTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SummaryTag
     */
    select?: SummaryTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SummaryTags.
     */
    data: SummaryTagCreateManyInput | SummaryTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SummaryTag update
   */
  export type SummaryTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SummaryTag
     */
    select?: SummaryTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryTagInclude<ExtArgs> | null
    /**
     * The data needed to update a SummaryTag.
     */
    data: XOR<SummaryTagUpdateInput, SummaryTagUncheckedUpdateInput>
    /**
     * Choose, which SummaryTag to update.
     */
    where: SummaryTagWhereUniqueInput
  }

  /**
   * SummaryTag updateMany
   */
  export type SummaryTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SummaryTags.
     */
    data: XOR<SummaryTagUpdateManyMutationInput, SummaryTagUncheckedUpdateManyInput>
    /**
     * Filter which SummaryTags to update
     */
    where?: SummaryTagWhereInput
  }

  /**
   * SummaryTag upsert
   */
  export type SummaryTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SummaryTag
     */
    select?: SummaryTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryTagInclude<ExtArgs> | null
    /**
     * The filter to search for the SummaryTag to update in case it exists.
     */
    where: SummaryTagWhereUniqueInput
    /**
     * In case the SummaryTag found by the `where` argument doesn't exist, create a new SummaryTag with this data.
     */
    create: XOR<SummaryTagCreateInput, SummaryTagUncheckedCreateInput>
    /**
     * In case the SummaryTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SummaryTagUpdateInput, SummaryTagUncheckedUpdateInput>
  }

  /**
   * SummaryTag delete
   */
  export type SummaryTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SummaryTag
     */
    select?: SummaryTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryTagInclude<ExtArgs> | null
    /**
     * Filter which SummaryTag to delete.
     */
    where: SummaryTagWhereUniqueInput
  }

  /**
   * SummaryTag deleteMany
   */
  export type SummaryTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SummaryTags to delete
     */
    where?: SummaryTagWhereInput
  }

  /**
   * SummaryTag without action
   */
  export type SummaryTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SummaryTag
     */
    select?: SummaryTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryTagInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    summaryCategories?: boolean | Category$summaryCategoriesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    summaryCategories?: boolean | Category$summaryCategoriesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      summaryCategories: Prisma.$SummaryCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    summaryCategories<T extends Category$summaryCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, Category$summaryCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SummaryCategoryPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }

  /**
   * Category.summaryCategories
   */
  export type Category$summaryCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SummaryCategory
     */
    select?: SummaryCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryCategoryInclude<ExtArgs> | null
    where?: SummaryCategoryWhereInput
    orderBy?: SummaryCategoryOrderByWithRelationInput | SummaryCategoryOrderByWithRelationInput[]
    cursor?: SummaryCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SummaryCategoryScalarFieldEnum | SummaryCategoryScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model SummaryCategory
   */

  export type AggregateSummaryCategory = {
    _count: SummaryCategoryCountAggregateOutputType | null
    _min: SummaryCategoryMinAggregateOutputType | null
    _max: SummaryCategoryMaxAggregateOutputType | null
  }

  export type SummaryCategoryMinAggregateOutputType = {
    summaryId: string | null
    categoryId: string | null
    createdAt: Date | null
  }

  export type SummaryCategoryMaxAggregateOutputType = {
    summaryId: string | null
    categoryId: string | null
    createdAt: Date | null
  }

  export type SummaryCategoryCountAggregateOutputType = {
    summaryId: number
    categoryId: number
    createdAt: number
    _all: number
  }


  export type SummaryCategoryMinAggregateInputType = {
    summaryId?: true
    categoryId?: true
    createdAt?: true
  }

  export type SummaryCategoryMaxAggregateInputType = {
    summaryId?: true
    categoryId?: true
    createdAt?: true
  }

  export type SummaryCategoryCountAggregateInputType = {
    summaryId?: true
    categoryId?: true
    createdAt?: true
    _all?: true
  }

  export type SummaryCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SummaryCategory to aggregate.
     */
    where?: SummaryCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SummaryCategories to fetch.
     */
    orderBy?: SummaryCategoryOrderByWithRelationInput | SummaryCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SummaryCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SummaryCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SummaryCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SummaryCategories
    **/
    _count?: true | SummaryCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SummaryCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SummaryCategoryMaxAggregateInputType
  }

  export type GetSummaryCategoryAggregateType<T extends SummaryCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateSummaryCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSummaryCategory[P]>
      : GetScalarType<T[P], AggregateSummaryCategory[P]>
  }




  export type SummaryCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SummaryCategoryWhereInput
    orderBy?: SummaryCategoryOrderByWithAggregationInput | SummaryCategoryOrderByWithAggregationInput[]
    by: SummaryCategoryScalarFieldEnum[] | SummaryCategoryScalarFieldEnum
    having?: SummaryCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SummaryCategoryCountAggregateInputType | true
    _min?: SummaryCategoryMinAggregateInputType
    _max?: SummaryCategoryMaxAggregateInputType
  }

  export type SummaryCategoryGroupByOutputType = {
    summaryId: string
    categoryId: string
    createdAt: Date
    _count: SummaryCategoryCountAggregateOutputType | null
    _min: SummaryCategoryMinAggregateOutputType | null
    _max: SummaryCategoryMaxAggregateOutputType | null
  }

  type GetSummaryCategoryGroupByPayload<T extends SummaryCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SummaryCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SummaryCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SummaryCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], SummaryCategoryGroupByOutputType[P]>
        }
      >
    >


  export type SummaryCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    summaryId?: boolean
    categoryId?: boolean
    createdAt?: boolean
    summary?: boolean | SummaryDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["summaryCategory"]>

  export type SummaryCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    summaryId?: boolean
    categoryId?: boolean
    createdAt?: boolean
    summary?: boolean | SummaryDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["summaryCategory"]>

  export type SummaryCategorySelectScalar = {
    summaryId?: boolean
    categoryId?: boolean
    createdAt?: boolean
  }

  export type SummaryCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    summary?: boolean | SummaryDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type SummaryCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    summary?: boolean | SummaryDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $SummaryCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SummaryCategory"
    objects: {
      summary: Prisma.$SummaryPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      summaryId: string
      categoryId: string
      createdAt: Date
    }, ExtArgs["result"]["summaryCategory"]>
    composites: {}
  }

  type SummaryCategoryGetPayload<S extends boolean | null | undefined | SummaryCategoryDefaultArgs> = $Result.GetResult<Prisma.$SummaryCategoryPayload, S>

  type SummaryCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SummaryCategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SummaryCategoryCountAggregateInputType | true
    }

  export interface SummaryCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SummaryCategory'], meta: { name: 'SummaryCategory' } }
    /**
     * Find zero or one SummaryCategory that matches the filter.
     * @param {SummaryCategoryFindUniqueArgs} args - Arguments to find a SummaryCategory
     * @example
     * // Get one SummaryCategory
     * const summaryCategory = await prisma.summaryCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SummaryCategoryFindUniqueArgs>(args: SelectSubset<T, SummaryCategoryFindUniqueArgs<ExtArgs>>): Prisma__SummaryCategoryClient<$Result.GetResult<Prisma.$SummaryCategoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SummaryCategory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SummaryCategoryFindUniqueOrThrowArgs} args - Arguments to find a SummaryCategory
     * @example
     * // Get one SummaryCategory
     * const summaryCategory = await prisma.summaryCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SummaryCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, SummaryCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SummaryCategoryClient<$Result.GetResult<Prisma.$SummaryCategoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SummaryCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryCategoryFindFirstArgs} args - Arguments to find a SummaryCategory
     * @example
     * // Get one SummaryCategory
     * const summaryCategory = await prisma.summaryCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SummaryCategoryFindFirstArgs>(args?: SelectSubset<T, SummaryCategoryFindFirstArgs<ExtArgs>>): Prisma__SummaryCategoryClient<$Result.GetResult<Prisma.$SummaryCategoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SummaryCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryCategoryFindFirstOrThrowArgs} args - Arguments to find a SummaryCategory
     * @example
     * // Get one SummaryCategory
     * const summaryCategory = await prisma.summaryCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SummaryCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, SummaryCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__SummaryCategoryClient<$Result.GetResult<Prisma.$SummaryCategoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SummaryCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SummaryCategories
     * const summaryCategories = await prisma.summaryCategory.findMany()
     * 
     * // Get first 10 SummaryCategories
     * const summaryCategories = await prisma.summaryCategory.findMany({ take: 10 })
     * 
     * // Only select the `summaryId`
     * const summaryCategoryWithSummaryIdOnly = await prisma.summaryCategory.findMany({ select: { summaryId: true } })
     * 
     */
    findMany<T extends SummaryCategoryFindManyArgs>(args?: SelectSubset<T, SummaryCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SummaryCategoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SummaryCategory.
     * @param {SummaryCategoryCreateArgs} args - Arguments to create a SummaryCategory.
     * @example
     * // Create one SummaryCategory
     * const SummaryCategory = await prisma.summaryCategory.create({
     *   data: {
     *     // ... data to create a SummaryCategory
     *   }
     * })
     * 
     */
    create<T extends SummaryCategoryCreateArgs>(args: SelectSubset<T, SummaryCategoryCreateArgs<ExtArgs>>): Prisma__SummaryCategoryClient<$Result.GetResult<Prisma.$SummaryCategoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SummaryCategories.
     * @param {SummaryCategoryCreateManyArgs} args - Arguments to create many SummaryCategories.
     * @example
     * // Create many SummaryCategories
     * const summaryCategory = await prisma.summaryCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SummaryCategoryCreateManyArgs>(args?: SelectSubset<T, SummaryCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SummaryCategories and returns the data saved in the database.
     * @param {SummaryCategoryCreateManyAndReturnArgs} args - Arguments to create many SummaryCategories.
     * @example
     * // Create many SummaryCategories
     * const summaryCategory = await prisma.summaryCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SummaryCategories and only return the `summaryId`
     * const summaryCategoryWithSummaryIdOnly = await prisma.summaryCategory.createManyAndReturn({ 
     *   select: { summaryId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SummaryCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, SummaryCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SummaryCategoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SummaryCategory.
     * @param {SummaryCategoryDeleteArgs} args - Arguments to delete one SummaryCategory.
     * @example
     * // Delete one SummaryCategory
     * const SummaryCategory = await prisma.summaryCategory.delete({
     *   where: {
     *     // ... filter to delete one SummaryCategory
     *   }
     * })
     * 
     */
    delete<T extends SummaryCategoryDeleteArgs>(args: SelectSubset<T, SummaryCategoryDeleteArgs<ExtArgs>>): Prisma__SummaryCategoryClient<$Result.GetResult<Prisma.$SummaryCategoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SummaryCategory.
     * @param {SummaryCategoryUpdateArgs} args - Arguments to update one SummaryCategory.
     * @example
     * // Update one SummaryCategory
     * const summaryCategory = await prisma.summaryCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SummaryCategoryUpdateArgs>(args: SelectSubset<T, SummaryCategoryUpdateArgs<ExtArgs>>): Prisma__SummaryCategoryClient<$Result.GetResult<Prisma.$SummaryCategoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SummaryCategories.
     * @param {SummaryCategoryDeleteManyArgs} args - Arguments to filter SummaryCategories to delete.
     * @example
     * // Delete a few SummaryCategories
     * const { count } = await prisma.summaryCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SummaryCategoryDeleteManyArgs>(args?: SelectSubset<T, SummaryCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SummaryCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SummaryCategories
     * const summaryCategory = await prisma.summaryCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SummaryCategoryUpdateManyArgs>(args: SelectSubset<T, SummaryCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SummaryCategory.
     * @param {SummaryCategoryUpsertArgs} args - Arguments to update or create a SummaryCategory.
     * @example
     * // Update or create a SummaryCategory
     * const summaryCategory = await prisma.summaryCategory.upsert({
     *   create: {
     *     // ... data to create a SummaryCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SummaryCategory we want to update
     *   }
     * })
     */
    upsert<T extends SummaryCategoryUpsertArgs>(args: SelectSubset<T, SummaryCategoryUpsertArgs<ExtArgs>>): Prisma__SummaryCategoryClient<$Result.GetResult<Prisma.$SummaryCategoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SummaryCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryCategoryCountArgs} args - Arguments to filter SummaryCategories to count.
     * @example
     * // Count the number of SummaryCategories
     * const count = await prisma.summaryCategory.count({
     *   where: {
     *     // ... the filter for the SummaryCategories we want to count
     *   }
     * })
    **/
    count<T extends SummaryCategoryCountArgs>(
      args?: Subset<T, SummaryCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SummaryCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SummaryCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SummaryCategoryAggregateArgs>(args: Subset<T, SummaryCategoryAggregateArgs>): Prisma.PrismaPromise<GetSummaryCategoryAggregateType<T>>

    /**
     * Group by SummaryCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SummaryCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SummaryCategoryGroupByArgs['orderBy'] }
        : { orderBy?: SummaryCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SummaryCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSummaryCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SummaryCategory model
   */
  readonly fields: SummaryCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SummaryCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SummaryCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    summary<T extends SummaryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SummaryDefaultArgs<ExtArgs>>): Prisma__SummaryClient<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SummaryCategory model
   */ 
  interface SummaryCategoryFieldRefs {
    readonly summaryId: FieldRef<"SummaryCategory", 'String'>
    readonly categoryId: FieldRef<"SummaryCategory", 'String'>
    readonly createdAt: FieldRef<"SummaryCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SummaryCategory findUnique
   */
  export type SummaryCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SummaryCategory
     */
    select?: SummaryCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SummaryCategory to fetch.
     */
    where: SummaryCategoryWhereUniqueInput
  }

  /**
   * SummaryCategory findUniqueOrThrow
   */
  export type SummaryCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SummaryCategory
     */
    select?: SummaryCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SummaryCategory to fetch.
     */
    where: SummaryCategoryWhereUniqueInput
  }

  /**
   * SummaryCategory findFirst
   */
  export type SummaryCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SummaryCategory
     */
    select?: SummaryCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SummaryCategory to fetch.
     */
    where?: SummaryCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SummaryCategories to fetch.
     */
    orderBy?: SummaryCategoryOrderByWithRelationInput | SummaryCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SummaryCategories.
     */
    cursor?: SummaryCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SummaryCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SummaryCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SummaryCategories.
     */
    distinct?: SummaryCategoryScalarFieldEnum | SummaryCategoryScalarFieldEnum[]
  }

  /**
   * SummaryCategory findFirstOrThrow
   */
  export type SummaryCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SummaryCategory
     */
    select?: SummaryCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SummaryCategory to fetch.
     */
    where?: SummaryCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SummaryCategories to fetch.
     */
    orderBy?: SummaryCategoryOrderByWithRelationInput | SummaryCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SummaryCategories.
     */
    cursor?: SummaryCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SummaryCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SummaryCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SummaryCategories.
     */
    distinct?: SummaryCategoryScalarFieldEnum | SummaryCategoryScalarFieldEnum[]
  }

  /**
   * SummaryCategory findMany
   */
  export type SummaryCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SummaryCategory
     */
    select?: SummaryCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SummaryCategories to fetch.
     */
    where?: SummaryCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SummaryCategories to fetch.
     */
    orderBy?: SummaryCategoryOrderByWithRelationInput | SummaryCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SummaryCategories.
     */
    cursor?: SummaryCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SummaryCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SummaryCategories.
     */
    skip?: number
    distinct?: SummaryCategoryScalarFieldEnum | SummaryCategoryScalarFieldEnum[]
  }

  /**
   * SummaryCategory create
   */
  export type SummaryCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SummaryCategory
     */
    select?: SummaryCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a SummaryCategory.
     */
    data: XOR<SummaryCategoryCreateInput, SummaryCategoryUncheckedCreateInput>
  }

  /**
   * SummaryCategory createMany
   */
  export type SummaryCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SummaryCategories.
     */
    data: SummaryCategoryCreateManyInput | SummaryCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SummaryCategory createManyAndReturn
   */
  export type SummaryCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SummaryCategory
     */
    select?: SummaryCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SummaryCategories.
     */
    data: SummaryCategoryCreateManyInput | SummaryCategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryCategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SummaryCategory update
   */
  export type SummaryCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SummaryCategory
     */
    select?: SummaryCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a SummaryCategory.
     */
    data: XOR<SummaryCategoryUpdateInput, SummaryCategoryUncheckedUpdateInput>
    /**
     * Choose, which SummaryCategory to update.
     */
    where: SummaryCategoryWhereUniqueInput
  }

  /**
   * SummaryCategory updateMany
   */
  export type SummaryCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SummaryCategories.
     */
    data: XOR<SummaryCategoryUpdateManyMutationInput, SummaryCategoryUncheckedUpdateManyInput>
    /**
     * Filter which SummaryCategories to update
     */
    where?: SummaryCategoryWhereInput
  }

  /**
   * SummaryCategory upsert
   */
  export type SummaryCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SummaryCategory
     */
    select?: SummaryCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the SummaryCategory to update in case it exists.
     */
    where: SummaryCategoryWhereUniqueInput
    /**
     * In case the SummaryCategory found by the `where` argument doesn't exist, create a new SummaryCategory with this data.
     */
    create: XOR<SummaryCategoryCreateInput, SummaryCategoryUncheckedCreateInput>
    /**
     * In case the SummaryCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SummaryCategoryUpdateInput, SummaryCategoryUncheckedUpdateInput>
  }

  /**
   * SummaryCategory delete
   */
  export type SummaryCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SummaryCategory
     */
    select?: SummaryCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryCategoryInclude<ExtArgs> | null
    /**
     * Filter which SummaryCategory to delete.
     */
    where: SummaryCategoryWhereUniqueInput
  }

  /**
   * SummaryCategory deleteMany
   */
  export type SummaryCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SummaryCategories to delete
     */
    where?: SummaryCategoryWhereInput
  }

  /**
   * SummaryCategory without action
   */
  export type SummaryCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SummaryCategory
     */
    select?: SummaryCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryCategoryInclude<ExtArgs> | null
  }


  /**
   * Model ChatGPTHistory
   */

  export type AggregateChatGPTHistory = {
    _count: ChatGPTHistoryCountAggregateOutputType | null
    _min: ChatGPTHistoryMinAggregateOutputType | null
    _max: ChatGPTHistoryMaxAggregateOutputType | null
  }

  export type ChatGPTHistoryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    content: string | null
    summary: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatGPTHistoryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    content: string | null
    summary: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatGPTHistoryCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    content: number
    summary: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChatGPTHistoryMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    content?: true
    summary?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatGPTHistoryMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    content?: true
    summary?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatGPTHistoryCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    content?: true
    summary?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChatGPTHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatGPTHistory to aggregate.
     */
    where?: ChatGPTHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatGPTHistories to fetch.
     */
    orderBy?: ChatGPTHistoryOrderByWithRelationInput | ChatGPTHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatGPTHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatGPTHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatGPTHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatGPTHistories
    **/
    _count?: true | ChatGPTHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatGPTHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatGPTHistoryMaxAggregateInputType
  }

  export type GetChatGPTHistoryAggregateType<T extends ChatGPTHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateChatGPTHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatGPTHistory[P]>
      : GetScalarType<T[P], AggregateChatGPTHistory[P]>
  }




  export type ChatGPTHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatGPTHistoryWhereInput
    orderBy?: ChatGPTHistoryOrderByWithAggregationInput | ChatGPTHistoryOrderByWithAggregationInput[]
    by: ChatGPTHistoryScalarFieldEnum[] | ChatGPTHistoryScalarFieldEnum
    having?: ChatGPTHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatGPTHistoryCountAggregateInputType | true
    _min?: ChatGPTHistoryMinAggregateInputType
    _max?: ChatGPTHistoryMaxAggregateInputType
  }

  export type ChatGPTHistoryGroupByOutputType = {
    id: string
    userId: string
    title: string
    content: string
    summary: string
    createdAt: Date
    updatedAt: Date
    _count: ChatGPTHistoryCountAggregateOutputType | null
    _min: ChatGPTHistoryMinAggregateOutputType | null
    _max: ChatGPTHistoryMaxAggregateOutputType | null
  }

  type GetChatGPTHistoryGroupByPayload<T extends ChatGPTHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGPTHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGPTHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGPTHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGPTHistoryGroupByOutputType[P]>
        }
      >
    >


  export type ChatGPTHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    content?: boolean
    summary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatGPTHistory"]>

  export type ChatGPTHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    content?: boolean
    summary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatGPTHistory"]>

  export type ChatGPTHistorySelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    content?: boolean
    summary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChatGPTHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatGPTHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChatGPTHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatGPTHistory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      content: string
      summary: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chatGPTHistory"]>
    composites: {}
  }

  type ChatGPTHistoryGetPayload<S extends boolean | null | undefined | ChatGPTHistoryDefaultArgs> = $Result.GetResult<Prisma.$ChatGPTHistoryPayload, S>

  type ChatGPTHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ChatGPTHistoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ChatGPTHistoryCountAggregateInputType | true
    }

  export interface ChatGPTHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatGPTHistory'], meta: { name: 'ChatGPTHistory' } }
    /**
     * Find zero or one ChatGPTHistory that matches the filter.
     * @param {ChatGPTHistoryFindUniqueArgs} args - Arguments to find a ChatGPTHistory
     * @example
     * // Get one ChatGPTHistory
     * const chatGPTHistory = await prisma.chatGPTHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatGPTHistoryFindUniqueArgs>(args: SelectSubset<T, ChatGPTHistoryFindUniqueArgs<ExtArgs>>): Prisma__ChatGPTHistoryClient<$Result.GetResult<Prisma.$ChatGPTHistoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ChatGPTHistory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ChatGPTHistoryFindUniqueOrThrowArgs} args - Arguments to find a ChatGPTHistory
     * @example
     * // Get one ChatGPTHistory
     * const chatGPTHistory = await prisma.chatGPTHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatGPTHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatGPTHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatGPTHistoryClient<$Result.GetResult<Prisma.$ChatGPTHistoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ChatGPTHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGPTHistoryFindFirstArgs} args - Arguments to find a ChatGPTHistory
     * @example
     * // Get one ChatGPTHistory
     * const chatGPTHistory = await prisma.chatGPTHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatGPTHistoryFindFirstArgs>(args?: SelectSubset<T, ChatGPTHistoryFindFirstArgs<ExtArgs>>): Prisma__ChatGPTHistoryClient<$Result.GetResult<Prisma.$ChatGPTHistoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ChatGPTHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGPTHistoryFindFirstOrThrowArgs} args - Arguments to find a ChatGPTHistory
     * @example
     * // Get one ChatGPTHistory
     * const chatGPTHistory = await prisma.chatGPTHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatGPTHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatGPTHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatGPTHistoryClient<$Result.GetResult<Prisma.$ChatGPTHistoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ChatGPTHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGPTHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatGPTHistories
     * const chatGPTHistories = await prisma.chatGPTHistory.findMany()
     * 
     * // Get first 10 ChatGPTHistories
     * const chatGPTHistories = await prisma.chatGPTHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatGPTHistoryWithIdOnly = await prisma.chatGPTHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatGPTHistoryFindManyArgs>(args?: SelectSubset<T, ChatGPTHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatGPTHistoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ChatGPTHistory.
     * @param {ChatGPTHistoryCreateArgs} args - Arguments to create a ChatGPTHistory.
     * @example
     * // Create one ChatGPTHistory
     * const ChatGPTHistory = await prisma.chatGPTHistory.create({
     *   data: {
     *     // ... data to create a ChatGPTHistory
     *   }
     * })
     * 
     */
    create<T extends ChatGPTHistoryCreateArgs>(args: SelectSubset<T, ChatGPTHistoryCreateArgs<ExtArgs>>): Prisma__ChatGPTHistoryClient<$Result.GetResult<Prisma.$ChatGPTHistoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ChatGPTHistories.
     * @param {ChatGPTHistoryCreateManyArgs} args - Arguments to create many ChatGPTHistories.
     * @example
     * // Create many ChatGPTHistories
     * const chatGPTHistory = await prisma.chatGPTHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatGPTHistoryCreateManyArgs>(args?: SelectSubset<T, ChatGPTHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatGPTHistories and returns the data saved in the database.
     * @param {ChatGPTHistoryCreateManyAndReturnArgs} args - Arguments to create many ChatGPTHistories.
     * @example
     * // Create many ChatGPTHistories
     * const chatGPTHistory = await prisma.chatGPTHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatGPTHistories and only return the `id`
     * const chatGPTHistoryWithIdOnly = await prisma.chatGPTHistory.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatGPTHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatGPTHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatGPTHistoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ChatGPTHistory.
     * @param {ChatGPTHistoryDeleteArgs} args - Arguments to delete one ChatGPTHistory.
     * @example
     * // Delete one ChatGPTHistory
     * const ChatGPTHistory = await prisma.chatGPTHistory.delete({
     *   where: {
     *     // ... filter to delete one ChatGPTHistory
     *   }
     * })
     * 
     */
    delete<T extends ChatGPTHistoryDeleteArgs>(args: SelectSubset<T, ChatGPTHistoryDeleteArgs<ExtArgs>>): Prisma__ChatGPTHistoryClient<$Result.GetResult<Prisma.$ChatGPTHistoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ChatGPTHistory.
     * @param {ChatGPTHistoryUpdateArgs} args - Arguments to update one ChatGPTHistory.
     * @example
     * // Update one ChatGPTHistory
     * const chatGPTHistory = await prisma.chatGPTHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatGPTHistoryUpdateArgs>(args: SelectSubset<T, ChatGPTHistoryUpdateArgs<ExtArgs>>): Prisma__ChatGPTHistoryClient<$Result.GetResult<Prisma.$ChatGPTHistoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ChatGPTHistories.
     * @param {ChatGPTHistoryDeleteManyArgs} args - Arguments to filter ChatGPTHistories to delete.
     * @example
     * // Delete a few ChatGPTHistories
     * const { count } = await prisma.chatGPTHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatGPTHistoryDeleteManyArgs>(args?: SelectSubset<T, ChatGPTHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatGPTHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGPTHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatGPTHistories
     * const chatGPTHistory = await prisma.chatGPTHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatGPTHistoryUpdateManyArgs>(args: SelectSubset<T, ChatGPTHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChatGPTHistory.
     * @param {ChatGPTHistoryUpsertArgs} args - Arguments to update or create a ChatGPTHistory.
     * @example
     * // Update or create a ChatGPTHistory
     * const chatGPTHistory = await prisma.chatGPTHistory.upsert({
     *   create: {
     *     // ... data to create a ChatGPTHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatGPTHistory we want to update
     *   }
     * })
     */
    upsert<T extends ChatGPTHistoryUpsertArgs>(args: SelectSubset<T, ChatGPTHistoryUpsertArgs<ExtArgs>>): Prisma__ChatGPTHistoryClient<$Result.GetResult<Prisma.$ChatGPTHistoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ChatGPTHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGPTHistoryCountArgs} args - Arguments to filter ChatGPTHistories to count.
     * @example
     * // Count the number of ChatGPTHistories
     * const count = await prisma.chatGPTHistory.count({
     *   where: {
     *     // ... the filter for the ChatGPTHistories we want to count
     *   }
     * })
    **/
    count<T extends ChatGPTHistoryCountArgs>(
      args?: Subset<T, ChatGPTHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatGPTHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatGPTHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGPTHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatGPTHistoryAggregateArgs>(args: Subset<T, ChatGPTHistoryAggregateArgs>): Prisma.PrismaPromise<GetChatGPTHistoryAggregateType<T>>

    /**
     * Group by ChatGPTHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGPTHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatGPTHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatGPTHistoryGroupByArgs['orderBy'] }
        : { orderBy?: ChatGPTHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatGPTHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGPTHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatGPTHistory model
   */
  readonly fields: ChatGPTHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatGPTHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatGPTHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatGPTHistory model
   */ 
  interface ChatGPTHistoryFieldRefs {
    readonly id: FieldRef<"ChatGPTHistory", 'String'>
    readonly userId: FieldRef<"ChatGPTHistory", 'String'>
    readonly title: FieldRef<"ChatGPTHistory", 'String'>
    readonly content: FieldRef<"ChatGPTHistory", 'String'>
    readonly summary: FieldRef<"ChatGPTHistory", 'String'>
    readonly createdAt: FieldRef<"ChatGPTHistory", 'DateTime'>
    readonly updatedAt: FieldRef<"ChatGPTHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatGPTHistory findUnique
   */
  export type ChatGPTHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGPTHistory
     */
    select?: ChatGPTHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGPTHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ChatGPTHistory to fetch.
     */
    where: ChatGPTHistoryWhereUniqueInput
  }

  /**
   * ChatGPTHistory findUniqueOrThrow
   */
  export type ChatGPTHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGPTHistory
     */
    select?: ChatGPTHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGPTHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ChatGPTHistory to fetch.
     */
    where: ChatGPTHistoryWhereUniqueInput
  }

  /**
   * ChatGPTHistory findFirst
   */
  export type ChatGPTHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGPTHistory
     */
    select?: ChatGPTHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGPTHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ChatGPTHistory to fetch.
     */
    where?: ChatGPTHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatGPTHistories to fetch.
     */
    orderBy?: ChatGPTHistoryOrderByWithRelationInput | ChatGPTHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatGPTHistories.
     */
    cursor?: ChatGPTHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatGPTHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatGPTHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatGPTHistories.
     */
    distinct?: ChatGPTHistoryScalarFieldEnum | ChatGPTHistoryScalarFieldEnum[]
  }

  /**
   * ChatGPTHistory findFirstOrThrow
   */
  export type ChatGPTHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGPTHistory
     */
    select?: ChatGPTHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGPTHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ChatGPTHistory to fetch.
     */
    where?: ChatGPTHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatGPTHistories to fetch.
     */
    orderBy?: ChatGPTHistoryOrderByWithRelationInput | ChatGPTHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatGPTHistories.
     */
    cursor?: ChatGPTHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatGPTHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatGPTHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatGPTHistories.
     */
    distinct?: ChatGPTHistoryScalarFieldEnum | ChatGPTHistoryScalarFieldEnum[]
  }

  /**
   * ChatGPTHistory findMany
   */
  export type ChatGPTHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGPTHistory
     */
    select?: ChatGPTHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGPTHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ChatGPTHistories to fetch.
     */
    where?: ChatGPTHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatGPTHistories to fetch.
     */
    orderBy?: ChatGPTHistoryOrderByWithRelationInput | ChatGPTHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatGPTHistories.
     */
    cursor?: ChatGPTHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatGPTHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatGPTHistories.
     */
    skip?: number
    distinct?: ChatGPTHistoryScalarFieldEnum | ChatGPTHistoryScalarFieldEnum[]
  }

  /**
   * ChatGPTHistory create
   */
  export type ChatGPTHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGPTHistory
     */
    select?: ChatGPTHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGPTHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatGPTHistory.
     */
    data: XOR<ChatGPTHistoryCreateInput, ChatGPTHistoryUncheckedCreateInput>
  }

  /**
   * ChatGPTHistory createMany
   */
  export type ChatGPTHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatGPTHistories.
     */
    data: ChatGPTHistoryCreateManyInput | ChatGPTHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatGPTHistory createManyAndReturn
   */
  export type ChatGPTHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGPTHistory
     */
    select?: ChatGPTHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ChatGPTHistories.
     */
    data: ChatGPTHistoryCreateManyInput | ChatGPTHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGPTHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatGPTHistory update
   */
  export type ChatGPTHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGPTHistory
     */
    select?: ChatGPTHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGPTHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatGPTHistory.
     */
    data: XOR<ChatGPTHistoryUpdateInput, ChatGPTHistoryUncheckedUpdateInput>
    /**
     * Choose, which ChatGPTHistory to update.
     */
    where: ChatGPTHistoryWhereUniqueInput
  }

  /**
   * ChatGPTHistory updateMany
   */
  export type ChatGPTHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatGPTHistories.
     */
    data: XOR<ChatGPTHistoryUpdateManyMutationInput, ChatGPTHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ChatGPTHistories to update
     */
    where?: ChatGPTHistoryWhereInput
  }

  /**
   * ChatGPTHistory upsert
   */
  export type ChatGPTHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGPTHistory
     */
    select?: ChatGPTHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGPTHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatGPTHistory to update in case it exists.
     */
    where: ChatGPTHistoryWhereUniqueInput
    /**
     * In case the ChatGPTHistory found by the `where` argument doesn't exist, create a new ChatGPTHistory with this data.
     */
    create: XOR<ChatGPTHistoryCreateInput, ChatGPTHistoryUncheckedCreateInput>
    /**
     * In case the ChatGPTHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatGPTHistoryUpdateInput, ChatGPTHistoryUncheckedUpdateInput>
  }

  /**
   * ChatGPTHistory delete
   */
  export type ChatGPTHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGPTHistory
     */
    select?: ChatGPTHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGPTHistoryInclude<ExtArgs> | null
    /**
     * Filter which ChatGPTHistory to delete.
     */
    where: ChatGPTHistoryWhereUniqueInput
  }

  /**
   * ChatGPTHistory deleteMany
   */
  export type ChatGPTHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatGPTHistories to delete
     */
    where?: ChatGPTHistoryWhereInput
  }

  /**
   * ChatGPTHistory without action
   */
  export type ChatGPTHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGPTHistory
     */
    select?: ChatGPTHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGPTHistoryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    passwordHash: 'passwordHash',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    lastLogin: 'lastLogin'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SummaryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    content: 'content',
    summary: 'summary',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SummaryScalarFieldEnum = (typeof SummaryScalarFieldEnum)[keyof typeof SummaryScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const SummaryTagScalarFieldEnum: {
    summaryId: 'summaryId',
    tagId: 'tagId',
    createdAt: 'createdAt'
  };

  export type SummaryTagScalarFieldEnum = (typeof SummaryTagScalarFieldEnum)[keyof typeof SummaryTagScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const SummaryCategoryScalarFieldEnum: {
    summaryId: 'summaryId',
    categoryId: 'categoryId',
    createdAt: 'createdAt'
  };

  export type SummaryCategoryScalarFieldEnum = (typeof SummaryCategoryScalarFieldEnum)[keyof typeof SummaryCategoryScalarFieldEnum]


  export const ChatGPTHistoryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    content: 'content',
    summary: 'summary',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChatGPTHistoryScalarFieldEnum = (typeof ChatGPTHistoryScalarFieldEnum)[keyof typeof ChatGPTHistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    summaries?: SummaryListRelationFilter
    chatHistories?: ChatGPTHistoryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    summaries?: SummaryOrderByRelationAggregateInput
    chatHistories?: ChatGPTHistoryOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    summaries?: SummaryListRelationFilter
    chatHistories?: ChatGPTHistoryListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    lastLogin?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type SummaryWhereInput = {
    AND?: SummaryWhereInput | SummaryWhereInput[]
    OR?: SummaryWhereInput[]
    NOT?: SummaryWhereInput | SummaryWhereInput[]
    id?: UuidFilter<"Summary"> | string
    userId?: UuidFilter<"Summary"> | string
    title?: StringFilter<"Summary"> | string
    content?: StringFilter<"Summary"> | string
    summary?: StringFilter<"Summary"> | string
    createdAt?: DateTimeFilter<"Summary"> | Date | string
    updatedAt?: DateTimeFilter<"Summary"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    tags?: SummaryTagListRelationFilter
    categories?: SummaryCategoryListRelationFilter
  }

  export type SummaryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    tags?: SummaryTagOrderByRelationAggregateInput
    categories?: SummaryCategoryOrderByRelationAggregateInput
  }

  export type SummaryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SummaryWhereInput | SummaryWhereInput[]
    OR?: SummaryWhereInput[]
    NOT?: SummaryWhereInput | SummaryWhereInput[]
    userId?: UuidFilter<"Summary"> | string
    title?: StringFilter<"Summary"> | string
    content?: StringFilter<"Summary"> | string
    summary?: StringFilter<"Summary"> | string
    createdAt?: DateTimeFilter<"Summary"> | Date | string
    updatedAt?: DateTimeFilter<"Summary"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    tags?: SummaryTagListRelationFilter
    categories?: SummaryCategoryListRelationFilter
  }, "id">

  export type SummaryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SummaryCountOrderByAggregateInput
    _max?: SummaryMaxOrderByAggregateInput
    _min?: SummaryMinOrderByAggregateInput
  }

  export type SummaryScalarWhereWithAggregatesInput = {
    AND?: SummaryScalarWhereWithAggregatesInput | SummaryScalarWhereWithAggregatesInput[]
    OR?: SummaryScalarWhereWithAggregatesInput[]
    NOT?: SummaryScalarWhereWithAggregatesInput | SummaryScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Summary"> | string
    userId?: UuidWithAggregatesFilter<"Summary"> | string
    title?: StringWithAggregatesFilter<"Summary"> | string
    content?: StringWithAggregatesFilter<"Summary"> | string
    summary?: StringWithAggregatesFilter<"Summary"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Summary"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Summary"> | Date | string
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: UuidFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    summaryTags?: SummaryTagListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    summaryTags?: SummaryTagOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    summaryTags?: SummaryTagListRelationFilter
  }, "id" | "name">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Tag"> | string
    name?: StringWithAggregatesFilter<"Tag"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
  }

  export type SummaryTagWhereInput = {
    AND?: SummaryTagWhereInput | SummaryTagWhereInput[]
    OR?: SummaryTagWhereInput[]
    NOT?: SummaryTagWhereInput | SummaryTagWhereInput[]
    summaryId?: UuidFilter<"SummaryTag"> | string
    tagId?: UuidFilter<"SummaryTag"> | string
    createdAt?: DateTimeFilter<"SummaryTag"> | Date | string
    summary?: XOR<SummaryRelationFilter, SummaryWhereInput>
    tag?: XOR<TagRelationFilter, TagWhereInput>
  }

  export type SummaryTagOrderByWithRelationInput = {
    summaryId?: SortOrder
    tagId?: SortOrder
    createdAt?: SortOrder
    summary?: SummaryOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
  }

  export type SummaryTagWhereUniqueInput = Prisma.AtLeast<{
    summaryId_tagId?: SummaryTagSummaryIdTagIdCompoundUniqueInput
    AND?: SummaryTagWhereInput | SummaryTagWhereInput[]
    OR?: SummaryTagWhereInput[]
    NOT?: SummaryTagWhereInput | SummaryTagWhereInput[]
    summaryId?: UuidFilter<"SummaryTag"> | string
    tagId?: UuidFilter<"SummaryTag"> | string
    createdAt?: DateTimeFilter<"SummaryTag"> | Date | string
    summary?: XOR<SummaryRelationFilter, SummaryWhereInput>
    tag?: XOR<TagRelationFilter, TagWhereInput>
  }, "summaryId_tagId">

  export type SummaryTagOrderByWithAggregationInput = {
    summaryId?: SortOrder
    tagId?: SortOrder
    createdAt?: SortOrder
    _count?: SummaryTagCountOrderByAggregateInput
    _max?: SummaryTagMaxOrderByAggregateInput
    _min?: SummaryTagMinOrderByAggregateInput
  }

  export type SummaryTagScalarWhereWithAggregatesInput = {
    AND?: SummaryTagScalarWhereWithAggregatesInput | SummaryTagScalarWhereWithAggregatesInput[]
    OR?: SummaryTagScalarWhereWithAggregatesInput[]
    NOT?: SummaryTagScalarWhereWithAggregatesInput | SummaryTagScalarWhereWithAggregatesInput[]
    summaryId?: UuidWithAggregatesFilter<"SummaryTag"> | string
    tagId?: UuidWithAggregatesFilter<"SummaryTag"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SummaryTag"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: UuidFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    summaryCategories?: SummaryCategoryListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    summaryCategories?: SummaryCategoryOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    createdAt?: DateTimeFilter<"Category"> | Date | string
    summaryCategories?: SummaryCategoryListRelationFilter
  }, "id" | "name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type SummaryCategoryWhereInput = {
    AND?: SummaryCategoryWhereInput | SummaryCategoryWhereInput[]
    OR?: SummaryCategoryWhereInput[]
    NOT?: SummaryCategoryWhereInput | SummaryCategoryWhereInput[]
    summaryId?: UuidFilter<"SummaryCategory"> | string
    categoryId?: UuidFilter<"SummaryCategory"> | string
    createdAt?: DateTimeFilter<"SummaryCategory"> | Date | string
    summary?: XOR<SummaryRelationFilter, SummaryWhereInput>
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
  }

  export type SummaryCategoryOrderByWithRelationInput = {
    summaryId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    summary?: SummaryOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
  }

  export type SummaryCategoryWhereUniqueInput = Prisma.AtLeast<{
    summaryId_categoryId?: SummaryCategorySummaryIdCategoryIdCompoundUniqueInput
    AND?: SummaryCategoryWhereInput | SummaryCategoryWhereInput[]
    OR?: SummaryCategoryWhereInput[]
    NOT?: SummaryCategoryWhereInput | SummaryCategoryWhereInput[]
    summaryId?: UuidFilter<"SummaryCategory"> | string
    categoryId?: UuidFilter<"SummaryCategory"> | string
    createdAt?: DateTimeFilter<"SummaryCategory"> | Date | string
    summary?: XOR<SummaryRelationFilter, SummaryWhereInput>
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
  }, "summaryId_categoryId">

  export type SummaryCategoryOrderByWithAggregationInput = {
    summaryId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    _count?: SummaryCategoryCountOrderByAggregateInput
    _max?: SummaryCategoryMaxOrderByAggregateInput
    _min?: SummaryCategoryMinOrderByAggregateInput
  }

  export type SummaryCategoryScalarWhereWithAggregatesInput = {
    AND?: SummaryCategoryScalarWhereWithAggregatesInput | SummaryCategoryScalarWhereWithAggregatesInput[]
    OR?: SummaryCategoryScalarWhereWithAggregatesInput[]
    NOT?: SummaryCategoryScalarWhereWithAggregatesInput | SummaryCategoryScalarWhereWithAggregatesInput[]
    summaryId?: UuidWithAggregatesFilter<"SummaryCategory"> | string
    categoryId?: UuidWithAggregatesFilter<"SummaryCategory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SummaryCategory"> | Date | string
  }

  export type ChatGPTHistoryWhereInput = {
    AND?: ChatGPTHistoryWhereInput | ChatGPTHistoryWhereInput[]
    OR?: ChatGPTHistoryWhereInput[]
    NOT?: ChatGPTHistoryWhereInput | ChatGPTHistoryWhereInput[]
    id?: UuidFilter<"ChatGPTHistory"> | string
    userId?: UuidFilter<"ChatGPTHistory"> | string
    title?: StringFilter<"ChatGPTHistory"> | string
    content?: StringFilter<"ChatGPTHistory"> | string
    summary?: StringFilter<"ChatGPTHistory"> | string
    createdAt?: DateTimeFilter<"ChatGPTHistory"> | Date | string
    updatedAt?: DateTimeFilter<"ChatGPTHistory"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ChatGPTHistoryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ChatGPTHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatGPTHistoryWhereInput | ChatGPTHistoryWhereInput[]
    OR?: ChatGPTHistoryWhereInput[]
    NOT?: ChatGPTHistoryWhereInput | ChatGPTHistoryWhereInput[]
    userId?: UuidFilter<"ChatGPTHistory"> | string
    title?: StringFilter<"ChatGPTHistory"> | string
    content?: StringFilter<"ChatGPTHistory"> | string
    summary?: StringFilter<"ChatGPTHistory"> | string
    createdAt?: DateTimeFilter<"ChatGPTHistory"> | Date | string
    updatedAt?: DateTimeFilter<"ChatGPTHistory"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type ChatGPTHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChatGPTHistoryCountOrderByAggregateInput
    _max?: ChatGPTHistoryMaxOrderByAggregateInput
    _min?: ChatGPTHistoryMinOrderByAggregateInput
  }

  export type ChatGPTHistoryScalarWhereWithAggregatesInput = {
    AND?: ChatGPTHistoryScalarWhereWithAggregatesInput | ChatGPTHistoryScalarWhereWithAggregatesInput[]
    OR?: ChatGPTHistoryScalarWhereWithAggregatesInput[]
    NOT?: ChatGPTHistoryScalarWhereWithAggregatesInput | ChatGPTHistoryScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ChatGPTHistory"> | string
    userId?: UuidWithAggregatesFilter<"ChatGPTHistory"> | string
    title?: StringWithAggregatesFilter<"ChatGPTHistory"> | string
    content?: StringWithAggregatesFilter<"ChatGPTHistory"> | string
    summary?: StringWithAggregatesFilter<"ChatGPTHistory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ChatGPTHistory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChatGPTHistory"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    summaries?: SummaryCreateNestedManyWithoutUserInput
    chatHistories?: ChatGPTHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    summaries?: SummaryUncheckedCreateNestedManyWithoutUserInput
    chatHistories?: ChatGPTHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    summaries?: SummaryUpdateManyWithoutUserNestedInput
    chatHistories?: ChatGPTHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    summaries?: SummaryUncheckedUpdateManyWithoutUserNestedInput
    chatHistories?: ChatGPTHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SummaryCreateInput = {
    id?: string
    title: string
    content: string
    summary: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSummariesInput
    tags?: SummaryTagCreateNestedManyWithoutSummaryInput
    categories?: SummaryCategoryCreateNestedManyWithoutSummaryInput
  }

  export type SummaryUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    content: string
    summary: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: SummaryTagUncheckedCreateNestedManyWithoutSummaryInput
    categories?: SummaryCategoryUncheckedCreateNestedManyWithoutSummaryInput
  }

  export type SummaryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSummariesNestedInput
    tags?: SummaryTagUpdateManyWithoutSummaryNestedInput
    categories?: SummaryCategoryUpdateManyWithoutSummaryNestedInput
  }

  export type SummaryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: SummaryTagUncheckedUpdateManyWithoutSummaryNestedInput
    categories?: SummaryCategoryUncheckedUpdateManyWithoutSummaryNestedInput
  }

  export type SummaryCreateManyInput = {
    id?: string
    userId: string
    title: string
    content: string
    summary: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SummaryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SummaryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    summaryTags?: SummaryTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    summaryTags?: SummaryTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    summaryTags?: SummaryTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    summaryTags?: SummaryTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type TagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SummaryTagCreateInput = {
    createdAt?: Date | string
    summary: SummaryCreateNestedOneWithoutTagsInput
    tag: TagCreateNestedOneWithoutSummaryTagsInput
  }

  export type SummaryTagUncheckedCreateInput = {
    summaryId: string
    tagId: string
    createdAt?: Date | string
  }

  export type SummaryTagUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: SummaryUpdateOneRequiredWithoutTagsNestedInput
    tag?: TagUpdateOneRequiredWithoutSummaryTagsNestedInput
  }

  export type SummaryTagUncheckedUpdateInput = {
    summaryId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SummaryTagCreateManyInput = {
    summaryId: string
    tagId: string
    createdAt?: Date | string
  }

  export type SummaryTagUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SummaryTagUncheckedUpdateManyInput = {
    summaryId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    summaryCategories?: SummaryCategoryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    summaryCategories?: SummaryCategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    summaryCategories?: SummaryCategoryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    summaryCategories?: SummaryCategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SummaryCategoryCreateInput = {
    createdAt?: Date | string
    summary: SummaryCreateNestedOneWithoutCategoriesInput
    category: CategoryCreateNestedOneWithoutSummaryCategoriesInput
  }

  export type SummaryCategoryUncheckedCreateInput = {
    summaryId: string
    categoryId: string
    createdAt?: Date | string
  }

  export type SummaryCategoryUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: SummaryUpdateOneRequiredWithoutCategoriesNestedInput
    category?: CategoryUpdateOneRequiredWithoutSummaryCategoriesNestedInput
  }

  export type SummaryCategoryUncheckedUpdateInput = {
    summaryId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SummaryCategoryCreateManyInput = {
    summaryId: string
    categoryId: string
    createdAt?: Date | string
  }

  export type SummaryCategoryUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SummaryCategoryUncheckedUpdateManyInput = {
    summaryId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatGPTHistoryCreateInput = {
    id?: string
    title: string
    content: string
    summary: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutChatHistoriesInput
  }

  export type ChatGPTHistoryUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    content: string
    summary: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatGPTHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatHistoriesNestedInput
  }

  export type ChatGPTHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatGPTHistoryCreateManyInput = {
    id?: string
    userId: string
    title: string
    content: string
    summary: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatGPTHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatGPTHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SummaryListRelationFilter = {
    every?: SummaryWhereInput
    some?: SummaryWhereInput
    none?: SummaryWhereInput
  }

  export type ChatGPTHistoryListRelationFilter = {
    every?: ChatGPTHistoryWhereInput
    some?: ChatGPTHistoryWhereInput
    none?: ChatGPTHistoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SummaryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatGPTHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SummaryTagListRelationFilter = {
    every?: SummaryTagWhereInput
    some?: SummaryTagWhereInput
    none?: SummaryTagWhereInput
  }

  export type SummaryCategoryListRelationFilter = {
    every?: SummaryCategoryWhereInput
    some?: SummaryCategoryWhereInput
    none?: SummaryCategoryWhereInput
  }

  export type SummaryTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SummaryCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SummaryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SummaryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SummaryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type SummaryRelationFilter = {
    is?: SummaryWhereInput
    isNot?: SummaryWhereInput
  }

  export type TagRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type SummaryTagSummaryIdTagIdCompoundUniqueInput = {
    summaryId: string
    tagId: string
  }

  export type SummaryTagCountOrderByAggregateInput = {
    summaryId?: SortOrder
    tagId?: SortOrder
    createdAt?: SortOrder
  }

  export type SummaryTagMaxOrderByAggregateInput = {
    summaryId?: SortOrder
    tagId?: SortOrder
    createdAt?: SortOrder
  }

  export type SummaryTagMinOrderByAggregateInput = {
    summaryId?: SortOrder
    tagId?: SortOrder
    createdAt?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type CategoryRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type SummaryCategorySummaryIdCategoryIdCompoundUniqueInput = {
    summaryId: string
    categoryId: string
  }

  export type SummaryCategoryCountOrderByAggregateInput = {
    summaryId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
  }

  export type SummaryCategoryMaxOrderByAggregateInput = {
    summaryId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
  }

  export type SummaryCategoryMinOrderByAggregateInput = {
    summaryId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatGPTHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatGPTHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatGPTHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SummaryCreateNestedManyWithoutUserInput = {
    create?: XOR<SummaryCreateWithoutUserInput, SummaryUncheckedCreateWithoutUserInput> | SummaryCreateWithoutUserInput[] | SummaryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SummaryCreateOrConnectWithoutUserInput | SummaryCreateOrConnectWithoutUserInput[]
    createMany?: SummaryCreateManyUserInputEnvelope
    connect?: SummaryWhereUniqueInput | SummaryWhereUniqueInput[]
  }

  export type ChatGPTHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatGPTHistoryCreateWithoutUserInput, ChatGPTHistoryUncheckedCreateWithoutUserInput> | ChatGPTHistoryCreateWithoutUserInput[] | ChatGPTHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatGPTHistoryCreateOrConnectWithoutUserInput | ChatGPTHistoryCreateOrConnectWithoutUserInput[]
    createMany?: ChatGPTHistoryCreateManyUserInputEnvelope
    connect?: ChatGPTHistoryWhereUniqueInput | ChatGPTHistoryWhereUniqueInput[]
  }

  export type SummaryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SummaryCreateWithoutUserInput, SummaryUncheckedCreateWithoutUserInput> | SummaryCreateWithoutUserInput[] | SummaryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SummaryCreateOrConnectWithoutUserInput | SummaryCreateOrConnectWithoutUserInput[]
    createMany?: SummaryCreateManyUserInputEnvelope
    connect?: SummaryWhereUniqueInput | SummaryWhereUniqueInput[]
  }

  export type ChatGPTHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatGPTHistoryCreateWithoutUserInput, ChatGPTHistoryUncheckedCreateWithoutUserInput> | ChatGPTHistoryCreateWithoutUserInput[] | ChatGPTHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatGPTHistoryCreateOrConnectWithoutUserInput | ChatGPTHistoryCreateOrConnectWithoutUserInput[]
    createMany?: ChatGPTHistoryCreateManyUserInputEnvelope
    connect?: ChatGPTHistoryWhereUniqueInput | ChatGPTHistoryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type SummaryUpdateManyWithoutUserNestedInput = {
    create?: XOR<SummaryCreateWithoutUserInput, SummaryUncheckedCreateWithoutUserInput> | SummaryCreateWithoutUserInput[] | SummaryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SummaryCreateOrConnectWithoutUserInput | SummaryCreateOrConnectWithoutUserInput[]
    upsert?: SummaryUpsertWithWhereUniqueWithoutUserInput | SummaryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SummaryCreateManyUserInputEnvelope
    set?: SummaryWhereUniqueInput | SummaryWhereUniqueInput[]
    disconnect?: SummaryWhereUniqueInput | SummaryWhereUniqueInput[]
    delete?: SummaryWhereUniqueInput | SummaryWhereUniqueInput[]
    connect?: SummaryWhereUniqueInput | SummaryWhereUniqueInput[]
    update?: SummaryUpdateWithWhereUniqueWithoutUserInput | SummaryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SummaryUpdateManyWithWhereWithoutUserInput | SummaryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SummaryScalarWhereInput | SummaryScalarWhereInput[]
  }

  export type ChatGPTHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatGPTHistoryCreateWithoutUserInput, ChatGPTHistoryUncheckedCreateWithoutUserInput> | ChatGPTHistoryCreateWithoutUserInput[] | ChatGPTHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatGPTHistoryCreateOrConnectWithoutUserInput | ChatGPTHistoryCreateOrConnectWithoutUserInput[]
    upsert?: ChatGPTHistoryUpsertWithWhereUniqueWithoutUserInput | ChatGPTHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatGPTHistoryCreateManyUserInputEnvelope
    set?: ChatGPTHistoryWhereUniqueInput | ChatGPTHistoryWhereUniqueInput[]
    disconnect?: ChatGPTHistoryWhereUniqueInput | ChatGPTHistoryWhereUniqueInput[]
    delete?: ChatGPTHistoryWhereUniqueInput | ChatGPTHistoryWhereUniqueInput[]
    connect?: ChatGPTHistoryWhereUniqueInput | ChatGPTHistoryWhereUniqueInput[]
    update?: ChatGPTHistoryUpdateWithWhereUniqueWithoutUserInput | ChatGPTHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatGPTHistoryUpdateManyWithWhereWithoutUserInput | ChatGPTHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatGPTHistoryScalarWhereInput | ChatGPTHistoryScalarWhereInput[]
  }

  export type SummaryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SummaryCreateWithoutUserInput, SummaryUncheckedCreateWithoutUserInput> | SummaryCreateWithoutUserInput[] | SummaryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SummaryCreateOrConnectWithoutUserInput | SummaryCreateOrConnectWithoutUserInput[]
    upsert?: SummaryUpsertWithWhereUniqueWithoutUserInput | SummaryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SummaryCreateManyUserInputEnvelope
    set?: SummaryWhereUniqueInput | SummaryWhereUniqueInput[]
    disconnect?: SummaryWhereUniqueInput | SummaryWhereUniqueInput[]
    delete?: SummaryWhereUniqueInput | SummaryWhereUniqueInput[]
    connect?: SummaryWhereUniqueInput | SummaryWhereUniqueInput[]
    update?: SummaryUpdateWithWhereUniqueWithoutUserInput | SummaryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SummaryUpdateManyWithWhereWithoutUserInput | SummaryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SummaryScalarWhereInput | SummaryScalarWhereInput[]
  }

  export type ChatGPTHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatGPTHistoryCreateWithoutUserInput, ChatGPTHistoryUncheckedCreateWithoutUserInput> | ChatGPTHistoryCreateWithoutUserInput[] | ChatGPTHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatGPTHistoryCreateOrConnectWithoutUserInput | ChatGPTHistoryCreateOrConnectWithoutUserInput[]
    upsert?: ChatGPTHistoryUpsertWithWhereUniqueWithoutUserInput | ChatGPTHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatGPTHistoryCreateManyUserInputEnvelope
    set?: ChatGPTHistoryWhereUniqueInput | ChatGPTHistoryWhereUniqueInput[]
    disconnect?: ChatGPTHistoryWhereUniqueInput | ChatGPTHistoryWhereUniqueInput[]
    delete?: ChatGPTHistoryWhereUniqueInput | ChatGPTHistoryWhereUniqueInput[]
    connect?: ChatGPTHistoryWhereUniqueInput | ChatGPTHistoryWhereUniqueInput[]
    update?: ChatGPTHistoryUpdateWithWhereUniqueWithoutUserInput | ChatGPTHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatGPTHistoryUpdateManyWithWhereWithoutUserInput | ChatGPTHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatGPTHistoryScalarWhereInput | ChatGPTHistoryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSummariesInput = {
    create?: XOR<UserCreateWithoutSummariesInput, UserUncheckedCreateWithoutSummariesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSummariesInput
    connect?: UserWhereUniqueInput
  }

  export type SummaryTagCreateNestedManyWithoutSummaryInput = {
    create?: XOR<SummaryTagCreateWithoutSummaryInput, SummaryTagUncheckedCreateWithoutSummaryInput> | SummaryTagCreateWithoutSummaryInput[] | SummaryTagUncheckedCreateWithoutSummaryInput[]
    connectOrCreate?: SummaryTagCreateOrConnectWithoutSummaryInput | SummaryTagCreateOrConnectWithoutSummaryInput[]
    createMany?: SummaryTagCreateManySummaryInputEnvelope
    connect?: SummaryTagWhereUniqueInput | SummaryTagWhereUniqueInput[]
  }

  export type SummaryCategoryCreateNestedManyWithoutSummaryInput = {
    create?: XOR<SummaryCategoryCreateWithoutSummaryInput, SummaryCategoryUncheckedCreateWithoutSummaryInput> | SummaryCategoryCreateWithoutSummaryInput[] | SummaryCategoryUncheckedCreateWithoutSummaryInput[]
    connectOrCreate?: SummaryCategoryCreateOrConnectWithoutSummaryInput | SummaryCategoryCreateOrConnectWithoutSummaryInput[]
    createMany?: SummaryCategoryCreateManySummaryInputEnvelope
    connect?: SummaryCategoryWhereUniqueInput | SummaryCategoryWhereUniqueInput[]
  }

  export type SummaryTagUncheckedCreateNestedManyWithoutSummaryInput = {
    create?: XOR<SummaryTagCreateWithoutSummaryInput, SummaryTagUncheckedCreateWithoutSummaryInput> | SummaryTagCreateWithoutSummaryInput[] | SummaryTagUncheckedCreateWithoutSummaryInput[]
    connectOrCreate?: SummaryTagCreateOrConnectWithoutSummaryInput | SummaryTagCreateOrConnectWithoutSummaryInput[]
    createMany?: SummaryTagCreateManySummaryInputEnvelope
    connect?: SummaryTagWhereUniqueInput | SummaryTagWhereUniqueInput[]
  }

  export type SummaryCategoryUncheckedCreateNestedManyWithoutSummaryInput = {
    create?: XOR<SummaryCategoryCreateWithoutSummaryInput, SummaryCategoryUncheckedCreateWithoutSummaryInput> | SummaryCategoryCreateWithoutSummaryInput[] | SummaryCategoryUncheckedCreateWithoutSummaryInput[]
    connectOrCreate?: SummaryCategoryCreateOrConnectWithoutSummaryInput | SummaryCategoryCreateOrConnectWithoutSummaryInput[]
    createMany?: SummaryCategoryCreateManySummaryInputEnvelope
    connect?: SummaryCategoryWhereUniqueInput | SummaryCategoryWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutSummariesNestedInput = {
    create?: XOR<UserCreateWithoutSummariesInput, UserUncheckedCreateWithoutSummariesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSummariesInput
    upsert?: UserUpsertWithoutSummariesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSummariesInput, UserUpdateWithoutSummariesInput>, UserUncheckedUpdateWithoutSummariesInput>
  }

  export type SummaryTagUpdateManyWithoutSummaryNestedInput = {
    create?: XOR<SummaryTagCreateWithoutSummaryInput, SummaryTagUncheckedCreateWithoutSummaryInput> | SummaryTagCreateWithoutSummaryInput[] | SummaryTagUncheckedCreateWithoutSummaryInput[]
    connectOrCreate?: SummaryTagCreateOrConnectWithoutSummaryInput | SummaryTagCreateOrConnectWithoutSummaryInput[]
    upsert?: SummaryTagUpsertWithWhereUniqueWithoutSummaryInput | SummaryTagUpsertWithWhereUniqueWithoutSummaryInput[]
    createMany?: SummaryTagCreateManySummaryInputEnvelope
    set?: SummaryTagWhereUniqueInput | SummaryTagWhereUniqueInput[]
    disconnect?: SummaryTagWhereUniqueInput | SummaryTagWhereUniqueInput[]
    delete?: SummaryTagWhereUniqueInput | SummaryTagWhereUniqueInput[]
    connect?: SummaryTagWhereUniqueInput | SummaryTagWhereUniqueInput[]
    update?: SummaryTagUpdateWithWhereUniqueWithoutSummaryInput | SummaryTagUpdateWithWhereUniqueWithoutSummaryInput[]
    updateMany?: SummaryTagUpdateManyWithWhereWithoutSummaryInput | SummaryTagUpdateManyWithWhereWithoutSummaryInput[]
    deleteMany?: SummaryTagScalarWhereInput | SummaryTagScalarWhereInput[]
  }

  export type SummaryCategoryUpdateManyWithoutSummaryNestedInput = {
    create?: XOR<SummaryCategoryCreateWithoutSummaryInput, SummaryCategoryUncheckedCreateWithoutSummaryInput> | SummaryCategoryCreateWithoutSummaryInput[] | SummaryCategoryUncheckedCreateWithoutSummaryInput[]
    connectOrCreate?: SummaryCategoryCreateOrConnectWithoutSummaryInput | SummaryCategoryCreateOrConnectWithoutSummaryInput[]
    upsert?: SummaryCategoryUpsertWithWhereUniqueWithoutSummaryInput | SummaryCategoryUpsertWithWhereUniqueWithoutSummaryInput[]
    createMany?: SummaryCategoryCreateManySummaryInputEnvelope
    set?: SummaryCategoryWhereUniqueInput | SummaryCategoryWhereUniqueInput[]
    disconnect?: SummaryCategoryWhereUniqueInput | SummaryCategoryWhereUniqueInput[]
    delete?: SummaryCategoryWhereUniqueInput | SummaryCategoryWhereUniqueInput[]
    connect?: SummaryCategoryWhereUniqueInput | SummaryCategoryWhereUniqueInput[]
    update?: SummaryCategoryUpdateWithWhereUniqueWithoutSummaryInput | SummaryCategoryUpdateWithWhereUniqueWithoutSummaryInput[]
    updateMany?: SummaryCategoryUpdateManyWithWhereWithoutSummaryInput | SummaryCategoryUpdateManyWithWhereWithoutSummaryInput[]
    deleteMany?: SummaryCategoryScalarWhereInput | SummaryCategoryScalarWhereInput[]
  }

  export type SummaryTagUncheckedUpdateManyWithoutSummaryNestedInput = {
    create?: XOR<SummaryTagCreateWithoutSummaryInput, SummaryTagUncheckedCreateWithoutSummaryInput> | SummaryTagCreateWithoutSummaryInput[] | SummaryTagUncheckedCreateWithoutSummaryInput[]
    connectOrCreate?: SummaryTagCreateOrConnectWithoutSummaryInput | SummaryTagCreateOrConnectWithoutSummaryInput[]
    upsert?: SummaryTagUpsertWithWhereUniqueWithoutSummaryInput | SummaryTagUpsertWithWhereUniqueWithoutSummaryInput[]
    createMany?: SummaryTagCreateManySummaryInputEnvelope
    set?: SummaryTagWhereUniqueInput | SummaryTagWhereUniqueInput[]
    disconnect?: SummaryTagWhereUniqueInput | SummaryTagWhereUniqueInput[]
    delete?: SummaryTagWhereUniqueInput | SummaryTagWhereUniqueInput[]
    connect?: SummaryTagWhereUniqueInput | SummaryTagWhereUniqueInput[]
    update?: SummaryTagUpdateWithWhereUniqueWithoutSummaryInput | SummaryTagUpdateWithWhereUniqueWithoutSummaryInput[]
    updateMany?: SummaryTagUpdateManyWithWhereWithoutSummaryInput | SummaryTagUpdateManyWithWhereWithoutSummaryInput[]
    deleteMany?: SummaryTagScalarWhereInput | SummaryTagScalarWhereInput[]
  }

  export type SummaryCategoryUncheckedUpdateManyWithoutSummaryNestedInput = {
    create?: XOR<SummaryCategoryCreateWithoutSummaryInput, SummaryCategoryUncheckedCreateWithoutSummaryInput> | SummaryCategoryCreateWithoutSummaryInput[] | SummaryCategoryUncheckedCreateWithoutSummaryInput[]
    connectOrCreate?: SummaryCategoryCreateOrConnectWithoutSummaryInput | SummaryCategoryCreateOrConnectWithoutSummaryInput[]
    upsert?: SummaryCategoryUpsertWithWhereUniqueWithoutSummaryInput | SummaryCategoryUpsertWithWhereUniqueWithoutSummaryInput[]
    createMany?: SummaryCategoryCreateManySummaryInputEnvelope
    set?: SummaryCategoryWhereUniqueInput | SummaryCategoryWhereUniqueInput[]
    disconnect?: SummaryCategoryWhereUniqueInput | SummaryCategoryWhereUniqueInput[]
    delete?: SummaryCategoryWhereUniqueInput | SummaryCategoryWhereUniqueInput[]
    connect?: SummaryCategoryWhereUniqueInput | SummaryCategoryWhereUniqueInput[]
    update?: SummaryCategoryUpdateWithWhereUniqueWithoutSummaryInput | SummaryCategoryUpdateWithWhereUniqueWithoutSummaryInput[]
    updateMany?: SummaryCategoryUpdateManyWithWhereWithoutSummaryInput | SummaryCategoryUpdateManyWithWhereWithoutSummaryInput[]
    deleteMany?: SummaryCategoryScalarWhereInput | SummaryCategoryScalarWhereInput[]
  }

  export type SummaryTagCreateNestedManyWithoutTagInput = {
    create?: XOR<SummaryTagCreateWithoutTagInput, SummaryTagUncheckedCreateWithoutTagInput> | SummaryTagCreateWithoutTagInput[] | SummaryTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: SummaryTagCreateOrConnectWithoutTagInput | SummaryTagCreateOrConnectWithoutTagInput[]
    createMany?: SummaryTagCreateManyTagInputEnvelope
    connect?: SummaryTagWhereUniqueInput | SummaryTagWhereUniqueInput[]
  }

  export type SummaryTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<SummaryTagCreateWithoutTagInput, SummaryTagUncheckedCreateWithoutTagInput> | SummaryTagCreateWithoutTagInput[] | SummaryTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: SummaryTagCreateOrConnectWithoutTagInput | SummaryTagCreateOrConnectWithoutTagInput[]
    createMany?: SummaryTagCreateManyTagInputEnvelope
    connect?: SummaryTagWhereUniqueInput | SummaryTagWhereUniqueInput[]
  }

  export type SummaryTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<SummaryTagCreateWithoutTagInput, SummaryTagUncheckedCreateWithoutTagInput> | SummaryTagCreateWithoutTagInput[] | SummaryTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: SummaryTagCreateOrConnectWithoutTagInput | SummaryTagCreateOrConnectWithoutTagInput[]
    upsert?: SummaryTagUpsertWithWhereUniqueWithoutTagInput | SummaryTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: SummaryTagCreateManyTagInputEnvelope
    set?: SummaryTagWhereUniqueInput | SummaryTagWhereUniqueInput[]
    disconnect?: SummaryTagWhereUniqueInput | SummaryTagWhereUniqueInput[]
    delete?: SummaryTagWhereUniqueInput | SummaryTagWhereUniqueInput[]
    connect?: SummaryTagWhereUniqueInput | SummaryTagWhereUniqueInput[]
    update?: SummaryTagUpdateWithWhereUniqueWithoutTagInput | SummaryTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: SummaryTagUpdateManyWithWhereWithoutTagInput | SummaryTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: SummaryTagScalarWhereInput | SummaryTagScalarWhereInput[]
  }

  export type SummaryTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<SummaryTagCreateWithoutTagInput, SummaryTagUncheckedCreateWithoutTagInput> | SummaryTagCreateWithoutTagInput[] | SummaryTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: SummaryTagCreateOrConnectWithoutTagInput | SummaryTagCreateOrConnectWithoutTagInput[]
    upsert?: SummaryTagUpsertWithWhereUniqueWithoutTagInput | SummaryTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: SummaryTagCreateManyTagInputEnvelope
    set?: SummaryTagWhereUniqueInput | SummaryTagWhereUniqueInput[]
    disconnect?: SummaryTagWhereUniqueInput | SummaryTagWhereUniqueInput[]
    delete?: SummaryTagWhereUniqueInput | SummaryTagWhereUniqueInput[]
    connect?: SummaryTagWhereUniqueInput | SummaryTagWhereUniqueInput[]
    update?: SummaryTagUpdateWithWhereUniqueWithoutTagInput | SummaryTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: SummaryTagUpdateManyWithWhereWithoutTagInput | SummaryTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: SummaryTagScalarWhereInput | SummaryTagScalarWhereInput[]
  }

  export type SummaryCreateNestedOneWithoutTagsInput = {
    create?: XOR<SummaryCreateWithoutTagsInput, SummaryUncheckedCreateWithoutTagsInput>
    connectOrCreate?: SummaryCreateOrConnectWithoutTagsInput
    connect?: SummaryWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutSummaryTagsInput = {
    create?: XOR<TagCreateWithoutSummaryTagsInput, TagUncheckedCreateWithoutSummaryTagsInput>
    connectOrCreate?: TagCreateOrConnectWithoutSummaryTagsInput
    connect?: TagWhereUniqueInput
  }

  export type SummaryUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<SummaryCreateWithoutTagsInput, SummaryUncheckedCreateWithoutTagsInput>
    connectOrCreate?: SummaryCreateOrConnectWithoutTagsInput
    upsert?: SummaryUpsertWithoutTagsInput
    connect?: SummaryWhereUniqueInput
    update?: XOR<XOR<SummaryUpdateToOneWithWhereWithoutTagsInput, SummaryUpdateWithoutTagsInput>, SummaryUncheckedUpdateWithoutTagsInput>
  }

  export type TagUpdateOneRequiredWithoutSummaryTagsNestedInput = {
    create?: XOR<TagCreateWithoutSummaryTagsInput, TagUncheckedCreateWithoutSummaryTagsInput>
    connectOrCreate?: TagCreateOrConnectWithoutSummaryTagsInput
    upsert?: TagUpsertWithoutSummaryTagsInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutSummaryTagsInput, TagUpdateWithoutSummaryTagsInput>, TagUncheckedUpdateWithoutSummaryTagsInput>
  }

  export type SummaryCategoryCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SummaryCategoryCreateWithoutCategoryInput, SummaryCategoryUncheckedCreateWithoutCategoryInput> | SummaryCategoryCreateWithoutCategoryInput[] | SummaryCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SummaryCategoryCreateOrConnectWithoutCategoryInput | SummaryCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: SummaryCategoryCreateManyCategoryInputEnvelope
    connect?: SummaryCategoryWhereUniqueInput | SummaryCategoryWhereUniqueInput[]
  }

  export type SummaryCategoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SummaryCategoryCreateWithoutCategoryInput, SummaryCategoryUncheckedCreateWithoutCategoryInput> | SummaryCategoryCreateWithoutCategoryInput[] | SummaryCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SummaryCategoryCreateOrConnectWithoutCategoryInput | SummaryCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: SummaryCategoryCreateManyCategoryInputEnvelope
    connect?: SummaryCategoryWhereUniqueInput | SummaryCategoryWhereUniqueInput[]
  }

  export type SummaryCategoryUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SummaryCategoryCreateWithoutCategoryInput, SummaryCategoryUncheckedCreateWithoutCategoryInput> | SummaryCategoryCreateWithoutCategoryInput[] | SummaryCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SummaryCategoryCreateOrConnectWithoutCategoryInput | SummaryCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: SummaryCategoryUpsertWithWhereUniqueWithoutCategoryInput | SummaryCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SummaryCategoryCreateManyCategoryInputEnvelope
    set?: SummaryCategoryWhereUniqueInput | SummaryCategoryWhereUniqueInput[]
    disconnect?: SummaryCategoryWhereUniqueInput | SummaryCategoryWhereUniqueInput[]
    delete?: SummaryCategoryWhereUniqueInput | SummaryCategoryWhereUniqueInput[]
    connect?: SummaryCategoryWhereUniqueInput | SummaryCategoryWhereUniqueInput[]
    update?: SummaryCategoryUpdateWithWhereUniqueWithoutCategoryInput | SummaryCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SummaryCategoryUpdateManyWithWhereWithoutCategoryInput | SummaryCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SummaryCategoryScalarWhereInput | SummaryCategoryScalarWhereInput[]
  }

  export type SummaryCategoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SummaryCategoryCreateWithoutCategoryInput, SummaryCategoryUncheckedCreateWithoutCategoryInput> | SummaryCategoryCreateWithoutCategoryInput[] | SummaryCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SummaryCategoryCreateOrConnectWithoutCategoryInput | SummaryCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: SummaryCategoryUpsertWithWhereUniqueWithoutCategoryInput | SummaryCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SummaryCategoryCreateManyCategoryInputEnvelope
    set?: SummaryCategoryWhereUniqueInput | SummaryCategoryWhereUniqueInput[]
    disconnect?: SummaryCategoryWhereUniqueInput | SummaryCategoryWhereUniqueInput[]
    delete?: SummaryCategoryWhereUniqueInput | SummaryCategoryWhereUniqueInput[]
    connect?: SummaryCategoryWhereUniqueInput | SummaryCategoryWhereUniqueInput[]
    update?: SummaryCategoryUpdateWithWhereUniqueWithoutCategoryInput | SummaryCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SummaryCategoryUpdateManyWithWhereWithoutCategoryInput | SummaryCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SummaryCategoryScalarWhereInput | SummaryCategoryScalarWhereInput[]
  }

  export type SummaryCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<SummaryCreateWithoutCategoriesInput, SummaryUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: SummaryCreateOrConnectWithoutCategoriesInput
    connect?: SummaryWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutSummaryCategoriesInput = {
    create?: XOR<CategoryCreateWithoutSummaryCategoriesInput, CategoryUncheckedCreateWithoutSummaryCategoriesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSummaryCategoriesInput
    connect?: CategoryWhereUniqueInput
  }

  export type SummaryUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<SummaryCreateWithoutCategoriesInput, SummaryUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: SummaryCreateOrConnectWithoutCategoriesInput
    upsert?: SummaryUpsertWithoutCategoriesInput
    connect?: SummaryWhereUniqueInput
    update?: XOR<XOR<SummaryUpdateToOneWithWhereWithoutCategoriesInput, SummaryUpdateWithoutCategoriesInput>, SummaryUncheckedUpdateWithoutCategoriesInput>
  }

  export type CategoryUpdateOneRequiredWithoutSummaryCategoriesNestedInput = {
    create?: XOR<CategoryCreateWithoutSummaryCategoriesInput, CategoryUncheckedCreateWithoutSummaryCategoriesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSummaryCategoriesInput
    upsert?: CategoryUpsertWithoutSummaryCategoriesInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutSummaryCategoriesInput, CategoryUpdateWithoutSummaryCategoriesInput>, CategoryUncheckedUpdateWithoutSummaryCategoriesInput>
  }

  export type UserCreateNestedOneWithoutChatHistoriesInput = {
    create?: XOR<UserCreateWithoutChatHistoriesInput, UserUncheckedCreateWithoutChatHistoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatHistoriesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutChatHistoriesNestedInput = {
    create?: XOR<UserCreateWithoutChatHistoriesInput, UserUncheckedCreateWithoutChatHistoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatHistoriesInput
    upsert?: UserUpsertWithoutChatHistoriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatHistoriesInput, UserUpdateWithoutChatHistoriesInput>, UserUncheckedUpdateWithoutChatHistoriesInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SummaryCreateWithoutUserInput = {
    id?: string
    title: string
    content: string
    summary: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: SummaryTagCreateNestedManyWithoutSummaryInput
    categories?: SummaryCategoryCreateNestedManyWithoutSummaryInput
  }

  export type SummaryUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    content: string
    summary: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: SummaryTagUncheckedCreateNestedManyWithoutSummaryInput
    categories?: SummaryCategoryUncheckedCreateNestedManyWithoutSummaryInput
  }

  export type SummaryCreateOrConnectWithoutUserInput = {
    where: SummaryWhereUniqueInput
    create: XOR<SummaryCreateWithoutUserInput, SummaryUncheckedCreateWithoutUserInput>
  }

  export type SummaryCreateManyUserInputEnvelope = {
    data: SummaryCreateManyUserInput | SummaryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChatGPTHistoryCreateWithoutUserInput = {
    id?: string
    title: string
    content: string
    summary: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatGPTHistoryUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    content: string
    summary: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatGPTHistoryCreateOrConnectWithoutUserInput = {
    where: ChatGPTHistoryWhereUniqueInput
    create: XOR<ChatGPTHistoryCreateWithoutUserInput, ChatGPTHistoryUncheckedCreateWithoutUserInput>
  }

  export type ChatGPTHistoryCreateManyUserInputEnvelope = {
    data: ChatGPTHistoryCreateManyUserInput | ChatGPTHistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SummaryUpsertWithWhereUniqueWithoutUserInput = {
    where: SummaryWhereUniqueInput
    update: XOR<SummaryUpdateWithoutUserInput, SummaryUncheckedUpdateWithoutUserInput>
    create: XOR<SummaryCreateWithoutUserInput, SummaryUncheckedCreateWithoutUserInput>
  }

  export type SummaryUpdateWithWhereUniqueWithoutUserInput = {
    where: SummaryWhereUniqueInput
    data: XOR<SummaryUpdateWithoutUserInput, SummaryUncheckedUpdateWithoutUserInput>
  }

  export type SummaryUpdateManyWithWhereWithoutUserInput = {
    where: SummaryScalarWhereInput
    data: XOR<SummaryUpdateManyMutationInput, SummaryUncheckedUpdateManyWithoutUserInput>
  }

  export type SummaryScalarWhereInput = {
    AND?: SummaryScalarWhereInput | SummaryScalarWhereInput[]
    OR?: SummaryScalarWhereInput[]
    NOT?: SummaryScalarWhereInput | SummaryScalarWhereInput[]
    id?: UuidFilter<"Summary"> | string
    userId?: UuidFilter<"Summary"> | string
    title?: StringFilter<"Summary"> | string
    content?: StringFilter<"Summary"> | string
    summary?: StringFilter<"Summary"> | string
    createdAt?: DateTimeFilter<"Summary"> | Date | string
    updatedAt?: DateTimeFilter<"Summary"> | Date | string
  }

  export type ChatGPTHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatGPTHistoryWhereUniqueInput
    update: XOR<ChatGPTHistoryUpdateWithoutUserInput, ChatGPTHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<ChatGPTHistoryCreateWithoutUserInput, ChatGPTHistoryUncheckedCreateWithoutUserInput>
  }

  export type ChatGPTHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatGPTHistoryWhereUniqueInput
    data: XOR<ChatGPTHistoryUpdateWithoutUserInput, ChatGPTHistoryUncheckedUpdateWithoutUserInput>
  }

  export type ChatGPTHistoryUpdateManyWithWhereWithoutUserInput = {
    where: ChatGPTHistoryScalarWhereInput
    data: XOR<ChatGPTHistoryUpdateManyMutationInput, ChatGPTHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatGPTHistoryScalarWhereInput = {
    AND?: ChatGPTHistoryScalarWhereInput | ChatGPTHistoryScalarWhereInput[]
    OR?: ChatGPTHistoryScalarWhereInput[]
    NOT?: ChatGPTHistoryScalarWhereInput | ChatGPTHistoryScalarWhereInput[]
    id?: UuidFilter<"ChatGPTHistory"> | string
    userId?: UuidFilter<"ChatGPTHistory"> | string
    title?: StringFilter<"ChatGPTHistory"> | string
    content?: StringFilter<"ChatGPTHistory"> | string
    summary?: StringFilter<"ChatGPTHistory"> | string
    createdAt?: DateTimeFilter<"ChatGPTHistory"> | Date | string
    updatedAt?: DateTimeFilter<"ChatGPTHistory"> | Date | string
  }

  export type UserCreateWithoutSummariesInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    chatHistories?: ChatGPTHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSummariesInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    chatHistories?: ChatGPTHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSummariesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSummariesInput, UserUncheckedCreateWithoutSummariesInput>
  }

  export type SummaryTagCreateWithoutSummaryInput = {
    createdAt?: Date | string
    tag: TagCreateNestedOneWithoutSummaryTagsInput
  }

  export type SummaryTagUncheckedCreateWithoutSummaryInput = {
    tagId: string
    createdAt?: Date | string
  }

  export type SummaryTagCreateOrConnectWithoutSummaryInput = {
    where: SummaryTagWhereUniqueInput
    create: XOR<SummaryTagCreateWithoutSummaryInput, SummaryTagUncheckedCreateWithoutSummaryInput>
  }

  export type SummaryTagCreateManySummaryInputEnvelope = {
    data: SummaryTagCreateManySummaryInput | SummaryTagCreateManySummaryInput[]
    skipDuplicates?: boolean
  }

  export type SummaryCategoryCreateWithoutSummaryInput = {
    createdAt?: Date | string
    category: CategoryCreateNestedOneWithoutSummaryCategoriesInput
  }

  export type SummaryCategoryUncheckedCreateWithoutSummaryInput = {
    categoryId: string
    createdAt?: Date | string
  }

  export type SummaryCategoryCreateOrConnectWithoutSummaryInput = {
    where: SummaryCategoryWhereUniqueInput
    create: XOR<SummaryCategoryCreateWithoutSummaryInput, SummaryCategoryUncheckedCreateWithoutSummaryInput>
  }

  export type SummaryCategoryCreateManySummaryInputEnvelope = {
    data: SummaryCategoryCreateManySummaryInput | SummaryCategoryCreateManySummaryInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSummariesInput = {
    update: XOR<UserUpdateWithoutSummariesInput, UserUncheckedUpdateWithoutSummariesInput>
    create: XOR<UserCreateWithoutSummariesInput, UserUncheckedCreateWithoutSummariesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSummariesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSummariesInput, UserUncheckedUpdateWithoutSummariesInput>
  }

  export type UserUpdateWithoutSummariesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chatHistories?: ChatGPTHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSummariesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chatHistories?: ChatGPTHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SummaryTagUpsertWithWhereUniqueWithoutSummaryInput = {
    where: SummaryTagWhereUniqueInput
    update: XOR<SummaryTagUpdateWithoutSummaryInput, SummaryTagUncheckedUpdateWithoutSummaryInput>
    create: XOR<SummaryTagCreateWithoutSummaryInput, SummaryTagUncheckedCreateWithoutSummaryInput>
  }

  export type SummaryTagUpdateWithWhereUniqueWithoutSummaryInput = {
    where: SummaryTagWhereUniqueInput
    data: XOR<SummaryTagUpdateWithoutSummaryInput, SummaryTagUncheckedUpdateWithoutSummaryInput>
  }

  export type SummaryTagUpdateManyWithWhereWithoutSummaryInput = {
    where: SummaryTagScalarWhereInput
    data: XOR<SummaryTagUpdateManyMutationInput, SummaryTagUncheckedUpdateManyWithoutSummaryInput>
  }

  export type SummaryTagScalarWhereInput = {
    AND?: SummaryTagScalarWhereInput | SummaryTagScalarWhereInput[]
    OR?: SummaryTagScalarWhereInput[]
    NOT?: SummaryTagScalarWhereInput | SummaryTagScalarWhereInput[]
    summaryId?: UuidFilter<"SummaryTag"> | string
    tagId?: UuidFilter<"SummaryTag"> | string
    createdAt?: DateTimeFilter<"SummaryTag"> | Date | string
  }

  export type SummaryCategoryUpsertWithWhereUniqueWithoutSummaryInput = {
    where: SummaryCategoryWhereUniqueInput
    update: XOR<SummaryCategoryUpdateWithoutSummaryInput, SummaryCategoryUncheckedUpdateWithoutSummaryInput>
    create: XOR<SummaryCategoryCreateWithoutSummaryInput, SummaryCategoryUncheckedCreateWithoutSummaryInput>
  }

  export type SummaryCategoryUpdateWithWhereUniqueWithoutSummaryInput = {
    where: SummaryCategoryWhereUniqueInput
    data: XOR<SummaryCategoryUpdateWithoutSummaryInput, SummaryCategoryUncheckedUpdateWithoutSummaryInput>
  }

  export type SummaryCategoryUpdateManyWithWhereWithoutSummaryInput = {
    where: SummaryCategoryScalarWhereInput
    data: XOR<SummaryCategoryUpdateManyMutationInput, SummaryCategoryUncheckedUpdateManyWithoutSummaryInput>
  }

  export type SummaryCategoryScalarWhereInput = {
    AND?: SummaryCategoryScalarWhereInput | SummaryCategoryScalarWhereInput[]
    OR?: SummaryCategoryScalarWhereInput[]
    NOT?: SummaryCategoryScalarWhereInput | SummaryCategoryScalarWhereInput[]
    summaryId?: UuidFilter<"SummaryCategory"> | string
    categoryId?: UuidFilter<"SummaryCategory"> | string
    createdAt?: DateTimeFilter<"SummaryCategory"> | Date | string
  }

  export type SummaryTagCreateWithoutTagInput = {
    createdAt?: Date | string
    summary: SummaryCreateNestedOneWithoutTagsInput
  }

  export type SummaryTagUncheckedCreateWithoutTagInput = {
    summaryId: string
    createdAt?: Date | string
  }

  export type SummaryTagCreateOrConnectWithoutTagInput = {
    where: SummaryTagWhereUniqueInput
    create: XOR<SummaryTagCreateWithoutTagInput, SummaryTagUncheckedCreateWithoutTagInput>
  }

  export type SummaryTagCreateManyTagInputEnvelope = {
    data: SummaryTagCreateManyTagInput | SummaryTagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type SummaryTagUpsertWithWhereUniqueWithoutTagInput = {
    where: SummaryTagWhereUniqueInput
    update: XOR<SummaryTagUpdateWithoutTagInput, SummaryTagUncheckedUpdateWithoutTagInput>
    create: XOR<SummaryTagCreateWithoutTagInput, SummaryTagUncheckedCreateWithoutTagInput>
  }

  export type SummaryTagUpdateWithWhereUniqueWithoutTagInput = {
    where: SummaryTagWhereUniqueInput
    data: XOR<SummaryTagUpdateWithoutTagInput, SummaryTagUncheckedUpdateWithoutTagInput>
  }

  export type SummaryTagUpdateManyWithWhereWithoutTagInput = {
    where: SummaryTagScalarWhereInput
    data: XOR<SummaryTagUpdateManyMutationInput, SummaryTagUncheckedUpdateManyWithoutTagInput>
  }

  export type SummaryCreateWithoutTagsInput = {
    id?: string
    title: string
    content: string
    summary: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSummariesInput
    categories?: SummaryCategoryCreateNestedManyWithoutSummaryInput
  }

  export type SummaryUncheckedCreateWithoutTagsInput = {
    id?: string
    userId: string
    title: string
    content: string
    summary: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: SummaryCategoryUncheckedCreateNestedManyWithoutSummaryInput
  }

  export type SummaryCreateOrConnectWithoutTagsInput = {
    where: SummaryWhereUniqueInput
    create: XOR<SummaryCreateWithoutTagsInput, SummaryUncheckedCreateWithoutTagsInput>
  }

  export type TagCreateWithoutSummaryTagsInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type TagUncheckedCreateWithoutSummaryTagsInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type TagCreateOrConnectWithoutSummaryTagsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutSummaryTagsInput, TagUncheckedCreateWithoutSummaryTagsInput>
  }

  export type SummaryUpsertWithoutTagsInput = {
    update: XOR<SummaryUpdateWithoutTagsInput, SummaryUncheckedUpdateWithoutTagsInput>
    create: XOR<SummaryCreateWithoutTagsInput, SummaryUncheckedCreateWithoutTagsInput>
    where?: SummaryWhereInput
  }

  export type SummaryUpdateToOneWithWhereWithoutTagsInput = {
    where?: SummaryWhereInput
    data: XOR<SummaryUpdateWithoutTagsInput, SummaryUncheckedUpdateWithoutTagsInput>
  }

  export type SummaryUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSummariesNestedInput
    categories?: SummaryCategoryUpdateManyWithoutSummaryNestedInput
  }

  export type SummaryUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: SummaryCategoryUncheckedUpdateManyWithoutSummaryNestedInput
  }

  export type TagUpsertWithoutSummaryTagsInput = {
    update: XOR<TagUpdateWithoutSummaryTagsInput, TagUncheckedUpdateWithoutSummaryTagsInput>
    create: XOR<TagCreateWithoutSummaryTagsInput, TagUncheckedCreateWithoutSummaryTagsInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutSummaryTagsInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutSummaryTagsInput, TagUncheckedUpdateWithoutSummaryTagsInput>
  }

  export type TagUpdateWithoutSummaryTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateWithoutSummaryTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SummaryCategoryCreateWithoutCategoryInput = {
    createdAt?: Date | string
    summary: SummaryCreateNestedOneWithoutCategoriesInput
  }

  export type SummaryCategoryUncheckedCreateWithoutCategoryInput = {
    summaryId: string
    createdAt?: Date | string
  }

  export type SummaryCategoryCreateOrConnectWithoutCategoryInput = {
    where: SummaryCategoryWhereUniqueInput
    create: XOR<SummaryCategoryCreateWithoutCategoryInput, SummaryCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type SummaryCategoryCreateManyCategoryInputEnvelope = {
    data: SummaryCategoryCreateManyCategoryInput | SummaryCategoryCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type SummaryCategoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: SummaryCategoryWhereUniqueInput
    update: XOR<SummaryCategoryUpdateWithoutCategoryInput, SummaryCategoryUncheckedUpdateWithoutCategoryInput>
    create: XOR<SummaryCategoryCreateWithoutCategoryInput, SummaryCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type SummaryCategoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: SummaryCategoryWhereUniqueInput
    data: XOR<SummaryCategoryUpdateWithoutCategoryInput, SummaryCategoryUncheckedUpdateWithoutCategoryInput>
  }

  export type SummaryCategoryUpdateManyWithWhereWithoutCategoryInput = {
    where: SummaryCategoryScalarWhereInput
    data: XOR<SummaryCategoryUpdateManyMutationInput, SummaryCategoryUncheckedUpdateManyWithoutCategoryInput>
  }

  export type SummaryCreateWithoutCategoriesInput = {
    id?: string
    title: string
    content: string
    summary: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSummariesInput
    tags?: SummaryTagCreateNestedManyWithoutSummaryInput
  }

  export type SummaryUncheckedCreateWithoutCategoriesInput = {
    id?: string
    userId: string
    title: string
    content: string
    summary: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: SummaryTagUncheckedCreateNestedManyWithoutSummaryInput
  }

  export type SummaryCreateOrConnectWithoutCategoriesInput = {
    where: SummaryWhereUniqueInput
    create: XOR<SummaryCreateWithoutCategoriesInput, SummaryUncheckedCreateWithoutCategoriesInput>
  }

  export type CategoryCreateWithoutSummaryCategoriesInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type CategoryUncheckedCreateWithoutSummaryCategoriesInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutSummaryCategoriesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutSummaryCategoriesInput, CategoryUncheckedCreateWithoutSummaryCategoriesInput>
  }

  export type SummaryUpsertWithoutCategoriesInput = {
    update: XOR<SummaryUpdateWithoutCategoriesInput, SummaryUncheckedUpdateWithoutCategoriesInput>
    create: XOR<SummaryCreateWithoutCategoriesInput, SummaryUncheckedCreateWithoutCategoriesInput>
    where?: SummaryWhereInput
  }

  export type SummaryUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: SummaryWhereInput
    data: XOR<SummaryUpdateWithoutCategoriesInput, SummaryUncheckedUpdateWithoutCategoriesInput>
  }

  export type SummaryUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSummariesNestedInput
    tags?: SummaryTagUpdateManyWithoutSummaryNestedInput
  }

  export type SummaryUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: SummaryTagUncheckedUpdateManyWithoutSummaryNestedInput
  }

  export type CategoryUpsertWithoutSummaryCategoriesInput = {
    update: XOR<CategoryUpdateWithoutSummaryCategoriesInput, CategoryUncheckedUpdateWithoutSummaryCategoriesInput>
    create: XOR<CategoryCreateWithoutSummaryCategoriesInput, CategoryUncheckedCreateWithoutSummaryCategoriesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutSummaryCategoriesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutSummaryCategoriesInput, CategoryUncheckedUpdateWithoutSummaryCategoriesInput>
  }

  export type CategoryUpdateWithoutSummaryCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateWithoutSummaryCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutChatHistoriesInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    summaries?: SummaryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatHistoriesInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    summaries?: SummaryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatHistoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatHistoriesInput, UserUncheckedCreateWithoutChatHistoriesInput>
  }

  export type UserUpsertWithoutChatHistoriesInput = {
    update: XOR<UserUpdateWithoutChatHistoriesInput, UserUncheckedUpdateWithoutChatHistoriesInput>
    create: XOR<UserCreateWithoutChatHistoriesInput, UserUncheckedCreateWithoutChatHistoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatHistoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatHistoriesInput, UserUncheckedUpdateWithoutChatHistoriesInput>
  }

  export type UserUpdateWithoutChatHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    summaries?: SummaryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    summaries?: SummaryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SummaryCreateManyUserInput = {
    id?: string
    title: string
    content: string
    summary: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatGPTHistoryCreateManyUserInput = {
    id?: string
    title: string
    content: string
    summary: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SummaryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: SummaryTagUpdateManyWithoutSummaryNestedInput
    categories?: SummaryCategoryUpdateManyWithoutSummaryNestedInput
  }

  export type SummaryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: SummaryTagUncheckedUpdateManyWithoutSummaryNestedInput
    categories?: SummaryCategoryUncheckedUpdateManyWithoutSummaryNestedInput
  }

  export type SummaryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatGPTHistoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatGPTHistoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatGPTHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SummaryTagCreateManySummaryInput = {
    tagId: string
    createdAt?: Date | string
  }

  export type SummaryCategoryCreateManySummaryInput = {
    categoryId: string
    createdAt?: Date | string
  }

  export type SummaryTagUpdateWithoutSummaryInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tag?: TagUpdateOneRequiredWithoutSummaryTagsNestedInput
  }

  export type SummaryTagUncheckedUpdateWithoutSummaryInput = {
    tagId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SummaryTagUncheckedUpdateManyWithoutSummaryInput = {
    tagId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SummaryCategoryUpdateWithoutSummaryInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutSummaryCategoriesNestedInput
  }

  export type SummaryCategoryUncheckedUpdateWithoutSummaryInput = {
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SummaryCategoryUncheckedUpdateManyWithoutSummaryInput = {
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SummaryTagCreateManyTagInput = {
    summaryId: string
    createdAt?: Date | string
  }

  export type SummaryTagUpdateWithoutTagInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: SummaryUpdateOneRequiredWithoutTagsNestedInput
  }

  export type SummaryTagUncheckedUpdateWithoutTagInput = {
    summaryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SummaryTagUncheckedUpdateManyWithoutTagInput = {
    summaryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SummaryCategoryCreateManyCategoryInput = {
    summaryId: string
    createdAt?: Date | string
  }

  export type SummaryCategoryUpdateWithoutCategoryInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: SummaryUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type SummaryCategoryUncheckedUpdateWithoutCategoryInput = {
    summaryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SummaryCategoryUncheckedUpdateManyWithoutCategoryInput = {
    summaryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SummaryCountOutputTypeDefaultArgs instead
     */
    export type SummaryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SummaryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TagCountOutputTypeDefaultArgs instead
     */
    export type TagCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TagCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryCountOutputTypeDefaultArgs instead
     */
    export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SummaryDefaultArgs instead
     */
    export type SummaryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SummaryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TagDefaultArgs instead
     */
    export type TagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TagDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SummaryTagDefaultArgs instead
     */
    export type SummaryTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SummaryTagDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryDefaultArgs instead
     */
    export type CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SummaryCategoryDefaultArgs instead
     */
    export type SummaryCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SummaryCategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChatGPTHistoryDefaultArgs instead
     */
    export type ChatGPTHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChatGPTHistoryDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}