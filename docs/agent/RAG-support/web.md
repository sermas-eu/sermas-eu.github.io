---
sidebar_position: 0.0003
---

# Web crawling

The toolkit provide an API for importing the content of a website.
The SERMAS toolkit automatically scans the entire website and creates the emdeddings of the content of each page, then stores them in a vector database.

A website can be imported by adding the link to the [Repository configuration](../../applications/introduction#repository) under `rag.websites` section:
```yaml
  rag:
    websites:
      - {website link}
      - ...
```
and importing the applications adding the flag `-iw`, for example:
```bash
sermas-cli app admin import -iw /apps/myapp
```
