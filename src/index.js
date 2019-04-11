import dva from 'dva';
import './index.less';
import { browserHistory } from 'dva/router';

// 1. Initialize
// const app = dva();
const app = dva({
  history: browserHistory,
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
require('./models').default.forEach(key => {
  console.log('xxxx', key.default)
    app.model(key.default)
});

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');


