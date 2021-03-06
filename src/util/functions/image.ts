const withoutProtocol = (imgurl: string): string =>
  imgurl.replace(/^((https?:)?\/\/)/, '');
