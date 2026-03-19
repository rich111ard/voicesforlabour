import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  status: 'ongoing' | 'completed';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  author: string;
  image: string;
  category: string;
}

export interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  thumbnail: string;
  title: string;
  description: string;
  category: string;
}
