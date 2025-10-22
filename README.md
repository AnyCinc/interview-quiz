# 🌏 多言語面接適性クイズシステム

## 概要
外国人候補者向けの多言語オンライン面接適性クイズシステムです。
- **対応言語**: 8言語（日本語、英語、ミャンマー語、ベトナム語、モンゴル語、ベンガル語、シンハラ語、ネパール語）
- **対応業種**: 9業種（飲食業、製造業、建設業、宿泊業、清掃業、物流業、一般事務、小売業、自動車整備業）
- **質問数**: 15問（共通4問 + 業種別11問）

## 機能
- ✅ 8言語 × 9業種 = 72パターンの完全対応
- ✅ 回答の見直し機能（前へボタン）
- ✅ 合格判定表示（合格/要検討/不合格の3段階）
- ✅ レスポンシブデザイン（PC・スマホ対応）
- ✅ プログレスバー表示
- ✅ 詳細な解説付き

## ファイル構成
```
interview-quiz/
├── index.html                          # メインHTMLファイル
├── questions_common_*.js              # 共通質問（8言語）
├── questions_restaurant_short_*.js   # 飲食業（8言語）
├── questions_manufacturing_short_*.js # 製造業（8言語）
├── questions_construction_short_*.js  # 建設業（8言語）
├── questions_accommodation_short_*.js # 宿泊業（8言語）
├── questions_cleaning_short_*.js      # 清掃業（8言語）
├── questions_logistics_short_*.js     # 物流業（8言語）
├── questions_office_short_*.js        # 一般事務（8言語）
├── questions_retail_short_*.js        # 小売業（8言語）
└── questions_automotive_short_*.js    # 自動車整備業（8言語）
```

## 使い方

### 候補者向け
1. URLにアクセス
2. 言語を選択（8言語から選択）
3. 業種を選択（9業種から選択）
4. 15問のクイズに回答
5. 結果を確認（合格/要検討/不合格）

### 管理者向け
- ファイルをWebサーバーにアップロードするだけで動作
- データベース不要
- サーバーサイド処理不要（完全フロントエンド）

## 合格基準
- **70点以上**: ✅ 合格（緑色）
- **50-69点**: ⚠️ 要検討（黄色）
- **50点未満**: ❌ 不合格（赤色）

## 技術仕様
- **フロントエンド**: HTML5 + CSS3 + Vanilla JavaScript
- **フォント**: Google Fonts（Noto Sansファミリー）
- **ブラウザ対応**: Chrome, Firefox, Safari, Edge（最新版）
- **モバイル対応**: iOS Safari, Android Chrome

## カスタマイズ方法

### 合格基準の変更
`index.html`の`showResult()`関数内：
```javascript
if (percentage >= 70) {  // ← この数値を変更
    judgment = '✅ 合格';
}
```

### 質問内容の変更
各`questions_*.js`ファイルを編集：
```javascript
window.questions = [
  {
    id: 1,
    question: "質問文",
    choices: [
      {
        text: "選択肢1",
        score: 1.0,
        emoji: "⭕",
        explanation: "解説文"
      }
    ]
  }
];
```

## ライセンス
社内利用・商用利用可能

## サポート
問題があればGitHubのIssueにて報告してください。

---

**作成日**: 2024年10月
**バージョン**: 2.0
