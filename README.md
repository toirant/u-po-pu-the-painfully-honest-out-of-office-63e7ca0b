[![The Painfully Honest Out-of-Office](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b.svg)](https://make.fun/c/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)
[![Rank](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/toirant/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/rank.svg)](https://make.fun/c/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)
[![Reward](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/toirant/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/reward.svg)](https://make.fun/c/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)

# The Painfully Honest Out-of-Office

Entry for the [The Painfully Honest Out-of-Office](https://make.fun/c/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b) bounty on make.fun — one out-of-office auto-reply, painfully honest about the sender's inbox yet polite enough that a manager would let it stand.

## The reply

> I'm away this week, and I'll be honest: your email joins the 300 unread I was already behind on when I left, so thank you for your patience — I will reply as soon as I can.

172 characters, one sentence. The honesty is the admission that the delay is not the holiday — the sender was already 300 emails behind before leaving — and the politeness is the thank-you and the promise to reply, which keeps it employable.

## How it works

`main.ts` (Node 22, no dependencies) writes that single reply to `/output/entry.txt`, then reads it back and verifies the gate — 1 to 200 characters, not only white space, exactly one sentence — before exiting. It never deletes the output directory.

Run it locally:

```sh
ENTRY_OUTPUT_DIR=/tmp/ooo-out node main.ts
cat /tmp/ooo-out/entry.txt
```
