/*
 * Copyright (c) 2019-2020 Tobias Briones. All rights reserved.
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 *
 * This file is part of Example Project: Coniestica.
 *
 * Coniestica is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Coniestica is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Coniestica.  If not, see <https://www.gnu.org/licenses/>.
 */

import '../legal.html';
import '../css/default-legacy.css';
import '../css/default.css';
import '../css/main.css';
import '../css/legal.css';
import NavigationManager from './ui/menu/NavigationManager.mjs';
import { LEGAL_PRIVACY, LEGAL_TERMS_AND_CONDITIONS } from './values/model.mjs';

const titleEl = document.querySelector('section > h1');
const textEl = document.querySelector('section > div.content');

const getURLParam = paramName => {
  const urlStr = window.location.href;
  const url = new URL(urlStr);
  return url.searchParams.get(paramName);
};

const getPathName = () => {
  return document.location.pathname;
};

const gotoPrivacy = () => {
  history.pushState(
    {},
    'Coniestica - Misión de la empresa',
    getPathName() + '?v=privacy'
  );
  titleEl.innerHTML = 'Términos de privacidad';
  textEl.innerHTML = LEGAL_PRIVACY;
};

const gotoTerms = () => {
  history.pushState(
    {},
    'Coniestica - Visión de la empresa',
    getPathName() + '?v=terms-and-conditions'
  );
  titleEl.innerHTML = 'Términos y Condiciones de Uso';
  textEl.innerHTML = LEGAL_TERMS_AND_CONDITIONS;
};

// --------------------------------  SCRIPT  -------------------------------- //

const navigationManager = new NavigationManager();
const param = getURLParam('v');

navigationManager.init();
switch (param) {
  case 'privacy':
    gotoPrivacy();
    break;

  case 'terms-and-conditions':
    gotoTerms();
    break;

  default:
    gotoPrivacy();
    break;
}
