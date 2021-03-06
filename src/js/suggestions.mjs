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

import '../suggestions.html';
import '../css/default-legacy.css';
import '../css/default.css';
import '../css/main.css';
import '../css/clients.css';
import '../css/suggestions.css';
import { NavigationManager } from './ui/navigation.mjs';

const navigationManager = new NavigationManager();

navigationManager.init();
document.querySelector('#content > .page > .cards')
        .addEventListener('click', e => {
          const target = e.target;
          const url = target.dataset['url'] || target.parentElement.dataset['url'];

          if (!url) {
            return;
          }
          window.open(url, '_blank');
        });
