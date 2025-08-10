import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

export async function getMarkdownContent(filePath: string) {
  try {
    const fullPath = path.join(contentDirectory, filePath);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    // Convert markdown to HTML
    const processedContent = await remark()
      .use(html)
      .process(content);
    const contentHtml = processedContent.toString();
    
    return {
      ...data,
      contentHtml,
    };
  } catch (error) {
    console.error(`Error reading markdown file: ${filePath}`, error);
    return null;
  }
}

export function getMarkdownData(filePath: string) {
  try {
    const fullPath = path.join(contentDirectory, filePath);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    
    return data;
  } catch (error) {
    console.error(`Error reading markdown data: ${filePath}`, error);
    return null;
  }
}

// Helper functions for specific sections
export async function getHeroData() {
  return getMarkdownData('sections/hero.md');
}

export async function getAboutData() {
  return await getMarkdownContent('sections/about.md');
}

export async function getConcertsData() {
  return getMarkdownData('sections/concerts.md');
}

export async function getMusicData() {
  return getMarkdownData('sections/music.md');
}

export async function getVideosData() {
  return getMarkdownData('sections/videos.md');
}

export async function getGalleryData() {
  return getMarkdownData('sections/gallery.md');
}

export async function getContactData() {
  return getMarkdownData('sections/contact.md');
}

export async function getSiteConfig() {
  return getMarkdownData('config/site.md');
}

// Type definitions for TypeScript
export interface HeroData {
  name: string;
  subtitle: string;
  description: string;
  image: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
}

export interface AboutData {
  title: string;
  subtitle: string;
  image: string;
  skills: Array<{
    skill: string;
    icon: string;
  }>;
  achievements: Array<{
    achievement: string;
    year: string;
  }>;
  contentHtml: string;
}

export interface ConcertData {
  title: string;
  subtitle: string;
  upcoming: Array<{
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    buttonText: string;
    buttonLink: string;
    iconColor: string;
  }>;
  pastPerformances: Array<{
    title: string;
    description: string;
    location: string;
    type: string;
    iconColor: string;
  }>;
}

export interface MusicData {
  title: string;
  subtitle: string;
  albums: Array<{
    title: string;
    description: string;
    releaseDate: string;
    cover: string;
    type: string;
    featuredTrack?: string;
    featuredTrackDescription?: string;
    listenLinks: Array<{
      platform: string;
      url: string;
    }>;
    additionalInfo: {
      title: string;
      content: string;
    };
  }>;
}

export interface VideoData {
  title: string;
  subtitle: string;
  videos: Array<{
    title: string;
    description: string;
    youtubeId: string;
    thumbnail?: string;
  }>;
  channelLink: string;
}

export interface GalleryData {
  title: string;
  subtitle: string;
  images: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
}

export interface ContactData {
  title: string;
  subtitle: string;
  inquiryTypes: string[];
  email: string;
  formSettings: {
    serviceId: string;
    templateId: string;
    publicKey: string;
  };
}

export interface SiteConfig {
  title: string;
  description: string;
  author: string;
  email: string;
  social: {
    youtube: string;
    facebook: string;
    instagram: string;
    bandcamp: string;
  };
}