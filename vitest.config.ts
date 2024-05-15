// @ts-ignore
import { defineWorkersConfig } from "@cloudflare/vitest-pool-workers/config";

import { defineWorkersConfig as _defineWorkersConfig } from '@cloudflare/vitest-pool-workers/dist/config';

export default (defineWorkersConfig as typeof _defineWorkersConfig)({
  test: {
    poolOptions: {
      workers: {
        main: "./src/index.ts",
        miniflare: {
          kvNamespaces: ["TEST_NAMESPACE"],
          compatibilityFlags: ["nodejs_compat"],
          compatibilityDate: "2022-10-31",
        },
      },
    },
  },
});

