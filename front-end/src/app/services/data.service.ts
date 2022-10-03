import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class DataService {

    constructor() { }

    getLocal(key: string) {
        return JSON.parse(window.localStorage.getItem(key)!)
    }

    setLocal(key: string, values: any) {
        window.localStorage.setItem(key, JSON.stringify(values))
    }

    clearLocal() {
        window.localStorage.clear()
    }

    getSession(key: string) {
        return JSON.parse(window.sessionStorage.getItem(key)!)
    }

    setSession(key: string, values: any) {
        window.sessionStorage.setItem(key, JSON.stringify(values))
    }

    clearSession() {
        window.sessionStorage.clear()
    }
}