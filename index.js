const { app, BrowserWindow } = require('electron');
const {autoUpdater} = require('electron-updater');
const path = require('path');
const log = require('electron-log');
log.transports.file.resolvePath = ()=> path.join(__dirname, 'logs/main.log');
log.log("application version", + app.getVersion());

let win  
 function createWindow(){
    win = new BrowserWindow({width:300, height:400})
    win.loadFile('./index.html')
 }


 app.on('ready',()=>{
    createWindow();
    autoUpdater.checkForUpdatesAndNotify()
 })


 autoUpdater.on("update-available",()=>{
    log.info("update-available")
 })

 
 autoUpdater.on("update-not-available",()=>{
   log.info("update-not-available")
})


autoUpdater.on('error',()=>{
   log.info('error');
})

autoUpdater.on('download-progress',(progress)=>{
   log.info('download-progress');
   log.info(progress);
})

 autoUpdater.on('checking-for-update',()=>{
    log.info('checking-for-update');
 })


 autoUpdater.on('download-progress',()=>{
    log.info('download-progress');
 })





 autoUpdater.on('update-downloaded',()=>{
    log.info('update-downloaded');
 })

