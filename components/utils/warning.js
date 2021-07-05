import warning1, { resetWarned } from '@fe6/water-pro/es/vc-util/warning';

export { resetWarned };

export default (valid, component, message = '') => {
  warning1(valid, `[water pro: ${component}] ${message}`);
};
