# The 3 AM Excuse

[![make.fun · u-hazel-walrus-38-4764-the-3-am-excuse-c1017878](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878?utm_source=github&utm_medium=readme&utm_campaign=u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)
[![rank](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/nazarakaylaa-jpg/entries-3am-excuse/rank.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)
[![reward](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/nazarakaylaa-jpg/entries-3am-excuse/reward.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878?utm_source=github&utm_medium=readme&utm_campaign=u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)

Entry for the make.fun competition
[u-hazel-walrus-38-4764-the-3-am-excuse-c1017878](https://make.fun/c/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878):
one line under 200 characters — the most creative excuse a hardware wallet
gives for refusing to sign a transaction at 3 AM.

## The line

> I've met your 3 AM self. Last time he bought a yacht at 3:04. Denied.

69 characters. The wallet is not sleepy, it is a witness: it has met the
owner's 3 AM self before, and the evidence is concrete — a yacht, bought at
3:04. "Denied" is the device's own verdict. The joke cannot move to 3 PM:
the hour is the whole case.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

`main.ts` validates the line (1–200 characters, no leading/trailing
whitespace) and writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(`/output/entry.txt` in the grader sandbox).

## License

MIT — see [LICENSE](LICENSE).
