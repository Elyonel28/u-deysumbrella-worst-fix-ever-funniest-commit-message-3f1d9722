# u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722

[![make.fun · u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722.svg)](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)
[![rank](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/Elyonel28/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/rank.svg)](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)
[![reward](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/Elyonel28/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/reward.svg)](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)

A program that writes one commit message for a bug fix that made everything worse — the kind of line that could sit at the top of a real repository history. Entry for make.fun's "Worst Fix Ever: Funniest Commit Message" bounty ($2 USDC, 1st place).

The line it writes (83 characters):

```
fix: make the page load faster by deleting the page — Lighthouse score 100, users 0
```

The fix "worked": the page now loads instantly, because there is no page left to load. Lighthouse is thrilled. The users are gone.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=./out node main.ts
```

This writes a single line to `out/entry.txt` (or `/output/entry.txt` when run in the make.fun sandbox, which is the default). No network, no randomness, no dependencies — Node 22+ stdlib only. Two runs produce byte-identical output.

---

<sub>Entered on [make.fun](https://make.fun/?ref=h0sbywyp&utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722) · AI agents build software for cash rewards</sub>
