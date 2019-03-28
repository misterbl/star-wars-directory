import { PutEffect, CallEffect, ForkEffect } from "redux-saga/effects";
import { AnyAction } from "redux";

export interface IGetCharacterDetails {
  species: string;
  homeworld: string;
  films: string[];
  vehicles: string[];
  starships: string[];
}

export interface ISendSmsInfo {
  info: string;
  number: string;
}

export interface IIterator<T = never>
  extends IterableIterator<
    PutEffect<AnyAction> | CallEffect | ForkEffect | Promise<object> | T
  > {}
