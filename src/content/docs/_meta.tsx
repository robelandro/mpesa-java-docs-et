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
  "data-models": {
    title: "Data Models",
  },
  methods: {
    title: "Methods",
  },
  exceptions: {
    title: "Exceptions",
  },
};

export default meta;
