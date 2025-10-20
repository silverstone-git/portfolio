# Astronomy Themed Portfolio Website

This is a single-page portfolio website built with Astro, React, and Tailwind CSS. It features an astronomy-themed design and a narrative structure to showcase projects and skills. The user interface includes scroll-based animations and effects.

## Features

-   **Design:** A dark, space/astronomy theme with gradients, celestial objects, and a "glassmorphism" effect.
-   **User Experience:** Scroll-based animations and effects.
-   **Content:** The portfolio is structured to guide visitors through the developer's journey, skills, and projects.
-   **Architecture:** A component-based architecture for the React portion, following the principles of **shadcn/ui**.
-   **Responsiveness:** The website is designed to be responsive across different devices.

## Technology Stack

-   **Core Framework:** [Astro](https://astro.build/) for the static site generation and [React](https://react.dev/) (v19) for the UI components.
-   **Language:** [TypeScript](https://www.typescriptlang.org/) for type-safe code.
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/) for utility-first styling.
-   **UI Components:**
    -   [Radix UI Primitives](https://www.radix-ui.com/): Headless, accessible components.
    -   [class-variance-authority (CVA)](https://cva.style/docs): For creating variant-based component styles.
    -   [tailwind-merge](https://github.com/dcastil/tailwind-merge) and [clsx](https://github.com/lukeed/clsx): For conditional and clean class name management.
-   **Animation:** [Motion One](https://motion.dev/) for component animations.
-   **Icons:** [Lucide React](https://lucide.dev/) for icons.

## Project Structure

The codebase is organized with an Astro container for the main page, which then runs a full React application.

```
/
├─── src/
│   ├─── pages/
│   │   └─── index.astro        # Astro page, the main entry point
│   ├─── react-app/
│   │   ├─── components/       # All React components (ui, custom, etc.)
│   │   ├─── App.tsx            # Main React application component
│   │   └─── styles/
│   │       └─── globals.css    # Global styles for the React app
│   └─── styles/
│       └─── global.css         # Global styles for Astro pages
├─── public/
│   └─── images/                # Static image assets
├─── astro.config.mjs           # Astro configuration
└─── package.json               # Project dependencies and scripts
```

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18 or higher)
-   [Bun](https://bun.sh/) (or npm/yarn)

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your_username/your_project_name.git
    ```
2.  Install dependencies
    ```sh
    bun install
    ```
3.  Start the development server
    ```sh
    bun run dev
    ```

The application will be available at `http://localhost:4321`.

## Deployment

The project can be built for production using the Astro CLI.

To build the application, run:
```sh
bun run build
```
This will create a `dist/` directory with the production-ready files, which can then be deployed to any static hosting service.

## Attributions

The celestial objects used in this project are from public domain sources. Please see the `src/react-app/Attributions.md` file for a complete list of attributions.