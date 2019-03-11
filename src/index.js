import dva from 'dva';
import './index.css';
import models from './models/index'
// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model

Object.keys(models).forEach(v => app.model(models[v]));

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
