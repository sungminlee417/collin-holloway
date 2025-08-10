# Decap CMS Setup for Collin Holloway Website

This website now uses Decap CMS (formerly Netlify CMS) for content management. All content is stored in markdown files and can be edited through a user-friendly admin interface.

## 🚀 Quick Start

### 1. Deploy to Netlify

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Connect your repository to Netlify
3. Deploy settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

### 2. Enable Netlify Identity

1. In your Netlify dashboard, go to **Site Settings > Identity**
2. Click **Enable Identity**
3. Under **Registration preferences**, select "Invite only"
4. Under **Git Gateway**, enable it and generate access token

### 3. Access the CMS

- Visit `https://your-site.netlify.app/admin`
- Sign up/login with Netlify Identity
- Start editing your content!

## 📁 Content Structure

### Markdown Files Location
```
content/
├── config/
│   └── site.md          # Site configuration (title, social links)
└── sections/
    ├── hero.md          # Hero section content
    ├── about.md         # About section content
    ├── concerts.md      # Concerts & events
    ├── music.md         # Music & albums
    ├── videos.md        # Video content
    ├── gallery.md       # Image gallery
    └── contact.md       # Contact information
```

### Available Content Types

1. **Site Configuration**: Logo, site title, social media links
2. **Hero Section**: Main headline, description, call-to-action buttons
3. **About Section**: Biography, skills, achievements
4. **Concerts & Events**: Upcoming shows and past performances
5. **Music & Albums**: Discography with streaming links
6. **Videos**: YouTube video embeds
7. **Gallery**: Image collections with captions
8. **Contact**: Contact form settings and inquiry types

## 🎨 CMS Features

### Content Management
- **Visual Editor**: Rich text editing with live preview
- **Media Management**: Upload and organize images
- **Editorial Workflow**: Draft → In Review → Published
- **Version Control**: All changes are tracked via Git

### Supported Content
- ✅ Text content (titles, descriptions, body text)
- ✅ Images (hero images, album covers, gallery photos)
- ✅ Lists (concerts, albums, videos, social links)
- ✅ External links (streaming platforms, social media)
- ✅ Structured data (dates, locations, metadata)

## 🛠️ Development

### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Content Updates
- **CMS Users**: Edit content through `/admin` interface
- **Developers**: Edit markdown files directly in `content/` folder

### Adding New Content Types

1. **Update CMS config**: Modify `/public/admin/config.yml`
2. **Create markdown template**: Add to `content/` folder
3. **Update TypeScript types**: Add to `lib/markdown.ts`
4. **Update components**: Add props and data mapping

## 📝 Component Updates

### Updated Components
- ✅ **Hero**: Now uses `heroData` and `siteConfig` props
- ✅ **About**: Uses `aboutData` prop
- 🔄 **Navigation**: Needs `siteConfig` prop (social links)
- 🔄 **Concerts**: Needs `concertsData` prop
- 🔄 **Music**: Needs `musicData` prop
- 🔄 **Videos**: Needs `videosData` prop
- 🔄 **Gallery**: Needs `galleryData` prop
- 🔄 **Contact**: Needs `contactData` prop

### Example Component Update
```typescript
// Before
export default function Hero() {
  return (
    // Hardcoded content
  );
}

// After
import { HeroData, SiteConfig } from '../lib/markdown';

interface HeroProps {
  heroData: HeroData;
  siteConfig: SiteConfig;
}

export default function Hero({ heroData, siteConfig }: HeroProps) {
  return (
    // Dynamic content from markdown
  );
}
```

## 🔧 Configuration

### Environment Variables (Optional)
```bash
# For custom deployment settings
NEXT_PUBLIC_SITE_URL=https://your-site.com
```

### CMS Configuration
Edit `/public/admin/config.yml` to:
- Change content structure
- Add new fields
- Modify editorial workflow
- Update media folder location

## 🚨 Important Notes

### Security
- Only invited users can access the CMS
- All changes go through Git for version control
- No direct database access required

### Performance
- Static site generation (SSG)
- All content pre-rendered at build time
- Fast loading with Next.js optimizations

### SEO
- Dynamic meta tags from content
- Structured data support
- Optimized images with Next.js Image component

## 📚 Next Steps

1. **Complete component migration**: Update remaining components to use markdown data
2. **Test CMS workflow**: Create/edit content through admin interface
3. **Configure media management**: Set up image optimization and CDN
4. **Add more content types**: Blog posts, testimonials, etc.
5. **Customize preview templates**: Improve CMS editing experience

## 🆘 Troubleshooting

### Common Issues
- **"Not Found" on /admin**: Check Netlify deployment and redirects
- **Login issues**: Verify Netlify Identity is enabled
- **Content not updating**: Check Git Gateway configuration
- **Build failures**: Verify all markdown files have correct frontmatter

### Support Resources
- [Decap CMS Documentation](https://decapcms.org/docs/)
- [Netlify Identity Documentation](https://docs.netlify.com/visitor-access/identity/)
- [Next.js Documentation](https://nextjs.org/docs)