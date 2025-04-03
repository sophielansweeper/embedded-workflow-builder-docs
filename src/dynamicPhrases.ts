/**
 * Replace instances of company name, name of embedded workflow builder, etc., with
 * user-defined phrases
 */

import type { MarkdownPreprocessor } from "@docusaurus/types/src/config";
import siteConfig from "../site-config/site-config";

const phrasesToReplace = {
  "%COMPANY_NAME_POSSESSIVE": siteConfig.company.possessive,
  "%COMPANY_NAME": siteConfig.company.name,
  "%WORKFLOW_BUILDER": siteConfig.workflowBuilder.name,
  "%SINGLE_WORKFLOW": siteConfig.workflowBuilder.flow,
};

const dynamicPhrases: MarkdownPreprocessor = ({ filePath, fileContent }) => {
  let content = fileContent;
  for (const [key, replacementValue] of Object.entries(phrasesToReplace)) {
    content = content.replace(key, replacementValue);
  }
  return content;
};

export default dynamicPhrases;
