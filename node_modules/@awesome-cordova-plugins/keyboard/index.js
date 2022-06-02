var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
export var KeyboardStyle;
(function (KeyboardStyle) {
    KeyboardStyle["Light"] = "light";
    KeyboardStyle["Dark"] = "dark";
})(KeyboardStyle || (KeyboardStyle = {}));
export var KeyboardResizeMode;
(function (KeyboardResizeMode) {
    KeyboardResizeMode["Native"] = "native";
    KeyboardResizeMode["Ionic"] = "ionic";
    KeyboardResizeMode["Body"] = "body";
    KeyboardResizeMode["None"] = "none";
})(KeyboardResizeMode || (KeyboardResizeMode = {}));
var KeyboardOriginal = /** @class */ (function (_super) {
    __extends(KeyboardOriginal, _super);
    function KeyboardOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KeyboardOriginal.prototype.hideFormAccessoryBar = function (hide) { return cordova(this, "hideFormAccessoryBar", { "sync": true, "platforms": ["iOS"] }, arguments); };
    KeyboardOriginal.prototype.hide = function () { return cordova(this, "hide", { "sync": true, "platforms": ["iOS", "Android"] }, arguments); };
    KeyboardOriginal.prototype.show = function () { return cordova(this, "show", { "sync": true, "platforms": ["Android"] }, arguments); };
    KeyboardOriginal.prototype.setResizeMode = function (mode) { return cordova(this, "setResizeMode", { "sync": true, "platforms": ["iOS"] }, arguments); };
    KeyboardOriginal.prototype.setKeyboardStyle = function (style) { return cordova(this, "setKeyboardStyle", { "sync": true, "platforms": ["iOS"] }, arguments); };
    KeyboardOriginal.prototype.disableScroll = function (disable) { return cordova(this, "disableScroll", { "sync": true, "platforms": ["iOS"] }, arguments); };
    KeyboardOriginal.prototype.onKeyboardShow = function () { return cordova(this, "onKeyboardShow", { "eventObservable": true, "event": "native.keyboardshow", "platforms": ["iOS", "Android"] }, arguments); };
    KeyboardOriginal.prototype.onKeyboardWillShow = function () { return cordova(this, "onKeyboardWillShow", { "eventObservable": true, "event": "keyboardWillShow", "platforms": ["iOS", "Android"] }, arguments); };
    KeyboardOriginal.prototype.onKeyboardDidShow = function () { return cordova(this, "onKeyboardDidShow", { "eventObservable": true, "event": "keyboardDidShow", "platforms": ["iOS", "Android"] }, arguments); };
    KeyboardOriginal.prototype.onKeyboardHide = function () { return cordova(this, "onKeyboardHide", { "eventObservable": true, "event": "native.keyboardhide", "platforms": ["iOS", "Android"] }, arguments); };
    KeyboardOriginal.prototype.onKeyboardWillHide = function () { return cordova(this, "onKeyboardWillHide", { "eventObservable": true, "event": "keyboardWillHide", "platforms": ["iOS", "Android"] }, arguments); };
    KeyboardOriginal.prototype.onKeyboardDidHide = function () { return cordova(this, "onKeyboardDidHide", { "eventObservable": true, "event": "keyboardDidHide", "platforms": ["iOS", "Android"] }, arguments); };
    Object.defineProperty(KeyboardOriginal.prototype, "isVisible", {
        get: function () { return cordovaPropertyGet(this, "isVisible"); },
        set: function (value) { cordovaPropertySet(this, "isVisible", value); },
        enumerable: false,
        configurable: true
    });
    KeyboardOriginal.pluginName = "Keyboard";
    KeyboardOriginal.plugin = "cordova-plugin-ionic-keyboard";
    KeyboardOriginal.pluginRef = "window.Keyboard";
    KeyboardOriginal.repo = "https://github.com/ionic-team/cordova-plugin-ionic-keyboard";
    KeyboardOriginal.platforms = ["Android", "iOS"];
    return KeyboardOriginal;
}(AwesomeCordovaNativePlugin));
var Keyboard = new KeyboardOriginal();
export { Keyboard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMva2V5Ym9hcmQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sK0VBQWdFLE1BQU0sK0JBQStCLENBQUM7QUFDN0csT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxNQUFNLENBQU4sSUFBWSxhQUdYO0FBSEQsV0FBWSxhQUFhO0lBQ3ZCLGdDQUFlLENBQUE7SUFDZiw4QkFBYSxDQUFBO0FBQ2YsQ0FBQyxFQUhXLGFBQWEsS0FBYixhQUFhLFFBR3hCO0FBRUQsTUFBTSxDQUFOLElBQVksa0JBS1g7QUFMRCxXQUFZLGtCQUFrQjtJQUM1Qix1Q0FBaUIsQ0FBQTtJQUNqQixxQ0FBZSxDQUFBO0lBQ2YsbUNBQWEsQ0FBQTtJQUNiLG1DQUFhLENBQUE7QUFDZixDQUFDLEVBTFcsa0JBQWtCLEtBQWxCLGtCQUFrQixRQUs3Qjs7SUFnQzZCLDRCQUEwQjs7OztJQWtCdEQsdUNBQW9CLGFBQUMsSUFBYTtJQVNsQyx1QkFBSTtJQVNKLHVCQUFJO0lBV0osZ0NBQWEsYUFBQyxJQUF3QjtJQVl0QyxtQ0FBZ0IsYUFBQyxLQUFvQjtJQVlyQyxnQ0FBYSxhQUFDLE9BQWdCO0lBWTlCLGlDQUFjO0lBY2QscUNBQWtCO0lBY2xCLG9DQUFpQjtJQWNqQixpQ0FBYztJQWNkLHFDQUFrQjtJQWNsQixvQ0FBaUI7MEJBbEpqQiwrQkFBUzs7Ozs7Ozs7Ozs7bUJBckRYO0VBOEM4QiwwQkFBMEI7U0FBM0MsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBDb3Jkb3ZhUHJvcGVydHksIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGVudW0gS2V5Ym9hcmRTdHlsZSB7XG4gIExpZ2h0ID0gJ2xpZ2h0JyxcbiAgRGFyayA9ICdkYXJrJyxcbn1cblxuZXhwb3J0IGVudW0gS2V5Ym9hcmRSZXNpemVNb2RlIHtcbiAgTmF0aXZlID0gJ25hdGl2ZScsXG4gIElvbmljID0gJ2lvbmljJyxcbiAgQm9keSA9ICdib2R5JyxcbiAgTm9uZSA9ICdub25lJyxcbn1cblxuLyoqXG4gKiBAbmFtZSBLZXlib2FyZFxuICogQHByZW1pZXIga2V5Ym9hcmRcbiAqIEBjYXBhY2l0b3JpbmNvbXBhdGlibGUgdHJ1ZVxuICogQGRlc2NyaXB0aW9uXG4gKiBLZXlib2FyZCBwbHVnaW4gZm9yIENvcmRvdmEuXG4gKlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1pb25pYy1rZXlib2FyZGAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtLZXlib2FyZCBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vY29yZG92YS1wbHVnaW4taW9uaWMta2V5Ym9hcmQpLlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBLZXlib2FyZCB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9rZXlib2FyZC9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUga2V5Ym9hcmQ6IEtleWJvYXJkKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmtleWJvYXJkLnNob3coKTtcbiAqXG4gKiB0aGlzLmtleWJvYXJkLmhpZGUoKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdLZXlib2FyZCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWlvbmljLWtleWJvYXJkJyxcbiAgcGx1Z2luUmVmOiAnd2luZG93LktleWJvYXJkJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2NvcmRvdmEtcGx1Z2luLWlvbmljLWtleWJvYXJkJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEtleWJvYXJkIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ2hlY2sga2V5Ym9hcmQgc3RhdHVzIHZpc2libGUgb3Igbm90LlxuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBpc1Zpc2libGU6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEhpZGUgdGhlIGtleWJvYXJkIGFjY2Vzc29yeSBiYXIgd2l0aCB0aGUgbmV4dCwgcHJldmlvdXMgYW5kIGRvbmUgYnV0dG9ucy5cbiAgICpcbiAgICogQHBhcmFtIGhpZGUge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJ10sXG4gIH0pXG4gIGhpZGVGb3JtQWNjZXNzb3J5QmFyKGhpZGU6IGJvb2xlYW4pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEhpZGUgdGhlIGtleWJvYXJkIGlmIHNob3duLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG4gIH0pXG4gIGhpZGUoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBGb3JjZSBrZXlib2FyZCB0byBiZSBzaG93bi5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG4gIH0pXG4gIHNob3coKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBQcm9ncmFtYXRpY2FsbHkgc2V0IHRoZSByZXNpemUgbW9kZVxuICAgKlxuICAgKiBAcGFyYW0gbW9kZSB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUyddLFxuICB9KVxuICBzZXRSZXNpemVNb2RlKG1vZGU6IEtleWJvYXJkUmVzaXplTW9kZSk6IHZvaWQge31cblxuICAvKipcbiAgICogUHJvZ3JhbWF0aWNhbGx5IHNldCBLZXlib2FyZCBzdHlsZVxuICAgKlxuICAgKiBAcGFyYW0gbW9kZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gc3R5bGVcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICAgIHBsYXRmb3JtczogWydpT1MnXSxcbiAgfSlcbiAgc2V0S2V5Ym9hcmRTdHlsZShzdHlsZTogS2V5Ym9hcmRTdHlsZSk6IHZvaWQge31cblxuICAvKipcbiAgICogUHJvZ3JhbWF0aWNhbGx5IGVuYWJsZSBvciBkaXNhYmxlIHRoZSBXZWJWaWV3IHNjcm9sbFxuICAgKlxuICAgKiBAcGFyYW0gbW9kZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gZGlzYWJsZVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUyddLFxuICB9KVxuICBkaXNhYmxlU2Nyb2xsKGRpc2FibGU6IGJvb2xlYW4pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIHlvdSB3aGVuIHRoZSBrZXlib2FyZCBpcyBzaG93bi4gVW5zdWJzY3JpYmUgdG8gb2JzZXJ2YWJsZSB0byBjYW5jZWwgZXZlbnQgd2F0Y2guXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxuICAgIGV2ZW50OiAnbmF0aXZlLmtleWJvYXJkc2hvdycsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG4gIH0pXG4gIG9uS2V5Ym9hcmRTaG93KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIHlvdSB3aGVuIHRoZSBrZXlib2FyZCB3aWxsIHNob3cuIFVuc3Vic2NyaWJlIHRvIG9ic2VydmFibGUgdG8gY2FuY2VsIGV2ZW50IHdhdGNoLlxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGV2ZW50T2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBldmVudDogJ2tleWJvYXJkV2lsbFNob3cnLFxuICAgIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCddLFxuICB9KVxuICBvbktleWJvYXJkV2lsbFNob3coKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYnNlcnZhYmxlIHRoYXQgbm90aWZpZXMgeW91IHdoZW4gdGhlIGtleWJvYXJkIGRpZCBzaG93LiBVbnN1YnNjcmliZSB0byBvYnNlcnZhYmxlIHRvIGNhbmNlbCBldmVudCB3YXRjaC5cbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXG4gICAgZXZlbnQ6ICdrZXlib2FyZERpZFNob3cnLFxuICAgIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCddLFxuICB9KVxuICBvbktleWJvYXJkRGlkU2hvdygpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9ic2VydmFibGUgdGhhdCBub3RpZmllcyB5b3Ugd2hlbiB0aGUga2V5Ym9hcmQgaXMgaGlkZGVuLiBVbnN1YnNjcmliZSB0byBvYnNlcnZhYmxlIHRvIGNhbmNlbCBldmVudCB3YXRjaC5cbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXG4gICAgZXZlbnQ6ICduYXRpdmUua2V5Ym9hcmRoaWRlJyxcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXSxcbiAgfSlcbiAgb25LZXlib2FyZEhpZGUoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYnNlcnZhYmxlIHRoYXQgbm90aWZpZXMgeW91IHdoZW4gdGhlIGtleWJvYXJkIHdpbGwgaGlkZS4gVW5zdWJzY3JpYmUgdG8gb2JzZXJ2YWJsZSB0byBjYW5jZWwgZXZlbnQgd2F0Y2guXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxuICAgIGV2ZW50OiAna2V5Ym9hcmRXaWxsSGlkZScsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG4gIH0pXG4gIG9uS2V5Ym9hcmRXaWxsSGlkZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9ic2VydmFibGUgdGhhdCBub3RpZmllcyB5b3Ugd2hlbiB0aGUga2V5Ym9hcmQgZGlkIGhpZGUuIFVuc3Vic2NyaWJlIHRvIG9ic2VydmFibGUgdG8gY2FuY2VsIGV2ZW50IHdhdGNoLlxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGV2ZW50T2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBldmVudDogJ2tleWJvYXJkRGlkSGlkZScsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG4gIH0pXG4gIG9uS2V5Ym9hcmREaWRIaWRlKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=