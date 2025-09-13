import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') });

setHeadlessWhen(process.env.HEADLESS);
setCommonPlugins();

const BROWSERSTACK_USERNAME = process.env.BROWSERSTACK_USERNAME;
const BROWSERSTACK_ACCESS_KEY = process.env.BROWSERSTACK_ACCESS_KEY;
const BROWSERSTACK_APP = process.env.BROWSERSTACK_APP;

export const config: CodeceptJS.MainConfig = {
  tests: './specs/*_test.ts',
  output: './output',
  helpers: {
    Appium: {
      appiumV2: true,
      host: 'hub-cloud.browserstack.com',
      port: 4444,
      user: BROWSERSTACK_USERNAME,
      key: BROWSERSTACK_ACCESS_KEY,

      // ✅ estes dois devem ficar no topo
      platform: 'android',
      app: BROWSERSTACK_APP,

      desiredCapabilities: {
        deviceName: 'Samsung Galaxy S23 Ultra',
        'appium:automationName': 'UIAutomator2',

        autoGrantPermissions: true,
        newCommandTimeout: 300000,

        // opções do BrowserStack
        'bstack:options': {
          appiumVersion: '2.0.1',
          projectName: 'Projeto Qafood',
          buildName: 'Build 01',
          sessionName: 'Rodando no BrowserStack Qafood',
          interactiveDebugging: true,
        },
      },
    },
  },
  include: {
    I: './steps_file',
  },
  name: 'teste-ts',
};
