---
sidebar_position: 0.0003
---

# Web crawling

The toolkit provide an API for importing the content of a website.
The SERMAS toolkit automatically scans the entire website and creates the emdeddings of the content of each page, then stores them in a vector database.

A website can be imported by adding the link to the `app.yaml` file under the `rag.websites` section, for example:
```yaml
  rag:
    websites:
      - url: {website base URL}
        filterPaths: [] # list of sub paths to exclude
      - ...
```
Then import the application adding the `-iw` flag, for example:
```bash
sermas-cli app admin import -iw /apps/myapp
```
The crawler will scrap the pages found using the sitemap. The sitemap will be searched on these  subpaths:
```
'/sitemap.xml',
'/sitemap_index.xml'
'/sitemapindex.xml'
'/sitemap.php'
'/sitemap.txt'
```