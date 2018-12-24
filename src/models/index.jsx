const context = require.context('./', true, /\.jsx$/);

export default context
    .keys()
    .filter(item => item !== './index.jsx')
    .map(key => context(key))