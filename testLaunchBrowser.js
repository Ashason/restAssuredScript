//Import module for puppeteer
const puppeteer = require('puppeteer');
const puppeteerFirefox = require('puppeteer-firefox');
const puppeteerEdge = require('puppeteer-core');

let browser;
let page;

//How to launch Browser in Chromium
 browser = await puppeteer.launch({headless:false,slowMo:0,args:['--start-maximized']});
 page = await browser.newPage();

 //How to launch Browser in chrome
 browser = await puppeteer.launch({headless:false,slowMo:0,args:['--start-maximized'],executablePath:"C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"});
 page = await browser.newPage();

 //How to launch in firefox
 browser = await puppeteerFirefox.launch({headless:false,slowMo:0,args:['--start-maximized']});
 page = await browser.newPage();

 //How to launch in edge
 browser = await puppeteerEdge.launch({headless:false,slowMo:0,args:['--start-maximized'],executablePath: 'C:\\Windows\\SystemApps\\Microsoft.MicrosoftEdge_8wekyb3d8bbwe\\MicrosoftEdge.exe'});
 page = await browser.newPage();

 /*
 As we see there are four parameter in launch method
 1.headless--> ture for headless mode,false for headfull mode
 2.executablePath-->Only used for Edge and Chrome.To fetch application path
 3.args-->For controlling screen size mode.
 4.slowMo-->To provide control over seep of browser.
 */
