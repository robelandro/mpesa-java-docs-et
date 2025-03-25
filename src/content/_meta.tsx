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
    type: "page",
  },
  docs: {
    type: "page",
  },
  "spring-boot": {
    type: "page",
  },
};

export default meta;
