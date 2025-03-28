import type { MetaRecord } from "nextra";

/**
 * type MetaRecordValue =
 *  | TitleSchema
 *  | PageItemSchema
 *  | SeparatorSchema
 *  | MenuSchema
 *
 * type MetaRecord = Record<string, MetaRecordValue>
 **/
const meta: MetaRecord = {
  index: {
    display: 'hidden'
  },
    docs: {
      display: 'children'
  },
  "api-reference": {
    title: "Api Reference",
    href: "/docs",
    type: "page",
  },
};

export default meta;
