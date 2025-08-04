# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a webinar materials repository focused on Web Components technology. The project demonstrates Web standard technologies for creating reusable components without framework dependencies.

## Project Structure

- **Root level**: pnpm workspace configuration with package.json managing the monorepo
- **webinars/**: Contains individual webinar materials organized by date
  - **20250805_web_components/**: Web Components webinar materials with README and sample code (referenced but not yet present)

## Architecture

This is a pnpm-based monorepo for organizing webinar content:

- Uses pnpm workspace pattern with `pnpm-workspace.yaml` defining `webinars/*` as packages
- Each webinar is a separate package under the `webinars/` directory
- Webinar structure includes documentation (README.md) and sample implementations
- Focus is on educational content demonstrating Web Components technologies including Custom Elements, Shadow DOM, and HTML Templates

## Package Management

- **Package Manager**: pnpm v10.4.1 (specified in packageManager field)
- **Workspace Setup**: Configured as monorepo with individual webinar packages
- **No Build Process**: Currently no build scripts or dependencies - this is a documentation/sample repository

## Development Notes

- The repository structure suggests sample code should be located in `samples/` directories within each webinar folder
- Content is primarily in Japanese, focusing on Japanese-speaking audiences
- Educational focus on demonstrating cross-framework component reusability using Web Standards

## Implementation Examples Guidelines

When creating implementation examples for webinars:

- **Target Audience**: Beginners attending webinars who are new to the technology
- **Principle**: Provide examples that are necessary and sufficient for understanding basic concepts
- **Avoid Complexity**: Do not include advanced features like:
  - Complex event handling beyond basic concepts
  - Custom events unless essential to the core concept
  - Advanced attribute management
  - Animations or visual effects
  - Multiple interconnected examples
- **Focus on Core Concepts**: Each example should demonstrate the fundamental concepts clearly without distracting details
- **Single Purpose**: Each implementation example should focus on one core concept rather than combining multiple features