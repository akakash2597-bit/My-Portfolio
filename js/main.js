/**
 * Application Entry Point
 * Orchestrates and boots all client modules
 */

import { ThemeManager } from './theme.js';
import { NavigationManager } from './navigation.js';
import { AnimationManager } from './animations.js';
import { SkillsManager } from './skills.js';
import { ProjectsManager } from './projects.js';
import { ContactManager } from './contact.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize theme first to avoid any layout flash
  const theme = new ThemeManager();

  // Initialize navigation and responsive drawer
  const navigation = new NavigationManager();

  // Initialize scroll reveals, typewriter, and stats
  const animations = new AnimationManager();

  // Initialize skills filter and progress meters
  const skills = new SkillsManager();

  // Initialize projects showcase and case studies modal
  const projects = new ProjectsManager();

  // Initialize contact form validation and toast alert system
  const contact = new ContactManager();

  console.log('🚀 Portfolio loaded successfully. Built with modern vanilla Web APIs.');
});
