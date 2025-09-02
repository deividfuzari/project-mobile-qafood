import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') });

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

const BROWSERSTACK_USERNAME = process.env.BROWSERSTACK_USERNAME;
const BROWSERSTACK_ACCESS_KEY = process.env.BROWSERSTACK_ACCESS_KEY;

export const config: CodeceptJS.MainConfig = {
  tests: './specs/*_test.ts',
  output: './output',
  helpers: {
    Appium: {
      appiumV2: true,
      platform: 'android',
      host: 'hub-cloud.browserstack.com',
      port: 4444,
      user: BROWSERSTACK_USERNAME, //foi criado variavel por isso passei sem process.env
      key: BROWSERSTACK_ACCESS_KEY, //foi criado variavel por isso passei sem process.env
      desiredCapabilities: {
        platformName: process.env.PLATFORM_NAME || '',
        deviceName: process.env.DEVICE || '',
        'appium:automationName': process.env.AUTOMATION_NAME || '',
        autoGrantPermissions: true,
        newCommandTimeout: 300000,
        androidDeviceReadyTimeout: 300000,
        androidInstallTimeout: 90000,
        appWaitDuration: 300000,
        gpsEnabled: true,
        isHeadless: false,
        noReset: false,
        noSign: true,
        'bstack:options': {
          appiumVersion: '2.0.1',
        },
        browserstackLocal: false,
        interactiveDebugging: true,
      },
    },
  },
  include: {
    I: './steps_file'
  },
  name: 'teste-ts'
}