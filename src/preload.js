const {
  contextBridge,
  ipcRenderer
} = require("electron");

contextBridge.exposeInMainWorld(
  "api",
  {
    electronIpcInvoke: (channel, ...args) => {
      ipcRenderer.invoke(channel, args);
    },
    /*subscribe: (channel, listener) => {
      const subscription = (event, ...args) => listener(...args);
      ipcRenderer.on(channel, subscription);
  
      return () => {
        ipcRenderer.removeListener(channel, subscription);
      }
    }*/
  }
)