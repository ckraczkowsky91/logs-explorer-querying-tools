var data = require('./test-logs');

function dedupeOrgId() {
  var orgMap = {};
  data.forEach((item) => {
    orgMap[item.jsonPayload.organizationKeyID] = '';
  });
  console.log(orgMap);
};

function dedupeKeyId() {
  var keyMap = {};
  data.forEach((item) => {
    keyMap[item.jsonPayload.apiKeyID] = '';
  });
  console.log(keyMap);
}


module.exports = {
  dedupeOrgId: dedupeOrgId,
  dedupeKeyId: dedupeKeyId
};
