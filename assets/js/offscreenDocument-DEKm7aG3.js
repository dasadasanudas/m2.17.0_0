import"./preload-helper-xKIU3iAw.js";import"./localStorage-BThj8CCp.js";import{m as e}from"./migrateLegacyUserMessageHandler-aPkGeFs_.js";chrome.runtime&&chrome.runtime.onMessage.addListener(((r,a,t)=>{if("legacyUserMigration:triggerOffscreenDocumentRequest"===r.type)return e(r.payload,t),!0}));