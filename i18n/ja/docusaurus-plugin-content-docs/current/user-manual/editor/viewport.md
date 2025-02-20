---
title: ビューポート (Viewport)
sidebar_position: 4
---

![Viewport][1]

ビューポートは現在レンダリングされているシーンを表示します。エディタの現在のカメラを操作して、自由にシーン内を移動できます。

## カメラ (Cameras) {#cameras}

エディタは最初に **Perspective** (透視投影) カメラを使用するように設定されています。このカメラは、シーン内に浮かんでいるかのように見えます。カメラドロップダウンメニューを使用して、他のさまざまなカメラを使用してシーンを表示できます。

![Camera Dropdown][2]

上部、下部、前面、背面、左側、右側の**正投影**カメラでは、遠近法のないシーンを表示できます。位置を微調整するのに便利です。

また、カメラメニューを使用して、シーン内の任意のカメラエンティティを選択することもできます。これにより、ゲーム内カメラを必要な位置に正確に配置できます。

## ギズモ (Gizmo) {#gizmos}

![Gizmos][3]

スクリーンショットで見ることができる3色の軸は、[ギズモ][4]と呼ばれます。これは、選択したエンティティの変換行列を操作するために使用されます。ギズモには3つの種類があります。矢印が軸の端にある「移動」、色付きの円がある「回転」、軸の端にキューブがある「拡大縮小」です。

## Render Mode {#render-mode}

You can modify the viewport render mode using this drop-down menu in the top-right of the viewport:

![Viewport Render Mode Menu](/images/user-manual/editor/viewport/render-mode-menu.png)

It allows you to toggle wireframe rendering:

![Viewport Wireframe](/images/user-manual/editor/viewport/wireframe.png)

You can also visualize your scene in various debug render modes. This restricts the rendered scene to just show albedo, normals, AO, emission and more.

![Viewport Render Modes](/images/user-manual/editor/viewport/render-modes.png)

[1]: /images/user-manual/editor/viewport/viewport.jpg
[2]: /images/user-manual/editor/viewport/camera-dropdown.jpg
[3]: /images/user-manual/editor/viewport/gizmos.jpg
[4]: /user-manual/glossary#gizmo
