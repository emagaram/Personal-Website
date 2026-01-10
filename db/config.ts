import { column, defineDb, defineTable } from 'astro:db';

const Inquiry = defineTable({
  columns: {
    name: column.text(),
    email: column.text(),
    message: column.text(),
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: { Inquiry }
});
