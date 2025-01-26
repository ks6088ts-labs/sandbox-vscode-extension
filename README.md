[![test](https://github.com/ks6088ts-labs/sandbox-vscode-extension/actions/workflows/test.yaml/badge.svg?branch=main)](https://github.com/ks6088ts-labs/sandbox-vscode-extension/actions/workflows/test.yaml?query=branch%3Amain)

# sandbox-vscode-extension

This is a sandbox repository for creating a Visual Studio Code extension.

## Prerequisites

- [Node.js 22+](https://nodejs.org/en/download/)
- [pnpm](https://pnpm.io/installation)
- [GNU Make](https://www.gnu.org/software/make/)

## Development instructions

### Local development

Use Makefile to run the project locally.

```shell
# help
make

# install dependencies for development
make install-deps-dev

# run tests
make test

# run CI tests
make ci-test
```
