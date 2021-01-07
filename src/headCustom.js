/*
  NOTE: This modifies next.js internal api behavior and may break your application.
  Tested on next.js version: 9.2.1
*/
import { readFileSync } from "fs";
import { resolve } from "path";
import { memoize } from "lodash";

import React from "react";

import { Head } from "next/document";

const doGetContent = (file) => readFileSync(resolve(process.cwd(), ".next", file), "utf8");
const getContent = process.env.NODE_ENV === "production" ? memoize(doGetContent) : doGetContent;

class HeadCustom extends Head {
  getCssLinks() {
    return this.__getInlineStyles();
  }

  __getInlineStyles() {
    const { assetPrefix, files } = this.context._documentProps;
    if (!files || files.length === 0) return null;

    return files
      .filter((file) => /\.css$/.test(file))
      .map((file) => (
        <style
          key={file}
          data-href={`${assetPrefix}/_next/${file}`}
          dangerouslySetInnerHTML={{
            __html: getContent(file),
          }}
        />
      ));
  }
}

export default HeadCustom;