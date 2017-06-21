import {RouteReuseStrategy, DefaultUrlSerializer, ActivatedRouteSnapshot, DetachedRouteHandle} from "@angular/router";

export class CustomReuseStrategy implements RouteReuseStrategy {

    handlers: {[key: string]: DetachedRouteHandle} = {};

    calcKey(route: ActivatedRouteSnapshot) {
        let next = route;
        let url = "";
        while(next) {
            if (next.url) {
                url = next.url.join('/');
            }
            next = next.firstChild;
        }
        console.debug('url', url);
        return url;
    }

    shouldDetach(route: ActivatedRouteSnapshot): boolean {
      
        return true;
    }

    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
      console.info('CustomReuseStrategy:store:' + this.calcKey(route));
        this.handlers[this.calcKey(route)] = handle;
        
    }

    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        return !!route.routeConfig && !!this.handlers[this.calcKey(route)];
    }

    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
        if (!route.routeConfig) return null;
        return this.handlers[this.calcKey(route)];
    }

    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        
        return this.calcKey(curr) === this.calcKey(future);
    }

}