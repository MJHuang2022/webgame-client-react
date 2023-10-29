import _ from "lodash";
import { getServerUrl } from "./ServerInfo";

const constructUrl = (schema) => {
  const { url } = schema;
  if (_.isNil(url)) {
    return null;
  }

  return `${getServerUrl()}${url}`;
};

const constructFetchObject = (data, schema, jwt) => {
  const { method, headers, isNeedJwt, body } = schema;
  if (_.isNil(method)) {
    return {
      error: `The schema is error.`,
      fetchObject: null,
    };
  }

  let fetchHeader = headers;
  if ( isNeedJwt ) {
    if (_.isNil(jwt)) {
      return {
        error: `The jwt is required.`,
        fetchObject: null,
      };
    }

    fetchHeader = {...fetchHeader, "Authorization": ` Bearer ${jwt}`};
  }

  let bodyObj = data;
  if (!_.isNil(body)) {
    bodyObj = JSON.stringify(_.pick(data, body));
  }

  const fetchObject = {
    method,
    headers: fetchHeader,
    body: bodyObj,
  };
  return { error: null, fetchObject };
};

const decodeResponse = async (httpRsp, schema) => {
  let error = null;
  let result = null;
  const response = await httpRsp.json();

  if (!httpRsp.ok) {
    error = `${httpRsp.statusText}: ${JSON.stringify(response)}`;
    return { error, result };
  }

  const { body } = schema;
  if (_.isNil(body)) {
    error = "the response schema is error.";
    return { error, result };
  }

  result = _.pick(response, body);
  return { error, result };
};

const DataAccess = async (requestObj) => {
  const { type, schema, data, jwt } = requestObj;
  if (!schema) {
    return {
      error: `${type}: Can't find the schema. `,
      result: null,
    };
  }

  const { request, response } = schema;
  const url = constructUrl(request);
  if (_.isNil(url)) {
    return {
      error: `${type}: failed to construct the fetch url.`,
      result: null,
    };
  }

  const { error, fetchObject } = constructFetchObject(data, request, jwt);
  if (!_.isNil(error)) {
    return { error: `${requestObj.type}: ${error}`, result: null };
  }

  try {
    const httpRsp = await fetch(url, fetchObject);
    const result = await decodeResponse(httpRsp, response);
    return result;
  } catch (ex) {
    return { error: ex.message, result: null };
  }
};

export default DataAccess;
