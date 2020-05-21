'use strict'

module.exports = {
  gitRawCommitsOpts: {
    // null => 所有       commit 上的 tag 计入 changelog
    // true => 仅   merge commit 上的 tag 计入 changelog
    // null => 仅非 merge commit 上的 tag 计入 changelog
    merges: null
  }
}
