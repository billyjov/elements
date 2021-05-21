(self.webpackChunk_angular_extensions_elements=self.webpackChunk_angular_extensions_elements||[]).push([[146],{3146:(e,n,t)=>{"use strict";t.r(n),t.d(n,{ConfigurationModule:()=>d});var o=t(1116),l=t(9015),r=t(2309),i=t(3337),a=t(5366);let u=(()=>{class e{constructor(){this.codeExampleInline=s,this.codeExampleModule=p,this.codeExamplePreConfigured=m}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=a.Xpm({type:e,selectors:[["demo-configuration"]],decls:81,vars:3,consts:[[1,"wrapper"],[1,"large"],[3,"highlight"],["routerLink","../../../examples/advanced"]],template:function(e,n){1&e&&(a.TgZ(0,"div",0),a.TgZ(1,"h1"),a._uU(2,"Configuration"),a.qZA(),a.TgZ(3,"blockquote",1),a._uU(4," The library supports additional configuration which can improve developer experience when using multiple elements (or same element multiple time). "),a.qZA(),a.TgZ(5,"h2"),a._uU(6,"Pre-configuration with module"),a.qZA(),a.TgZ(7,"p"),a._uU(8," Let's imagine situation in which we want to use multiple instances of a single element in the template of one of our feature components. "),a.qZA(),a.TgZ(9,"blockquote"),a._uU(10," Example of such an use case could be that we have a "),a.TgZ(11,"code"),a._uU(12,"<user-profile-element>"),a.qZA(),a._uU(13," and we want to display top 3 users for a given month. We would need to pass url in all of the elements... "),a.qZA(),a._UZ(14,"pre",2),a.TgZ(15,"p"),a._uU(16," This could be optimized by storing url once in the component variable but still, component needs to be aware of the element url. This can lead to further inconvenient situation when element url changes and we would have to search for the url in te whole code base... "),a.qZA(),a.TgZ(17,"p"),a._uU(18," Compare this to the following solution where we pre-configure all of the elements we will be using in our application with the help of the "),a.TgZ(19,"code"),a._uU(20,"LazyElementsModule.forRoot(options)"),a.qZA(),a._uU(21," (or "),a.TgZ(22,"code"),a._uU(23,".forFeature()"),a.qZA(),a._uU(24,") static functions! "),a.qZA(),a._UZ(25,"pre",2),a.TgZ(26,"p"),a._uU(27," We're creating options of the "),a.TgZ(28,"code"),a._uU(29,"LazyElementModuleOptions"),a.qZA(),a._uU(30," type and passing in array of "),a.TgZ(31,"code"),a._uU(32,"ElementConfig"),a.qZA(),a._uU(33," items. Every item specifies element "),a.TgZ(34,"code"),a._uU(35,"tag"),a.qZA(),a._uU(36," and "),a.TgZ(37,"code"),a._uU(38,"url"),a.qZA(),a._uU(39,"... "),a.qZA(),a.TgZ(40,"p"),a._uU(41," With this configuration in place, we can adjust original "),a.TgZ(42,"code"),a._uU(43,"FeatureComponent"),a.qZA(),a._uU(44," template to look like this... "),a.qZA(),a._UZ(45,"pre",2),a.TgZ(46,"p"),a._uU(47," As we can see, the component template got simple! There is less redundant data and the configuration was centralized in the predictable place that is easy to find and adjust when necessary! "),a.qZA(),a.TgZ(48,"p"),a._uU(49," Check out the "),a.TgZ(50,"a",3),a._uU(51,"working demo"),a.qZA(),a._uU(52," of this approach! "),a.qZA(),a.TgZ(53,"h2"),a._uU(54,"Supported features"),a.qZA(),a.TgZ(55,"ul"),a.TgZ(56,"li"),a._uU(57," \u2705 Global and granular configuration of "),a.TgZ(58,"code"),a._uU(59,"isModule"),a.qZA(),a._uU(60," flag (script type module for ECMAScript modules) "),a.qZA(),a.TgZ(61,"li"),a._uU(62," \u2705 Global and granular configuration of "),a.TgZ(63,"code"),a._uU(64,"loadingComponent"),a.qZA(),a._uU(65," (and "),a.TgZ(66,"code"),a._uU(67,"loadingTemplate"),a.qZA(),a._uU(68,") "),a.qZA(),a.TgZ(69,"li"),a._uU(70," \u2705 Global and granular configuration of "),a.TgZ(71,"code"),a._uU(72,"errorComponent"),a.qZA(),a._uU(73," (and "),a.TgZ(74,"code"),a._uU(75,"errorTemplate"),a.qZA(),a._uU(76,") "),a.qZA(),a.TgZ(77,"li"),a._uU(78," \u2705 Granular element pre-loading (config based) "),a.qZA(),a.TgZ(79,"li"),a._uU(80," \u2705 Ability to pre-load elements based on custom conditions using a service "),a.qZA(),a.qZA(),a.qZA()),2&e&&(a.xp6(14),a.Q6J("highlight",n.codeExampleInline),a.xp6(11),a.Q6J("highlight",n.codeExampleModule),a.xp6(20),a.Q6J("highlight",n.codeExamplePreConfigured))},directives:[l.y$,i.yS],styles:["ol[_ngcontent-%COMP%]{margin:0 0 20px}h2[_ngcontent-%COMP%]{margin:40px 0 10px;font-weight:700}ul[_ngcontent-%COMP%]   li.done[_ngcontent-%COMP%]{text-decoration:line-through}.responsive-large[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%], .responsive-large   [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:70%}"]}),e})();const s="@Component({\n  selector: 'your-org-feature',\n  template: `\n    <user-profile-element *axLazyElement=\"'https://your-org.com/elements/user-profile-element.js'\"></user-profile-element>\n    <user-profile-element *axLazyElement=\"'https://your-org.com/elements/user-profile-element.js'\"></user-profile-element>\n    <user-profile-element *axLazyElement=\"'https://your-org.com/elements/user-profile-element.js'\"></user-profile-element>\n  `\n})\nexport class FeatureComponent {}",p="// pre-configured LazyElementsModule\nconst options: LazyElementModuleOptions = {\n  elementConfigs: [\n    { tag: 'user-profile-element', url: 'https://your-org.com/elements/user-profile-element.js' }\n    { tag: 'some-other-element', url: 'https://your-org.com/elements/some-other-element.js' }\n  ]\n};\n\n@NgModule({\n  schemas: [CUSTOM_ELEMENTS_SCHEMA],\n  declarations: [FeatureComponent],\n  imports: [\n    LazyElementsModule.forFeature(options),\n  ]\n})\nexport class FeatureModule { }\n",m="@Component({\n  selector: 'your-org-feature',\n  template: `\n    <user-profile-element *axLazyElement></user-profile-element>\n    <user-profile-element *axLazyElement></user-profile-element>\n    <user-profile-element *axLazyElement></user-profile-element>\n  `\n})\nexport class FeatureComponent {}",c=[{path:"",component:u}];let g=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[i.Bz.forChild(c)],i.Bz]}),e})(),d=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[o.ez,l._l,r.m,g]]}),e})()}}]);