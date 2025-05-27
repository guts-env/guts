# Guts UI Library

A modern, accessible React UI component library built with TypeScript, Tailwind CSS, and Radix UI primitives.

## Features

- 🎨 **Modern Design System** - Built with Tailwind CSS for consistent styling
- ♿ **Accessibility First** - Components built on Radix UI primitives
- 🔧 **TypeScript Support** - Full type safety and IntelliSense
- 📚 **Storybook Integration** - Interactive component documentation
- 🎯 **Class Variance Authority** - Flexible component variants
- ⚡ **Vite Powered** - Fast development and build process
- 🧪 **Testing Ready** - Vitest and Playwright integration

## Installation

```bash
npm install guts
# or
yarn add guts
# or
pnpm add guts
```

## Quick Start

```tsx
import { Button, ActionButton } from "guts";
import "guts/dist/style.css";

function App() {
  return (
    <div>
      <Button variant="default" size="md">
        Click me
      </Button>

      <ActionButton
        buttonProps={{ children: "Delete" }}
        destructive
        title="Delete Item"
        description="This action cannot be undone."
        onOk={() => console.log("Deleted!")}
      />
    </div>
  );
}
```

## Components

### Button

A versatile button component with multiple variants and states.

```tsx
import { Button } from 'guts';

// Basic usage
<Button>Click me</Button>

// With variants
<Button variant="destructive">Delete</Button>
<Button variant="outline">Cancel</Button>
<Button variant="ghost">Ghost</Button>

// With loading state
<Button loading loadingText="Saving...">Save</Button>

// As child component
<Button asChild>
  <a href="/link">Link Button</a>
</Button>
```

**Props:**

- `variant`: `"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"`
- `size`: `"default" | "sm" | "lg" | "icon"`
- `loading`: `boolean` - Shows loading spinner
- `loadingIcon`: `React.ReactNode` - Custom loading icon
- `loadingText`: `string` - Text to show when loading
- `asChild`: `boolean` - Render as child component

### ActionButton

A confirmation dialog button for destructive or important actions.

```tsx
import { ActionButton } from "guts";

<ActionButton
  buttonProps={{ children: "Delete Account" }}
  destructive
  title="Are you absolutely sure?"
  description="This will permanently delete your account and all associated data."
  cancelText="Cancel"
  okText="Delete Account"
  onOk={() => handleDelete()}
  onCancel={() => console.log("Cancelled")}
/>;
```

**Props:**

- `buttonProps`: `ButtonProps` - Props for the trigger button
- `destructive`: `boolean` - Applies destructive styling
- `title`: `string` - Dialog title
- `description`: `string` - Dialog description
- `icon`: `React.ReactNode` - Custom dialog icon
- `hideIcon`: `boolean` - Hide the dialog icon
- `cancelText`: `string` - Cancel button text
- `okText`: `string` - Confirm button text
- `onCancel`: `() => void` - Cancel callback
- `onOk`: `() => void` - Confirm callback

### AlertDialog

Low-level alert dialog components for building custom confirmation dialogs.

```tsx
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "guts";

<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button>Open Dialog</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Confirm Action</AlertDialogTitle>
      <AlertDialogDescription>
        Are you sure you want to continue?
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>;
```

## Development

### Prerequisites

- Node.js 18+
- pnpm (recommended)

### Setup

```bash
# Clone the repository
git clone <repository-url>
cd guts

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Start Storybook
pnpm storybook
```

### Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build the library
- `pnpm lint` - Run ESLint
- `pnpm storybook` - Start Storybook
- `pnpm build-storybook` - Build Storybook
- `pnpm test` - Run tests

### Building

```bash
pnpm build
```

This will generate:

- `dist/` - Built library files
- Type definitions for TypeScript

## Storybook

Interactive component documentation is available via Storybook:

```bash
pnpm storybook
```

Visit `http://localhost:6006` to explore components and their variants.

## Testing

The library uses Vitest for unit testing and Playwright for browser testing:

```bash
# Run tests
pnpm test

# Run tests with coverage
pnpm test:coverage
```

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Radix UI** - Accessible primitives
- **Class Variance Authority** - Component variants
- **Lucide React** - Icons
- **Vite** - Build tool
- **Storybook** - Documentation
- **Vitest** - Testing
- **Playwright** - Browser testing

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-component`
3. Make your changes
4. Add tests for new components
5. Update Storybook stories
6. Submit a pull request

## License

[MIT License](LICENSE)

## Roadmap

- [ ] Add more components (Input, Select, Modal, etc.)
- [ ] Dark mode support
- [ ] Animation system
- [ ] Form components
- [ ] Data display components
- [ ] Navigation components

---

Built with ❤️ using modern web technologies.
