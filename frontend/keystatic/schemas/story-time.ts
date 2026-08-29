// Story Time page content schema
import { singleton, fields } from '@keystatic/core';
import { pageFields } from './page.js';

export const storyTime = singleton({
  label: 'Story Time',
  path: 'src/content/story-time.yaml',
  schema: {
    ...pageFields,
    intro: fields.text({
      label: 'Intro Text',
      multiline: true,
    }),
    stories: fields.array(
      fields.object({
        title: fields.text({
          label: 'Title',
          validation: { isRequired: true },
        }),
        date: fields.text({
          label: 'Date',
        }),
        image: fields.image({
          label: 'Image',
        }),
        content: fields.mdx({
          label: 'Content',
          extension: 'mdx',
        }),
      }),
      {
        label: 'Stories',
        itemLabel: () => 'Story',
      }
    ),
  },
});
