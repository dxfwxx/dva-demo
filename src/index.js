import dva from 'dva';
import './index.less';
import browserHistory from 'react-router';

// 1. Initialize
// const app = dva();
const app = dva({
  history: browserHistory,
    // initialState: {
    //     blogs: {
    //         list: [
    //             { name: 'dva', id: 1 },
    //             { name: 'antd', id: 2 }
    //         ],
    //     },
    // },
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
require('./models').default.forEach(key => {
    app.model(key.default)
});

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');


