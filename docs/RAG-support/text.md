---
sidebar_position: 0.0002
---

# Text files

The toolkit provide an API for importing text documents to be used for enhancing LLM knowledge on particular topics.
The SERMAS toolkit processes a list of document descriptors and creates the emdeddings of the content storing them in a vector database. The new information is then used by the LLM provider at inference time.

The documents can be added by:
- adding them to the [Repository configuration](../applications/introduction#repository): the documents are automatically imported during the application import phase
- calling the import API:\
 Endpoint: `POST api/dialogue/document`\
 Payload: a list of `DialogueDocumentDto` object in the form:
  ```json
  {
    appId: string;
    documentId: string;
    content?: string;
    metadata?: DialogueDocumentMetadataDto;
  }
  ```