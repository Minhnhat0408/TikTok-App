import { HeaderOnly } from '~/layouts';
import routes from '~/config/routes';

// Page
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import NotFounded from '~/pages/NotFounded';
import Search from '~/pages/Search';
import Live from '~/pages/Live';

// Router khong can dang nhap cung xem duoc
const publicRoutes = [
  { path: routes.home, component: Home },
  { path: routes.following, component: Following },
  { path: routes.profile, component: Profile },
  { path: routes.upload,  component: Upload, layout: HeaderOnly },
  { path: routes.search,component: Search, layout: null},
  { path: routes.live, component: Live },
  { path: '/*', component: NotFounded, layout: null },
  
];

// Router dang nhap moi xem duoc
const privateRoutes = [];

export { publicRoutes, privateRoutes };
