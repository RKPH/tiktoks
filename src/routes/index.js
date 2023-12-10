import Home from '~/Pages/Home';
import Following from '~/Pages/Following';
import Profile from '~/Pages/Profile';
import Upload from '~/Pages/Upload';
import { HeaderOnly } from '~/componients/Layout';
import Search from '~/Pages/Search';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/Following', component: Following },
    { path: '/Profile', component: Profile },
    { path: '/Upload', component: Upload, layout: HeaderOnly },
    { path: '/Search', component: Search, layout: null },
];
const privateRoutes = [];

export { privateRoutes, publicRoutes };
