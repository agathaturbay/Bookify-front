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
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var SplashScreenOriginal = /** @class */ (function (_super) {
    __extends(SplashScreenOriginal, _super);
    function SplashScreenOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SplashScreenOriginal.prototype.show = function () { return cordova(this, "show", { "sync": true }, arguments); };
    SplashScreenOriginal.prototype.hide = function () { return cordova(this, "hide", { "sync": true }, arguments); };
    SplashScreenOriginal.pluginName = "SplashScreen";
    SplashScreenOriginal.plugin = "cordova-plugin-splashscreen";
    SplashScreenOriginal.pluginRef = "navigator.splashscreen";
    SplashScreenOriginal.repo = "https://github.com/apache/cordova-plugin-splashscreen";
    SplashScreenOriginal.platforms = ["Amazon Fire OS", "Android", "iOS", "Windows"];
    return SplashScreenOriginal;
}(AwesomeCordovaNativePlugin));
var SplashScreen = new SplashScreenOriginal();
export { SplashScreen };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc3BsYXNoLXNjcmVlbi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUE0QjFELGdDQUEwQjs7OztJQU8xRCwyQkFBSTtJQVFKLDJCQUFJOzs7Ozs7dUJBNUNOO0VBNkJrQywwQkFBMEI7U0FBL0MsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgU3BsYXNoIFNjcmVlblxuICogQHByZW1pZXIgc3BsYXNoc2NyZWVuXG4gKiBAY2FwYWNpdG9yaW5jb21wYXRpYmxlIHRydWVcbiAqIEBkZXNjcmlwdGlvbiBUaGlzIHBsdWdpbiBkaXNwbGF5cyBhbmQgaGlkZXMgYSBzcGxhc2ggc2NyZWVuIGR1cmluZyBhcHBsaWNhdGlvbiBsYXVuY2guIFRoZSBtZXRob2RzIGJlbG93IGFsbG93cyBzaG93aW5nIGFuZCBoaWRpbmcgdGhlIHNwbGFzaHNjcmVlbiBhZnRlciB0aGUgYXBwIGhhcyBsb2FkZWQuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFNwbGFzaFNjcmVlbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9zcGxhc2gtc2NyZWVuL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzcGxhc2hTY3JlZW46IFNwbGFzaFNjcmVlbikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5zcGxhc2hTY3JlZW4uc2hvdygpO1xuICpcbiAqIHRoaXMuc3BsYXNoU2NyZWVuLmhpZGUoKTtcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1NwbGFzaFNjcmVlbicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXNwbGFzaHNjcmVlbicsXG4gIHBsdWdpblJlZjogJ25hdmlnYXRvci5zcGxhc2hzY3JlZW4nLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1zcGxhc2hzY3JlZW4nLFxuICBwbGF0Zm9ybXM6IFsnQW1hem9uIEZpcmUgT1MnLCAnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTcGxhc2hTY3JlZW4gZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBTaG93cyB0aGUgc3BsYXNoc2NyZWVuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgc2hvdygpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEhpZGVzIHRoZSBzcGxhc2hzY3JlZW5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBoaWRlKCk6IHZvaWQge31cbn1cbiJdfQ==