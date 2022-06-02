import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
/**
 * @name Splash Screen
 * @premier splashscreen
 * @capacitorincompatible true
 * @description This plugin displays and hides a splash screen during application launch. The methods below allows showing and hiding the splashscreen after the app has loaded.
 * @usage
 * ```typescript
 * import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
 *
 * constructor(private splashScreen: SplashScreen) { }
 *
 * ...
 *
 * this.splashScreen.show();
 *
 * this.splashScreen.hide();
 * ```
 */
export declare class SplashScreenOriginal extends AwesomeCordovaNativePlugin {
    /**
     * Shows the splashscreen
     */
    show(): void;
    /**
     * Hides the splashscreen
     */
    hide(): void;
}

export declare const SplashScreen: SplashScreenOriginal;