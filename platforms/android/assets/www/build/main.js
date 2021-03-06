webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccueilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alphabet_alphabet__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chiffres_chiffres__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__aliments_aliments__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__partager_partager__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AccueilPage = (function () {
    function AccueilPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AccueilPage.prototype.goToAlphabet = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__alphabet_alphabet__["a" /* AlphabetPage */]);
    };
    AccueilPage.prototype.goToChiffres = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__chiffres_chiffres__["a" /* ChiffresPage */]);
    };
    AccueilPage.prototype.goToAliments = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__aliments_aliments__["a" /* AlimentsPage */]);
    };
    AccueilPage.prototype.goToPartager = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__partager_partager__["a" /* PartagerPage */]);
    };
    return AccueilPage;
}());
AccueilPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-accueil',template:/*ion-inline-start:"C:\Users\Parikiri13\Documents\Ionic\Ionic2\localapplanguage\src\pages\accueil\accueil.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Accueil\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content  id="page1" padding style="background-color:rgb(255, 255, 255);">\n  <ion-list id="accueil-list1">\n    <ion-item color="none" on-click="goToAlphabet()" id="accueil-list-item1">\n      <ion-thumbnail item-left>\n        <img src="assets/img/Q9vSHGCkS6SYhUKJ7uVS_QPyuBpuhTKul76K0ESwx_a-1708752_960_720.png" />\n      </ion-thumbnail>\n      <h2>\n        Alphabet\n      </h2>\n      <p style="white-space:normal;">Wèkwín fon gbè min ton </p>\n      <!--<button ion-button icon-only item-right>-->\n        <ion-icon name="arrow-forward" item-right></ion-icon>\n      <!--</button>-->\n      \n    </ion-item>\n    <ion-item color="none" on-click="goToChiffres()" id="accueil-list-item2">\n      <ion-thumbnail item-left>\n        <img src="assets/img/6panfKoTQQKl2RhYWJeH_ux4UwDIdTgaXuEl9W0vS_123.png" />\n      </ion-thumbnail>\n      <h2>\n        Chiffres\n      </h2>\n      <p style="white-space:normal;">Nun lin lɛn</p>\n      <ion-icon name="arrow-forward" item-right></ion-icon>\n    </ion-item>\n    <ion-item color="none" on-click="goToAliments()" id="accueil-list-item3">\n      <ion-thumbnail item-left>\n        <img src="assets/img/oXc0j4swSqK6kQz2G1Il_fVcHOioYRkSwJrE6CFhw_images.jpg" />\n      </ion-thumbnail>\n      <h2>\n        Aliments\n      </h2>\n      <p style="white-space:normal;">Nù ɖù ɖù</p>\n      <ion-icon name="arrow-forward" item-right></ion-icon>\n    </ion-item>\n  </ion-list>\n  <button id="accueil-button1"  ion-button color="positive" block icon-left style="font-size:25px;border-radius:40px 40px 40px 40px;" on-click="goToPartager()">\n    <ion-icon name="share-alt"></ion-icon>\n    Recommander\n  </button>\n  <br><br><br><br>\n \n  <ion-list id="accueil-list1">\n    <ion-item color="none"  id="accueil-list-item4">\n      <ion-thumbnail item-left>\n        <img src="assets/img/logo2si.png" />\n      </ion-thumbnail>\n      <h2>\n        Adresse: 03BP 743 Cotonou, Bénin \n      </h2>\n      <h2 style="white-space:normal;">Email: contact@iapi-ong.org</h2>\n      <!--<button ion-button icon-only item-right>-->\n      <!--</button>-->\n    </ion-item>\n  </ion-list>\n  <!-- <div align= "center">\n    <img src="assets/img/logo2si.png" />\n  </div> -->\n  <!-- <div id="accueil-markdown1" style="text-align:center;" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Adresse: 03BP 743 Cotonou, Bénin \n    </p>\n    <p style="color:#000000;">\n      Email: contact@iapi-ong.org\n    </p>\n  </div> -->\n</ion-content>'/*ion-inline-end:"C:\Users\Parikiri13\Documents\Ionic\Ionic2\localapplanguage\src\pages\accueil\accueil.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], AccueilPage);

//# sourceMappingURL=accueil.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlphabetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_smart_audio_smart_audio__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlphabetPage = (function () {
    function AlphabetPage(navCtrl, smartAudio) {
        this.navCtrl = navCtrl;
        this.smartAudio = smartAudio;
        smartAudio.preload('a', 'assets/audioLib/a.mp3');
        smartAudio.preload('an', 'assets/audioLib/an.mp3');
        smartAudio.preload('i', 'assets/audioLib/i.mp3');
        smartAudio.preload('ɔ', 'assets/audioLib/ɔ.mp3');
        smartAudio.preload('ɔn', 'assets/audioLib/ɔn.mp3');
        smartAudio.preload('e', 'assets/audioLib/e.mp3');
        smartAudio.preload('ɛ', 'assets/audioLib/ɛ.mp3');
        smartAudio.preload('ɛn', 'assets/audioLib/ɛn.mp3');
        smartAudio.preload('o', 'assets/audioLib/o.mp3');
        smartAudio.preload('on', 'assets/audioLib/on.mp3');
        smartAudio.preload('u', 'assets/audioLib/u.mp3');
        smartAudio.preload('un', 'assets/audioLib/un.mp3');
        smartAudio.preload('in', 'assets/audioLib/in.mp3');
        smartAudio.preload('b', 'assets/audioLib/consonnes/b.mp3');
        smartAudio.preload('c', 'assets/audioLib/consonnes/c.mp3');
        smartAudio.preload('d', 'assets/audioLib/consonnes/d.mp3');
        smartAudio.preload('ɖ', 'assets/audioLib/consonnes/ɖ.mp3');
        smartAudio.preload('f', 'assets/audioLib/consonnes/f.mp3');
        smartAudio.preload('g', 'assets/audioLib/consonnes/g.mp3');
        smartAudio.preload('gb', 'assets/audioLib/consonnes/gb.mp3');
        smartAudio.preload('h', 'assets/audioLib/consonnes/h.mp3');
        smartAudio.preload('j', 'assets/audioLib/consonnes/j.mp3');
        smartAudio.preload('k', 'assets/audioLib/consonnes/k.mp3');
        smartAudio.preload('kp', 'assets/audioLib/consonnes/kp.mp3');
        smartAudio.preload('l', 'assets/audioLib/consonnes/l.mp3');
        smartAudio.preload('m', 'assets/audioLib/consonnes/m.mp3');
        smartAudio.preload('n', 'assets/audioLib/consonnes/n.mp3');
        smartAudio.preload('ny', 'assets/audioLib/consonnes/ny.mp3');
        smartAudio.preload('p', 'assets/audioLib/consonnes/p.mp3');
        smartAudio.preload('s', 'assets/audioLib/consonnes/s.mp3');
        smartAudio.preload('t', 'assets/audioLib/consonnes/t.mp3');
        smartAudio.preload('v', 'assets/audioLib/consonnes/v.mp3');
        smartAudio.preload('w', 'assets/audioLib/consonnes/w.mp3');
        smartAudio.preload('x', 'assets/audioLib/consonnes/x.mp3');
        smartAudio.preload('y', 'assets/audioLib/consonnes/y.mp3');
        smartAudio.preload('z', 'assets/audioLib/consonnes/z.mp3');
    }
    /**
     * Voyelles
     */
    AlphabetPage.prototype.playe = function () {
        this.smartAudio.play('e');
    };
    AlphabetPage.prototype.playa = function () {
        this.smartAudio.play('a');
    };
    AlphabetPage.prototype.playan = function () {
        this.smartAudio.play('an');
    };
    AlphabetPage.prototype.playi = function () {
        this.smartAudio.play('i');
    };
    AlphabetPage.prototype.playin = function () {
        this.smartAudio.play('in');
    };
    AlphabetPage.prototype.playo = function () {
        this.smartAudio.play('o');
    };
    AlphabetPage.prototype.playon = function () {
        this.smartAudio.play('on');
    };
    AlphabetPage.prototype.playu = function () {
        this.smartAudio.play('u');
    };
    AlphabetPage.prototype.playun = function () {
        this.smartAudio.play('un');
    };
    AlphabetPage.prototype.playE = function () {
        this.smartAudio.play('ɛ');
    };
    AlphabetPage.prototype.playEn = function () {
        this.smartAudio.play('ɛn');
    };
    AlphabetPage.prototype.playN = function () {
        this.smartAudio.play('ɔ');
    };
    AlphabetPage.prototype.playNo = function () {
        this.smartAudio.play('ɔn');
    };
    /**
     * Consonnes
     */
    AlphabetPage.prototype.playdd = function () {
        this.smartAudio.play('ɖ');
    };
    AlphabetPage.prototype.playb = function () {
        this.smartAudio.play('b');
    };
    AlphabetPage.prototype.playc = function () {
        this.smartAudio.play('c');
    };
    AlphabetPage.prototype.playd = function () {
        this.smartAudio.play('d');
    };
    AlphabetPage.prototype.playf = function () {
        this.smartAudio.play('f');
    };
    AlphabetPage.prototype.playg = function () {
        this.smartAudio.play('g');
    };
    AlphabetPage.prototype.playgb = function () {
        this.smartAudio.play('gb');
    };
    AlphabetPage.prototype.playh = function () {
        this.smartAudio.play('h');
    };
    AlphabetPage.prototype.playj = function () {
        this.smartAudio.play('j');
    };
    AlphabetPage.prototype.playk = function () {
        this.smartAudio.play('k');
    };
    AlphabetPage.prototype.playkp = function () {
        this.smartAudio.play('kp');
    };
    AlphabetPage.prototype.playl = function () {
        this.smartAudio.play('l');
    };
    AlphabetPage.prototype.playm = function () {
        this.smartAudio.play('m');
    };
    AlphabetPage.prototype.playn = function () {
        this.smartAudio.play('n');
    };
    AlphabetPage.prototype.playny = function () {
        this.smartAudio.play('ny');
    };
    AlphabetPage.prototype.playp = function () {
        this.smartAudio.play('p');
    };
    AlphabetPage.prototype.plays = function () {
        this.smartAudio.play('s');
    };
    AlphabetPage.prototype.playt = function () {
        this.smartAudio.play('t');
    };
    AlphabetPage.prototype.playv = function () {
        this.smartAudio.play('v');
    };
    AlphabetPage.prototype.playw = function () {
        this.smartAudio.play('w');
    };
    AlphabetPage.prototype.playx = function () {
        this.smartAudio.play('x');
    };
    AlphabetPage.prototype.playy = function () {
        this.smartAudio.play('y');
    };
    AlphabetPage.prototype.playz = function () {
        this.smartAudio.play('z');
    };
    return AlphabetPage;
}());
AlphabetPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-alphabet',template:/*ion-inline-start:"C:\Users\Parikiri13\Documents\Ionic\Ionic2\localapplanguage\src\pages\alphabet\alphabet.html"*/'<ion-header >\n  <ion-navbar color="primary">\n    <ion-title>\n      Alphabet\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content  id="page2" style="background-color:rgb(255, 255, 255);">\n \n  <div class="spacer" style="height:175;" id="partager-spacer1"></div>\n  <div id="alphabet-container1">\n    <h2 id="alphabet-heading1" style="color:#2A7DDF;text-align:center;">\n      Voyelles\n    </h2>\n    \n    <ion-list id="alphabet-list5">\n      <ion-item color="none" id="alphabet-list-item4">\n        <ion-thumbnail item-left>\n          <img src= "assets/img/a.png" />\n        </ion-thumbnail>\n        <h2>\n          a\n        </h2>\n        <p>a comme dans tracas</p><!-- -->\n        <button ion-button icon-only item-right round outline (click)=\'playa()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n        </button>\n      </ion-item>\n    </ion-list>\n    <ion-list id="alphabet-list6">\n      <ion-item color="none" id="alphabet-list-item4">\n        <ion-thumbnail item-left>\n          <img src= "assets/img/i.png"/>\n        </ion-thumbnail>\n        <h2>\n          i\n        </h2>\n        <p>i comme dans habit</p><!-- -->\n        <button ion-button icon-only item-right round outline (click)=\'playi()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n        </button>\n      </ion-item>\n    </ion-list>\n\n    <ion-list id="alphabet-list6">\n      <ion-item color="none" id="alphabet-list-item4">\n        <ion-thumbnail item-left>\n          <img src= "assets/img/ɛ.png"/>\n        </ion-thumbnail>\n        <h2>\n          ɛ\n        </h2>\n        <p> ɛ antérieure ouverte comme </p><p>dans fête</p><!-- -->\n        <button ion-button icon-only item-right round outline (click)=\'playE()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n        </button>\n      </ion-item>\n    </ion-list>\n\n    <ion-list id="alphabet-list6">\n      <ion-item color="none" id="alphabet-list-item4">\n        <ion-thumbnail item-left>\n          <img src= "assets/img/e.png"/>\n        </ion-thumbnail>\n        <h2>\n          e\n        </h2>\n        <p>e antérieure comme dans métro</p><!-- -->\n        <button ion-button icon-only item-right round outline (click)=\'playe()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n        </button>\n      </ion-item>\n    </ion-list>\n\n\n    <ion-list id="alphabet-list6">\n      <ion-item color="none" id="alphabet-list-item4">\n        <ion-thumbnail item-left>\n          <img src= "assets/img/u.png"/>\n        </ion-thumbnail>\n        <h2>\n          u\n        </h2>\n        <p>u Postérieure fermée comme </p><p>dans coucou</p><!-- -->\n        <button ion-button icon-only item-right round outline (click)=\'playu()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n        </button>\n      </ion-item>\n    </ion-list>\n\n\n    <ion-list id="alphabet-list6">\n      <ion-item color="none" id="alphabet-list-item4">\n        <ion-thumbnail item-left>\n          <img src= "assets/img/ɔ.png"/>\n        </ion-thumbnail>\n        <h2>\n          ɔ\n        </h2>\n        <p>ɔ Postérieure ouverte comme </p><p>dans sorte</p><!-- -->\n        <button ion-button icon-only item-right round outline (click)=\'playN()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n        </button>\n      </ion-item>\n    </ion-list>\n\n\n    <ion-list id="alphabet-list6">\n      <ion-item color="none" id="alphabet-list-item4">\n        <ion-thumbnail item-left>\n          <img src= "assets/img/o.png" />\n        </ion-thumbnail>\n        <h2>\n          o\n        </h2>\n        <p>o Postérieure moyenne comme</p><p> dans\n        château</p><!-- -->\n        <button ion-button icon-only item-right round outline (click)=\'playo()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n        </button>\n      </ion-item>\n    </ion-list>\n\n\n    <ion-list id="alphabet-list6">\n      <ion-item color="none" id="alphabet-list-item4">\n        <ion-thumbnail item-left>\n          <img src= "assets/img/an.png" />\n        </ion-thumbnail>\n        <h2>\n          an\n        </h2>\n        <p>an "a" nasalisé comme dans</p><p>danse</p><!-- -->\n        <button ion-button icon-only item-right round outline (click)=\'playan()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n        </button>\n      </ion-item>\n    </ion-list>\n\n\n    <ion-list id="alphabet-list6">\n      <ion-item color="none" id="alphabet-list-item4">\n        <ion-thumbnail item-left>\n          <img src= "assets/img/ɔn.png" />\n        </ion-thumbnail>\n        <h2>\n          ɔn\n        </h2>\n        <p>ɔn "ɔ" nasalisé comme dans </p>\n        <p>fonte mais assez ouvert</p><!-- -->\n        <button ion-button icon-only item-right round outline (click)=\'playNo()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n        </button>\n      </ion-item>\n    </ion-list>\n\n\n    <ion-list id="alphabet-list6">\n      <ion-item color="none" id="alphabet-list-item4">\n        <ion-thumbnail item-left>\n          <img src= "assets/img/on.png" />\n        </ion-thumbnail>\n        <h2>\n          on\n        </h2>\n        <p>on "ɔ" nasalisé comme dans</p><p> fonte\n        mais assez fermé</p><!-- -->\n        <button ion-button icon-only item-right round outline (click)=\'playon()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n        </button>\n      </ion-item>\n    </ion-list>\n\n    <ion-list id="alphabet-list6">\n      <ion-item color="none" id="alphabet-list-item4">\n        <ion-thumbnail item-left>\n          <img  src= "assets/img/ɛn.png"/>\n        </ion-thumbnail>\n        <h2>\n          ɛn\n        </h2>\n        <p>ɛn "ɛ" comme dans pain</p><!-- -->\n        <button ion-button icon-only item-right round outline (click)=\'playEn()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n        </button>\n      </ion-item>\n    </ion-list>\n\n    <ion-list id="alphabet-list6">\n      <ion-item color="none" id="alphabet-list-item4">\n        <ion-thumbnail item-left>\n          <img src= "assets/img/un.png"/>\n        </ion-thumbnail>\n        <h2>\n         un\n        </h2>\n        <p> un "ou" nasalisé</p>\n        <p> Pas de correspondance en</p> <p>français</p><!-- -->\n        <button ion-button icon-only item-right round outline (click)=\'playun()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n        </button>\n      </ion-item>\n    </ion-list>\n\n    <ion-list id="alphabet-list6">\n      <ion-item color="none" id="alphabet-list-item4">\n        <ion-thumbnail item-left>\n          <img src= "assets/img/in.png"/>\n        </ion-thumbnail>\n        <h2>\n          in\n        </h2>\n        <p>in "i" nasalisé.</p>\n          <p> Pas de correspondance en </p><p>français</p><!-- -->\n        <button ion-button icon-only item-right round outline (click)=\'playin()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n        </button>\n      </ion-item>\n    </ion-list>\n  </div>\n\n\n  <!-- ɛ  ɔ -->\n  <div id="alphabet-container2">\n    <h2 id="alphabet-heading2" style="color:#2A7DDF;text-align:center;">\n      Consonnes\n    </h2>\n    <ion-list id="alphabet-list6">\n      <ion-item color="none" id="alphabet-list-item5">\n        <ion-thumbnail item-left>\n          <img src= "assets/img/b.png"/>\n        </ion-thumbnail>\n        <h2>\n         b\n        </h2>\n        <p>b comme dans bouche</p>\n        <button ion-button icon-only item-right round outline (click)=\'playb()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n        </button>\n      </ion-item>\n      <ion-item color="none" id="alphabet-list-item5">\n        <ion-thumbnail item-left>\n          <img src= "assets/img/c.png"/>\n        </ion-thumbnail>\n        <h2>\n         c\n        </h2>\n        <p>c comme dans tchao</p>\n        <button ion-button icon-only item-right round outline (click)=\'playc()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n        </button>\n      </ion-item>\n\n      <ion-item color="none" id="alphabet-list-item5">\n        <ion-thumbnail item-left>\n          <img src= "assets/img/d.png"/>\n        </ion-thumbnail>\n        <h2>\n         d\n        </h2>\n        <p>d comme dans doute</p>\n        <button ion-button icon-only item-right round outline (click)=\'playd()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n        </button>\n      </ion-item>\n\n      <ion-item color="none" id="alphabet-list-item5">\n        <ion-thumbnail item-left>\n          <img src= "assets/img/ɖ.png"/>\n        </ion-thumbnail>\n        <h2>\n          ɖ\n        </h2>\n        <p>ɖ Se prononce comme "d", mais</p> <p>en\n          appuyant la pointe de la </p><p>langue sur la\n          racine des dents</p>\n        <button ion-button icon-only item-right round outline (click)=\'playdd()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n        </button>\n      </ion-item>\n\n      <ion-item color="none" id="alphabet-list-item5">\n        <ion-thumbnail item-left>\n          <img src= "assets/img/f.png"/>\n        </ion-thumbnail>\n        <h2>\n          f\n        </h2>\n        <p>f comme dans foule</p>\n        <button ion-button icon-only item-right round outline (click)=\'playf()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n        </button>\n      </ion-item>\n\n      <ion-item color="none" id="alphabet-list-item5">\n        <ion-thumbnail item-left>\n          <img src= "assets/img/g.png" />\n        </ion-thumbnail>\n        <h2>\n          g\n        </h2>\n        <p>g comme dans gamin</p>\n        <button ion-button icon-only item-right round outline (click)=\'playg()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n        </button>\n      </ion-item>\n\n      <ion-item color="none" id="alphabet-list-item5">\n        <ion-thumbnail item-left>\n          <img src= "assets/img/gb.png"/>\n        </ion-thumbnail>\n        <h2>\n          gb\n        </h2>\n        <p>gb en un seul son</p>\n        <button ion-button icon-only item-right round outline (click)=\'playgb()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n        </button>\n      </ion-item>\n\n      <ion-item color="none" id="alphabet-list-item5">\n        <ion-thumbnail item-left>\n          <img src= "assets/img/h.png"/>\n        </ion-thumbnail>\n        <h2>\n          h\n        </h2>\n        <p>h Se prononce avec une</p> <p>expiration\n          venant de la poitrine</p>\n        <button ion-button icon-only item-right round outline (click)=\'playh()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n        </button>\n      </ion-item>\n\n      <ion-item color="none" id="alphabet-list-item5">\n        <ion-thumbnail item-left>\n          <img src= "assets/img/j.png"/>\n        </ion-thumbnail>\n        <h2>\n          j\n        </h2>\n        <p>j comme dans djin</p>\n        <button ion-button icon-only item-right round outline (click)=\'playj()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n        </button>\n      </ion-item>\n\n      <ion-item color="none" id="alphabet-list-item5">\n        <ion-thumbnail item-left>\n          <img src= "assets/img/k.png" />\n        </ion-thumbnail>\n        <h2>\n          k\n        </h2>\n        <p>k comme dans képi</p>\n        <button ion-button icon-only item-right round outline (click)=\'playk()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n        </button>\n      </ion-item><ion-item color="none" id="alphabet-list-item5">\n        <ion-thumbnail item-left>\n          <img src= "assets/img/kp.png"/>\n        </ion-thumbnail>\n        <h2>\n          kp\n        </h2>\n        <p>kp en un seul son</p>\n        <button ion-button icon-only item-right round outline (click)=\'playkp()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n        </button>\n      </ion-item>\n      <ion-item color="none" id="alphabet-list-item5">\n        <ion-thumbnail item-left>\n          <img src= "assets/img/l.png"/>\n        </ion-thumbnail>\n        <h2>\n          l\n        </h2>\n        <p>l comme lame, le R léger</p>\n        <button ion-button icon-only item-right round outline (click)=\'playl()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n        </button>\n      </ion-item>\n\n\n      <ion-item color="none" id="alphabet-list-item5">\n        <ion-thumbnail item-left>\n          <img src= "assets/img/m.png"/>\n        </ion-thumbnail>\n        <h2>\n         m\n        </h2>\n        <p>m comme dans marine</p>\n        <button ion-button icon-only item-right round outline (click)=\'playm()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n        </button>\n      </ion-item>\n\n      <ion-item color="none" id="alphabet-list-item5">\n        <ion-thumbnail item-left>\n          <img src= "assets/img/n.png"/>\n        </ion-thumbnail>\n        <h2>\n         n\n        </h2>\n        <p>n comme dans noce</p>\n        <button ion-button icon-only item-right round outline (click)=\'playn()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n        </button>\n      </ion-item>\n\n      <ion-item color="none" id="alphabet-list-item5">\n        <ion-thumbnail item-left>\n          <img src= "assets/img/ny.png"/>\n        </ion-thumbnail>\n        <h2>\n         ny\n        </h2>\n        <p>ny comme dans magnifique</p>\n        <button ion-button icon-only item-right round outline (click)=\'playny()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n        </button>\n      </ion-item>\n\n      <ion-item color="none" id="alphabet-list-item5">\n        <ion-thumbnail item-left>\n          <img src= "assets/img/p.png"/>\n        </ion-thumbnail>\n        <h2>\n         p\n        </h2>\n        <p>p comme dans pouce (n\'existe</p><p> pas\n          en fon sauf pɛpɛpɛ, pinpan</p><p>, padri)</p>\n        <button ion-button icon-only item-right round outline (click)=\'playp()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n        </button>\n      </ion-item> \n\n\n      <ion-item color="none" id="alphabet-list-item5">\n        <ion-thumbnail item-left>\n          <img src= "assets/img/s.png"/>\n        </ion-thumbnail>\n        <h2>\n         s\n        </h2>\n        <p>s comme dans sale</p>\n        <button ion-button icon-only item-right round outline (click)=\'plays()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n        </button>\n      </ion-item>\n\n      <ion-item color="none" id="alphabet-list-item5">\n        <ion-thumbnail item-left>\n          <img src= "assets/img/t.png"/>\n        </ion-thumbnail>\n        <h2>\n         t\n        </h2>\n        <p>comme dans tasse</p>\n        <button ion-button icon-only item-right round outline (click)=\'playt()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n        </button>\n      </ion-item>\n\n\n      <ion-item color="none" id="alphabet-list-item5">\n        <ion-thumbnail item-left>\n          <img src= "assets/img/v.png"/>\n        </ion-thumbnail>\n        <h2>\n         v\n        </h2>\n        <p>v comme dans vase</p>\n        <button ion-button icon-only item-right round outline (click)=\'playv()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n        </button>\n      </ion-item>\n\n      <ion-item color="none" id="alphabet-list-item5">\n        <ion-thumbnail item-left>\n          <img src= "assets/img/w.png"/>\n        </ion-thumbnail>\n        <h2>\n          w\n        </h2>\n        <p>w comme dans ouate</p>\n        <button ion-button icon-only item-right round outline (click)=\'playw()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n        </button>\n      </ion-item>\n\n      <ion-item color="none" id="alphabet-list-item5">\n        <ion-thumbnail item-left>\n          <img src= "assets/img/x.png"/>\n        </ion-thumbnail>\n        <h2>\n         x\n        </h2>\n        <p>x comme la jota espagnol se</p>\n      <p>prononçant avec la seule cavité </p>\n      <p> buccale</p>\n        <button ion-button icon-only item-right round outline (click)=\'playx()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n        </button>\n      </ion-item>\n\n      <ion-item color="none" id="alphabet-list-item5">\n        <ion-thumbnail item-left>\n          <img src= "assets/img/y.png"/>\n        </ion-thumbnail>\n        <h2>\n         y\n        </h2>\n        <p>y comme dans yaourt</p>\n        <button ion-button icon-only item-right round outline (click)=\'playy()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n        </button>\n      </ion-item>\n\n      <ion-item color="none" id="alphabet-list-item5">\n        <ion-thumbnail item-left>\n          <img src= "assets/img/z.png"/>\n        </ion-thumbnail>\n        <h2>\n         z\n        </h2>\n        <p>z comme dans zone</p>\n        <button ion-button icon-only item-right round outline (click)=\'playz()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n        </button>\n      </ion-item>\n\n    </ion-list>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\Parikiri13\Documents\Ionic\Ionic2\localapplanguage\src\pages\alphabet\alphabet.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_smart_audio_smart_audio__["a" /* SmartAudioProvider */]])
], AlphabetPage);

