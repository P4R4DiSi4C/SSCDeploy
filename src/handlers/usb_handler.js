import { ipcMain } from 'electron';

ipcMain.handle('usb-handler', (event, args) => {
  console.log("USB-HANDLER");
});

export default ipcMain;