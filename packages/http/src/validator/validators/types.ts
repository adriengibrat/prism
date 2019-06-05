import { IPrismDiagnostic } from '@stoplight/prism-core/src/types';
import { JSONSchema4, JSONSchema6, JSONSchema7 } from 'json-schema';

export interface IHttpValidator<Target, Specs> {
  validate(target: Target, specs: Specs[], mediaType?: string): IPrismDiagnostic[];
}

export interface ISchemaValidator<S extends JSONSchema4 | JSONSchema6 | JSONSchema7> {
  validate(content: any, schema: S): IPrismDiagnostic[];
  supports(mediaType: string): boolean;
}

export interface IValidatorRegistry {
  get(
    mediaType: string,
  ): ((content: any, schema: JSONSchema4 | JSONSchema6 | JSONSchema7) => IPrismDiagnostic[]) | undefined;
}
