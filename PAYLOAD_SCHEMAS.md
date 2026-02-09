# Payload CMS Collection Schemas

This document provides the exact schema configurations you need to add to your Payload CMS collections.

## Projects Collection

Create a collection named `projects` with the following fields:

```typescript
import { CollectionConfig } from 'payload/types';

const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true, // Public read access
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL-friendly version of the title (e.g., "my-awesome-project")',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Short description shown in project cards',
      },
    },
    {
      name: 'longDescription',
      type: 'textarea',
      admin: {
        description: 'Detailed description shown on project detail page',
      },
    },
    {
      name: 'technologies',
      type: 'array',
      fields: [
        {
          name: 'technology',
          type: 'text',
        },
      ],
      admin: {
        description: 'List of technologies used in this project',
      },
    },
    {
      name: 'images',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'alt',
          type: 'text',
          admin: {
            description: 'Alt text for accessibility',
          },
        },
      ],
    },
    {
      name: 'liveUrl',
      type: 'text',
      admin: {
        description: 'URL to the live project',
      },
      validate: (val) => {
        if (val && !val.match(/^https?:\/\//)) {
          return 'Must be a valid URL starting with http:// or https://';
        }
        return true;
      },
    },
    {
      name: 'githubUrl',
      type: 'text',
      admin: {
        description: 'URL to the GitHub repository',
      },
      validate: (val) => {
        if (val && !val.match(/^https?:\/\//)) {
          return 'Must be a valid URL starting with http:// or https://';
        }
        return true;
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Show this project on the homepage',
      },
    },
    {
      name: 'startDate',
      type: 'date',
      admin: {
        description: 'Project start date',
      },
    },
    {
      name: 'endDate',
      type: 'date',
      admin: {
        description: 'Project end date (leave empty if ongoing)',
      },
    },
    {
      name: 'category',
      type: 'text',
      admin: {
        description: 'Project category (e.g., "Web App", "Mobile App")',
      },
    },
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'tag',
          type: 'text',
        },
      ],
    },
  ],
  timestamps: true, // This adds createdAt and updatedAt automatically
};

export default Projects;
```

## Skills Collection

Create a collection named `skills` with the following fields:

```typescript
import { CollectionConfig } from 'payload/types';

const Skills: CollectionConfig = {
  slug: 'skills',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true, // Public read access
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Frontend',
          value: 'Frontend',
        },
        {
          label: 'Backend',
          value: 'Backend',
        },
        {
          label: 'Tools',
          value: 'Tools',
        },
        {
          label: 'Languages',
          value: 'Languages',
        },
        {
          label: 'Other',
          value: 'Other',
        },
      ],
    },
    {
      name: 'proficiencyLevel',
      type: 'number',
      admin: {
        description: 'Proficiency level from 0 to 100',
      },
      validate: (val) => {
        if (val !== undefined && (val < 0 || val > 100)) {
          return 'Proficiency level must be between 0 and 100';
        }
        return true;
      },
    },
    {
      name: 'icon',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Optional icon/image for this skill',
      },
    },
    {
      name: 'yearsOfExperience',
      type: 'number',
      admin: {
        description: 'Years of experience with this skill',
      },
    },
  ],
  timestamps: true,
};

export default Skills;
```

## Work Experience Collection

Create a collection named `work-experience` with the following fields:

```typescript
import { CollectionConfig } from 'payload/types';

const WorkExperience: CollectionConfig = {
  slug: 'work-experience',
  admin: {
    useAsTitle: 'role',
  },
  access: {
    read: () => true, // Public read access
  },
  fields: [
    {
      name: 'companyName',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'text',
      required: true,
      admin: {
        description: 'Job title/role',
      },
    },
    {
      name: 'startDate',
      type: 'date',
      required: true,
    },
    {
      name: 'endDate',
      type: 'date',
      admin: {
        description: 'Leave empty if this is your current position',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        description: 'General description of the role',
      },
    },
    {
      name: 'achievements',
      type: 'array',
      fields: [
        {
          name: 'achievement',
          type: 'text',
        },
      ],
      admin: {
        description: 'List of key achievements or responsibilities',
      },
    },
    {
      name: 'technologies',
      type: 'array',
      fields: [
        {
          name: 'technology',
          type: 'text',
        },
      ],
      admin: {
        description: 'Technologies used in this role',
      },
    },
    {
      name: 'companyLogo',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Company logo image',
      },
    },
    {
      name: 'location',
      type: 'text',
      admin: {
        description: 'Job location (e.g., "San Francisco, CA" or "Remote")',
      },
    },
  ],
  timestamps: true,
};

export default WorkExperience;
```

## Media Collection

Payload CMS typically includes a `media` collection by default for file uploads. If you don't have one, you can add it:

```typescript
import { CollectionConfig } from 'payload/types';

const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  upload: {
    staticDir: 'media',
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
  ],
};

export default Media;
```

## Social Links Collection

Create a collection named `social-links` with the following fields:

```typescript
import { CollectionConfig } from 'payload/types';

const SocialLinks: CollectionConfig = {
  slug: 'social-links',
  admin: {
    useAsTitle: 'platform',
  },
  access: {
    read: () => true, // Public read access
  },
  fields: [
    {
      name: 'platform',
      type: 'select',
      required: true,
      options: [
        { label: 'GitHub', value: 'github' },
        { label: 'LinkedIn', value: 'linkedin' },
        { label: 'Twitter', value: 'twitter' },
        { label: 'Email', value: 'email' },
        { label: 'Instagram', value: 'instagram' },
        { label: 'Other', value: 'other' },
      ],
      admin: {
        description: 'Social media platform name',
      },
    },
    {
      name: 'url',
      type: 'text',
      required: true,
      admin: {
        description: 'Full URL to your profile (e.g., https://github.com/username)',
      },
      validate: (val) => {
        if (val && !val.match(/^https?:\/\//)) {
          return 'Must be a valid URL starting with http:// or https://';
        }
        return true;
      },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Display order (lower numbers appear first)',
      },
    },
  ],
  timestamps: true,
};

export default SocialLinks;
```

## Quick Setup Steps

1. **Add collections to your Payload config** (`payload.config.ts`):
   ```typescript
   import { PayloadConfig } from 'payload/config';
   import Projects from './collections/Projects';
   import Skills from './collections/Skills';
   import WorkExperience from './collections/WorkExperience';
   import SocialLinks from './collections/SocialLinks';

   const config: PayloadConfig = {
     // ... your existing config
     collections: [
       Projects,
       Skills,
       WorkExperience,
       SocialLinks,
       // ... other collections
     ],
   };
   ```

2. **Field name mapping**:
   - Payload automatically adds `id`, `createdAt`, and `updatedAt` fields
   - Array fields in Payload return objects with the field name (e.g., `technologies` array items will have a `technology` property)
   - You may need to adjust the query functions in `lib/cms/queries.ts` to map Payload's array structure to match the frontend types

3. **Array field access**:
   - For `technologies` array: Access as `project.technologies.map(item => item.technology)`
   - For `tags` array: Access as `project.tags.map(item => item.tag)`
   - For `achievements` array: Access as `experience.achievements.map(item => item.achievement)`

## Notes

- All collections have `timestamps: true` which automatically adds `createdAt` and `updatedAt`
- Public read access is enabled (`read: () => true`) so the frontend can fetch data
- Make sure your Payload instance has CORS enabled if running on a different domain
- The `slug` field in Projects should be unique and URL-friendly

