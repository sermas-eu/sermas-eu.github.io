---
sidebar_position: 0.0004
---

# Animations

The SERMAS toolkit integrates a set of predefined animations:
- `idle`
- `listening`
- `talking`
- `waving`

The animations are applied during the interaction with the user, making the avatar more realistic and human-friendly.

### Adding animations

Custom animations can be created and added to the avatar interaction pipeline.
The SERMAS avatar animations are based on the readyplayer.me body skeleton structure (see [RPM Body skeleton](https://docs.readyplayer.me/ready-player-me/api-reference/avatars/full-body-avatars)), so as long the animation is working with RPM models, it should work also with the SERMAS avatar ones.

The animations must be placed in the static folder of the [Sermas kiosk](https://github.com/sermas-eu/sermas-kiosk), in order to be loaded at runtime:
```
sermas-kiosk
├──static
|  ├── animations
|  │   ├── idle.glb
|  │   ├── listening.glb
|  │   ├── talking.glb
|  │   └── waving.glb
```

It is also possible to add new type of animations by adding them to the static folder and managing the avatar behaviour by extending the `AnimationLoader` class in the [SERMAS web toolkit](https://github.com/sermas-eu/sermas-toolkit-web/blob/main/src/avatar/animations/loader/index.ts).