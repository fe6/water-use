// myName -> my-name
export function toKebabCase(input: string): string {
  return input.replace(/[A-Z]/g, (val, index) => (index === 0 ? '' : '-') + val.toLowerCase());
}

// name `v2.0.0` -> name
export function removeVersion(str: string) {
  return str.replace(/`(\w|\.)+`/g, '').trim();
}

// *boolean* -> boolean
// _boolean_ -> boolean
export function formatType(type: string) {
  return type
    .replace(/(^(\*|_))|((\*|_)$)/g, '')
    .replace('\\', '')
    .replace('\\', '');
}

// 扩展带 - 的组件名字
const whiteList = [
  'basic-arrow',
  'basic-help',
  'basic-title',
  'container-collapse',
  'container-lazy',
  'container-scroll',
  'form-pro',
  'modal-pro',
  'select-api',
  'table-pro',
];

export function getComponentName(name: string) {
  const isLineComp = whiteList.includes(name);
  let title = name
    .split('-')
    .map(it => it.substring(0, 1) + it.substring(1))
    .join('');

  if (isLineComp) {
    title = name;
  }

  return title.substring(0, 1).toUpperCase() + title.substring(1);
}

export function normalizePath(path: string): string {
  return path.replace(/\\/g, '/');
}
