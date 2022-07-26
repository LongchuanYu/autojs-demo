auto.waitFor()
var appName = "微信";
launchApp(appName);
sleep(1000)
var tar = click("茜肥")
sleep(1000)
id("b3q").findOne().click();
sleep(1000)
var t = text('视频通话').findOne();
click(t.bounds().centerX(), t.bounds().centerY());
