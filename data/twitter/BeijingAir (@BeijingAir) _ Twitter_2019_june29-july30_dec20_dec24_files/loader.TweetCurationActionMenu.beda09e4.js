(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{"/1Tt":function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0,n("PN9k");var o=i(n("7DT3")),r=i(n("ERkP")),a=i(n("OkZJ"));function i(e){return e&&e.__esModule?e:{default:e}}var c=function(e){return void 0===e&&(e={}),(0,o.default)("svg",Object.assign({},e,{style:[a.default.root,e.style],viewBox:"0 0 24 24"}),r.default.createElement("g",null,r.default.createElement("path",{d:"M12 1.25C6.072 1.25 1.25 6.072 1.25 12S6.072 22.75 12 22.75 22.75 17.928 22.75 12 17.928 1.25 12 1.25zm0 20c-2.297 0-4.396-.846-6.015-2.237l4.27-4.27c.294-.294.294-.77 0-1.062-.145-.145-.337-.22-.53-.22s-.383.074-.53.22L4.93 17.95C3.57 16.34 2.75 14.264 2.75 12c0-5.1 4.15-9.25 9.25-9.25 2.265 0 4.34.82 5.95 2.178l-4.267 4.266c-.293.293-.293.768 0 1.06.146.147.338.22.53.22s.384-.072.53-.22l4.27-4.268C20.402 7.604 21.25 9.703 21.25 12c0 5.1-4.15 9.25-9.25 9.25z"})))};c.metadata={height:24,width:24};var l=c;t.default=l},"0pUJ":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("LnO1"),n("3eMz"),n("dtAy"),n("AJ0U");var o=n("XOJV"),r=n("G6rE"),a=n("WA1W"),i=function(e){return function(t,n,i){i.api;return t(r.e.mute(e)).then((function(){var r=n(),i=Object.values(o.a.selectAll(r)).reduce((function(t,n){return n.user===e&&(t[n.id_str]=!0),t}),{});return t([a.b.removeTweets(i),a.a.removeTweets(i)])}))}}},"68+r":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o,r=n("k49u"),a=n("3XMw"),i=n.n(a).a.c462785a,c=((o={})[r.a.NotMutingTargetUser]={toast:{text:i}},o.showToast=!0,o)},ACNv:function(e,t,n){"use strict";n("0rpg");var o=n("8OQS"),r=n.n(o),a=n("PJYZ"),i=n.n(a),c=n("VbXa"),l=n.n(c),s=n("lSNA"),u=n.n(s),d=n("ERkP"),f=n("gt4B"),m=n("rBth"),p=n("I7xG"),_=n("3XMw"),h=n.n(_),v=n("hACr"),b=(n("aWzz"),h.a.f4c9593e),w=function(e){function t(t){var n;return n=e.call(this,t)||this,u()(i()(n),"_getShortcutKeyHandlers",Object(p.a)(i()(n),(function(e,t,n){return n._getProcessedActionItems()}),(function(e){return e.reduce((function(e,t){var n=t.shortcutKey,o=t.onClick;return n&&(e[n]=o),e}),{})}))),u()(i()(n),"_getFinalActionItems",Object(p.a)(i()(n),(function(e,t,n){return n._getProcessedActionItems()}),(function(e){return e.map((function(e){e.shortcutKey;return r()(e,["shortcutKey"])}))}))),u()(i()(n),"_getProcessedActionItems",Object(p.a)(i()(n),(function(e){return e.actionItems}),(function(e){return e.onClose}),(function(e,t){return t.nextActionItems}),(function(e,t,o){return(o||e).map((function(e){var o=e.text,r=e.testID,a=e.onClick,i=e.confirmation,c=e.isEmphasized,l=e.shortcutKey,s=e.link;return{shortcutKey:l,Icon:e.Icon,isEmphasized:c,testID:r,text:o,onClick:function(){i?i.render?n._handleConfirm({callback:a,render:i.render}):n._handleConfirm({callback:a,text:i.text,headline:i.headline,label:i.label,confirmButtonType:i.confirmButtonType}):(a(),t())},link:s}}))}))),u()(i()(n),"_handleNextMenu",(function(e){n.setState({nextActionItems:e})})),u()(i()(n),"_handleConfirmed",(function(){n.state.activeConfirmation&&n.state.activeConfirmation.callback(),n.setState({activeConfirmation:null}),n.props.onClose()})),u()(i()(n),"_handleCancelConfirm",(function(){n.setState({activeConfirmation:null})})),n.state={activeConfirmation:null,nextActionItems:null},n}l()(t,e);var n=t.prototype;return n.render=function(){var e=this.props,t=e.hidden,n=e.enableKeyboardShortcuts,o=e.onClose,r=this.state.activeConfirmation;return r?this._renderConfirmation(r):d.createElement(v.a,{enabled:!!n,handlers:this._getShortcutKeyHandlers()},t?null:d.createElement(f.a,{cancelButtonLabel:b,items:this._getFinalActionItems(),onCloseRequested:o}))},n._renderConfirmation=function(e){if(e&&e.render)return e.render(this._handleConfirmed,this._handleCancelConfirm);var t=e||{},n=t.headline,o=t.label,r=t.confirmButtonType,a=t.text;return d.createElement(m.a,{confirmButtonLabel:o,confirmButtonType:r,headline:n,onCancel:this._handleCancelConfirm,onConfirm:this._handleConfirmed,text:a})},n._handleConfirm=function(e){this.setState({activeConfirmation:e})},t}(d.Component);t.a=w},AsbF:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0,n("PN9k");var o=i(n("7DT3")),r=i(n("ERkP")),a=i(n("OkZJ"));function i(e){return e&&e.__esModule?e:{default:e}}var c=function(e){return void 0===e&&(e={}),(0,o.default)("svg",Object.assign({},e,{style:[a.default.root,e.style],viewBox:"0 0 24 24"}),r.default.createElement("g",null,r.default.createElement("path",{d:"M12.025 22.75c-5.928 0-10.75-4.822-10.75-10.75S6.098 1.25 12.025 1.25 22.775 6.072 22.775 12s-4.822 10.75-10.75 10.75zm0-20c-5.1 0-9.25 4.15-9.25 9.25s4.15 9.25 9.25 9.25 9.25-4.15 9.25-9.25-4.15-9.25-9.25-9.25z"}),r.default.createElement("path",{d:"M13.064 17.47c0-.616-.498-1.114-1.114-1.114-.616 0-1.114.498-1.114 1.114 0 .615.498 1.114 1.114 1.114.616 0 1.114-.5 1.114-1.114zm3.081-7.528c0-2.312-1.882-4.194-4.194-4.194-2.312 0-4.194 1.882-4.194 4.194 0 .414.336.75.75.75s.75-.336.75-.75c0-1.485 1.21-2.694 2.695-2.694 1.486 0 2.695 1.21 2.695 2.694 0 1.486-1.21 2.695-2.694 2.695-.413 0-.75.336-.75.75v1.137c0 .414.337.75.75.75s.75-.336.75-.75v-.463c1.955-.354 3.445-2.06 3.445-4.118z"})))};c.metadata={height:24,width:24};var l=c;t.default=l},CLMv:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0,n("PN9k");var o=i(n("7DT3")),r=i(n("ERkP")),a=i(n("OkZJ"));function i(e){return e&&e.__esModule?e:{default:e}}var c=function(e){return void 0===e&&(e={}),(0,o.default)("svg",Object.assign({},e,{style:[a.default.root,e.style],viewBox:"0 0 24 24"}),r.default.createElement("g",null,r.default.createElement("path",{d:"M23.804 11.5l-6.496-7.25c-.278-.31-.752-.334-1.06-.06-.308.277-.334.752-.058 1.06L22.238 12l-6.047 6.75c-.275.308-.25.782.06 1.06.142.127.32.19.5.19.204 0 .41-.084.558-.25l6.496-7.25c.252-.28.258-.713 0-1zm-23.606 0l6.496-7.25c.278-.31.752-.334 1.06-.06.308.277.334.752.058 1.06L1.764 12l6.047 6.75c.277.308.25.782-.057 1.06-.143.127-.322.19-.5.19-.206 0-.41-.084-.56-.25L.197 12.5c-.252-.28-.257-.713 0-1zm9.872 12c-.045 0-.09-.004-.135-.012-.407-.073-.68-.463-.605-.87l3.863-21.5c.074-.407.466-.674.87-.606.408.073.68.463.606.87l-3.864 21.5c-.065.363-.38.618-.737.618z"})))};c.metadata={height:24,width:24};var l=c;t.default=l},DU9d:function(e,t,n){"use strict";t.a={block:"block",mute:"mute",sendDmFromProfile:"sendDmFromProfile"}},GygS:function(e,t,n){"use strict";n.d(t,"c",(function(){return k})),n.d(t,"a",(function(){return C})),n.d(t,"b",(function(){return y}));n("KYm4");var o=n("ERkP"),r=n("rBth"),a=n("3XMw"),i=n.n(a),c=n("DLPW"),l=n.n(c),s=n("/1Tt"),u=n.n(s),d=n("OrGc"),f=n("fs1G"),m=n("DU9d"),p=i.a.f4c9593e,_=i.a.e2532044,h=i.a.heb4ebc3,v=i.a.f16f5021,b=i.a.f7d3a211,w=i.a.fe1b10ff,g=i.a.c9b21e1a,A=i.a.ebcc87b4,T=i.a.idf8e809,k=Object.freeze({TWEET_CARET:"tweet_caret",PROFILE:"user_profile",LIST_DETAIL:"list_detail"}),C=function(e){var t,n,o=e.user,r=e.source,a=e.blockAction,i=e.unblockAction,c=f.a,s=o.blocking?x(o.screen_name):E(o.screen_name);return r===k.TWEET_CARET&&(t=d.d.block,c=o.blocking?i:a),r===k.PROFILE&&(n=m.a.block),r!==k.PROFILE&&r!==k.LIST_DETAIL||(c=function(){o.blocking?i(s):a(s)}),{confirmation:s,onClick:c,testID:n,shortcutKey:t,Icon:o.blocking?u.a:l.a,text:o.blocking?g({screenName:o.screen_name}):h({screenName:o.screen_name})}},y=function(e){var t=e.confirmation,n=e.onClose,a=e.handleConfirm,i=t.confirmButtonType,c=t.label,l=t.headline,s=t.text;return o.createElement(r.a,{cancelButtonLabel:p,confirmButtonLabel:c,confirmButtonType:i,headline:l,onCancel:n,onConfirm:a,text:s})},E=function(e){return{confirmButtonType:"destructive",headline:_({screenName:e}),label:v,text:b({screenName:e})}},x=function(e){return{confirmButtonType:"primary",headline:w({screenName:e}),label:A,text:T}}},JtkK:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0,n("PN9k");var o=i(n("7DT3")),r=i(n("ERkP")),a=i(n("OkZJ"));function i(e){return e&&e.__esModule?e:{default:e}}var c=function(e){return void 0===e&&(e={}),(0,o.default)("svg",Object.assign({},e,{style:[a.default.root,e.style],viewBox:"0 0 24 24"}),r.default.createElement("g",null,r.default.createElement("path",{d:"M20.083 6.173l2.323 2.323c.293.293.768.293 1.06 0s.294-.768 0-1.06l-2.32-2.326 2.322-2.323c.293-.294.293-.77 0-1.062s-.768-.293-1.06 0L20.082 4.05 17.76 1.73c-.293-.293-.768-.293-1.06 0-.147.146-.22.338-.22.53s.072.384.22.53l2.32 2.32-2.32 2.325c-.147.146-.22.338-.22.53s.072.384.22.53c.292.293.767.293 1.06 0l2.323-2.32zM8.417 11.816c1.355 0 2.872-.15 3.84-1.256.813-.93 1.077-2.367.806-4.392-.38-2.826-2.116-4.513-4.645-4.513-2.53 0-4.267 1.687-4.646 4.513-.273 2.025-.01 3.462.805 4.393.968 1.108 2.485 1.257 3.84 1.257zm-3.16-5.448c.16-1.2.786-3.212 3.16-3.212 2.373 0 2.998 2.013 3.16 3.212.207 1.55.056 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.256-.223-2.71-.743c-.507-.578-.658-1.656-.45-3.205zm11.44 12.867c-.88-3.525-4.283-5.988-8.28-5.988-3.998 0-7.403 2.463-8.28 5.988-.172.693-.03 1.4.395 1.94.408.522 1.04.822 1.733.822H14.57c.69 0 1.323-.3 1.73-.82.425-.54.568-1.247.396-1.942zm-1.577 1.018c-.126.16-.316.245-.55.245H2.264c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.113 1.994 6.824 4.85c.06.24.017.48-.12.655z"})))};c.metadata={height:24,width:24};var l=c;t.default=l},MgNo:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0,n("PN9k");var o=i(n("7DT3")),r=i(n("ERkP")),a=i(n("OkZJ"));function i(e){return e&&e.__esModule?e:{default:e}}var c=function(e){return void 0===e&&(e={}),(0,o.default)("svg",Object.assign({},e,{style:[a.default.root,e.style],viewBox:"0 0 24 24"}),r.default.createElement("g",null,r.default.createElement("path",{d:"M20.472 14.738c-.388-1.808-2.24-3.517-3.908-4.246l-.474-4.307 1.344-2.016c.258-.387.28-.88.062-1.286-.218-.406-.64-.66-1.102-.66H7.54c-.46 0-.884.254-1.1.66-.22.407-.197.9.06 1.284l1.35 2.025-.42 4.3c-1.667.732-3.515 2.44-3.896 4.222-.066.267-.043.672.222 1.01.14.178.46.474 1.06.474h3.858l2.638 6.1c.12.273.39.45.688.45s.57-.177.688-.45l2.638-6.1h3.86c.6 0 .92-.297 1.058-.474.265-.34.288-.745.228-.988zM12 20.11l-1.692-3.912h3.384L12 20.11zm-6.896-5.413c.456-1.166 1.904-2.506 3.265-2.96l.46-.153.566-5.777-1.39-2.082h7.922l-1.39 2.08.637 5.78.456.153c1.355.45 2.796 1.78 3.264 2.96H5.104z"})))};c.metadata={height:24,width:24};var l=c;t.default=l},MzK7:function(e,t,n){"use strict";n.r(t);n("PN9k"),n("KI7T");var o=n("RIqP"),r=n.n(o),a=n("PJYZ"),i=n.n(a),c=n("VbXa"),l=n.n(c),s=n("lSNA"),u=n.n(s),d=n("ERkP"),f=n("EbOo"),m=n("rBth"),p=(n("yKDW"),n("LnO1"),n("3eMz"),n("dtAy"),n("4oWw"),n("j7tW")),_=n("1YZw"),h=n("ymux"),v=n("0KEI"),b=n("hqKg"),w=n("0pUJ"),g=n("zh9S"),A=n("RqPI"),T=n("XOJV"),k=n("G6rE"),C=n("HAhZ"),y=n("oEGd"),E=[],x=Object(b.createSelector)((function(e,t){var n=t.feedbackSelector;return n?n(e):E}),A.k,C.c,(function(e,t,n){return{feedbackOptions:e,userCountry:t,tips:n}})),I={addTip:C.a,addToast:_.b,block:k.e.block,createLocalApiErrorHandler:Object(v.b)("TWEET_CURATION_ACTION_SHEET_CONTAINER"),deleteTweet:function(e){return function(t){return Promise.all([t(T.a.delete(e)),t(Object(h.a)({focalTweetId:e}).deleteTimeline())])}},follow:k.e.follow,hideReply:T.a.hideReply,mute:w.a,muteTweet:T.a.mute,pin:p.a,removeTag:T.a.removeTag,scribeAction:g.c,unblock:k.e.unblock,unfollow:k.e.unfollow,unhideReply:T.a.unhideReply,unmute:k.e.unmute,unmuteTweet:T.a.unmute,unpin:p.c},M=Object(y.g)(x,I),O=n("7JQg"),R=n("wrlS"),L=n("3XMw"),U=n.n(L),H=n("AsbF"),z=n.n(H),P=n("GoHP"),D=n.n(P),B=n("K2+g"),N=n.n(B),j=n("CLMv"),S=n.n(j),F=n("sg/b"),J=n.n(F),K=n("qz7Y"),V=n.n(K),Z=n("ytFK"),G=n.n(Z),W=n("MgNo"),X=n.n(W),q=n("cnjV"),Y=n.n(q),Q=n("O/fU"),$=n.n(Q),ee=n("GQKA"),te=n.n(ee),ne=n("JtkK"),oe=n.n(ne),re=n("OwLT"),ae=n.n(re),ie=n("mLw8"),ce=n.n(ie),le=n("wuJq"),se=n.n(le),ue=n("OrGc"),de=n("v6aA"),fe=n("foB5"),me=n("fs1G"),pe=n("Rp9C"),_e=n("mqpi"),he={pin:"pin",unpin:"unpin",report:"report"},ve=(n("AxOO"),n("u0B7")),be=n("tJZD"),we=n("68+r"),ge=n("TnY3"),Ae=(n("aWzz"),n("I7xG")),Te=n("feu+"),ke=n("ACNv"),Ce=n("GygS");n.d(t,"TweetCurationActionMenu",(function(){return Rt}));var ye="conversation_muted_education",Ee="hide_reply_author_education",xe=U.a.d5cb39c1,Ie=U.a.e9ad38b7,Me=U.a.b0531cdd,Oe=U.a.b88c98e1,Re=U.a.h4ba2c1a,Le=U.a.d5d8de0d,Ue=U.a.f16f5021,He=U.a.ebcc87b4,ze=U.a.e73a78a4,Pe=U.a.d10feecb,De=U.a.b7518a71,Be=U.a.df0ef9db,Ne=U.a.h74cf577,je=U.a.eb0f7b6d,Se=U.a.f305a3ed,Fe=U.a.h4c10f46,Je=U.a.dd22bcfd,Ke=U.a.d17f5929,Ve=U.a.ba4f2894,Ze=U.a.g77c9657,Ge=U.a.ef65abf0,We=U.a.ifd1f11f,Xe=U.a.i08c6528,qe=U.a.f740d094,Ye=U.a.ie203b38,Qe=U.a.cf55c743,$e=U.a.c1242daa,et=U.a.f4d4d20a,tt=U.a.i5a9dfb2,nt=U.a.hd7389df,ot=U.a.e9d748fd,rt=U.a.fe75bce1,at=U.a.d951d75f,it=U.a.h43c6319,ct=U.a.d640fbd4,lt=U.a.c726fdad,st=U.a.da4bb55e,ut=U.a.ja95fca5,dt=U.a.h56ea4f3,ft=U.a.d9d6822c,mt=U.a.fb1e9197,pt=U.a.g890edfa,_t=U.a.dcd37fcc,ht=U.a.gdea5be4,vt=U.a.f7d3a211,bt=U.a.c99895cd,wt=U.a.fe48d3a7,gt=U.a.eb32619d,At=U.a.jb50cb9e+"\n\n"+U.a.b34db3ec,Tt="https://help.twitter.com/en/using-twitter/mentions-and-replies?lang=browser#hidden-reply",kt=U.a.e682c372,Ct=U.a.a6adcbe2,yt=U.a.ca1e2e4f,Et=U.a.e7c64f54,xt=U.a.f3521a5c,It=U.a.f4c9593e,Mt=U.a.f6be8781,Ot="https://support.twitter.com/articles/20175032",Rt=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return t=e.call.apply(e,[this].concat(o))||this,u()(i()(t),"state",{showModerationBlockConfirmation:!1}),u()(i()(t),"_getActionItems",Object(Ae.a)(i()(t),(function(e){return e.tweet}),(function(e){return e.isPinned}),(function(e){return e.promotedContent}),(function(e){return e.withMuteConversation}),(function(e){return e.withRemoveFromBookmarks}),(function(e){return e.onTweetDismiss}),(function(e){return e.feedbackOptions}),(function(e){return e.userCountry}),(function(e){return e.withViewHiddenReplies}),(function(e){return e.withHideReply}),(function(e){return e.withUnhideReply}),(function(e){return e.tips}),(function(e,n,o,a,i,c,l,s,u,d,f,m){var p=t.context.loggedInUserId,_=e.user,h=[],v=o&&"earned"!==o.disclosure_type,b={};if(v&&(b.adInfo=t._getAdInfoAction()),_.id_str!==p||Object(_e.a)(e,"view_tweet_activity")||(b.analytics=t._getAnalyticsAction()),_.protected||(b.embed=t._getEmbedTweetAction()),u&&e.conversation_id_str===e.id_str&&R.a.isTrue("author_moderated_replies_consumer_enabled")&&(b.viewHiddenReplies=t._getViewHiddenRepliesAction()),t._shouldShowRemoveTag()&&(b.removeTag=t._getRemoveTagAction()),p)if(_.id_str!==p){c&&v&&(b.promotedTweetDismiss=t._getPromotedTweetDismissAction(c)),_.blocking||(b.followOrUnfollow=_.following?t._getUnfollowAction():t._getFollowAction(),b.muteOrUnmute=_.muting?t._getUnmuteAction():t._getMuteAction()),a&&(b.muteOrUnmuteConversation=e.conversation_muted?t._getUnmuteConversationAction():t._getMuteConversationAction()),d&&R.a.isTrue("author_moderated_replies_author_enabled")&&!R.a.isTrue("author_moderated_replies_urt_container_enabled")&&(b.hideReply=t._getHideReplyAction(m[Ee])),f&&R.a.isTrue("author_moderated_replies_author_enabled")&&(b.unhideReply=t._getUnhideReplyAction());var w={user:_,source:Ce.c.TWEET_CARET,blockAction:t._handleBlock,unblockAction:t._handleUnblock};b.blockOrUnblock=Object(Ce.a)(w)}else n?b.pinOrUnpin=t._getUnpinAction():Object(_e.a)(e,"pin_to_profile")||(b.pinOrUnpin=t._getPinAction()),a&&(b.muteOrUnmuteConversation=e.conversation_muted?t._getUnmuteConversationAction():t._getMuteConversationAction()),b.delete=t._getDeleteTweetAction();(p&&p!==_.id_str||!p&&s&&"DE"===s.toUpperCase())&&(b.report=t._getReportAction());return["delete","pinOrUnpin","promotedTweetDismiss","adInfo","removeTag","feedbackOptions","embed","followOrUnfollow","muteOrUnmute","muteOrUnmuteConversation","blockOrUnblock","hideReply","unhideReply","report","analytics","viewHiddenReplies"].forEach((function(e){"feedbackOptions"===e?h.push.apply(h,r()(l)):b[e]&&h.push(b[e])})),h}))),u()(i()(t),"_shouldShowRemoveTag",(function(){var e=t.context.loggedInUserId,n=t.props.tweet,o=n.extended_entities&&n.extended_entities.media&&n.extended_entities.media[0]&&n.extended_entities.media[0].features&&n.extended_entities.media[0].features.all&&n.extended_entities.media[0].features.all.tags;return o&&o.find((function(t){return t.user_id===e}))})),u()(i()(t),"_getFollowAction",(function(){var e=t.props.tweet.user.screen_name;return{text:xe({screenName:e}),onClick:t._handleFollow,Icon:J.a}})),u()(i()(t),"_getUnfollowAction",(function(){var e=t.props.tweet.user.screen_name;return{text:Ie({screenName:e}),onClick:t._handleUnfollow,Icon:oe.a}})),u()(i()(t),"_getMuteAction",(function(){var e=t.props.tweet.user.screen_name;return{shortcutKey:ue.d.mute,text:Me({screenName:e}),onClick:t._handleMute,Icon:G.a}})),u()(i()(t),"_getUnmuteAction",(function(){var e=t.props.tweet.user.screen_name;return{shortcutKey:ue.d.mute,text:Oe({screenName:e}),onClick:t._handleUnmute,Icon:ce.a}})),u()(i()(t),"_getMuteConversationAction",(function(){return{text:Re,onClick:t._handleMuteConversation,confirmation:t._shouldDisplayMuteEducation()?{render:t._renderMuteConversationEducation}:void 0,Icon:G.a}})),u()(i()(t),"_getEmbedTweetAction",(function(){return{text:ze,onClick:t._handleEmbedTweet,Icon:S.a}})),u()(i()(t),"_getUnmuteConversationAction",(function(){return{text:Le,onClick:t._handleUnmuteConversation,Icon:ce.a}})),u()(i()(t),"_getPinAction",(function(){return{confirmation:{text:ft,headline:dt,label:mt},testID:he.pin,text:Pe,onClick:t._handlePin,Icon:X.a}})),u()(i()(t),"_getUnpinAction",(function(){return{confirmation:{text:_t,headline:pt,label:ht},testID:he.unpin,text:De,onClick:t._handleUnpin,Icon:X.a}})),u()(i()(t),"_getAdInfoAction",(function(){var e=t.props.promotedContent;if(e){var n=e.impression_id;return{text:Be,onClick:me.a,Icon:z.a,link:{pathname:"/i/about-this-ad/"+n}}}})),u()(i()(t),"_getRemoveTagAction",(function(){return{confirmation:{label:Ge,headline:$e},text:Ze,onClick:t._handleRemoveTag,Icon:Y.a}})),u()(i()(t),"_getDeleteTweetAction",(function(){return{confirmation:{label:Ne,headline:bt,text:wt,confirmButtonType:"destructive"},isEmphasized:!0,text:Ne,onClick:t._handleDeleteTweet,Icon:N.a}})),u()(i()(t),"_getReportAction",(function(){var e=t.props,n=e.promotedContent,o=e.tweet,r=e.scribeNamespace,a=e.scribeData,i=t.context.loggedInUserId,c=!!(o.extended_entities&&o.extended_entities.media&&o.extended_entities.media.length>0),l=a&&a.items&&a.items[0]&&a.items[0].conversation_details&&a.items[0].conversation_details.conversation_section;return{testID:he.report,text:n?Se:je,onClick:t._handleReportTweet,link:i?{pathname:"/i/report/status/"+o.id_str,state:{clientReferer:window.location.pathname,conversationSection:l,isMedia:c,promotedContent:n,scribeNamespace:r}}:"https://help.twitter.com/forms",Icon:$.a}})),u()(i()(t),"_getAnalyticsAction",(function(){var e=t.props.tweet;return{text:Ve,onClick:t._handleAnalytics,link:"/"+e.user.screen_name+"/status/"+e.id_str+"/analytics",Icon:D.a}})),u()(i()(t),"_getHideReplyAction",(function(e){return{confirmation:e?{render:t._renderHideReplyBlockSheet}:{render:t._renderHideReplyEducation},text:We,onClick:t._handleHideReply,Icon:V.a}})),u()(i()(t),"_renderHideReplyEducation",(function(e,n){return d.createElement(Te.a,{actionLabel:We,graphic:te.a,headline:gt,onAction:e,onClose:n,onImpression:t._handleHideReplyImpression,onTertiaryAction:n,subtext:At,supportUrl:Tt,tertiaryActionLabel:It})})),u()(i()(t),"_renderHideReplyBlockSheet",(function(e,n){var o=t.props.tweet.user.screen_name;return d.createElement(m.a,{cancelButtonLabel:Ct,confirmButtonLabel:Ue,confirmButtonType:"destructive",headline:kt({screenName:o}),onCancel:e,onConfirm:function(){t._handleBlock(),e()},text:vt({screenName:o})})})),u()(i()(t),"_handleHideReplyImpression",(function(){t._scribeAction({element:"moderated_replies_prompt",action:"impression"})})),u()(i()(t),"_getUnhideReplyAction",(function(){return{text:qe,onClick:t._handleUnhideReply,Icon:ae.a}})),u()(i()(t),"_getViewHiddenRepliesAction",(function(){return{text:Qe,link:t.props.tweet.permalink+"/hidden",onClick:t._handleViewHiddenReplies,Icon:V.a}})),u()(i()(t),"_handleReportTweet",(function(){t._scribeAction({element:"report_tweet"})})),u()(i()(t),"_handlePin",(function(){var e=t.props,n=e.createLocalApiErrorHandler,o=e.tweet;t.props.pin(o.id_str).then((function(){t.props.addToast({text:at})}),n({showToast:!0})),t._scribeAction({element:"pin"})})),u()(i()(t),"_handleUnpin",(function(){var e=t.props,n=e.createLocalApiErrorHandler,o=e.tweet;t.props.unpin(o.id_str).then((function(){t.props.addToast({text:it})}),n({showToast:!0})),t._scribeAction({element:"unpin"})})),u()(i()(t),"_handleRemoveTag",(function(){var e=t.props,n=e.createLocalApiErrorHandler,o=e.removeTag,r=e.tweet,a=t.context.loggedInUserId,i=r.extended_entities.media.map((function(e){return e.id_str})).join(",");o(r.id_str,{status_id:r.id_str,media_ids:i,tagged_user_ids:a}).catch(n({showToast:!0}))})),u()(i()(t),"_handleDeleteTweet",(function(){var e=t.props,n=e.addToast,o=e.createLocalApiErrorHandler,r=e.deleteTweet,a=e.onDeleteTweet,i=e.tweet;r(i.id_str).then((function(){n({text:ct})}),o({defaultToast:{text:yt},showToast:!0})),t._scribeAction({element:"delete"}),a&&a(i.id_str)})),u()(i()(t),"_handleEmbedTweet",(function(){var e="https://publish.twitter.com/?url=https://twitter.com"+t.props.tweet.permalink;window.open(e,"_blank"),t._scribeAction({element:"embed_tweet"})})),u()(i()(t),"_handleAnalytics",(function(){t._scribeAction({element:"analytics"})})),u()(i()(t),"_handleBlock",(function(){var e=t.props,n=e.createLocalApiErrorHandler,o=e.promotedContent,r=e.tweet;t.props.block(r.user.id_str,{promotedContent:o}).then((function(){t.props.addToast({actionLabel:He,onAction:t._handleUnblock,text:et})}),n(f.a)),t._scribeAction({element:"block"})})),u()(i()(t),"_handleUnblock",(function(){var e=t.props,n=e.createLocalApiErrorHandler,o=e.promotedContent,r=e.tweet;t.props.unblock(r.user.id_str,{promotedContent:o}).catch(n(ve.a)),t._scribeAction({element:"unblock"})})),u()(i()(t),"_handleMute",(function(){var e=t.props,n=e.createLocalApiErrorHandler,o=e.tweet;t.props.mute(o.user.id_str).then((function(){t.props.addToast({actionLabel:Fe,onAction:t._handleUnmute,text:tt})}),n(fe.a)),t._scribeAction({element:"mute"})})),u()(i()(t),"_handleUnmute",(function(){var e=t.props,n=e.createLocalApiErrorHandler,o=e.tweet;t.props.unmute(o.user.id_str).then((function(){t.props.addToast({text:nt})}),n(we.a)),t._scribeAction({element:"unmute"})})),u()(i()(t),"_handleFollow",(function(){var e=t.props,n=e.promotedContent,o=e.tweet;t.props.follow(o.user.id_str,{promotedContent:n}).then((function(e){t._scribeAction({element:"follow"}),e&&e.protected?t.props.addToast({text:lt({screenName:o.user.screen_name})}):t.props.addToast({text:st({screenName:o.user.screen_name})})})),t._scribeAction({element:"follow_attempt"})})),u()(i()(t),"_handleUnfollow",(function(){var e=t.props,n=e.createLocalApiErrorHandler,o=e.promotedContent,r=e.tweet;return t.props.unfollow(r.user.id_str,{promotedContent:o}).then((function(e){t.props.addToast({text:ut({screenName:r.user.screen_name})})}),n(be.a)),t._scribeAction({element:"unfollow"})})),u()(i()(t),"_handleHideReply",(function(){var e,n=t.props,o=n.addTip,r=n.addToast,a=n.createLocalApiErrorHandler,i=n.hideReply,c=n.onTweetDismiss,l=n.tweet;return o(((e={})[Ee]=!0,e)),i(l.id_str,{conversation_id:l.conversation_id_str}).then((function(e){c&&c(),r({text:Xe})}),a({showToast:!0})),t._scribeAction({element:"moderate_reply"})})),u()(i()(t),"_handleUnhideReply",(function(){var e=t.props,n=e.addToast,o=e.createLocalApiErrorHandler,r=e.unhideReply,a=e.tweet;return r(a.id_str,{conversation_id:a.conversation_id_str}).then((function(e){n({ariaOnly:!0,text:Ye})}),o({showToast:!0})),t._scribeAction({element:"unmoderate_reply"})})),u()(i()(t),"_handleViewHiddenReplies",(function(){return t._scribeAction({element:"view_moderated_replies"})})),u()(i()(t),"_handleMuteConversation",(function(){var e=t.props,n=e.addToast,o=e.createLocalApiErrorHandler;(0,e.muteTweet)(e.tweet.id_str).then((function(){n({actionLabel:Je,onAction:t._handleUnmuteConversation,text:ot})}),(function(e){o({showToast:!0})(e),t._scribeAction({element:"mute_conversation_error"})})),t._scribeAction({element:"mute_conversation"})})),u()(i()(t),"_handleUnmuteConversation",(function(){var e=t.props,n=e.addToast,o=e.createLocalApiErrorHandler,r=e.tweet;(0,e.unmuteTweet)(r.id_str).then((function(){n({text:rt})}),(function(e){o({showToast:!0})(e),t._scribeAction({element:"unmute_conversation_error"})})),t._scribeAction({element:"unmute_conversation"})})),u()(i()(t),"_renderMuteConversationEducation",(function(e,n){return d.createElement(Te.a,{actionLabel:Et,graphic:se.a,graphicDisplayMode:"illustration",headline:xt,onAction:e,onClose:n,onImpression:t._handleMuteEducationInterstitialImpression,onTertiaryAction:n,subtext:Mt,supportUrl:Ot,tertiaryActionLabel:It})})),u()(i()(t),"_shouldDisplayMuteEducation",(function(){return!t.props.tips[ye]})),u()(i()(t),"_handleMuteEducationInterstitialImpression",(function(){var e;(0,t.props.addTip)(((e={})[ye]=!0,e))})),u()(i()(t),"_scribeAction",(function(e){var n=e.element,o=e.action,r=t.props,a=r.promotedContent,i=r.scribeAction,c=r.scribeData,l=r.scribeNamespace,s=r.tweet,u=c&&c.items?c:Object.assign({},c||{},{items:[pe.a.getTweetItem(s,a)]});return i(Object.assign({},l,{element:n,action:o||"click"}),u)})),t}l()(t,e);var n=t.prototype;return n.render=function(){var e=this.props,t=e.onClose,n=e.enableKeyboardShortcuts,o=e.hidden,r=this._getActionItems();return d.createElement(d.Fragment,null,d.createElement(ke.a,{actionItems:r,enableKeyboardShortcuts:n,hidden:o,onClose:t}))},n._getPromotedTweetDismissAction=function(e){return{text:Ke,onClick:e,Icon:z.a}},t}(d.Component);u()(Rt,"contextType",de.a),u()(Rt,"defaultProps",{withRemoveFromBookmarks:!1});t.default=Object(ge.a)(Object(O.d)()(M(Rt)))},OwLT:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0,n("PN9k");var o=i(n("7DT3")),r=i(n("ERkP")),a=i(n("OkZJ"));function i(e){return e&&e.__esModule?e:{default:e}}var c=function(e){return void 0===e&&(e={}),(0,o.default)("svg",Object.assign({},e,{style:[a.default.root,e.style],viewBox:"0 0 24 24"}),r.default.createElement("g",null,r.default.createElement("path",{d:"M18.64.94c-2.2 0-4.05 1.53-4.54 3.59H2.96c-1.15 0-2.08.94-2.08 2.08v14.34c0 1.15.93 2.08 2.08 2.08H17.3c1.15 0 2.08-.93 2.08-2.08V10.22c2.23-.35 3.94-2.28 3.94-4.6 0-2.58-2.1-4.68-4.68-4.68zm-.65 20.01c0 .39-.31.7-.69.7H2.96c-.38 0-.69-.31-.69-.7V6.62c0-.39.31-.7.69-.7h11.02c.14 2.22 1.83 4.02 4.01 4.32v10.71zm.65-12.16c-1.75 0-3.17-1.42-3.17-3.17s1.42-3.18 3.17-3.18 3.17 1.43 3.17 3.18-1.42 3.17-3.17 3.17z"}),r.default.createElement("path",{d:"M13.25 10.71H5.493c-.414 0-.75-.336-.75-.75s.336-.752.75-.752h7.754c.415 0 .752.337.752.75s-.34.752-.75.752zm1.47 3.793H5.493c-.414 0-.75-.336-.75-.75 0-.415.335-.752.75-.752h9.225c.413 0 .75.338.75.75 0 .418-.335.754-.75.754h.002zm-4.613 3.793H5.494c-.414 0-.75-.336-.75-.75 0-.416.335-.752.75-.752h4.613c.414 0 .75.336.75.75 0 .416-.336.752-.75.752zM20.72 5.62c0 .38-.31.69-.69.69h-.7V7c0 .38-.31.69-.69.69s-.69-.31-.69-.69v-.69h-.69c-.38 0-.69-.31-.69-.69s.31-.69.69-.69h.69v-.7c0-.38.31-.69.69-.69s.69.31.69.69v.7h.7c.38 0 .69.3.69.69z"})))};c.metadata={height:24,width:24};var l=c;t.default=l},cnjV:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0,n("PN9k");var o=i(n("7DT3")),r=i(n("ERkP")),a=i(n("OkZJ"));function i(e){return e&&e.__esModule?e:{default:e}}var c=function(e){return void 0===e&&(e={}),(0,o.default)("svg",Object.assign({},e,{style:[a.default.root,e.style],viewBox:"0 0 24 24"}),r.default.createElement("g",null,r.default.createElement("path",{d:"M2.03 23.75c-.19 0-.383-.073-.53-.22-.292-.293-.292-.768 0-1.06l20-20c.294-.294.77-.294 1.062 0s.293.767 0 1.06l-20 20c-.147.147-.338.22-.53.22zM19.75 22H7.958c-.414 0-.75-.336-.75-.75s.336-.75.75-.75H19.75c.413 0 .75-.337.75-.75V8.07c0-.415.336-.75.75-.75s.75.335.75.75v11.68c0 1.24-1.01 2.25-2.25 2.25zm-17-3.118c-.414 0-.75-.336-.75-.75v-10.8c0-1.24 1.01-2.25 2.25-2.25h2.188C7.633 3.17 9.722 2 12 2c1.896 0 3.7.82 4.945 2.253.272.312.24.786-.073 1.058-.31.273-.785.242-1.058-.072C14.854 4.134 13.464 3.5 12 3.5c-1.883 0-3.598 1.035-4.475 2.702-.16.302-.504.46-.834.38H4.25c-.413 0-.75.338-.75.75v10.8c0 .414-.336.75-.75.75z"}),r.default.createElement("path",{d:"M7.89 13.777c-.415 0-.75-.336-.75-.75 0-2.68 2.18-4.86 4.86-4.86.414 0 .75.336.75.75s-.336.75-.75.75c-1.854 0-3.36 1.508-3.36 3.36 0 .414-.337.75-.75.75zM12 17.89c-.414 0-.75-.337-.75-.75s.336-.75.75-.75c1.854 0 3.36-1.51 3.36-3.362 0-.414.337-.75.75-.75s.75.336.75.75c0 2.68-2.18 4.86-4.86 4.86z"})))};c.metadata={height:24,width:24};var l=c;t.default=l},foB5:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o,r=n("k49u"),a=n("3XMw"),i=n.n(a).a.b5324d4a,c=((o={})[r.a.SelfMuteError]={toast:{text:i}},o.showToast=!0,o)},mLw8:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0,n("PN9k");var o=i(n("7DT3")),r=i(n("ERkP")),a=i(n("OkZJ"));function i(e){return e&&e.__esModule?e:{default:e}}var c=function(e){return void 0===e&&(e={}),(0,o.default)("svg",Object.assign({},e,{style:[a.default.root,e.style],viewBox:"0 0 24 24"}),r.default.createElement("g",null,r.default.createElement("path",{d:"M17.253 22.75c-.166 0-.33-.055-.466-.162L9.74 17H7.254c-1.24 0-2.25-1.01-2.25-2.25v-5.5c0-1.24 1.01-2.25 2.25-2.25H9.74l7.047-5.588c.225-.18.534-.215.792-.087.258.125.423.387.423.675v20c0 .288-.165.55-.424.675-.104.05-.216.075-.327.075zm-10-14.25c-.413 0-.75.337-.75.75v5.5c0 .413.337.75.75.75h2.75c.17 0 .333.058.466.162l6.033 4.786V3.552L10.47 8.338c-.134.104-.298.162-.467.162h-2.75z"})))};c.metadata={height:24,width:24};var l=c;t.default=l},wuJq:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0,n("PN9k");var o=i(n("7DT3")),r=i(n("ERkP")),a=i(n("OkZJ"));function i(e){return e&&e.__esModule?e:{default:e}}var c=function(e){return void 0===e&&(e={}),(0,o.default)("svg",Object.assign({},e,{style:[a.default.root,e.style],viewBox:"0 0 200 200"}),r.default.createElement("g",null,r.default.createElement("circle",{fill:"#97E3FF",cx:"100",cy:"100",r:"100"}),r.default.createElement("path",{fill:"#1DA1F2",d:"M103.075 53.025v91.692c29.142 0 52.775-20.525 52.775-45.842s-23.625-45.85-52.775-45.85z"}),r.default.createElement("path",{fill:"#005FD1",d:"M50.3 98.875c0 2.742.275 5.433.808 8.042.433 2.142 1.05 4.233 1.808 6.258 3.233 8.567 9.3 16.025 17.242 21.533-.508 5.75-3.483 10.8-7.883 14.125 2.317.7 4.783 1.083 7.325 1.083 6.908 0 13.167-2.775 17.742-7.267 4.967 1.34 10.25 2.066 15.725 2.066v-91.69c-29.134 0-52.767 20.524-52.767 45.85z"}),r.default.createElement("path",{fill:"#71C9F8",d:"M145.383 147.25L46.208 60.317c-2.425-2.125-2.675-5.817-.542-8.242 2.125-2.425 5.817-2.667 8.242-.542l99.175 86.925c2.425 2.125 2.667 5.817.542 8.242-2.125 2.433-5.817 2.675-8.242.55z"}),r.default.createElement("path",{fill:"#005FD1",d:"M103.075 110.167v6.575l25.442 22.3c1.6-.767 3.15-1.6 4.642-2.508l-30.085-26.367z"}),r.default.createElement("path",{fill:"#005FD1",d:"M103.075 110.167L59.992 72.4c-1.058 1.292-2.033 2.625-2.925 4.008l46.008 40.325v-6.566z"})))};c.metadata={height:200,width:200};var l=c;t.default=l},ytFK:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0,n("PN9k");var o=i(n("7DT3")),r=i(n("ERkP")),a=i(n("OkZJ"));function i(e){return e&&e.__esModule?e:{default:e}}var c=function(e){return void 0===e&&(e={}),(0,o.default)("svg",Object.assign({},e,{style:[a.default.root,e.style],viewBox:"0 0 24 24"}),r.default.createElement("g",null,r.default.createElement("path",{d:"M1.75 22.354c-.192 0-.384-.073-.53-.22-.293-.293-.293-.768 0-1.06L20.395 1.898c.293-.294.768-.294 1.06 0s.294.767 0 1.06L2.28 22.135c-.146.146-.338.22-.53.22zm1.716-5.577c-.134 0-.27-.036-.392-.11-.67-.413-1.07-1.13-1.07-1.917v-5.5c0-1.24 1.01-2.25 2.25-2.25H6.74l7.047-5.588c.225-.18.533-.215.792-.087.258.125.423.387.423.675v3.28c0 .415-.336.75-.75.75s-.75-.335-.75-.75V3.553L7.47 8.338c-.134.104-.298.162-.467.162h-2.75c-.413 0-.75.337-.75.75v5.5c0 .263.134.5.356.64.353.216.462.678.245 1.03-.14.23-.387.357-.64.357zm10.787 5.973c-.166 0-.33-.055-.466-.162l-4.795-3.803c-.325-.258-.38-.73-.122-1.054.258-.322.73-.38 1.054-.12l3.58 2.838v-7.013c0-.414.335-.75.75-.75s.75.336.75.75V22c0 .288-.166.55-.425.675-.104.05-.216.075-.327.075z"})))};c.metadata={height:24,width:24};var l=c;t.default=l}}]);
//# sourceMappingURL=https://ton.smf1.twitter.com/responsive-web-internal/sourcemaps/web/loader.TweetCurationActionMenu.beda09e4.js.map