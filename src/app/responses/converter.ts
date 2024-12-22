/**
 * An interface for converting backend responses (see app/services/responses) into their application representations (see app/models)
 */
export interface Converter<A, B> {
  convert(from: A): B;
}

/**
 * Since it seems silly to create Converter objects every time we need to convert objects, we use this annotation to enforce that the
 * converter classes implement the interface statically. To use, decorate a converter class with:
 * @code @StaticImplements<Converter<BackendResponse, Model>>
 * @see https://github.com/Microsoft/TypeScript/issues/14600#issuecomment-333416173
 */
export function StaticImplements<T>() {
  return (constructor: T) => { };
}
