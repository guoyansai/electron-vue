module.exports = [
    path('/', 'index', '首页', '', { redirect: '/home.html' }, [
        path('/home.html', 'home', '主页'),
        path('/test.html', 'test', '测试页'),
    ]),
    path('*', 'redirect', '跳转页', '', { redirect: '/' }),
];
//path(path定义路由路径, name挂在文件路径, title页面title, views = [router-view,router-view1], other = {redirect:'/home/index'}路由其他参数, children = []嵌套路由配置)
function path(path, name, title, views = [], other = {}, children = []) {
    let viewobj;
    if (views.length) {
        viewobj = { default: (resolve) => require(['../views/' + views[0] + '.vue'], resolve) };
        if (views.length > 1) { Object.assign(viewobj, { default1: (resolve) => require(['../views/' + views[1] + '.vue'], resolve) }); }
    } else {
        viewobj = { default: (resolve) => require(['../views/' + name + '.vue'], resolve) };
    }
    return Object.assign({
        path: path,
        name: name,
        meta: {
            title: title,
        },
        components: viewobj,
        children: children,
    }, other)
}