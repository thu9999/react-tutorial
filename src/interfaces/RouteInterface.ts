import { Component } from "react";

export interface RouteInterface {
    id: string
    path: string 
    exact: boolean 
    component: React.LazyExoticComponent<any>
}