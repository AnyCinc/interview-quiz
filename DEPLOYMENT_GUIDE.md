# 🚀 GitHub Pages デプロイ手順書

## 所要時間: 5分

---

## ステップ1: リポジトリ作成（2分）

1. **GitHubにログイン**
   - https://github.com にアクセス

2. **新しいリポジトリを作成**
   - 右上の「+」→「New repository」をクリック
   - **Repository name**: `interview-quiz`（好きな名前でOK）
   - **Public**を選択（誰でもアクセス可能）
   - **Add a README file**のチェックは**外す**
   - 「Create repository」をクリック

3. **リポジトリURLをメモ**
   - 例: `https://github.com/あなたのユーザー名/interview-quiz`

---

## ステップ2: ファイルアップロード（2分）

### 方法A: Web UIでアップロード（簡単）

1. **リポジトリページで「uploading an existing file」をクリック**

2. **以下のファイルを全てドラッグ&ドロップ**
   - `index.html`
   - `questions_*.js`（全80ファイル）
   - `README.md`

3. **「Commit changes」をクリック**

### 方法B: Git コマンドを使う（上級者向け）

```bash
# ローカルでクローン
git clone https://github.com/あなたのユーザー名/interview-quiz.git
cd interview-quiz

# ファイルをコピー
# （deploy_packageフォルダの中身を全てコピー）

# コミット＆プッシュ
git add .
git commit -m "Initial commit: Interview quiz system"
git push origin main
```

---

## ステップ3: GitHub Pagesを有効化（1分）

1. **リポジトリページで「Settings」タブをクリック**

2. **左サイドバーの「Pages」をクリック**

3. **Source セクションで設定**
   - **Branch**: `main`を選択
   - **フォルダ**: `/ (root)`を選択
   - 「Save」をクリック

4. **数分待つ**
   - 緑色のチェックマークが出るまで待機
   - ページをリロードすると「Your site is live at...」と表示される

5. **URLをコピー**
   - 例: `https://あなたのユーザー名.github.io/interview-quiz/`

---

## ステップ4: 動作確認（1分）

1. **発行されたURLにアクセス**

2. **確認項目**
   - ✅ 言語選択画面が表示される
   - ✅ 8言語のボタンが表示される
   - ✅ 日本語を選択 → 業種選択画面
   - ✅ 製造業を選択 → Q1が表示される
   - ✅ フォントが正常（□が表示されない）

3. **問題があれば**
   - ブラウザのコンソール（F12キー）でエラー確認
   - ファイル名の大文字小文字を確認（GitHubは区別します）

---

## 完成！

**URLを候補者に共有してください**
- QRコード生成: https://www.qr-code-generator.com/
- 短縮URL: https://bitly.com/

---

## トラブルシューティング

### Q: ページが404エラーになる
**A**: GitHub Pagesの有効化後、5-10分待ってください。

### Q: ファイルが読み込まれない
**A**: ファイル名の大文字小文字を確認してください。
- ❌ `Questions_common_ja.js`
- ✅ `questions_common_ja.js`

### Q: フォントが□で表示される
**A**: Google Fontsの読み込みに時間がかかっている可能性があります。
ページをリロードしてください。

### Q: スマホで表示が崩れる
**A**: 最新のChrome/Safariを使用してください。

---

## 更新方法

**ファイルを修正した場合**:
1. GitHubリポジトリページで該当ファイルをクリック
2. 鉛筆アイコン（Edit）をクリック
3. 内容を編集
4. 「Commit changes」をクリック
5. 1-2分で反映される

---

## カスタムドメインの設定（オプション）

独自ドメインを使いたい場合：
1. ドメインを取得（お名前.com、ムームードメインなど）
2. GitHub Pages設定画面で「Custom domain」に入力
3. DNSレコードを設定
4. 詳細: https://docs.github.com/ja/pages/configuring-a-custom-domain-for-your-github-pages-site

---

**以上でデプロイ完了です！**
