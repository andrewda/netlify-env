const {
  REPOSITORY_URL,
  BRANCH,
  PULL_REQUEST,
  HEAD,
  COMMIT_REF,
  CONTEXT,
  WEBHOOK_TITLE,
  WEBHOOK_URL,
  WEBHOOK_BODY,
  URL,
  DEPLOY_URL,
  DEPLOY_PRIME_URL,
} = process.env;

const DEPLOY_PREVIEW = DEPLOY_PRIME_URL && DEPLOY_PRIME_URL.includes('deploy-preview');

let GITHUB_URL;
if (REPOSITORY_URL) {
  const githubPattern = /git@github\.com:([a-zA-Z0-9-]{1,39})\/([a-zA-Z0-9_.-]+)/;
  const githubMatches = githubPattern.exec(REPOSITORY_URL);
  GITHUB_URL = `https://github.com/${githubMatches[1]}/${githubMatches[2]}`;
}

let DEPLOY_PREVIEW_PR_NUMBER;
let DEPLOY_PREVIEW_PR_URL;
if (DEPLOY_PREVIEW) {
  const previewPattern = /https:\/\/deploy-preview-([0-9]+)--/;
  DEPLOY_PREVIEW_PR_NUMBER = parseInt(previewPattern.exec(DEPLOY_PRIME_URL)[1]);
  DEPLOY_PREVIEW_PR_URL = `${GITHUB_URL}/pull/${DEPLOY_PREVIEW_PR_NUMBER}`;
}

module.exports = {
  REPOSITORY_URL,
  GITHUB_URL,
  BRANCH,
  PULL_REQUEST,
  HEAD,
  COMMIT_REF,
  CONTEXT,
  WEBHOOK_TITLE,
  WEBHOOK_URL,
  WEBHOOK_BODY,
  URL,
  DEPLOY_URL,
  DEPLOY_PRIME_URL,
  DEPLOY_PREVIEW,
  DEPLOY_PREVIEW_PR_NUMBER,
  DEPLOY_PREVIEW_PR_URL,
};
