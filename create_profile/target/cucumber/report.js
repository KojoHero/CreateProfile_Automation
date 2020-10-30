$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/Create_profile/create_profile/src/test/java/Create_Profile/BusPro.feature");
formatter.feature({
  "line": 3,
  "name": "Marketplace",
  "description": "",
  "id": "marketplace",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@COMMUNITY-370"
    },
    {
      "line": 2,
      "name": "@REQ_COMMUNITY-2"
    }
  ]
});
formatter.before({
  "duration": 6293269500,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 5,
      "value": "#Tests An organizer user should be able to create a profile page on the platform."
    },
    {
      "line": 6,
      "value": "#"
    },
    {
      "line": 7,
      "value": "#*Acceptance Criteria:*"
    },
    {
      "line": 8,
      "value": "#"
    },
    {
      "line": 9,
      "value": "#Given: The business user should have signed up and logged in (View individual Profile)"
    },
    {
      "line": 10,
      "value": "#"
    },
    {
      "line": 11,
      "value": "## A user should be able to view the profile page with the details they provided when they click on the Profile"
    },
    {
      "line": 12,
      "value": "## The page consists of these fields: *business Title, *Category, region/province/state, description, city, town *location (GPS), *email, *phone, website, description, and profile logo"
    },
    {
      "line": 13,
      "value": "## All fields should be validated."
    },
    {
      "line": 14,
      "value": "## On pressing a save button, form data should be saved in the database"
    },
    {
      "line": 15,
      "value": "## The user should be able to update this information via add, remove, update operations when clicked Edit"
    },
    {
      "line": 16,
      "value": "## Email can only be changed from account settings"
    }
  ],
  "line": 18,
  "name": "Verify if users can update their profile information",
  "description": "",
  "id": "marketplace;verify-if-users-can-update-their-profile-information",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@TEST_COMMUNITY-422"
    },
    {
      "line": 17,
      "name": "@REQ_COMMUNITY-15"
    },
    {
      "line": 17,
      "name": "@TESTSET_COMMUNITY-421"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User visits the community platform and logs in",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User goes to edit profile",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User taps on organization title",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User taps on website",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User taps on phone number",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User taps on digital address",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User taps on Town",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User taps on Description",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "when user click on save",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "user should be told profile updated",
  "keyword": "Then "
});
formatter.match({
  "location": "Profile.user_visits_the_community_platform_and_logs_in()"
});
formatter.result({
  "duration": 3960881800,
  "status": "passed"
});
formatter.match({
  "location": "Profile.user_goes_to_edit_profile()"
});
formatter.result({
  "duration": 8827945500,
  "status": "passed"
});
formatter.match({
  "location": "Profile.user_taps_on_organization_title()"
});
formatter.result({
  "duration": 8175125200,
  "status": "passed"
});
formatter.match({
  "location": "Profile.user_taps_on_website()"
});
formatter.result({
  "duration": 5174545500,
  "status": "passed"
});
formatter.match({
  "location": "Profile.user_taps_on_phone_number()"
});
formatter.result({
  "duration": 8106566000,
  "status": "passed"
});
formatter.match({
  "location": "Profile.user_taps_on_digital_address()"
});
formatter.result({
  "duration": 8117026300,
  "status": "passed"
});
formatter.match({
  "location": "Profile.user_taps_on_Town()"
});
formatter.result({
  "duration": 8129659200,
  "status": "passed"
});
formatter.match({
  "location": "Profile.user_taps_on_Description()"
});
formatter.result({
  "duration": 8153061000,
  "status": "passed"
});
formatter.match({
  "location": "Profile.when_user_click_on_save()"
});
formatter.result({
  "duration": 8065781100,
  "status": "passed"
});
formatter.match({
  "location": "Profile.user_should_be_told_profile_updated()"
});
formatter.result({
  "duration": 8093112500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@id\u003d\u0027myModal\u0027]/div[2]/div/p\"}\n  (Session info: chrome\u003d85.0.4183.121)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-6APU30H\u0027, ip: \u0027192.168.1.188\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.121, chrome: {chromedriverVersion: 84.0.4147.30 (48b3e868b4cc0..., userDataDir: C:\\Users\\USER\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:57973}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 2cdc1d4c8fb6143dc1cad1c4be3819a0\n*** Element info: {Using\u003dxpath, value\u003d//div[@id\u003d\u0027myModal\u0027]/div[2]/div/p}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat steps.Profile.user_should_be_told_profile_updated(Profile.java:107)\r\n\tat ✽.Then user should be told profile updated(F:/Create_profile/create_profile/src/test/java/Create_Profile/BusPro.feature:28)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 666302700,
  "status": "passed"
});
});