---
title: "Default structures"
sidebar_position: 5
---

Default structures have seon codes too, but you can't modify them in a normal way. Despite this you
can still copy such code to edit it as a custom structure. All default structure codes are available on this page.

## Contents

-   [Contents](#contents)
-   [Arena](#arena)
-   [Catastrophic Arena](#catastrophic-arena)
-   [Cementery](#cementery)

## Arena

```text showLineNumbers
setrandom %5
summon #50 respblock 41,5284

summon #1 asteroid 8 12 x move 2 2 rotate 11,25
summon #2 asteroid 8 12 x move -2 2 rotate 101,25
summon #3 asteroid 8 12 x move -2 -2 rotate 191,25
summon #4 asteroid 8 12 x move 2 -2 rotate 281,25
summon #5 asteroid 8 12 x move 2 -2 rotate -11,25
summon #6 asteroid 8 12 x move -2 -2 rotate -101,25
summon #7 asteroid 8 12 x move -2 2 rotate -191,25
summon #8 asteroid 8 12 x move 2 2 rotate -281,25
from #1 to #4 move 35 -0,5
from #5 to #8 move 35 0,5

catch child $0 from #1 to #8 layer child -500
catch child $8 from #1 to #8 layer child -500
catch child $9 from #1 to #8 layer child -500
catch child $15 from #1 to #8 layer child -500

summon #9 asteroid 7 12 x move 2 2 rotate 33,75
summon #10 asteroid 7 12 x move 2 2 rotate 56,25
summon #11 asteroid 7 12 x move -2 2 rotate 123,75
summon #12 asteroid 7 12 x move -2 2 rotate 146,25
summon #13 asteroid 7 12 x move -2 -2 rotate 213,75
summon #14 asteroid 7 12 x move -2 -2 rotate 236,25
summon #15 asteroid 7 12 x move 2 -2 rotate 303,75
summon #16 asteroid 7 12 x move 2 -2 rotate 326,25
from #9 to #16 move 35 0

catch child $0 from #9 to #16 layer child -500
catch child $7 from #9 to #16 layer child -500
catch child $8 from #9 to #16 layer child -500
catch child $13 from #9 to #16 layer child -500

summon #59 wall 12 move 2 2 rotate 22,5
summon #60 wall 12 move 2 2 rotate 45
summon #61 wall 12 move 2 2 rotate 67,5
summon #62 wall 12 move -2 2 rotate 112,5
summon #63 wall 12 move -2 2 rotate 135
summon #64 wall 12 move -2 2 rotate 157,5
summon #65 wall 12 move -2 -2 rotate 202,5
summon #66 wall 12 move -2 -2 rotate 225
summon #67 wall 12 move -2 -2 rotate 247,5
summon #68 wall 12 move 2 -2 rotate 292,5
summon #69 wall 12 move 2 -2 rotate 315
summon #70 wall 12 move 2 -2 rotate 337,5
from #59 to #70 move 34,25 0

summon #17 asteroid 4 12 0,0,0,0,0,0,0,0
summon #18 asteroid 4 12 0,0,0,0,0,0,0,0
summon #19 asteroid 4 12 0,0,0,0,0,0,0,0
summon #20 asteroid 4 12 0,0,0,0,0,0,0,0
summon #21 asteroid 4 12 0,0,0,0,0,0,0,0
summon #22 asteroid 4 12 0,0,0,0,0,0,0,0
summon #23 asteroid 4 12 0,0,0,0,0,0,0,0
summon #24 asteroid 4 12 0,0,0,0,0,0,0,0
summon #25 asteroid 4 12 0,0,0,0,0,0,0,0
summon #26 asteroid 4 12 0,0,0,0,0,0,0,0
summon #27 asteroid 4 12 0,0,0,0,0,0,0,0
summon #28 asteroid 4 12 0,0,0,0,0,0,0,0
from #59 to #70 steal 4 from delta -42

summon #51 piston move 36,4 6,4
summon #52 piston move -36,4 6,4
summon #53 piston move 36,4 -6,4 rotate 180
summon #54 piston move -36,4 -6,4 rotate 180
summon #55 piston rotate 90 move 36,4 6,4
summon #56 piston rotate 90 move -36,4 6,4
summon #57 piston rotate 90 move 36,4 -6,4 rotate 180
summon #58 piston rotate 90 move -36,4 -6,4 rotate 180

from #51 to #52 extension 0 -3,6 40
from #53 to #54 extension 0 3,6 40
from #55 to #56 extension 3,6 0 40
from #57 to #58 extension -3,6 0 40

from #51 to #58 list extended doing a1b1,a2b2,a3b3
from #51 to #58 list extended done default,B1,B2,B3
from #51 to #58 list extended undoing b1a1,b2a2,b3a3,b1a2,b2a3,b3r

summon #71 empty summon #72 empty
summon #30 asteroid 6 12 52,53,50,0,0,0,0,0,0,0,50,53
ifrandom 0 summon #0 boss 0 summon #29 asteroid 6 12 42,49,50,0,0,0,0,0,0,0,50,49
ifrandom 1 summon #0 boss 0 summon #29 asteroid 6 12 43,49,50,0,0,0,0,0,0,0,50,49
ifrandom 2 summon #0 boss 0 summon #29 asteroid 6 12 44,49,50,0,0,0,0,0,0,0,50,49
ifrandom 3 summon #0 boss 0 summon #29 asteroid 6 12 45,49,50,0,0,0,0,0,0,0,50,49
ifrandom 4 summon #0 boss 0 summon #29 asteroid 6 12 47,49,50,0,0,0,0,0,0,0,50,49
ifrandom break
from #29 to #30 move 0 -2
catch #29 parent set #71
catch #30 parent set #72

catch #0
list hidden doing b1a1,b2a2,b3a3
list hidden done default,A1,A2,A3,R,b1a2,b2a3,b3r
list hidden undoing a1b1,a2b2,a3b3
list hidden undone B1,B2,B3
hidesmooth 0 40

catch #71
list hidden done default,A1,A2,A3,B1,B2,B3,a1b1,a2b2,a3b3,b1a1,b2a2,b3a3,b1a2,b2a3
list hidden undoing b3r
list hidden undone R
hidesmooth 0 40

catch #72
list hidden doing a1b1,a2b2,a3b3
list hidden done default,B1,B2,B3,b3r,R
list hidden undoing b1a1,b2a2,b3a3,b1a2,b2a3
list hidden undone A1,A2,A3
hidesmooth 0 40
```

## Catastrophic Arena

```text showLineNumbers
summon #50 respblock 41,5284

summon #1 asteroid 8 28 x move 2 2 rotate 11,25
summon #2 asteroid 8 28 x move -2 2 rotate 101,25
summon #3 asteroid 8 28 x move -2 -2 rotate 191,25
summon #4 asteroid 8 28 x move 2 -2 rotate 281,25
summon #5 asteroid 8 28 x move 2 -2 rotate -11,25
summon #6 asteroid 8 28 x move -2 -2 rotate -101,25
summon #7 asteroid 8 28 x move -2 2 rotate -191,25
summon #8 asteroid 8 28 x move 2 2 rotate -281,25
from #1 to #4 move 35 -0,5
from #5 to #8 move 35 0,5

catch child $0 from #1 to #8 layer child -500
catch child $8 from #1 to #8 layer child -500
catch child $9 from #1 to #8 layer child -500
catch child $15 from #1 to #8 layer child -500

summon #9 asteroid 7 28 x move 2 2 rotate 33,75
summon #10 asteroid 7 28 x move 2 2 rotate 56,25
summon #11 asteroid 7 28 x move -2 2 rotate 123,75
summon #12 asteroid 7 28 x move -2 2 rotate 146,25
summon #13 asteroid 7 28 x move -2 -2 rotate 213,75
summon #14 asteroid 7 28 x move -2 -2 rotate 236,25
summon #15 asteroid 7 28 x move 2 -2 rotate 303,75
summon #16 asteroid 7 28 x move 2 -2 rotate 326,25
from #9 to #16 move 35 0

catch child $0 from #9 to #16 layer child -500
catch child $7 from #9 to #16 layer child -500
catch child $8 from #9 to #16 layer child -500
catch child $13 from #9 to #16 layer child -500

summon #59 wall 12 move 2 2 rotate 22,5
summon #60 wall 12 move 2 2 rotate 45
summon #61 wall 12 move 2 2 rotate 67,5
summon #62 wall 12 move -2 2 rotate 112,5
summon #63 wall 12 move -2 2 rotate 135
summon #64 wall 12 move -2 2 rotate 157,5
summon #65 wall 12 move -2 -2 rotate 202,5
summon #66 wall 12 move -2 -2 rotate 225
summon #67 wall 12 move -2 -2 rotate 247,5
summon #68 wall 12 move 2 -2 rotate 292,5
summon #69 wall 12 move 2 -2 rotate 315
summon #70 wall 12 move 2 -2 rotate 337,5
from #59 to #70 move 34,25 0

summon #17 asteroid 4 25 x
summon #18 asteroid 4 25 x
summon #19 asteroid 4 25 x
summon #20 asteroid 4 25 x
summon #21 asteroid 4 25 x
summon #22 asteroid 4 25 x
summon #23 asteroid 4 25 x
summon #24 asteroid 4 25 x
summon #25 asteroid 4 25 x
summon #26 asteroid 4 25 x
summon #27 asteroid 4 25 x
summon #28 asteroid 4 25 x
from #59 to #70 steal 4 from delta -42

summon #51 piston move 36,4 6,4
summon #52 piston move -36,4 6,4
summon #53 piston move 36,4 -6,4 rotate 180
summon #54 piston move -36,4 -6,4 rotate 180
summon #55 piston rotate 90 move 36,4 6,4
summon #56 piston rotate 90 move -36,4 6,4
summon #57 piston rotate 90 move 36,4 -6,4 rotate 180
summon #58 piston rotate 90 move -36,4 -6,4 rotate 180

summon #29 asteroid 6 25 ,49,50,,,,,,,,50,49 asteroid hide
summon #30 sphere 6 12 from #29 to #30 move 0 -2
```

## Cementery

```text showLineNumbers
summon #1 asteroid 10 32 x scale 2 2 1,2
summon #2 asteroid 10 32 x scale 2 2 1,2 asteroid hide
catch children 0 19 from #1 to #2 scale children 0.5 0.5 0.8333
catch #2 rotate 9
```
