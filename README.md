# Drupal USWDS theme initialization

**Requirements:**
- A standard Drupal installation
- Node 18+

## Part 1 USWDS modules and themes already in the Drupal community

### Themes:
- USWDS: https://www.drupal.org/project/uswds
- USWDS Base: https://www.drupal.org/project/uswds_base
- Gesso USWDS: https://www.drupal.org/project/guswds

### Modules:
- USWDS Paragraph Components: https://www.drupal.org/project/uswds_paragraph_components
- USWDS Layout Builder Configuration: https://www.drupal.org/project/uswds_blb_configuration
- USWDS Ckeditor Integration: https://www.drupal.org/project/uswds_ckeditor_integration
- New USWDS Templates: https://www.drupal.org/project/uswds_templates

### Plug for other sessions:
- **Thursday November 2 - 2pm**

  Component-based design using Layout Paragraphs and the U.S. Web Design System

- **Thursday November 2 - 11am**

  What happens when USWDS meets Single Directory Components? The Governor.

## Part 2 Theme initialization

### Generate a new theme
https://www.drupal.org/docs/theming-drupal/creating-sub-themes#s-generating-a-new-theme

## Part 3 Installation of USWDS

Add/update .gitignore in theme to exclude
```
node_modules
dist
```

### Install the design system

- Initialize a package.json file
- Install USWDS

  https://github.com/uswds/uswds#installing-the-design-system
- Install USWDS compile

  https://github.com/uswds/uswds-compile#installation

### Configure a Gulpfile
https://github.com/uswds/uswds-compile#gulpfile-setup
- run `npx gulp init` to initalize the sass theme files
- run `npx gulp` to compile the assets
- (optional) Configure CI/CD workflows to autogenerate compiled assets during deploy


### Add output files to libraries
https://www.drupal.org/docs/develop/creating-modules/adding-assets-css-js-to-a-drupal-module-via-librariesyml


## Part 4 Template configuration

###  Customize templates for rendered output
Install twig_tweak


### Best practices
- Decouple core component templates to avoid duplicating markup
- Keep USWDS dependency up to date
