---
title: Elements
sidebar_position: 3
---

エレメント（Elements）は、ユーザーインターフェーススクリーンを構成する個々のエレメントです。ユーザーインターフェースエレメントは、Elementコンポーネントをエンティティにアタッチし、そのエンティティをスクリーンエンティティの子エレメントまたは子孫エレメントとして追加することで追加されます。スクリーンの一部であるエレメントは、通常のエンティティとは異なる点でそのトランスフォームが計算され、したがって画面上の位置が決まります。

Elementコンポーネントでは、親に対するエンティティの位置を計算するために使用されるローカル座標、回転、スケールに加えて、アンカー（anchor）、ピボット（pivot）、マージン（margin）プロパティも使用されます。アンカーは、ローカル座標がどこに対して計測されるかを決定し、ピボットはエレメントの長方形の中心点を指定し、マージンはエレメントの長方形のエッジとアンカーの間の距離を示します。これらのプロパティを使用することで、Elementコンポーネントは正確な位置やサイズを計算します。

これらの新しいプロパティは、他のエレメントとの配置を整えたり、エレメントとの固定距離で位置を指定したりするなど、ユーザーインターフェースのレイアウトを細かく制御するための豊富なオプションを提供します。これにより、エレメント同士を整列させたり、エレメントとの距離を固定したりするなど、柔軟なUIデザインが可能となります。

## エレメントの配置 {#element-positioning}

![Element Guide](/images/user-manual/user-interface/elements/element-guide.png)

## エレメントのサイズ変更 {#element-resizing}

エレメントのサイズを変更するには、サイズ変更gizmoを有効にするか、'4'を押します。

![Resize Gizmo Toolbar](/images/user-manual/user-interface/elements/gizmo-resize.png)

次に、角をドラッグしてエレメントのサイズを調整します。

![Resize Gizmo Viewport](/images/user-manual/user-interface/elements/gizmo-resize-viewport.png)

## ピボット (Pivot) {#pivot}

エレメントのピボット (pivot) プロパティは、位置、回転、スケールが適用される基準点を決定します。ピボットは、エレメントの全体の幅と高さに対して、X方向とY方向の位置を示す0から1までの2つの数値で定義されます。例えば、`[0,0]`はピボットをエレメントの左下に設定し、`[1,1]`はピボットをエレメントの右上に設定します。ピボットの位置は、エレメントの変換に対して重要な影響を与えます。

![Pivot](/images/user-manual/user-interface/elements/pivot.png)

## アンカー (Anchor) {#anchor}

アンカー（anchor）プロパティは、エレメントの位置が親のどの点または点群から計算されるかを決定します。アンカーの値は、`[minX, minY]` および `[maxX, maxY]` の2つの点で指定されます。エディタでは、これは [minX, minY, maxX, maxY] のように4つの数値として表示されます。アンカーは、エレメントの相対位置やサイズを制御する上で重要な役割を果たします。

![Anchor](/images/user-manual/user-interface/elements/anchor-editor.png)

例えば、アンカーを `[0,0,0,0]` に設定すると、エレメントは親エレメントの左下にアンカーされます。エレメントの位置は、親エレメントの左下からのオフセットとして設定されます。

## アンカーの分割 {#split-anchors}

エレメント (Element) の異なる辺を別の位置に固定することが便利な場合もあります。たとえば、解像度を問わず、画面を満たすよう伸びるエレメントを作成する場合などです。これは、アンカーの最小値と最大値を分割することで行うことができます。

![Split Anchor](/images/user-manual/user-interface/elements/split-anchor.png)

この画像では、アンカーが`[0,0,1,1]`に設定されており、エレメントのエッジを親のエッジにアンカーしています。各エッジにはマージンとして50ピクセルがあり、エレメントは親を50ピクセルのマージンで埋めるように固定されています。

## マージン (Margin) {#margin}

マージン（margin）プロパティは、アンカー（anchor）の値が1つの軸で分割されている場合にのみ使用できます。マージンは、エレメントのエッジからアンカーまでのScreenコンポーネントのピクセル数を設定します。Elementコンポーネント上のスクリプトでは、`left`、`right`、`top`、`bottom`というプロパティでマージンの値を簡単に指定することができます。

## 自由なElement {#loose-elements}

エレメント（Element）の主な使用用途は、ユーザーインターフェースScreenコンポーネントの一部であることですが、スクリーンの一部ではないElementコンポーネントを持つことも有効です。例えば、ワールド内の単一のテキストエレメントなどです。

スクリーンを持たないエレメント (Element) のサイズと位置は、若干異なる挙動を示します。スクリーン上の32x32のエレメントは32ピクセルですが、スクリーンを持たないエレメントの場合、そのサイズは32メートル×32メートルとなります。サイズを適切に調整してください。
