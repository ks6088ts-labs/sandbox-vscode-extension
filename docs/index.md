# sandbox-vscode-extension

## Tutorial

### VSCode Extension を作成する

[Your First Extension](https://code.visualstudio.com/api/get-started/your-first-extension) を参考に、VSCode の拡張機能を作成します。

```shell
# Generate template codes
npx --package yo --package generator-code -- yo code

# ? What type of extension do you want to create? New Extension (TypeScript)
# ? What's the name of your extension? sandbox-vscode-extension
# ? What's the identifier of your extension? sandbox-vscode-extension
# ? What's the description of your extension?
# ? Initialize a git repository? Yes
# ? Which bundler to use? esbuild
# ? Which package manager to use? pnpm
```

### Chat API を利用する

[Chat extensions](https://code.visualstudio.com/api/extension-guides/chat) を参考に基礎的なチャット拡張機能を理解します。

[Tutorial: Build a code tutorial chat participant with the Chat API](https://code.visualstudio.com/api/extension-guides/chat-tutorial) を参考に、チャット拡張機能を作成します。

### Marketplace に公開する

[Publishing Extensions](https://code.visualstudio.com/api/working-with-extensions/publishing-extension) を参考に、Marketplace に拡張機能を公開します。

`https://dev.azure.com/YOUR_ORG/_usersSettings/tokens` にアクセスして、拡張機能を公開するための Personal Access Token を取得します。

`https://marketplace.visualstudio.com/manage/publishers/YOUR_ORG` にアクセスして、Publisher と VSCode 拡張機能を管理します。

```shell
# パッケージを作成する
make package

# パッケージを公開する
make publish
```

> [!NOTE]
> Note: 現状 pnpm でのパッケージングがうまくいかないため、npm か yarn でパッケージングする必要があります。(ここでは yarn を利用しています)
