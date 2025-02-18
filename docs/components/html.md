---
title: HTML
description: Wraps the email document with a root element
slug: html
---

<!--@include: @/include/header.md-->

<!--@include: @/include/install.md-->

## Usage

Add the component to your email template. Include styles where needed.

```jsx
import { Button } from '@jsx-email/button';
import { Html } from '@jsx-email/html';

const Email = () => {
  return (
    <Html lang="en" dir="ltr">
      <Button href="https://example.com" style={{ color: '#61dafb' }}>
        Click me
      </Button>
    </Html>
  );
};
```

## Component Props

This component has no custom props, but expresses all of the [Common Component Props](https://react.dev/reference/react-dom/components/common) for `ComponentProps<'html'>`. Additionally, the props listed below should be considered.

### Props

```ts
lang?: string;
```

Identify the language of text content on the email

```ts
dir?: string;
```

Identify the direction of text content on the email
