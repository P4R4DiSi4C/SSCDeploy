const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  CloseWindow: () => {
    ipcRenderer.invoke('close-window');
  },
  MinimizeWindow: () => {
    ipcRenderer.invoke('minimize-window');
  },
  MaximizeWindow: () => {
    //TODO: DETECT IF MAXIMIZED AND BACK TO NORMAL
    ipcRenderer.invoke('maximize-window');
  },
  Ping: async (args) => {
    console.log('PRELOAD -> IPCMain: PING');
    return await ipcRenderer.invoke('PING', args);
  }
  /*subscribe: (channel, listener) => {
      const subscription = (event, ...args) => listener(...args);
      ipcRenderer.on(channel, subscription);
  
      return () => {
        ipcRenderer.removeListener(channel, subscription);
      }
    }*/
});
