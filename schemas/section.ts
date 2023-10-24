import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'section',
  title: 'Sections',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'career',
      type: 'object',
      fields: [
        {
          title: 'Career',
          name: 'career',
          type: 'reference',
          to: [{ type: 'career' }]
        }
      ]
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})
