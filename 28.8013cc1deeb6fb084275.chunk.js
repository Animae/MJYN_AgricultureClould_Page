webpackJsonp([28],{"./app/containers/AlertPage/constants.js":function(e,t,r){"use strict";r.d(t,"a",function(){return n}),r.d(t,"b",function(){return a}),r.d(t,"c",function(){return l}),r.d(t,"f",function(){return s}),r.d(t,"g",function(){return i}),r.d(t,"d",function(){return u}),r.d(t,"e",function(){return o});var n="app/AlertPage/SET_FILTER_TYPE",a="app/AlertPage/SET_FILTER_PLOT",l="app/AlertPage/SET_FILTER_SUB_PLOT",s="app/AlertPage/LOAD_ALERTS",i="app/AlertPage/SET_ALERTS",u="app/AlertPage/SET_FILTER_TIME_FROM",o="app/AlertPage/SET_FILTER_TIME_TO"},"./app/containers/AlertPage/reducer.js":function(e,t,r){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments[1],n=t.type,i=t.payload;switch(n){case l.a:return e.set("filterType",i);case l.b:return e.set("filterPlot",i);case l.c:return e.set("filterSubPlot",i);case l.d:return e.set("filterTimeFrom",i);case l.e:return e.set("filterTimeTo",i);case l.g:return e.set("alerts",r.i(a.fromJS)(i));default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r("./node_modules/immutable/dist/immutable.js"),l=(r.n(a),r("./app/containers/AlertPage/constants.js")),s=r.i(a.fromJS)({alerts:[],alertTypes:["设备低电压","设备离线","环境超限","自动执行失败","策略执行失败","水肥策略警告"],plots:["全选","草莓一区","草莓二区","草莓三区","蓝莓一区","蓝莓二区","蓝莓三区","未命名区域"],subPlots:["全选","1","2","3","4","5","6","7","8","9","10"],filterType:"设备低电压",filterPlot:"全选",filterSubPlot:"全选",filterTimeFrom:"-",filterTimeTo:"-"});t.default=n}});