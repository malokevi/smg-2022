This project is to create a responsive Marketing site with a built in online store, fully managed content via CMS, ecommerce, authentication. themeing. Ideally to be kept in line with best practices and used as a testbed.

# Install dependencies
yarn

# To run the application
yarn start

# Integrate with backend
-   pull smg-2022-strapi repo.
-   run the project locally using the scripts.
-   include the endpoint as an ENV variable in this project. there is an example included in .env.example.

# Some TODOS
-   populate database with dummy content, content types to serve as a fully functioning demo.
-   introduce module federation for major features.
-   transition to Turbopack when it's out of beta.
-   achieve 80%+ unit test coverage, implement E2E testing
-   implement Git Workflows to automate testing
-   migrate components, fonts, colours and other design-centric helpers to a Storybook design system hosted on npm
-   add Strapi backend, fronend, and component library to an NX monorepo to help facilitate development
-   Integrate multiple payment providers (Shopify? Stripe?)