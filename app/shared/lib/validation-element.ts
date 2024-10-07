import { ReactElement } from 'react';

export function isValidElement(object: any): object is ReactElement {
  return (
    typeof object === 'object' &&
    object !== null &&
    'type' in object &&
    'props' in object
  );
}