//# sourceMappingURL=alphabet.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChiffresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_smart_audio_smart_audio__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChiffresPage = (function () {
    function ChiffresPage(navCtrl, smartAudio) {
        this.navCtrl = navCtrl;
        this.smartAudio = smartAudio;
        smartAudio.preload('0', 'assets/audioLib/chiffre/0.mp3');
        smartAudio.preload('1', 'assets/audioLib/chiffre/1.mp3');
        smartAudio.preload('2', 'assets/audioLib/chiffre/2.mp3');
        smartAudio.preload('3', 'assets/audioLib/chiffre/3.mp3');
        smartAudio.preload('4', 'assets/audioLib/chiffre/4.mp3');
        smartAudio.preload('5', 'assets/audioLib/chiffre/5.mp3');
        smartAudio.preload('6', 'assets/audioLib/chiffre/6.mp3');
        smartAudio.preload('7', 'assets/audioLib/chiffre/7.mp3');
        smartAudio.preload('8', 'assets/audioLib/chiffre/8.mp3');
        smartAudio.preload('9', 'assets/audioLib/chiffre/9.mp3');
        smartAudio.preload('10', 'assets/audioLib/chiffre/10.mp3');
        smartAudio.preload('11', 'assets/audioLib/chiffre/11.mp3');
        smartAudio.preload('12', 'assets/audioLib/chiffre/12.mp3');
        smartAudio.preload('13', 'assets/audioLib/chiffre/13.mp3');
        smartAudio.preload('14', 'assets/audioLib/chiffre/14.mp3');
        smartAudio.preload('15', 'assets/audioLib/chiffre/15.mp3');
        smartAudio.preload('16', 'assets/audioLib/chiffre/16.mp3');
        smartAudio.preload('17', 'assets/audioLib/chiffre/17.mp3');
        smartAudio.preload('18', 'assets/audioLib/chiffre/18.mp3');
        smartAudio.preload('19', 'assets/audioLib/chiffre/19.mp3');
        smartAudio.preload('20', 'assets/audioLib/chiffre/20.mp3');
        smartAudio.preload('21', 'assets/audioLib/chiffre/21.mp3');
        smartAudio.preload('22', 'assets/audioLib/chiffre/22.mp3');
        smartAudio.preload('23', 'assets/audioLib/chiffre/23.mp3');
        smartAudio.preload('24', 'assets/audioLib/chiffre/24.mp3');
        smartAudio.preload('25', 'assets/audioLib/chiffre/25.mp3');
        smartAudio.preload('26', 'assets/audioLib/chiffre/26.mp3');
        smartAudio.preload('27', 'assets/audioLib/chiffre/27.mp3');
        smartAudio.preload('28', 'assets/audioLib/chiffre/28.mp3');
        smartAudio.preload('29', 'assets/audioLib/chiffre/29.mp3');
        smartAudio.preload('30', 'assets/audioLib/chiffre/30.mp3');
        smartAudio.preload('40', 'assets/audioLib/chiffre/40.mp3');
        smartAudio.preload('50', 'assets/audioLib/chiffre/50.mp3');
        smartAudio.preload('60', 'assets/audioLib/chiffre/60.mp3');
        smartAudio.preload('70', 'assets/audioLib/chiffre/70.mp3');
        smartAudio.preload('80', 'assets/audioLib/chiffre/80.mp3');
        smartAudio.preload('90', 'assets/audioLib/chiffre/90.mp3');
        smartAudio.preload('100', 'assets/audioLib/chiffre/100.mp3');
    }
    ChiffresPage.prototype.play0 = function () {
        this.smartAudio.play('0');
    };
    ChiffresPage.prototype.play1 = function () {
        this.smartAudio.play('1');
    };
    ChiffresPage.prototype.play2 = function () {
        this.smartAudio.play('2');
    };
    ChiffresPage.prototype.play3 = function () {
        this.smartAudio.play('3');
    };
    ChiffresPage.prototype.play4 = function () {
        this.smartAudio.play('4');
    };
    ChiffresPage.prototype.play5 = function () {
        this.smartAudio.play('5');
    };
    ChiffresPage.prototype.play6 = function () {
        this.smartAudio.play('6');
    };
    ChiffresPage.prototype.play7 = function () {
        this.smartAudio.play('7');
    };
    ChiffresPage.prototype.play8 = function () {
        this.smartAudio.play('8');
    };
    ChiffresPage.prototype.play9 = function () {
        this.smartAudio.play('9');
    };
    ChiffresPage.prototype.play10 = function () {
        this.smartAudio.play('10');
    };
    ChiffresPage.prototype.play11 = function () {
        this.smartAudio.play('11');
    };
    ChiffresPage.prototype.play12 = function () {
        this.smartAudio.play('12');
    };
    ChiffresPage.prototype.play13 = function () {
        this.smartAudio.play('13');
    };
    ChiffresPage.prototype.play14 = function () {
        this.smartAudio.play('14');
    };
    ChiffresPage.prototype.play15 = function () {
        this.smartAudio.play('15');
    };
    ChiffresPage.prototype.play16 = function () {
        this.smartAudio.play('16');
    };
    ChiffresPage.prototype.play17 = function () {
        this.smartAudio.play('17');
    };
    ChiffresPage.prototype.play18 = function () {
        this.smartAudio.play('18');
    };
    ChiffresPage.prototype.play19 = function () {
        this.smartAudio.play('19');
    };
    ChiffresPage.prototype.play20 = function () {
        this.smartAudio.play('20');
    };
    ChiffresPage.prototype.play21 = function () {
        this.smartAudio.play('21');
    };
    ChiffresPage.prototype.play22 = function () {
        this.smartAudio.play('22');
    };
    ChiffresPage.prototype.play23 = function () {
        this.smartAudio.play('23');
    };
    ChiffresPage.prototype.play24 = function () {
        this.smartAudio.play('24');
    };
    ChiffresPage.prototype.play25 = function () {
        this.smartAudio.play('25');
    };
    ChiffresPage.prototype.play26 = function () {
        this.smartAudio.play('26');
    };
    ChiffresPage.prototype.play27 = function () {
        this.smartAudio.play('27');
    };
    ChiffresPage.prototype.play28 = function () {
        this.smartAudio.play('28');
    };
    ChiffresPage.prototype.play29 = function () {
        this.smartAudio.play('29');
    };
    ChiffresPage.prototype.play30 = function () {
        this.smartAudio.play('30');
    };
    ChiffresPage.prototype.play40 = function () {
        this.smartAudio.play('40');
    };
    ChiffresPage.prototype.play50 = function () {
        this.smartAudio.play('50');
    };
    ChiffresPage.prototype.play60 = function () {
        this.smartAudio.play('60');
    };
    ChiffresPage.prototype.play70 = function () {
        this.smartAudio.play('70');
    };
    ChiffresPage.prototype.play80 = function () {
        this.smartAudio.play('80');
    };
    ChiffresPage.prototype.play90 = function () {
        this.smartAudio.play('90');
    };
    ChiffresPage.prototype.play100 = function () {
        this.smartAudio.play('100');
    };
    return ChiffresPage;
}());
ChiffresPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-chiffres',template:/*ion-inline-start:"C:\Users\Parikiri13\Documents\Ionic\Ionic2\localapplanguage\src\pages\chiffres\chiffres.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Chiffres\n    </ion-title>\n  </ion-navbar >\n</ion-header>\n<ion-content  id="page3" style="background-color:rgb(255, 255, 255);">\n  <ion-list id="chiffres-list8">\n    <ion-item color="none" id="chiffres-list-item9">\n      <ion-thumbnail item-left>\n        <img src="assets/img/0.png" />\n      </ion-thumbnail>\n      <h2>\n        0- Vɔ\n      </h2>\n      <p>Zéro</p>\n      <button ion-button icon-only item-right round outline (click)=\'play0()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item color="none" id="chiffres-list-item14">\n      <ion-thumbnail item-left>\n        <img src="assets/img/1.png" />\n      </ion-thumbnail>\n      <h2>\n        1- ɖe\n      </h2>\n      <p>Un</p>\n      <button ion-button icon-only item-right round outline (click)=\'play1()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item color="none" id="chiffres-list-item15">\n      <ion-thumbnail item-left>\n        <img src="assets/img/2.png" />\n      </ion-thumbnail>\n      <h2>\n        2 - We\n      </h2>\n      <p>Deux</p>\n      <button ion-button icon-only item-right round outline (click)=\'play2()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item color="none" id="chiffres-list-item16">\n      <ion-thumbnail item-left>\n        <img src="assets/img/3.png" />\n      </ion-thumbnail>\n      <h2>\n        3 - Atɔn\n      </h2>\n      <p>Trois</p>\n      <button ion-button icon-only item-right round outline (click)=\'play3()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item color="none" id="chiffres-list-item17">\n      <ion-thumbnail item-left>\n        <img src="assets/img/4 - Copie.png" />\n      </ion-thumbnail>\n      <h2>\n        4 - ɛnɛ\n      </h2>\n      <p>Quatre</p>\n      <button ion-button icon-only item-right round outline (click)=\'play4()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item color="none" id="chiffres-list-item18">\n      <ion-thumbnail item-left>\n        <img src="assets/img/5.png" />\n      </ion-thumbnail>\n      <h2>\n        5 - Atɔɔn\n      </h2>\n      <p>Cinq</p>\n      <button ion-button icon-only item-right round outline (click)=\'play5()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item color="none" id="chiffres-list-item19">\n      <ion-thumbnail item-left>\n        <img src="assets/img/6.png" />\n      </ion-thumbnail>\n      <h2>\n        6 - Ayizɛn\n      </h2>\n      <p>Six</p>\n      <button ion-button icon-only item-right round outline (click)=\'play6()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item color="none" id="chiffres-list-item20">\n      <ion-thumbnail item-left>\n        <img src="assets/img/7.png" />\n      </ion-thumbnail>\n      <h2>\n        7-Tɛnwe\n      </h2>\n      <p>Sept</p>\n      <button ion-button icon-only item-right round outline (click)=\'play7()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item color="none" id="chiffres-list-item21">\n      <ion-thumbnail item-left>\n        <img src="assets/img/8.png" />\n      </ion-thumbnail>\n      <h2>\n        8 - Tantɔn\n      </h2>\n      <p>Huit</p>\n      <button ion-button icon-only item-right round outline (click)=\'play8()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item color="none" id="chiffres-list-item22">\n      <ion-thumbnail item-left>\n        <img src="assets/img/9.png" />\n      </ion-thumbnail>\n      <h2>\n        9-Tɛnnɛ\n      </h2>\n      <p>Neuf</p>\n      <button ion-button icon-only item-right round outline (click)=\'play9()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item color="none" id="chiffres-list-item22">\n      <ion-thumbnail item-left>\n        <img src="assets/img/10.png" />\n      </ion-thumbnail>\n      <h2>\n        10 - Wo\n      </h2>\n      <p>Dix</p>\n      <button ion-button icon-only item-right round outline (click)=\'play10()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item color="none" id="chiffres-list-item22">\n      <ion-thumbnail item-left>\n        <img src="assets/img/11.png" />\n      </ion-thumbnail>\n      <h2>\n       11 - wo-ɖokpo\n      </h2>\n      <p>Onze</p>\n      <button ion-button icon-only item-right round outline (click)=\'play11()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item color="none" id="chiffres-list-item22">\n      <ion-thumbnail item-left>\n        <img src="assets/img/12.png" />\n      </ion-thumbnail>\n      <h2>\n        12 - Wewe\n      </h2>\n      <p>Douze</p>\n      <button ion-button icon-only item-right round outline (click)=\'play12()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item color="none" id="chiffres-list-item22">\n      <ion-thumbnail item-left>\n        <img src="assets/img/13.png" />\n      </ion-thumbnail>\n      <h2>\n        13 - Watɔn\n      </h2>\n      <p>Treize</p>\n      <button ion-button icon-only item-right round outline (click)=\'play13()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item color="none" id="chiffres-list-item22">\n      <ion-thumbnail item-left>\n        <img src="assets/img/14.png" />\n      </ion-thumbnail>\n      <h2>\n        14 - Wɛnɛ\n      </h2>\n      <p>Quatorze</p>\n      <button ion-button icon-only item-right round outline (click)=\'play14()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item color="none" id="chiffres-list-item22">\n      <ion-thumbnail item-left>\n        <img src="assets/img/15.png" />\n      </ion-thumbnail>\n      <h2>\n        15 - Afɔtɔn\n      </h2>\n      <p>Quinze</p>\n      <button ion-button icon-only item-right round outline (click)=\'play15()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item color="none" id="chiffres-list-item22">\n      <ion-thumbnail item-left>\n        <img src="assets/img/16.png" />\n      </ion-thumbnail>\n      <h2>\n        16 - Afɔtɔn nukun ɖokpo\n      </h2>\n      <p>Seize</p>\n      <button ion-button icon-only item-right round outline (click)=\'play16()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item color="none" id="chiffres-list-item22">\n      <ion-thumbnail item-left>\n        <img src="assets/img/17.png" />\n      </ion-thumbnail>\n      <h2>\n        17 - Afɔtɔn nukun we\n      </h2>\n      <p>Dix-Sept</p>\n      <button ion-button icon-only item-right round outline (click)=\'play17()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item color="none" id="chiffres-list-item22">\n      <ion-thumbnail item-left>\n        <img src="assets/img/18.png" />\n      </ion-thumbnail>\n      <h2>\n       18 - Afɔtɔn nukun atɔn\n      </h2>\n      <p>Dix-huit</p>\n      <button ion-button icon-only item-right round outline (click)=\'play18()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item color="none" id="chiffres-list-item22">\n      <ion-thumbnail item-left>\n        <img src="assets/img/19.png" />\n      </ion-thumbnail>\n      <h2>\n        19 - Afɔtɔn nukun ɛnɛ\n      </h2>\n      <p>Dix-neuf</p>\n      <button ion-button icon-only item-right round outline (click)=\'play19()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item color="none" id="chiffres-list-item22">\n      <ion-thumbnail item-left>\n        <img src="assets/img/20.png" />\n      </ion-thumbnail>\n      <h2>\n       20 - Ko\n      </h2>\n      <p>Vingt</p>\n      <button ion-button icon-only item-right round outline (click)=\'play20()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item color="none" id="chiffres-list-item22">\n      <ion-thumbnail item-left>\n        <img src="assets/img/21.png" />\n      </ion-thumbnail>\n      <h2>\n        21 - Ko nukun ɖokpo\n      </h2>\n      <p>Vingt et un</p>\n      <button ion-button icon-only item-right round outline (click)=\'play21()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item color="none" id="chiffres-list-item22">\n      <ion-thumbnail item-left>\n        <img src="assets/img/22.png" />\n      </ion-thumbnail>\n      <h2>\n        22 - Ko nukun we\n      </h2>\n      <p>Vingt-deux</p>\n      <button ion-button icon-only item-right round outline (click)=\'play22()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item color="none" id="chiffres-list-item22">\n      <ion-thumbnail item-left>\n        <img src="assets/img/23.png" />\n      </ion-thumbnail>\n      <h2>\n       23 - Ko nukun atɔn\n      </h2>\n      <p>Vingt-trois</p>\n      <button ion-button icon-only item-right round outline (click)=\'play23()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item color="none" id="chiffres-list-item22">\n      <ion-thumbnail item-left>\n        <img src="assets/img/24.png" />\n      </ion-thumbnail>\n      <h2>\n        24 - Ko nukun ɛnɛ\n      </h2>\n      <p>Vingt-quatre</p>\n      <button ion-button icon-only item-right round outline (click)=\'play24()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item color="none" id="chiffres-list-item22">\n      <ion-thumbnail item-left>\n        <img src="assets/img/25.png" />\n      </ion-thumbnail>\n      <h2>\n        25 - Ko atɔɔn\n      </h2>\n      <p>Vingt-cinq</p>\n      <button ion-button icon-only item-right round outline (click)=\'play25()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item color="none" id="chiffres-list-item22">\n      <ion-thumbnail item-left>\n        <img src="assets/img/26.png" />\n      </ion-thumbnail>\n      <h2>\n        26 - Ko atɔɔn nukun ɖokpo\n      </h2>\n      <p>Vingt-six</p>\n      <button ion-button icon-only item-right round outline (click)=\'play26()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item color="none" id="chiffres-list-item22">\n      <ion-thumbnail item-left>\n        <img src="assets/img/27.png" />\n      </ion-thumbnail>\n      <h2>\n        27 - Ko atɔɔn nukun we\n      </h2>\n      <p>Vingt-sept</p>\n      <button ion-button icon-only item-right round outline (click)=\'play27()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item color="none" id="chiffres-list-item22">\n      <ion-thumbnail item-left>\n        <img src="assets/img/28.png" />\n      </ion-thumbnail>\n      <h2>\n        28 - Ko atɔɔn nukun atɔn\n      </h2>\n      <p>Vingt-huit</p>\n      <button ion-button icon-only item-right round outline (click)=\'play28()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item color="none" id="chiffres-list-item22">\n      <ion-thumbnail item-left>\n        <img src="assets/img/29.png" />\n      </ion-thumbnail>\n      <h2>\n        29 - Ko atɔɔn nukun ɛnɛ\n      </h2>\n      <p>Vingt-neuf</p>\n      <button ion-button icon-only item-right round outline (click)=\'play29()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item color="none" id="chiffres-list-item22">\n      <ion-thumbnail item-left>\n        <img src="assets/img/30.png" />\n      </ion-thumbnail>\n      <h2>\n        30 - Gban\n      </h2>\n      <p>Trente</p>\n      <button ion-button icon-only item-right round outline (click)=\'play30()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n      </button>\n    </ion-item>\n\n    <ion-item color="none" id="chiffres-list-item22">\n      <ion-thumbnail item-left>\n        <img src="assets/img/40.png" />\n      </ion-thumbnail>\n      <h2>\n        40 - Kanɖe\n      </h2>\n      <p>Quarante</p>\n      <button ion-button icon-only item-right round outline (click)=\'play40()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n      </button>\n    </ion-item>\n\n    <ion-item color="none" id="chiffres-list-item22">\n      <ion-thumbnail item-left>\n        <img src="assets/img/50.png" />\n      </ion-thumbnail>\n      <h2>\n        50 - Kanɖe wo\n      </h2>\n      <p>Cinquante</p>\n      <button ion-button icon-only item-right round outline (click)=\'play50()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n      </button>\n    </ion-item>\n\n    <ion-item color="none" id="chiffres-list-item22">\n      <ion-thumbnail item-left>\n        <img src="assets/img/60.png" />\n      </ion-thumbnail>\n      <h2>\n        60 - Kanɖe ko\n      </h2>\n      <p>Soixante</p>\n      <button ion-button icon-only item-right round outline (click)=\'play60()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n      </button>\n    </ion-item>\n\n    <ion-item color="none" id="chiffres-list-item22">\n      <ion-thumbnail item-left>\n        <img src="assets/img/70.png" />\n      </ion-thumbnail>\n      <h2>\n        70 - Kanɖe gban\n      </h2>\n      <p>Soixante-dix</p>\n      <button ion-button icon-only item-right round outline (click)=\'play70()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n      </button>\n    </ion-item>\n\n\n    <ion-item color="none" id="chiffres-list-item22">\n      <ion-thumbnail item-left>\n        <img src="assets/img/80.png" />\n      </ion-thumbnail>\n      <h2>\n        80 - Kanwe\n      </h2>\n      <p>Quatre-vingt</p>\n      <button ion-button icon-only item-right round outline (click)=\'play80()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n      </button>\n    </ion-item>\n\n    <ion-item color="none" id="chiffres-list-item22">\n      <ion-thumbnail item-left>\n        <img src="assets/img/90.png" />\n      </ion-thumbnail>\n      <h2>\n        90 - Kanwe wo\n      </h2>\n      <p>Quatre-vingt-dix</p>\n      <button ion-button icon-only item-right round outline (click)=\'play90()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n      </button>\n    </ion-item>\n\n    <ion-item color="none" id="chiffres-list-item22">\n      <ion-thumbnail item-left>\n        <img src="assets/img/100.png" />\n      </ion-thumbnail>\n      <h2>\n        100 - Kanwe ko\n      </h2>\n      <p>Cent</p>\n      <button ion-button icon-only item-right round outline (click)=\'play100()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n      </button>\n    </ion-item>\n\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\Parikiri13\Documents\Ionic\Ionic2\localapplanguage\src\pages\chiffres\chiffres.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_smart_audio_smart_audio__["a" /* SmartAudioProvider */]])
], ChiffresPage);

