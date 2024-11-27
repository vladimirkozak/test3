// Убедитесь, что service worker контролирует всю область
self.__WB_MANIFEST = self.__WB_MANIFEST || [];
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);