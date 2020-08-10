const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  USBHandler: () => {
    ipcRenderer.invoke('usb-handler');
  },
  CloseWindow: () => {
    ipcRenderer.invoke('close-window');
  },
  MinimizeWindow: () => {
    ipcRenderer.invoke('minimize-window');
  },
  MaximizeWindow: () => {
    ipcRenderer.invoke('maximize-window');
  },
  Ping: async (args) => {
    console.log('PRELOAD -> IPCMain: PING');
    return await ipcRenderer.invoke('PING', args);
  }
});