//# sourceMappingURL=chiffres.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlimentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_smart_audio_smart_audio__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlimentsPage = (function () {
    function AlimentsPage(navCtrl, smartAudio) {
        this.navCtrl = navCtrl;
        this.smartAudio = smartAudio;
        smartAudio.preload('ma', 'assets/audioLib/food/ma.mp3');
        smartAudio.preload('ha', 'assets/audioLib/food/ha.mp3');
        smartAudio.preload('np', 'assets/audioLib/food/np.mp3');
        smartAudio.preload('nc', 'assets/audioLib/food/nc.mp3');
        smartAudio.preload('ig', 'assets/audioLib/food/ig.mp3');
        smartAudio.preload('pi', 'assets/audioLib/food/pi.mp3');
        smartAudio.preload('oe', 'assets/audioLib/food/oe.mp3');
        smartAudio.preload('fe', 'assets/audioLib/food/fe.mp3');
        smartAudio.preload('go', 'assets/audioLib/food/go.mp3');
        smartAudio.preload('gi', 'assets/audioLib/food/gi.mp3');
        smartAudio.preload('ri', 'assets/audioLib/food/ri.mp3');
        smartAudio.preload('ba', 'assets/audioLib/food/ba.mp3');
        smartAudio.preload('ci', 'assets/audioLib/food/ci.mp3');
        smartAudio.preload('po', 'assets/audioLib/food/po.mp3');
        smartAudio.preload('cr', 'assets/audioLib/food/cr.mp3');
        smartAudio.preload('cre', 'assets/audioLib/food/cre.mp3');
        smartAudio.preload('poi', 'assets/audioLib/food/poi.mp3');
        smartAudio.preload('man', 'assets/audioLib/food/man.mp3');
        smartAudio.preload('oi', 'assets/audioLib/food/oi.mp3');
        smartAudio.preload('to', 'assets/audioLib/food/to.mp3');
    }
    AlimentsPage.prototype.playma = function () {
        this.smartAudio.play('ma');
    };
    AlimentsPage.prototype.playha = function () {
        this.smartAudio.play('ha');
    };
    AlimentsPage.prototype.playnp = function () {
        this.smartAudio.play('np');
    };
    AlimentsPage.prototype.plaync = function () {
        this.smartAudio.play('nc');
    };
    AlimentsPage.prototype.playig = function () {
        this.smartAudio.play('ig');
    };
    AlimentsPage.prototype.playpi = function () {
        this.smartAudio.play('pi');
    };
    AlimentsPage.prototype.playoe = function () {
        this.smartAudio.play('oe');
    };
    AlimentsPage.prototype.playga = function () {
        this.smartAudio.play('fe');
    };
    AlimentsPage.prototype.playgo = function () {
        this.smartAudio.play('go');
    };
    AlimentsPage.prototype.playgi = function () {
        this.smartAudio.play('gi');
    };
    AlimentsPage.prototype.playba = function () {
        this.smartAudio.play('ba');
    };
    AlimentsPage.prototype.playci = function () {
        this.smartAudio.play('ci');
    };
    AlimentsPage.prototype.playcr = function () {
        this.smartAudio.play('cr');
    };
    AlimentsPage.prototype.playcre = function () {
        this.smartAudio.play('cre');
    };
    AlimentsPage.prototype.playman = function () {
        this.smartAudio.play('man');
    };
    AlimentsPage.prototype.playoi = function () {
        this.smartAudio.play('oi');
    };
    AlimentsPage.prototype.playto = function () {
        this.smartAudio.play('to');
    };
    AlimentsPage.prototype.playpo = function () {
        this.smartAudio.play('po');
    };
    AlimentsPage.prototype.playpoi = function () {
        this.smartAudio.play('poi');
    };
    AlimentsPage.prototype.playri = function () {
        this.smartAudio.play('ri');
    };
    return AlimentsPage;
}());
AlimentsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-aliments',template:/*ion-inline-start:"C:\Users\Parikiri13\Documents\Ionic\Ionic2\localapplanguage\src\pages\aliments\aliments.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Aliments\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content id="page4" style="background-color:rgb(255, 255, 255);">\n  <ion-list id="aliments-list9">\n    <ion-item color="none" id="aliments-list-item23">\n      <ion-thumbnail item-left>\n        <img src="assets/img/wv6a6YqjTSSeDcGPPmrU_maize.png" />\n      </ion-thumbnail>\n      <h2>\n        Gbade\n      </h2>\n      <p>Maïs</p>\n      <button ion-button icon-only item-right round outline (click)=\'playma()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n        </button>\n    </ion-item>\n    <ion-item color="none" id="aliments-list-item24">\n      <ion-thumbnail item-left>\n        <img src="assets/img/haricot.png" />\n      </ion-thumbnail>\n      <h2>\n        Ayikun\n      </h2>\n      <p>Haricot</p>\n      <button ion-button icon-only item-right round outline (click)=\'playha()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n        </button>\n    </ion-item>\n    <ion-item color="none" id="aliments-list-item25">\n      <ion-thumbnail item-left>\n        <img src="assets/img/np.png" />\n      </ion-thumbnail>\n      <h2>\n        Dekin\n      </h2>\n      <p>Noix de Palme</p>\n      <button ion-button icon-only item-right round outline (click)=\'playnp()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n        </button>\n    </ion-item>\n    <ion-item color="none" id="aliments-list-item26">\n      <ion-thumbnail item-left>\n        <img src="assets/img/DW8AQZ1mSlaS5Oq82r3f_coco.jpg" />\n      </ion-thumbnail>\n      <h2>\n        Agonkɛ\n      </h2>\n      <p>Noix de Coco</p>\n      <button ion-button icon-only item-right round outline (click)=\'plaync()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n        </button>\n    </ion-item>\n    <ion-item color="none" id="aliments-list-item27">\n      <ion-thumbnail item-left>\n        <img src="assets/img/DJbdgEMbTuCOZ7SRXUkD_yam.jpg" />\n      </ion-thumbnail>\n      <h2>\n        Tévi\n      </h2>\n      <p>Igname</p>\n      <button ion-button icon-only item-right round outline (click)=\'playig()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n        </button>\n    </ion-item>\n    <ion-item color="none" id="aliments-list-item28">\n      <ion-thumbnail item-left>\n        <img src="assets/img/RmDJI8tdRMqgjcKBEOBH_pep.jpg" />\n      </ion-thumbnail>\n      <h2>\n        Takin\n      </h2>\n      <p>Piment</p>\n      <button ion-button icon-only item-right round outline (click)=\'playpi()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n        </button>\n    </ion-item>\n    <ion-item color="none" id="aliments-list-item29">\n      <ion-thumbnail item-left>\n        <img src="assets/img/5IppjJDSm9wC6PcVRXHQ_egg.jpg" />\n      </ion-thumbnail>\n      <h2>\n        Azin</h2>\n        <p>Oeuf</p>\n        <button ion-button icon-only item-right round outline (click)=\'playoe()\'>\n            <ion-icon name="volume-up" ></ion-icon>\n          </button>\n    </ion-item>\n    <ion-item color="none" id="aliments-list-item30">\n      <ion-thumbnail item-left>\n        <img src="assets/img/eFgnLxWSQ6igAXxh68cp_foor.png" />\n      </ion-thumbnail>\n      <h2>\n        Fɛnnyɛ\n      </h2>\n      <p>Manioc</p>\n      <button ion-button icon-only item-right round outline (click)=\'playga()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n        </button>\n    </ion-item>\n    <ion-item color="none" id="aliments-list-item31">\n      <ion-thumbnail item-left>\n        <img src="assets/img/aLY8PGpfTuCibWf5dtfN_okra.jpg" />\n      </ion-thumbnail>\n      <h2>\n        Févi\n      </h2>\n      <p>Gombo</p>\n      <button ion-button icon-only item-right round outline (click)=\'playgo()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n        </button>\n    </ion-item>\n    <ion-item color="none" id="aliments-list-item32">\n      <ion-thumbnail item-left>\n        <img src="assets/img/RULQDocYRuOoAQzDLYVz_gin.jpg" />\n      </ion-thumbnail>\n      <h2>\n        Dotɛ\n      </h2>\n      <p>Gingembre</p>\n      <button ion-button icon-only item-right round outline (click)=\'playgi()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n        </button>\n    </ion-item>\n\n    <ion-item color="none" id="aliments-list-item33">\n      <ion-thumbnail item-left>\n        <img src="assets/img/riz.jpg" />\n      </ion-thumbnail>\n      <h2>\n        Mɔ̆likún\n      </h2>\n      <p>Riz</p>\n      <button ion-button icon-only item-right round outline (click)=\'playri()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n        </button>\n    </ion-item>\n\n    <ion-item color="none" id="aliments-list-item33">\n      <ion-thumbnail item-left>\n        <img src="assets/img/banane.png" />\n      </ion-thumbnail>\n      <h2>\n        Kókwé\n      </h2>\n      <p>Banane</p>\n      <button ion-button icon-only item-right round outline (click)=\'playba()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n        </button>\n    </ion-item>\n\n    <ion-item color="none" id="aliments-list-item33">\n      <ion-thumbnail item-left>\n        <img src="assets/img/citron.png" />\n      </ion-thumbnail>\n      <h2>\n        Klé\n      </h2>\n      <p>Citron</p>\n      <button ion-button icon-only item-right round outline (click)=\'playci()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n        </button>\n    </ion-item>\n\n    <ion-item color="none" id="aliments-list-item33">\n      <ion-thumbnail item-left>\n        <img src="assets/img/ch.png" />\n      </ion-thumbnail>\n      <h2>\n        Hweví\n      </h2>\n      <p>Poisson</p>\n      <button ion-button icon-only item-right round outline (click)=\'playpo()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n        </button>\n    </ion-item>\n\n    <ion-item color="none" id="aliments-list-item33">\n      <ion-thumbnail item-left>\n        <img src="assets/img/crabe.png" />\n      </ion-thumbnail>\n      <h2>\n        Asɔ́n \n      </h2>\n      <p>Crabe de mer</p>\n      <button ion-button icon-only item-right round outline (click)=\'playcr()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n        </button>\n    </ion-item>\n\n    <ion-item color="none" id="aliments-list-item33">\n      <ion-thumbnail item-left>\n        <img src="assets/img/crevettes.png" />\n      </ion-thumbnail>\n      <h2>\n        Degon\n      </h2>\n      <p>Crevettes</p>\n      <button ion-button icon-only item-right round outline (click)=\'playcre()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n        </button>\n    </ion-item>\n\n    <ion-item color="none" id="aliments-list-item33">\n      <ion-thumbnail item-left>\n        <img src="assets/img/po.png" />\n      </ion-thumbnail>\n      <h2>\n        Lɛ̆nlɛnkún\n      </h2>\n      <p>Poivre</p>\n      <button ion-button icon-only item-right round outline (click)=\'playpoi()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n        </button>\n    </ion-item>\n\n    <ion-item color="none" id="aliments-list-item33">\n      <ion-thumbnail item-left>\n        <img src="assets/img/mangue.png" />\n      </ion-thumbnail>\n      <h2>\n        Amăgà\n      </h2>\n      <p>Mangues</p>\n      <button ion-button icon-only item-right round outline (click)=\'playman()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n        </button>\n    </ion-item>\n\n    <ion-item color="none" id="aliments-list-item33">\n      <ion-thumbnail item-left>\n        <img src="assets/img/oignon.png" />\n      </ion-thumbnail>\n      <h2>\n        Ayomà\n      </h2>\n      <p>Oignon</p>\n      <button ion-button icon-only item-right round outline (click)=\'playoi()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n        </button>\n    </ion-item>\n\n    <ion-item color="none" id="aliments-list-item33">\n      <ion-thumbnail item-left>\n        <img src="assets/img/tomate.png" />\n      </ion-thumbnail>\n      <h2>\n        Timáti\n      </h2>\n      <p>Tomate</p>\n      <button ion-button icon-only item-right round outline (click)=\'playto()\'>\n          <ion-icon name="volume-up" ></ion-icon>\n        </button>\n    </ion-item>\n\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\Parikiri13\Documents\Ionic\Ionic2\localapplanguage\src\pages\aliments\aliments.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_smart_audio_smart_audio__["a" /* SmartAudioProvider */]])
], AlimentsPage);

