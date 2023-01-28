import { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
    schema: `http://127.0.0.1:1337/graphql`,
    documents: ["./src/**/*.tsx", "./src/**/*.ts"],
    overwrite: true,
    generates: {
        "./src/gql/graphql.tsx": {
            plugins: [
                "typescript",
                "typescript-operations",
                "typescript-react-apollo"
            ],
            config: {
                skipTypename: false,
                withHooks: true,
                withHOC: false,
                withComponent: false
            }
        },
        "./graphql.schema.json": {
            plugins: ["introspection"]
        }
    },
    ignoreNoDocuments: true
}

export default config
