const path = require('path');

const ROOT = path.resolve(__dirname, '../');
const APP_DIR = path.resolve(ROOT, 'src');
const PUBLIC_DIR = path.resolve(ROOT, 'public');
module.exports = {
  $SRC: APP_DIR,
  $PUBLIC: PUBLIC_DIR,
  $VIEW: `${APP_DIR}/views`,
  $APPS: `${APP_DIR}/views/apps`,
  $LAYOUT: `${APP_DIR}/views/layout`,
  $CONST: `${APP_DIR}/constants`,
  $ROUTE: `${APP_DIR}/route`,
  $STYLE: `${PUBLIC_DIR}/styles`,
  $IMAGE: `${PUBLIC_DIR}/images`,
  $UTIL: `${APP_DIR}/util`,
  $STORE: `${APP_DIR}/store`,
  $API: `${APP_DIR}/api`,
  $URL: `${APP_DIR}/api/url`,
  $SHARED: `${APP_DIR}/views/shared`,
};