//# sourceMappingURL=aliments.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartagerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sms__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PartagerPage = (function () {
    function PartagerPage(navCtrl, alertCtrl, sms, socialSharing, toastCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.sms = sms;
        this.socialSharing = socialSharing;
        this.toastCtrl = toastCtrl;
    }
    PartagerPage.prototype.presentToast = function (messaget) {
        var toast = this.toastCtrl.create({
            message: messaget,
            duration: 3000
        });
        toast.present();
    };
    PartagerPage.prototype.sendSMS = function (numero) {
        var _this = this;
        /* var options={
              replaceLineBreaks: false, // true to replace \n by a new line, false by default
            android: {
                  intent: 'INTENT'  // Opens Default sms app
                 //intent: '' // Sends sms without opening default sms app
              }//
       } */
        this.sms.send(numero, 'Link to our app' /* ,options */)
            .then(function () {
            _this.presentToast("Success");
            //alert("success");
        }, function () {
            _this.presentToast("Echec");
            //alert("failed");
        });
    };
    PartagerPage.prototype.showPrompt = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Envoyer le lien via SMS',
            message: "Numéro du destinataire",
            inputs: [
                {
                    name: 'numero',
                    placeholder: 'Numéro'
                },
            ],
            buttons: [
                {
                    text: 'Annuler',
                    handler: function (data) {
                        console.log('Cancel clicked');
                        console.log(data.numero);
                    }
                },
                {
                    text: 'Envoyer',
                    handler: function (data) {
                        console.log('Saved clicked');
                        _this.sendSMS(data.numero);
                    },
                }
            ]
        });
        prompt.present();
    };
    PartagerPage.prototype.regularShare = function () {
        // share(message, subject, file, url)
        this.socialSharing.share("Testing, sharing our app", null, null, 'default.link.com');
    };
    return PartagerPage;
}());
PartagerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-partager',template:/*ion-inline-start:"C:\Users\Parikiri13\Documents\Ionic\Ionic2\localapplanguage\src\pages\partager\partager.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Partager\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page5" style="background-color:rgb(255, 255, 255);">\n    <br><br><br><br><br><br><br><br><br><br><br><br>\n  <div class="spacer" style="height:175;" id="partager-spacer1"></div>\n  <button id="partager-button2" ion-button color="positive" block icon-right style="font-size:15px;border-radius:40px 40px 40px 40px;" (click)=\'regularShare()\'>\n    Partager sur les réseaux sociaux\n    <ion-icon name="heart"></ion-icon>\n  </button>\n  \n  <button id="partager-button3" ion-button color="light" block icon-right style="font-size:15px;border-radius:40px 40px 40px 40px;" (click)=\'showPrompt()\'>\n    Partager par SMS\n    <ion-icon name="chatboxes"></ion-icon>\n  </button>\n</ion-content>'/*ion-inline-end:"C:\Users\Parikiri13\Documents\Ionic\Ionic2\localapplanguage\src\pages\partager\partager.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_sms__["a" /* SMS */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */]])
], PartagerPage);

