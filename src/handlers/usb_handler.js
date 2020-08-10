import { ipcMain } from 'electron';

class USBHandler {
  configure() {
    ipcMain.handle('usb-handler', (event, args) => {
      console.log("USB-HANDLER");
    });
  }
}

export default USBHandler;