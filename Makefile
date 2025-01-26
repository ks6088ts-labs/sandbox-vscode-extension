.PHONY: help
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
.DEFAULT_GOAL := help

.PHONY: install-deps-dev
install-deps-dev: ## install dependencies for development
	@# https://pnpm.io/installation
	@which pnpm || npm install -g pnpm
	pnpm install

.PHONY: format-check
format-check: ## format check
	@echo "Yet to be implemented"

.PHONY: format
format: ## format code
	@echo "Yet to be implemented"

.PHONY: lint
lint: ## lint
	pnpm run lint

.PHONY: test
test: ## run tests
	pnpm run test

.PHONY: build
build: ## build applications
	pnpm run compile

.PHONY: ci-test
ci-test: install-deps-dev format-check lint test build ## run CI test

.PHONY: run
run: ## run applications
	node \
		--experimental-strip-types \
		--experimental-transform-types \
		--experimental-detect-module \
		--no-warnings=ExperimentalWarning \
		src/main.ts