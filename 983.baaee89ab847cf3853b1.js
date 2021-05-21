(self.webpackChunk_angular_extensions_elements=self.webpackChunk_angular_extensions_elements||[]).push([[983],{5983:(e,o,n)=>{"use strict";n.r(o),n.d(o,{GettingStartedModule:()=>c});var t=n(9015),l=n(2309),r=n(3337),a=n(5366);let u=(()=>{class e{constructor(){this.codeExampleComponent=s,this.codeExampleModule=m,this.codeExampleAppModule=p,this.codeExampleSharedModule=d}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=a.Xpm({type:e,selectors:[["demo-getting-started"]],decls:84,vars:4,consts:[[1,"wrapper"],[3,"highlight"]],template:function(e,o){1&e&&(a.TgZ(0,"div",0),a.TgZ(1,"h1"),a._uU(2,"Getting started"),a.qZA(),a.TgZ(3,"p"),a._uU(4," Start using Angular elements or any other web components in your applications by following these 5 steps... "),a.qZA(),a.TgZ(5,"ol"),a.TgZ(6,"li"),a._uU(7,"Install "),a.TgZ(8,"code"),a._uU(9,"npm i @angular-extensions/elements"),a.qZA(),a.qZA(),a.TgZ(10,"li"),a._uU(11," Add "),a.TgZ(12,"code"),a._uU(13," import { LazyElementsModule } from '@angular-extensions/elements'; "),a.qZA(),a.qZA(),a.TgZ(14,"li"),a._uU(15," Append "),a.TgZ(16,"code"),a._uU(17,"LazyElementsModule"),a.qZA(),a._uU(18," to the "),a.TgZ(19,"code"),a._uU(20,"imports: []"),a.qZA(),a._uU(21," of your "),a.TgZ(22,"code"),a._uU(23,"AppModule"),a.qZA(),a.qZA(),a.TgZ(24,"li"),a._uU(25," Add new "),a.TgZ(26,"code"),a._uU(27,"schemas: []"),a.qZA(),a._uU(28," property with "),a.TgZ(29,"code"),a._uU(30,"CUSTOM_ELEMENTS_SCHEMA"),a.qZA(),a._uU(31," value to "),a.TgZ(32,"code"),a._uU(33,"@NgModule"),a.qZA(),a._uU(34," decorator of your "),a.TgZ(35,"code"),a._uU(36,"AppModule"),a.qZA(),a.qZA(),a.TgZ(37,"li"),a._uU(38," Use "),a.TgZ(39,"code"),a._uU(40,"*axLazyElement"),a.qZA(),a._uU(41," directive on an element you wish to load and pass in the url of the element bundle "),a.qZA(),a.qZA(),a.TgZ(42,"p"),a._uU(43,"That way we get..."),a.qZA(),a._UZ(44,"pre",1),a.TgZ(45,"p"),a._uU(46," and can use "),a.TgZ(47,"code"),a._uU(48,"*axLazyElement"),a.qZA(),a._uU(49," in the template of our component... "),a.qZA(),a._UZ(50,"pre",1),a.TgZ(51,"h2"),a._uU(52,"Using in other (and lazy loaded) modules"),a.qZA(),a.TgZ(53,"p"),a._uU(54," Any non-trivial Angular application will usually contain more than a single "),a.TgZ(55,"code"),a._uU(56,"AppModule"),a.qZA(),a._uU(57,". "),a.qZA(),a.TgZ(58,"p"),a._uU(59,"More so, some of these additional modules could be lazy loaded."),a.qZA(),a.TgZ(60,"p"),a._uU(61," Any module which contains components which are using "),a.TgZ(62,"code"),a._uU(63,"*axLazyElement"),a.qZA(),a._uU(64," directive has to have "),a.TgZ(65,"code"),a._uU(66,"schemas: [CUSTOM_ELEMENTS_SCHEMA]"),a.qZA(),a._uU(67," in its "),a.TgZ(68,"code"),a._uU(69,"@NgModule"),a.qZA(),a._uU(70," decorator configuration. Also the module has to either import "),a.TgZ(71,"code"),a._uU(72,"LazyElementsModule"),a.qZA(),a._uU(73,". Let's have a look on the following example... "),a.qZA(),a._UZ(74,"pre",1),a.TgZ(75,"p"),a._uU(76," Or import other module (most commonly "),a.TgZ(77,"code"),a._uU(78,"SharedModule"),a.qZA(),a._uU(79,") which both imports and exports "),a.TgZ(80,"code"),a._uU(81,"LazyElementsModule"),a.qZA(),a._uU(82,". "),a.qZA(),a._UZ(83,"pre",1),a.qZA()),2&e&&(a.xp6(44),a.Q6J("highlight",o.codeExampleAppModule),a.xp6(6),a.Q6J("highlight",o.codeExampleComponent),a.xp6(24),a.Q6J("highlight",o.codeExampleModule),a.xp6(9),a.Q6J("highlight",o.codeExampleSharedModule))},directives:[t.y$],styles:["ol[_ngcontent-%COMP%]{margin:0 0 20px}h2[_ngcontent-%COMP%]{margin:40px 0 10px;font-weight:700}.responsive-large[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%], .responsive-large   [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:70%}"]}),e})();const s="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'your-org-feature',\n  template: `\n    <some-element *axLazyElement=\"elementUrl\"></some-element>\n  `\n})\nexport class FeatureComponent {\n  elementUrl = 'https://your-org.com/elements/some-element.js';\n}\n",m="import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { LazyElementsModule } from '@angular-extensions/elements';\n\nimport { FeatureComponent } from './feature-component';\n\n@NgModule({\n  schemas: [CUSTOM_ELEMENTS_SCHEMA],\n  imports: [CommonModule, LazyElementsModule], // or imports: [SharedModule]\n  declarations: [FeatureComponent]\n})\nexport class FeatureModule {}\n",p="import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';\nimport { BrowserModule } from '@angular/platform-browser';\nimport { LazyElementsModule } from '@angular-extensions/elements';\n\n@NgModule({\n  schemas: [CUSTOM_ELEMENTS_SCHEMA],\n  imports: [BrowserModule, LazyElementsModule],\n  declarations: [AppComponent],\n  bootstrap: [AppComponent]\n})\nexport class AppModule {}\n",d="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { LazyElementsModule } from '@angular-extensions/elements';\n\n@NgModule({\n  imports: [CommonModule, LazyElementsModule],\n  exports: [CommonModule, LazyElementsModule]\n})\nexport class SharedModule {}\n",i=[{path:"",component:u}];let g=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[r.Bz.forChild(i)],r.Bz]}),e})(),c=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[t._l,l.m,g]]}),e})()}}]);