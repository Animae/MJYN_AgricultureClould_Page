webpackJsonp([18],{"./app/containers/AlertPage/constants.js":function(e,t,r){"use strict";r.d(t,"a",function(){return a}),r.d(t,"b",function(){return n}),r.d(t,"c",function(){return s});var a="app/AlertPage/SET_FILTER_TYPE",n="app/AlertPage/LOAD_ALERTS",s="app/AlertPage/SET_ALERTS"},"./app/containers/AlertPage/reducer.js":function(e,t,r){"use strict";function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments[1],a=t.type,c=t.payload;switch(a){case s.a:return e.set("filterType",c);case s.c:return e.set("alerts",r.i(n.fromJS)(c));default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r("./node_modules/immutable/dist/immutable.js"),s=(r.n(n),r("./app/containers/AlertPage/constants.js")),u=r.i(n.fromJS)({alerts:[],alertTypes:["设备低电压","设备离线","环境超限","自动执行失败","策略执行失败","水肥策略警告"],filterType:"设备低电压"});t.default=a}});