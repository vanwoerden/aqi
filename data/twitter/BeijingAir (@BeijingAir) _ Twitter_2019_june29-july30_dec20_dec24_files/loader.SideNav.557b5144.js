(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{"9D32":function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0,n("PN9k");var a=r(n("7DT3")),o=r(n("ERkP")),l=r(n("OkZJ"));function r(e){return e&&e.__esModule?e:{default:e}}var i=function(e){return void 0===e&&(e={}),(0,a.default)("svg",Object.assign({},e,{style:[l.default.root,e.style],viewBox:"0 0 24 24"}),o.default.createElement("g",null,o.default.createElement("path",{d:"M19.9 23.5c-.2 0-.3 0-.4-.1L12 17.9l-7.5 5.4c-.2.2-.5.2-.8.1-.2-.1-.4-.4-.4-.7V5.6c0-1.2 1-2.2 2.2-2.2h12.8c1.2 0 2.2 1 2.2 2.2v17.1c0 .3-.2.5-.4.7 0 .1-.1.1-.2.1z"})))};i.metadata={height:24,width:24};var c=i;t.default=c},LzTg:function(e,t,n){"use strict";n.r(t);n("cI1W");var a=n("VbXa"),o=n.n(a),l=n("ERkP"),r=n("dcwb"),i=n("3XMw"),c=n.n(i),s=n("9D32"),u=n.n(s),d=n("o570"),m=n.n(d),p=n("UZ11"),f=n.n(p),g=n("6m7o"),h=n.n(g),v=n("k/Am"),w=n.n(v),b=n("3c1N"),E=n.n(b),y=n("1eTX"),k=(n("PN9k"),n("PJYZ")),_=n.n(k),z=n("lSNA"),I=n.n(z),x=n("oEGd"),C={scribeAction:n("zh9S").c},M=Object(x.b)(C),O=n("7JQg"),P=n("7CKV"),S=n.n(P),T=n("/yvb"),L=n("zfvc"),H=n("t62R"),B=n("rHpw"),N=c.a.c6432564,D=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return t=e.call.apply(e,[this].concat(a))||this,I()(_()(t),"_handlePress",(function(e){var n=t.props,a=n.scribeAction,o=n.scribeNamespace;a(Object.assign({},o,{component:"new_tweet_button",action:"click"}))})),t}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.composeOptions,n=e.withLabel,a=e.withIcon,o=e.testID;return l.createElement(T.a,{accessibilityLabel:N,icon:a?l.createElement(S.a,null):void 0,link:{pathname:"/compose/tweet",state:t},onPress:this._handlePress,size:"normalLarge",style:R.button,testID:o,type:"primary"},n?l.createElement(L.b,{animateMount:!0,duration:"long",show:!0,type:"fade"},l.createElement(H.b,null,N)):null)},t}(l.Component),R=B.a.create((function(e){return{button:{boxShadow:"0px 8px 28px rgba(0, 0, 0, 0.08)"}}})),V=Object(O.d)()(M(D)),j=n("N5qz"),A="SideNav_NewTweet_Button",J=n("3xO4"),Z=n.n(J),X=n("cHvH");n.d(t,"default",(function(){return W}));var U=c.a.f92bc7c1,W=function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var n=t.prototype;return n.render=function(){var e=this,t=this.props,n=t.isCollapsedSmall,a=t.isLoggedIn,o=t.widthStyle,r=[Y.root,o,n?Y.rootPaddingSmall:Y.rootPaddingNormal];return l.createElement(X.a,null,(function(t){var n=t.windowHeight;return l.createElement(Z.a,{style:r},a?e._renderLoggedIn(n):e._renderLoggedOut())}))},n._renderLoggedIn=function(e){var t=this.props,n=t.composeOptions,a=t.isExpanded,o=t.isTwoColumn,i=t.location,c=t.onTabRefresh;return l.createElement(Z.a,{style:[Y.topSection,!a&&Y.alignItemsCenter]},l.createElement(Z.a,{style:Y.topControl},l.createElement(y.a,{onClick:c,pullLeft:!1,size:"large"})),l.createElement(Z.a,{style:[Y.appTabBar,!a&&Y.alignItemsCenter]},l.createElement(r.a,{bookmarksActiveIcon:u.a,bookmarksIcon:m.a,layout:"vertical",listsActiveIcon:f.a,listsIcon:h.a,location:i,moreMenuItemsIcon:w.a,onTabRefresh:c,wideMode:o,withExtendedItems:!0,withLabel:a})),l.createElement(Z.a,{style:[Y.tweetButton,!a&&Y.alignItemsCenter,j.a.isTallHeight(e)&&Y.withTallHeight]},l.createElement(V,{composeOptions:n,testID:A,withIcon:!a,withLabel:a})))},n._renderLoggedOut=function(){var e=this.props,t=e.isExpanded,n=e.onTabRefresh;return l.createElement(Z.a,{style:[Y.loggedOut,!t&&Y.alignItemsCenter]},l.createElement(Z.a,{style:Y.topControl},l.createElement(y.a,{onClick:n,pullLeft:!1,size:"large"})),l.createElement(T.a,{accessibilityLabel:U,icon:l.createElement(E.a,null),link:"/settings",style:Y.settingsButton,type:"neutral"}))},t}(l.Component),Y=B.a.create((function(e){return{root:{height:"100%",overflowY:"auto"},rootPaddingNormal:{paddingHorizontal:e.spaces.medium},rootPaddingSmall:{paddingHorizontal:e.spaces.xSmall},topSection:{alignItems:"flex-start"},topControl:{paddingVertical:e.spaces.micro,maxWidth:"100%"},appTabBar:{marginBottom:e.spaces.xxSmall,marginTop:e.spaces.micro,width:"100%"},tweetButton:{marginVertical:e.spaces.xxSmall,width:"90%"},withTallHeight:{marginVertical:e.spaces.small},alignItemsCenter:{alignItems:"center"},loggedOut:{alignItems:"flex-end",height:"100%",justifyContent:"space-between"},settingsButton:{marginBottom:e.spaces.medium,marginHorizontal:e.spaces.xxSmall}}}))},UZ11:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0,n("PN9k");var a=r(n("7DT3")),o=r(n("ERkP")),l=r(n("OkZJ"));function r(e){return e&&e.__esModule?e:{default:e}}var i=function(e){return void 0===e&&(e={}),(0,a.default)("svg",Object.assign({},e,{style:[l.default.root,e.style],viewBox:"0 0 24 24"}),o.default.createElement("g",null,o.default.createElement("path",{d:"M19.75 2H4.25C3.013 2 2 3.013 2 4.25v15.5C2 20.987 3.013 22 4.25 22h15.5c1.237 0 2.25-1.013 2.25-2.25V4.25C22 3.013 20.987 2 19.75 2zM11 16.75H7c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h4c.414 0 .75.336.75.75s-.336.75-.75.75zm6-4H7c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h10c.414 0 .75.336.75.75s-.336.75-.75.75zm0-4H7c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h10c.414 0 .75.336.75.75s-.336.75-.75.75z"})))};i.metadata={height:24,width:24};var c=i;t.default=c},"k/Am":function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0,n("PN9k");var a=r(n("7DT3")),o=r(n("ERkP")),l=r(n("OkZJ"));function r(e){return e&&e.__esModule?e:{default:e}}var i=function(e){return void 0===e&&(e={}),(0,a.default)("svg",Object.assign({},e,{style:[l.default.root,e.style],viewBox:"0 0 24 24"}),o.default.createElement("g",null,o.default.createElement("path",{d:"M16.5 10.25c-.965 0-1.75.787-1.75 1.75s.784 1.75 1.75 1.75c.964 0 1.75-.786 1.75-1.75s-.786-1.75-1.75-1.75zm0 2.5c-.414 0-.75-.336-.75-.75 0-.413.337-.75.75-.75s.75.336.75.75c0 .413-.336.75-.75.75zm-4.5-2.5c-.966 0-1.75.787-1.75 1.75s.785 1.75 1.75 1.75 1.75-.786 1.75-1.75-.784-1.75-1.75-1.75zm0 2.5c-.414 0-.75-.336-.75-.75 0-.413.337-.75.75-.75s.75.336.75.75c0 .413-.336.75-.75.75zm-4.5-2.5c-.965 0-1.75.787-1.75 1.75s.785 1.75 1.75 1.75c.964 0 1.75-.786 1.75-1.75s-.787-1.75-1.75-1.75zm0 2.5c-.414 0-.75-.336-.75-.75 0-.413.337-.75.75-.75s.75.336.75.75c0 .413-.336.75-.75.75z"}),o.default.createElement("path",{d:"M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"})))};i.metadata={height:24,width:24};var c=i;t.default=c},o570:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0,n("PN9k");var a=r(n("7DT3")),o=r(n("ERkP")),l=r(n("OkZJ"));function r(e){return e&&e.__esModule?e:{default:e}}var i=function(e){return void 0===e&&(e={}),(0,a.default)("svg",Object.assign({},e,{style:[l.default.root,e.style],viewBox:"0 0 24 24"}),o.default.createElement("g",null,o.default.createElement("path",{d:"M19.9 23.5c-.157 0-.312-.05-.442-.144L12 17.928l-7.458 5.43c-.228.164-.53.19-.782.06-.25-.127-.41-.385-.41-.667V5.6c0-1.24 1.01-2.25 2.25-2.25h12.798c1.24 0 2.25 1.01 2.25 2.25v17.15c0 .282-.158.54-.41.668-.106.055-.223.082-.34.082zM12 16.25c.155 0 .31.048.44.144l6.71 4.883V5.6c0-.412-.337-.75-.75-.75H5.6c-.413 0-.75.338-.75.75v15.677l6.71-4.883c.13-.096.285-.144.44-.144z"})))};i.metadata={height:24,width:24};var c=i;t.default=c}}]);
//# sourceMappingURL=https://ton.smf1.twitter.com/responsive-web-internal/sourcemaps/web/loader.SideNav.557b5144.js.map