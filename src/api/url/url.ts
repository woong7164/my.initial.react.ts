import * as URITemplate from 'url-template';

const parseURI = (uri, params) => {
  if (params) {
    return URITemplate.parse(uri).expand(params);
  }
  return uri;
};

const URL = {
  PROTO: {
    //proto type url
    GET_PROTO: (params: { cd: String }): string => {
      return parseURI('/api/item/{cd}', params);
    },
  },
};

export default URL;
