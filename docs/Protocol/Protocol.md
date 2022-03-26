---
slug: ./
---

Info about SE3 Protocol

## Messages

Messages in SE3 Protocol are just plain text (because of WebSocket),  
so syntax of them is (in most cases) pretty simple: `/MESSAGE_NAME ...ARGUMENTS` (arguments are splitted by space)    
For example:

```text
/AllowConnection Nadwey password123 0
└───────┬──────┘ └─────────┬────────┘
        │                  │
   Message Name        Arguments
```
