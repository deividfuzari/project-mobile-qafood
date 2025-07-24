import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './specs/*_test.ts',
  output: './output',
  helpers: {
    Appium: {
      platform: 'Android',
      app: 'C:/Users/Deivid Fuzari/Downloads/qafood/qafood.apk',
      host: 'localhost',
      port: 4723,
      path: '/',
      desiredCapabilities: {
        platformName: 'Android',
        automationName: 'UiAutomator2',
        appPackage: 'com.qazandoqafood',
        appActivity: 'com.qazandoqafood.MainActivity',
        deviceName: 'Pixel_9_pro',
        platformVersion: '16',
        autoGrantPermissions: true
      }
    }
  },
  include: {
    I: './steps_file'
  },
  name: 'teste-ts'
}