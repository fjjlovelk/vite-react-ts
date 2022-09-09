import { RouteObject } from 'react-router-dom';

export interface Meta {
  title?: string;
  key?: string;
  requireAuth?: string;
  keepAlive?: boolean;
}

export interface RouteItem extends RouteObject {
  meta?: Meta;
}
