//参考資料
// https://ics.media/entry/200825/#if

/**
 * 要素の追加や削除
push()メソッド : 配列の最後に要素を追加
pop()メソッド : 配列の最後の要素を削除
unshift()メソッド : 配列の先頭に要素を追加
shift()メソッド : 配列の先頭の要素を削除
 */

//上記のメソッドを記述しない記述方
const list1 = [1, 2, 3];

// 要素を先頭に追加:unshift()メソッドの代わり
const element = 0; // 追加したい要素
const list2 = [element, ...list1]; // 先頭に追加

console.log(list2); // [0, 1, 2, 3]

// 要素を末端に追:pop()メソッド
const element4 = 4; // 追加したい要素
const list3 = [...list1, element4]; // 末尾に追加

console.log(list3); // [1, 2, 3, 4]


// 要素の削除（削除したい番号を指定）
const indexDelete = 0; // 削除したい配列番号
const list4 = list1.filter((_, index) => index !== indexDelete);

console.log(list4); // [1, 2, 3] ※0が無くなっている


/**
 * 　配列の加工
 */

//数値配列で中の値を加工
const list5= [1, 2, 3];
const list6 = list5.map(item => item * 2); // 2倍に

console.log(list5); // [1, 2, 3] 元の配列のまま
console.log(list6); // [2, 4, 6] 加工後の配列

//文字列加工時
const list7 = ["和歌山", "岩手"];
const list8 = list7.map(item => item + "県"); // 2倍に

console.log(list7); // ['和歌山', '岩手'] 元の配列のまま
console.log(list8); // ['和歌山県', '岩手県'] 加工後の配列

//新しい要素でうめる
const list9 = new Array(5).fill("A");

console.log(list9); // ['A', 'A', 'A', 'A', 'A']

//配列の順番を逆転

const list10 = [1, 2, 3];
const list11 = [...list1].reverse(); // 逆転

console.log(list10); // [1, 2, 3] 元の配列のまま
console.log(list11); // [3, 2, 1] 加工後の配列

//配列の結合
const list12 = [1, 2, 3];
const list13 = [4, 5, 6];

const list14 = [...list12, ...list13]; // 結合

//concat()でも結合可能
const list15 = list12.concat(list13);

console.log(list12); // [1, 2, 3] 元の配列のまま
console.log(list13); // [4, 5, 6] 元の配列のまま

console.log(list14); // [1, 2, 3, 4, 5, 6] 加工後の配列
console.log(list15); // [1, 2, 3, 4, 5, 6] 加工後の配列

//並び替え（数値配列の昇順）
const list16 = [3, 1, 2];
const list17 = [...list16].sort(); // 並び順の整理

console.log(list16); // [3, 1, 2] 元の配列のまま
console.log(list17); // [1, 2, 3] 加工後の配列

//並び替え（数値配列の降順）
const list18 = [3, 1, 2];
const list19 = [...list18].sort((a, b) => b - a); // 並び順の整理

console.log(list18); // [3, 1, 2] 元の配列のまま
console.log(list19); // [3, 2, 1] 加工後の配列

//並び替え（オブジェクトIDの昇順）
const list20 = [
  {id: 2, label: "青森県"},
  {id: 3, label: "秋田県"},
  {id: 1, label: "北海道"},
];
const list21 = [...list20].sort((a, b) => a.id - b.id); // 並び順の整理

console.log(list20); // 元の配列のまま
console.log(list21); // 加工後の配列 [{id: 1, label: "北海道"}, {id: 2, label: "青森県"}, {id: 3, label: "秋田県"}]

//並び替え（文字列）
const list22 = ["A", "C", "B"];
const list23 = [...list22].sort((a, b) => a.localeCompare(b)); // 並び順の整理

console.log(list22); // ['A', 'C', 'B'] 元の配列のまま
console.log(list23); // ['A', 'B', 'C'] 加工後の配

//並び替え（文字列、逆の場合）
const list24 = ["A", "C", "B"];
const list25 = [...list24].sort((a, b) => b.localeCompare(a)); // 🌟ここを編集

console.log(list25); // ['C', 'B', 'A'] 🌟並び順が逆になっている


//配列に含まれているかを調べる

const list26 = ["A", "C", "B"];
const target = "C"; // 条件とする値
const isHit = list26.includes(target);

console.log(isHit); // true

//要素が1つでも条件に合致するかを調べる
const list27 = [
  {id: 2, label: "青森県"},
  {id: 3, label: "秋田県"},
  {id: 1, label: "北海道"},
];
const targetName = "秋田県"; // 条件とする値
const isHitName = list27.some(item => item.label === targetName)

console.log(isHitName); // true

//すべて条件に合致するかを調べる
const list28 = [
  {label: "青森県", area: "東北地方"},
  {label: "秋田県", area: "東北地方"},
  {label: "岩手県", area: "東北地方"},
];
const target_Name = "東北地方"; // 条件とする値
const isEvery = list28.every(item => item.area === target_Name);

console.log(isEvery); // true 配列のすべての要素は「東北地方」である

//条件に合致する要素を調べる
const list29 = [
  {id: 2, label: "青森県"},
  {id: 3, label: "秋田県"},
  {id: 1, label: "北海道"},
];
const targetId = 3; // 条件とする値
const item = list29.find(item => item.id === targetId);

console.log(item); // {id: 3, label: "秋田県"}

//find()メソッドは配列の先頭から調べる、配列の先頭に近い要素が戻り値になります。
//もし、配列の最後から検索したければ、findLast()メソッドを利用します。


//重複を除いた配列を得る
// 要素の重複した配列
const list30 = [1, 2, 3, 1, 2, 3, 4];

// 重複を除去
const list31 = Array.from(new Set(list30));

console.log(list30); // [1, 2, 3, 1, 2, 3, 4]  元の配列
console.log(list31); // [1, 2, 3, 4] 重複した要素が除去されている

//2つの配列で重複する要素を検出
// 要素の重複した配列
const list32 = [1, 2, 3];
const list33 = [1, 3, 4];

// 重複した要素を調べる
const list34 = list32.filter(item => list33.includes(item));

console.log(list34); // [1, 3]。2つの配列にどちらも存在する要素


//配列の複製
const list35 = [1, 2, 3];
const list36 = [...list35];

console.log(list35); // [1, 2, 3]
console.log(list36); // [1, 2, 3]
console.log(list1 === list2); // false （別の配列オブジェクトである）


//要素が1つでも条件に合致するかを調べる
//パターン1
const dataList = [
  { id: 1, name: "鈴木" },
  { id: 2, name: "田中" },
  { id: 3, name: "ゴンザレス" }
];

let isFound = false;

for (const data of dataList) {
  if (data.id === 5) {
    isFound = true;
    break;
  }
}

if (isFound === false) {
  console.log("IDが5のデータはありません");
}

//パターン2
const isFound2 = dataList.some(data => data.id === 5);

if (isFound === false) {
  console.log("IDが5のデータはありません");
}

//配列内のすべての要素が条件に合致するかを調べる
const dataListData = [
  { id: 10, name: "鈴木" },
  { id: 20, name: "田中" },
  { id: 30, name: "ゴンザレス" }
];
const isNoValid = dataListData.every(data => data.id > 5);

if (isNoValid === true) {
  console.log("IDが5以上です");
}
