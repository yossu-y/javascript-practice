"use strict"

class Rectangle {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  hitTest(other) {
    const horizontal = (other.x < this.x + this.width) && (this.x < other.x + other.width);
    const vertical = (other.y < this.y + this.height) && (this.y < other.y + other.height);
    return (horizontal && vertical);
  }
}

class Sprite {
  constructor(image, rectangle) {
    this.image = image;
    this.rectangle = rectangle;
  }
}

class AssetLoader {
  constractor() {
    this._promises = [];
    this._assets = new Map();
  }

  addImage(name, url) {
    const img = new Image();
    img.src = url;

    const promise = new Promise((resolve, reject) =>
    img.addEventListener("load", (e) => {
      this._assets.set(name, img);
      resolve(img);
    }));
    this._promises.push(promise);
  }

  loadAll() {
    return Promise.all(this._promises).then((p) => this._assets);
  }

  get(name) {
    return this._assets.get(name);
  }
}

const assets = new AssetLoader();

class EventDispatcher {
  constructor() {
    this._eventListeners = {};
  }

  addEventListener(type, callback) {
    if(this._eventListeners[type] == undefined) {
      this._eventListeners[type] = [];
    }
    this._eventListeners[type].push(callback);
  }

  dispatchEvent(type, event) {
    const _eventListeners = this._eventListeners[type];
    if(listeners != undefined) listeners.forEach((callback) => callback(event));
  }
}