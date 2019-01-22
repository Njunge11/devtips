const Utils = {
  // --------------------------------
  //  Parse a url and break it into resource, id and verb
  // --------------------------------
  parseRequestURL: () => {
    let url = location.hash.slice(1).toLowerCase() || "/";
    let r = url.split("/");
    console.log(url);
    let test = r[2];
    let i = test ? test.split("-").length : 0;
    let id = test ? test.split("-")[i - 1] : "";
    let request = {
      resource: null,
      id: null,
      verb: null
    };
    request.resource = r[1];
    request.id = id;
    request.verb = r[3];

    return request;
  },

  // --------------------------------
  //  Simple sleep implementation
  // --------------------------------
  sleep: ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
};

export default Utils;
