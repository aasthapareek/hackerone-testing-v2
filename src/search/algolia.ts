import algoliasearch from 'algoliasearch';

const algoliaClient = algoliasearch('APP_ID_PROD', '0f84f06917ccefb2ace9b45ade3d77f3');
const tasksIndex = algoliaClient.initIndex('tasks');

export { tasksIndex };
