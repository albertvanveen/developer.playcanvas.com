---
title: Getting Started
sidebar_position: 1
---

## What is PlayCanvas?

PlayCanvas is a visual development platform for interactive web content. Both the tools and the web apps you build are powered by HTML5. The platform is web hosted so there's nothing to install and you can access your work from any device that runs one of the supported web browsers.

## Key Features

### Editor

The PlayCanvas Editor is a visual editing tool that lets you build scenes, applications and games in record time. Use the Editor to manage your project assets, to add interactivity and to communicate and work with your team. The Editor is collaborative in real-time which means you can immediately see changes made by your team and you can build and test your application across all devices instantly

<div className="iframe-container">
    <iframe loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/PS4oMLPyYfI" title="PlayCanvas Editor Live Link" allowfullscreen></iframe>
</div>

Find out more in the [editor][5] section.

### Assets

PlayCanvas is used to create and manage all the assets you need for your interactive web application. PlayCanvas accepts all major 3D file formats, plus upload images, audio and any other asset types you need.

Find out more in the [assets][6] section.

### Publishing

PlayCanvas provides instant and trouble free hosting for your WebGL application with single click. We also support instant download of your complete project ready to host on your own web server.

Find out more in the [publishing][7] section.

## Supported Browsers

PlayCanvas was always designed to be plugin free, running natively in the browser. The client-side codebase is 100% JavaScript and built entirely on HTML5 and related APIs (such as WebGL). Why was this important?

* Mobile/tablet devices do not permit plugin installation and continue to improve support for HTML5.
* PlayCanvas web apps load seamlessly without a plugin install or plugin load step.
* PlayCanvas web apps run in a standard [DOM][8] element (a canvas) and you can composite it on the page or transform it via CSS.
* No dependency on a third-party plugin technology which may change over time. The only dependency is on the browser itself.

At the time of writing, the browser requirements are currently as follows:

| Browser                                     | Version | Win      | macOS    | Linux    | Chrome OS | Android  | iOS      |
|---------------------------------------------|---------|----------|----------|----------|-----------|----------|----------|
| [Chrome](https://www.google.com/chrome/)    | 9.0+    | &#x2713; | &#x2713; | &#x2713; | &#x2713;  | &#x2713; | &#x2713; |
| [Safari](https://www.apple.com/safari/)     | 8.0+    |          | &#x2713; |          |           |          | &#x2713; |
| [Firefox](https://www.mozilla.org/firefox/) | 4.0+    | &#x2713; | &#x2713; | &#x2713; |           | &#x2713; | &#x2713; |
| [Edge](https://www.microsoft.com/edge)      | 12.0+   | &#x2713; |          |          |           |          |          |
| [Opera](https://www.opera.com/)             | 12.0+   | &#x2713; | &#x2713; | &#x2713; |           | &#x2713; |          |

If you are in doubt as to whether your browser supports WebGL (required to run PlayCanvas), visit [this page][9]. If you see a spinning cube, you are all set!

[5]: /user-manual/editor
[6]: /user-manual/assets
[7]: /user-manual/publishing
[8]: /user-manual/glossary/#dom
[9]: https://get.webgl.org/
