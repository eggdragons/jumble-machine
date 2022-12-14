export const intricateDescriptions = [
  {
    title: "1.分類",
    text: "メインパーツ、オプションパーツ、背景を分類する。背景は、必ず一つ選ぶ必要がある。",
  },
  {
    title: "2.ペア設定　メインパーツ",
    text: [
      "メインパーツは、重み付け・個体数・確率での排出が可能。ただし、少なくとも重み付け排出の組合せ総数が、製作総数を超える必要がある。",
      "メインパーツ同士でペア設定が可能。ペア設定するには、中のパーツの名前が全て一致している必要がある。",
    ],
    description: [
      "例）",
      "[メインパーツ]頭、[パーツの種類]青、赤、黄",
      "[メインパーツ]体、[パーツの種類]青、赤、黄",
      "[メインパーツ]耳、[パーツの種類]青、赤、黒",
      "※この場合、頭と体はペアリングできるが、体と耳はペアリングできない",
    ],
  },
  {
    title: "3.ペア設定　オプションパーツ",
    text: [
      "オプションパーツは、メインパーツのパーツの種類ごとに紐づけて排出することが出来る。",
      "ただし、同じオプションパーツを別のメインパーツに紐づけることはできない。",
      "個体数・確率での排出が可能。",
    ],
    description: [
      "例）",
      "[メインパーツ]頭、[パーツの種類]青へのペア設定",
      "⭕️[オプションパーツ]耳、[パーツの種類]青",
      "⭕️[オプションパーツ]尻尾、[パーツの種類]青",
      "⭕️[オプションパーツ]うちわ、[パーツの種類]赤、青、黄",
    ],
    description2: [
      "",
      "[メインパーツ]頭、[パーツの種類]赤へのペア設定",
      "❌[オプションパーツ]耳、[パーツの種類]青",
      "⭕️[オプションパーツ]尻尾、[パーツの種類]赤",
    ],
    description3: [
      "※この場合、[オプションパーツ]耳、[パーツの種類]青は、左側（[メインパーツ]頭、[パーツの種類]青）で既に使われているので再度使うことはできない",
    ],
  },
];
