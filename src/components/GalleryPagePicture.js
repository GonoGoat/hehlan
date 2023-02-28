import * as React from 'react';
import _ from 'lodash';

import ImageGallery from './ImageGallery';

const photos2022 = _.times(93, n => ({
  id: `${n}`,
  src: '/assets/img/pictures/2022/' + `${n + 1}).jpg`,
  width: 4,
  height: 3,
}));

/*const photos2019 = _.times(6, n => ({
  id: `${n}`,
  src: '../assets/img/pictures/2019/' + `${n + 1}).jpg`,
  width: 4,
  height: 3,
}));

const photos2018 = _.times(6, n => ({
  id: `${n}`,
  src: '../assets/img/pictures/2018/' + `${n + 1}).jpg`,
  width: 4,
  height: 3,
}));

const photos2015 = _.times(6, n => ({
  id: `${n}`,
  src: '../assets/img/pictures/2015/' + `${n + 1}).jpg`,
  width: 4,
  height: 3,
}));

const photos2013 = _.times(6, n => ({
  id: `${n}`,
  src: '../assets/img/pictures/2013/' + `${n + 1}).jpg`,
  width: 4,
  height: 3,
}));

const photos2012 = _.times(6, n => ({
  id: `${n}`,
  src: '../assets/img/pictures/2012/' + `${n + 1}).jpg`,
  width: 4,
  height: 3,
}));*/

const photos8 = _.times(55, n => ({
  id: `${n}`,
  src: '/assets/img/pictures/8/' + `${n + 1}).jpg`,
  width: 4,
  height: 3,
}));

const photos7 = _.times(28, n => ({
  id: `${n}`,
  src: '/assets/img/pictures/7/' + `${n + 1}).jpg`,
  width: 4,
  height: 3,
}));

/*const photos5 = _.times(15, n => ({
  id: `${n}`,
  src: '../assets/img/pictures/5/' + `${n + 1}).jpg`,
  width: 4,
  height: 3,
}));*/

/*const photos3 = _.times(6, n => ({
  id: `${n}`,
  src: '../assets/img/pictures/3/' + `${n + 1}).jpg`,
  width: 4,
  height: 3,
}));*/


export function GalleryPagePicture2022() {
  return <ImageGallery images={photos2022} />;
}
 
/*export function GalleryPagePicture2019() {
  return <ImageGallery images={photos2019} />;
}

export function GalleryPagePicture2018() {
  return <ImageGallery images={photos2018} />;
}

export function GalleryPagePicture2015() {
  return <ImageGallery images={photos2015} />;
}

export function GalleryPagePicture2013() {
  return <ImageGallery images={photos2013} />;
}

export function GalleryPagePicture2012() {
  return <ImageGallery images={photos2012} />;
}*/

export function GalleryPagePicture8() {
  return <ImageGallery images={photos8} />;
}

export function GalleryPagePicture7() {
  return <ImageGallery images={photos7} />;
}

/*export function GalleryPagePicture5() {
  return <ImageGallery images={photos5} />;
}*/

/*export function GalleryPagePicture3() {
  return <ImageGallery images={photos3} />;
}*/