//# sourceMappingURL=partager.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_accueil_accueil__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_alphabet_alphabet__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_chiffres_chiffres__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_aliments_aliments__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_partager_partager__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_sms__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_social_sharing__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_native_audio__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_smart_audio_smart_audio__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_accueil_accueil__["a" /* AccueilPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_alphabet_alphabet__["a" /* AlphabetPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_chiffres_chiffres__["a" /* ChiffresPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_aliments_aliments__["a" /* AlimentsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_partager_partager__["a" /* PartagerPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: []
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_accueil_accueil__["a" /* AccueilPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_alphabet_alphabet__["a" /* AlphabetPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_chiffres_chiffres__["a" /* ChiffresPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_aliments_aliments__["a" /* AlimentsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_partager_partager__["a" /* PartagerPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_sms__["a" /* SMS */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_native_audio__["a" /* NativeAudio */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_14__providers_smart_audio_smart_audio__["a" /* SmartAudioProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_accueil_accueil__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { SmartAudioProvider } from '../providers/smart-audio/smart-audio';

var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_accueil_accueil__["a" /* AccueilPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Parikiri13\Documents\Ionic\Ionic2\localapplanguage\src\app\app.html"*/'<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\Users\Parikiri13\Documents\Ionic\Ionic2\localapplanguage\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartAudioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_audio__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the SmartAudioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SmartAudioProvider = (function () {
    function SmartAudioProvider(nativeAudio, platform) {
        this.nativeAudio = nativeAudio;
        this.audioType = 'html5';
        this.sounds = [];
        console.log('Hello SmartAudioProvider Provider');
        if (platform.is('cordova')) {
            this.audioType = 'native';
        }
    }
    SmartAudioProvider.prototype.preload = function (key, asset) {
        if (this.audioType === 'html5') {
            var audio = {
                key: key,
                asset: asset,
                type: 'html5'
            };
            this.sounds.push(audio);
        }
        else {
            this.nativeAudio.preloadSimple(key, asset);
            var audio = {
                key: key,
                asset: key,
                type: 'native'
            };
            this.sounds.push(audio);
        }
    };
    SmartAudioProvider.prototype.preloadN = function (key, asset) {
        if (this.audioType === 'html5') {
            var audio = {
                key: key,
                asset: asset,
                type: 'html5'
            };
            this.sounds.push(audio);
        }
        else {
            this.nativeAudio.preloadSimple(key, asset);
            var audio = {
                key: key,
                asset: key,
                type: 'native'
            };
            this.sounds.push(audio);
        }
    };
    SmartAudioProvider.prototype.playN = function (key) {
        var audio = this.sounds.find(function (sound) {
            return sound.key === key;
        });
        if (audio.type === 'html5') {
            var audioAsset = new Audio(audio.asset);
            audioAsset.play();
        }
        else {
            this.nativeAudio.play(audio.asset).then(function (res) {
                console.log(res);
            }, function (err) {
                console.log(err);
            });
        }
    };
    SmartAudioProvider.prototype.play = function (key) {
        var audio = this.sounds.find(function (sound) {
            return sound.key === key;
        });
        if (audio.type === 'html5') {
            var audioAsset = new Audio(audio.asset);
            audioAsset.play();
        }
        else {
            this.nativeAudio.play(audio.asset).then(function (res) {
                console.log(res);
            }, function (err) {
                console.log(err);
            });
        }
    };
    return SmartAudioProvider;
}());
SmartAudioProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_native_audio__["a" /* NativeAudio */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Platform */]])
], SmartAudioProvider);

//# sourceMappingURL=smart-audio.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map