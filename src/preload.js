const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  CloseWindow: () => {
    ipcRenderer.invoke('close-window');
  },
  Ping: async(args) => {
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
