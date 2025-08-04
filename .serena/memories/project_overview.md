# Webinar Project Overview

## Purpose
This is a webinar materials repository focused on Web Components technology. The project demonstrates Web standard technologies for creating reusable components without framework dependencies.

## Tech Stack
- **Package Manager**: pnpm v10.4.1 (monorepo workspace configuration)
- **Languages**: HTML, JavaScript, CSS (native web technologies)
- **Focus**: Web Components (Custom Elements, Shadow DOM, HTML Templates)

## Project Structure
- Root level: pnpm workspace configuration with package.json managing the monorepo
- webinars/: Contains individual webinar materials organized by date
  - 20250805_web_components/: Web Components webinar materials with README and sample code
- Uses pnpm workspace pattern with pnpm-workspace.yaml defining webinars/* as packages
- Each webinar is a separate package under the webinars/ directory

## Content Language
- Content is primarily in Japanese, focusing on Japanese-speaking audiences
- Educational focus on demonstrating cross-framework component reusability using Web Standards