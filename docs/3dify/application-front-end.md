---
sidebar_position: 0.0003
---


# Application front end

The front end provides users with a gallery of pictures they have uploaded to generate their avatars. The gallery is proposed as a grid of photos to make it look familiar to users accustomed to picture galleries installed on their smartphones. Alongside the gallery, users are provided with a box to upload their pictures through drag-and-drop and selection from their computer.

Consider that a user uploads a picture either way; the platform shows users the update's progress to keep them informed about what is happening to avoid refreshes or other actions that could only worsen the user experience, even though loading a picture does not take much time. When the loading is complete, users can access the picture from the gallery, and by clicking on it, they can preview the picture and gain access to several features. Below the preview, they have an action bar with options such as zoom-in, zoom-out, flip horizontally and vertically, rotate in both directions and the most important one–the customization option, which is dedicated to avatar customization and rendering using the Unity-based front end.

The application does not support logging in yet, but it is already designed with the capabilities to do so, and this is why users can already see buttons for logging in and out. This functionality will be enabled in future versions using the MongoDB database.

The WebGL front-end, developed using the Unity game engine, allows users to preview an initial version of their avatar based on the image uploaded to the web application described above.

After initial facial feature inference and avatar generation, the application displays a high-fidelity rendering of the fully animated avatar. This avatar includes a mesh with attached materials and textures, as well as a skeleton for use in applications such as XR and video games.

If the user is not satisfied with the initial results, the application offers extensive customization of facial features, including the head, eyes, nose, hair, and other details, using the panel on the left.

Customization is done by adjusting position and size values using sliders or by selecting from graphical options (eyes, hair, etc.).

By pressing the Build button in the lower left corner, the user initiates the avatar generation pipeline. This process, which takes more than 10 seconds, sends the new face parameters to the backend services to generate a modified version of the avatar.
