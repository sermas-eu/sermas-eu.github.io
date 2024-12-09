---
sidebar_position: 0.00030
---

# SERMAS Toolkit Node Library

The [SERMAS Toolkit Node Library](https://github.com/sermas-eu/sermas-toolkit-node-sdk) is an open-source npm package that provides you with some high-level abstractions to develop your own custom SERMAS application.

The main object exposed by the library is the `SermasApp`, an interface over the RESTful API and MQTT broker client.

The TypeScript example below shows how to initialize an app object and subscribe to a dialogue event. (It uses the nest.js framework, but the library is not coupled with this framework).

```javascript
import { Logger } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { SermasApp, Store, Tools, UI } from '@sermas/sermas-toolkit-node-sdk';

emitter: EventEmitter2 // ...
sermas = new SermasApp(
  {
    SERMAS_CLIENT_ID: process.env.SERMAS_CLIENT_ID,
    SERMAS_CLIENT_SECRET: process.env.SERMAS_CLIENT_SECRET,
    SERMAS_APPID: process.env.SERMAS_APPID,
    SERMAS_BASE_URL: process.env.SERMAS_BASE_URL,
  },
  emitter,
  new Logger('SermasSDKService') as any,
);

sermas.addSub(
  async () =>
    await sermas.client.events.dialogue.onToolTriggered((ev) => {
      logger.debug(`tool triggered sessionId=${ev.sessionId}`);
      emitter.emit(`tool.trigger`, ev);
    }),
);
```

