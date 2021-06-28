/** @format */

import { CSSProperties, VNodeChild } from 'vue';
import { createTypes, VueTypeValidableDef, VueTypesInterface } from 'vue-types';

export type VueNode = VNodeChild | JSX.Element;

type PropTypes = VueTypesInterface & {
  readonly style: VueTypeValidableDef<CSSProperties>
  readonly stringOrNumber: VueTypeValidableDef<string | number>
  readonly looseBool: VueTypeValidableDef<boolean>
  readonly VNodeChild: VueTypeValidableDef<VueNode>
};

export function withUndefined<T extends { default?: any }>(type: T): T {
  type.default = undefined;
  return type;
}

const propTypes = createTypes({
  func: undefined,
  bool: undefined,
  string: undefined,
  number: undefined,
  object: undefined,
  integer: undefined,
}) as PropTypes;

propTypes.extend([
  {
    name: 'looseBool',
    getter: true,
    type: Boolean,
    default: undefined,
  },
  {
    name: 'style',
    getter: true,
    type: [String, Object],
    default: undefined,
  },
  {
    name: 'VNodeChild',
    getter: true,
    type: undefined,
  },
  {
    name: 'stringOrNumber',
    getter: true,
    type: [String, Number],
    default: undefined,
  },
]);
export { propTypes };
