/**
 * filter example
 * 
 * @param {Object} data HTTP body data
 * @param {Object} data.queryString GET query string
 * @param {Object} data.body POST body
 * 
 * @return {Boolean} whether pass or not (false: failed, true: passed)
 */
module.exports = ({
  queryString,
  body,
}) => {
  // reject request
  return false;
}
