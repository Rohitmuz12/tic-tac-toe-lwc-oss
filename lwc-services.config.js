// Find the full example of all available configuration options at
// https://github.com/muenzpraeger/create-lwc-app/blob/main/packages/lwc-services/example/lwc-services.config.js
module.exports = {
    buildDir: './docs',
    resources: [
        { from: 'src/client/resources/', to: 'docs/resources/' },

        {
            from: 'node_modules/@salesforce-ux/design-system/assets',
            to: 'docs/SLDS'
        },
        {
            from: 'node_modules/@salesforce-ux/design-system/assets',
            to: 'docs/SLDS'
        }
    ],

    sourceDir: './src/client',

    devServer: {
        proxy: { '/': 'http://localhost:3002' }
    }
};
